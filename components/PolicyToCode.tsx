"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

interface RuleChip {
  id: string;
  label: string;
  linkedNodes: string[];
  tooltip: string;
}

interface WorkflowNode {
  id: string;
  label: string;
  row: number;
  col: number;
  linkedRules: string[];
  color: string;
  step: number;
}

const ruleChips: RuleChip[] = [
  { id: "transcript", label: "Transcript required", linkedNodes: ["check-transcript", "missing-docs"], tooltip: "If missing, Passage requests the transcript, sends reminders, and routes to review only when complete." },
  { id: "gpa", label: "GPA minimum", linkedNodes: ["route-program"], tooltip: "GPA is evaluated and the applicant is routed to eligible programs automatically." },
  { id: "prereq", label: "Prerequisites", linkedNodes: ["validate-prereq"], tooltip: "Course prerequisites are verified against the student's academic history." },
  { id: "residency", label: "Residency", linkedNodes: ["residency-check"], tooltip: "Residency status is confirmed using submitted documents and flagged if unclear." },
  { id: "language", label: "Language score", linkedNodes: ["validate-prereq", "route-program"], tooltip: "Language proficiency scores are validated and matched to program requirements." },
  { id: "portfolio", label: "Portfolio", linkedNodes: ["decision-summary"], tooltip: "Portfolio submissions are compiled into the decision-ready summary for reviewers." },
];

const workflowNodes: WorkflowNode[] = [
  { id: "check-transcript", label: "Check transcript", row: 0, col: 0, linkedRules: ["transcript"], color: "#3B82F6", step: 1 },
  { id: "validate-prereq", label: "Validate prerequisites", row: 0, col: 1, linkedRules: ["prereq", "language"], color: "#8B5CF6", step: 2 },
  { id: "residency-check", label: "Residency check", row: 1, col: 0, linkedRules: ["residency"], color: "#F97316", step: 3 },
  { id: "route-program", label: "Route to program", row: 1, col: 1, linkedRules: ["gpa", "language"], color: "#10B981", step: 4 },
  { id: "missing-docs", label: "Missing docs reminder", row: 2, col: 0, linkedRules: ["transcript"], color: "#EF4444", step: 5 },
  { id: "decision-summary", label: "Decision ready", row: 2, col: 1, linkedRules: ["portfolio"], color: "#06B6D4", step: 6 },
];

const workflowConnections = [
  { from: "check-transcript", to: "validate-prereq", step: 1 },
  { from: "check-transcript", to: "residency-check", step: 2 },
  { from: "validate-prereq", to: "route-program", step: 3 },
  { from: "residency-check", to: "route-program", step: 4 },
  { from: "residency-check", to: "missing-docs", step: 5 },
  { from: "route-program", to: "decision-summary", step: 6 },
  { from: "missing-docs", to: "decision-summary", step: 7 },
];

// ─────────────────────────────────────────────────────────────
// Step Connection
// ─────────────────────────────────────────────────────────────

const StepConnection = ({ 
  x1, y1, x2, y2, isHighlighted, isVisible, stepDelay, reducedMotion 
}: { 
  x1: number; y1: number; x2: number; y2: number; 
  isHighlighted: boolean; isVisible: boolean; stepDelay: number; reducedMotion: boolean;
}) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const curveOffset = Math.abs(dx) > Math.abs(dy) ? 15 : 10;
  const cx = midX;
  const cy = midY - curveOffset;
  const pathD = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  
  return (
    <g>
      {isHighlighted && (
        <motion.path d={pathD} fill="none" stroke="#3B82F6" strokeWidth={8} strokeLinecap="round" style={{ filter: "blur(6px)" }} initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} />
      )}
      <motion.path
        d={pathD} fill="none" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0, stroke: isHighlighted ? "#3B82F6" : "#444", strokeWidth: isHighlighted ? 2.5 : 2 }}
        transition={{ duration: 0.5, delay: reducedMotion ? 0 : stepDelay, ease: "easeOut" }}
      />
      {isVisible && !reducedMotion && (
        <motion.circle r={isHighlighted ? 4 : 3} fill={isHighlighted ? "#60A5FA" : "#888"} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 2.5, delay: stepDelay + 0.3, repeat: Infinity, repeatDelay: 0.5 }}>
          <animateMotion dur="2.5s" repeatCount="indefinite" path={pathD} />
        </motion.circle>
      )}
    </g>
  );
};

// ─────────────────────────────────────────────────────────────
// Tooltip
// ─────────────────────────────────────────────────────────────

const Tooltip = ({ rule, visible }: { rule: RuleChip | null; visible: boolean }) => (
  <AnimatePresence>
    {visible && rule && (
      <motion.div
        className="absolute bottom-4 left-4 right-4 z-30 p-4 rounded-[8px] bg-[#1a1a1a]/95 border border-blue-500/30 backdrop-blur-sm"
        style={{ boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }}
      >
        <div className="text-[10px] uppercase tracking-wider text-blue-400 mb-1">What happens</div>
        <div className="text-[12px] text-white/80 leading-relaxed">{rule.tooltip}</div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─────────────────────────────────────────────────────────────
// Legacy Process State (Chaotic)
// ─────────────────────────────────────────────────────────────

const LegacyProcessState = ({ reducedMotion }: { reducedMotion: boolean }) => {
  const [emailCount, setEmailCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setEmailCount(847);
      setErrorCount(23);
      setPendingCount(156);
      return;
    }

    const emailInterval = setInterval(() => setEmailCount(c => Math.min(c + Math.floor(Math.random() * 15) + 5, 847)), 100);
    const errorInterval = setInterval(() => setErrorCount(c => Math.min(c + 1, 23)), 200);
    const pendingInterval = setInterval(() => setPendingCount(c => Math.min(c + Math.floor(Math.random() * 8) + 2, 156)), 120);
    const alertTimer = setTimeout(() => setShowAlert(true), 1500);

    return () => {
      clearInterval(emailInterval);
      clearInterval(errorInterval);
      clearInterval(pendingInterval);
      clearTimeout(alertTimer);
    };
  }, [reducedMotion]);

  const spreadsheets = [
    { name: "Applications_2024_FINAL.xlsx", x: -60, y: -40, rotate: -8, delay: 0 },
    { name: "Applications_2024_v2.xlsx", x: 20, y: -20, rotate: 5, delay: 0.1 },
    { name: "Tracking_Sheet_OLD.xlsx", x: -30, y: 30, rotate: -3, delay: 0.2 },
    { name: "DO_NOT_DELETE.xlsx", x: 50, y: 10, rotate: 7, delay: 0.3 },
    { name: "Copy of Copy of Apps.xlsx", x: -10, y: 70, rotate: -5, delay: 0.4 },
    { name: "URGENT_Review_List.xlsx", x: 70, y: 50, rotate: 4, delay: 0.5 },
    { name: "Backup_March15.xlsx", x: -50, y: 100, rotate: -6, delay: 0.6 },
    { name: "Final_FINAL_v3.xlsx", x: 30, y: 90, rotate: 3, delay: 0.7 },
  ];

  const emails = [
    "RE: RE: RE: Missing transcript",
    "URGENT: Application status?",
    "FW: Document clarification",
    "RE: Where is my decision?",
    "URGENT: Deadline extension",
  ];

  return (
    <div className="relative h-[380px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {spreadsheets.map((sheet, idx) => (
          <motion.div
            key={idx}
            className="absolute w-[140px] p-2 rounded-[6px] bg-[#1a3a1a] border border-green-500/30"
            style={{ left: `calc(50% + ${sheet.x}px - 70px)`, top: `calc(40% + ${sheet.y}px)` }}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: sheet.rotate, y: reducedMotion ? 0 : [0, -3, 2, 0] }}
            transition={{ delay: sheet.delay, duration: 0.3, y: { duration: 2 + idx * 0.3, repeat: Infinity, ease: "easeInOut" } }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-4 h-4 rounded bg-green-600 flex items-center justify-center text-[8px] text-white font-bold">X</div>
              <div className="text-[8px] text-green-400/80 truncate flex-1">{sheet.name}</div>
            </div>
            <div className="space-y-0.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-0.5">
                  {[...Array(4)].map((_, j) => (<div key={j} className="h-1.5 flex-1 rounded-sm bg-green-500/20" />))}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute top-4 right-4 space-y-1.5">
        {emails.map((email, idx) => (
          <motion.div key={idx} className="flex items-center gap-2 px-2 py-1.5 rounded bg-red-500/10 border border-red-500/30 max-w-[180px]"
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + idx * 0.3 }}>
            <span className="text-red-400 text-xs">📧</span>
            <span className="text-[9px] text-red-300/80 truncate">{email}</span>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4">
        <motion.div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="text-[9px] text-red-400/60 uppercase">Unread Emails</div>
          <div className="text-xl font-bold text-red-400">{emailCount}</div>
        </motion.div>
        <motion.div className="px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="text-[9px] text-orange-400/60 uppercase">Data Errors</div>
          <div className="text-xl font-bold text-orange-400">{errorCount}</div>
        </motion.div>
        <motion.div className="px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="text-[9px] text-yellow-400/60 uppercase">Pending Review</div>
          <div className="text-xl font-bold text-yellow-400">{pendingCount}</div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showAlert && (
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-4 rounded-lg bg-red-900/90 border-2 border-red-500"
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: [1, 1.02, 1] }} exit={{ opacity: 0, scale: 0.8 }} transition={{ scale: { duration: 0.5, repeat: Infinity } }}>
            <div className="flex items-center gap-2 text-red-300">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="text-sm font-bold">VERSION CONFLICT</div>
                <div className="text-xs text-red-400">3 people editing the same file</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="absolute bottom-4 left-0 right-0 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30">
          <motion.span className="w-2 h-2 rounded-full bg-red-500" animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
          <span className="text-[12px] text-red-400 font-medium">This is unsustainable</span>
        </div>
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// With Passage State (Clean Workflow)
// ─────────────────────────────────────────────────────────────

const WithPassageState = ({ 
  activeRuleId, highlightedNodes, hoveredNode, setHoveredNode, reducedMotion, isSequenceComplete, visibleStep,
}: { 
  activeRuleId: string | null; highlightedNodes: string[]; hoveredNode: string | null;
  setHoveredNode: (id: string | null) => void; reducedMotion: boolean; isSequenceComplete: boolean; visibleStep: number;
}) => {
  const nodeWidth = 160;
  const nodeHeight = 50;
  const gapX = 40;
  const gapY = 30;
  const gridWidth = nodeWidth * 2 + gapX;
  const gridHeight = nodeHeight * 3 + gapY * 2;

  const getNodePosition = (node: WorkflowNode) => ({ x: node.col * (nodeWidth + gapX), y: node.row * (nodeHeight + gapY) });
  const getNodeCenter = (node: WorkflowNode) => { const pos = getNodePosition(node); return { x: pos.x + nodeWidth / 2, y: pos.y + nodeHeight / 2 }; };
  const isConnectionHighlighted = (from: string, to: string) => highlightedNodes.includes(from) && highlightedNodes.includes(to);

  return (
    <div className="flex flex-col items-center justify-center h-[380px]">
      <div className="relative" style={{ width: gridWidth, height: gridHeight }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
          {workflowConnections.map((conn, idx) => {
            const fromNode = workflowNodes.find(n => n.id === conn.from);
            const toNode = workflowNodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return null;
            const from = getNodeCenter(fromNode);
            const to = getNodeCenter(toNode);
            return (
              <StepConnection key={idx} x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                isHighlighted={isConnectionHighlighted(conn.from, conn.to)}
                isVisible={isSequenceComplete || visibleStep >= conn.step}
                stepDelay={conn.step * 0.12} reducedMotion={reducedMotion} />
            );
          })}
        </svg>

        {workflowNodes.map((node) => {
          const pos = getNodePosition(node);
          const isHighlighted = highlightedNodes.includes(node.id);
          const isNodeHovered = hoveredNode === node.id;
          const isDimmed = activeRuleId && !isHighlighted;
          const isVisible = isSequenceComplete || visibleStep >= node.step;
          
          return (
            <motion.div key={node.id} data-node
              className={`absolute flex items-center gap-3 px-4 py-3 rounded-[10px] border-2 cursor-pointer select-none ${
                isHighlighted ? "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-400/60"
                : isNodeHovered ? "bg-white/[0.06] border-white/20" : "bg-[#161616] border-white/[0.08]"
              }`}
              style={{ left: pos.x, top: pos.y, width: nodeWidth, height: nodeHeight,
                boxShadow: isHighlighted ? `0 0 30px ${node.color}30, 0 4px 20px rgba(0,0,0,0.3)` : "0 4px 20px rgba(0,0,0,0.2)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? (isDimmed ? 0.35 : 1) : 0, scale: isVisible ? (isHighlighted ? 1.03 : 1) : 0.8 }}
              transition={{ duration: 0.4, delay: reducedMotion ? 0 : node.step * 0.12, type: "spring", stiffness: 200, damping: 20 }}
              onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)}
            >
              <motion.div
                className={`absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isHighlighted ? "bg-blue-500 text-white" : "bg-[#222] border border-white/10 text-white/50"
                }`}
                initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }}
                transition={{ delay: reducedMotion ? 0 : node.step * 0.12 + 0.15, type: "spring" }}
              >
                {node.step}
              </motion.div>
              
              <motion.div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: isHighlighted ? "#60A5FA" : node.color }}
                animate={!reducedMotion && isHighlighted ? { scale: [1, 1.4, 1] } : {}} transition={{ duration: 1.2, repeat: Infinity }} />
              <span className={`text-[12px] font-medium ${isHighlighted ? "text-white" : "text-white/70"}`}>{node.label}</span>
            </motion.div>
          );
        })}
      </div>
      
      <AnimatePresence>
        {isSequenceComplete && (
          <motion.div className="mt-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <motion.div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
              </motion.div>
              <span className="text-[12px] text-emerald-400 font-medium">Automated workflow ready</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────

export default function PolicyToCode() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion() ?? false;
  
  const [hoveredRule, setHoveredRule] = useState<string | null>(null);
  const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [showLegacy, setShowLegacy] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [afterSequenceStep, setAfterSequenceStep] = useState(0);
  const [afterSequenceComplete, setAfterSequenceComplete] = useState(false);

  const activeRuleId = selectedRule || hoveredRule || (hoveredNode ? workflowNodes.find(n => n.id === hoveredNode)?.linkedRules[0] : null);
  const activeRule = ruleChips.find(r => r.id === activeRuleId) || null;
  const highlightedNodes = activeRuleId ? (ruleChips.find(r => r.id === activeRuleId)?.linkedNodes || []) : [];

  // Fade hint
  useEffect(() => {
    if (!isInView || showLegacy) return;
    const timer = setTimeout(() => setShowHint(false), 4000);
    return () => clearTimeout(timer);
  }, [isInView, showLegacy]);

  // Sequence animation for With Passage state
  useEffect(() => {
    if (showLegacy || !isInView) {
      setAfterSequenceStep(0);
      setAfterSequenceComplete(false);
      return;
    }
    
    if (reducedMotion) {
      setAfterSequenceStep(8);
      setAfterSequenceComplete(true);
      return;
    }
    
    const runSequence = async () => {
      for (let i = 1; i <= 8; i++) {
        await new Promise(r => setTimeout(r, 150));
        setAfterSequenceStep(i);
      }
      await new Promise(r => setTimeout(r, 200));
      setAfterSequenceComplete(true);
    };
    
    runSequence();
  }, [showLegacy, isInView, reducedMotion]);

  const handleContainerClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('[data-chip]') && !target.closest('[data-node]')) {
      setSelectedRule(null);
    }
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-[#0a0a0a]">
      <motion.div
        ref={containerRef} className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        onClick={handleContainerClick}
      >
        <h2 className="text-center text-[32px] md:text-[40px] font-light text-white mb-12 tracking-tight">
          <span className="text-[#3B82F6]">Turn policy</span> into operating code
        </h2>

        <div className="rounded-[12px] bg-[#111] border border-white/[0.08] overflow-hidden" style={{ boxShadow: "0 0 80px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.05)" }}>
          <div className="grid md:grid-cols-[280px_1fr]">
            {/* Left Column */}
            <div className="p-8 flex flex-col border-r border-white/[0.06]">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-5">
                <h3 className="text-[15px] font-medium text-white mb-2">Policy in</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">Upload admissions requirements, Passage extracts rules and flags ambiguity.</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5, delay: 0.3 }} className="mb-5">
                <h3 className="text-[15px] font-medium text-white mb-2">Workflow out</h3>
                <p className="text-[13px] text-white/50 leading-relaxed">Those rules become a workflow you can simulate, tweak, and deploy.</p>
              </motion.div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[9px] uppercase tracking-wider text-white/30">Extracted Rules</div>
                  <AnimatePresence>
                    {showHint && !showLegacy && (
                      <motion.div className="text-[9px] text-blue-400/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Hover to explore →
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="space-y-1.5">
                  {ruleChips.map((rule, idx) => {
                    const isActive = activeRuleId === rule.id;
                    const isSelected = selectedRule === rule.id;
                    
                    return (
                      <motion.div key={rule.id} data-chip
                        className={`flex items-center gap-2 px-3 py-2 rounded-[6px] border cursor-pointer transition-colors select-none ${
                          isActive ? "bg-blue-500/15 border-blue-500/50" : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]"
                        }`}
                        style={{ boxShadow: isActive ? "0 0 15px rgba(59,130,246,0.2)" : "none" }}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: showLegacy ? 0.5 : (activeRuleId && !isActive ? 0.4 : 1), x: 0, scale: isActive ? 1.02 : 1 }}
                        transition={{ duration: 0.25, delay: isInView ? 0.3 + idx * 0.05 : 0 }}
                        onMouseEnter={() => !showLegacy && setHoveredRule(rule.id)}
                        onMouseLeave={() => setHoveredRule(null)}
                        onClick={(e) => { if (showLegacy) return; e.stopPropagation(); setSelectedRule(isSelected ? null : rule.id); }}
                      >
                        <motion.div className={`w-2 h-2 rounded-full ${isActive ? "bg-blue-400" : "bg-white/30"}`} animate={!reducedMotion && isActive ? { scale: [1, 1.3, 1] } : {}} transition={{ duration: 1.5, repeat: Infinity }} />
                        <span className={`text-[11px] flex-1 ${isActive ? "text-white font-medium" : "text-white/60"}`}>{rule.label}</span>
                        {isSelected && (
                          <motion.div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-8 bg-[#0c0c0c] min-h-[500px] relative">
              {/* Passage AI Branding + Toggle */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                {/* Passage AI Logo */}
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-white">Passage AI</div>
                    <div className="text-[9px] text-white/40">Automated Workflows</div>
                  </div>
                </motion.div>

                {/* Toggle */}
                <div className="flex items-center gap-1 p-1 rounded-[6px] bg-white/[0.04] border border-white/[0.08]">
                  <button onClick={() => setShowLegacy(false)} className={`px-3 py-1.5 rounded-[5px] text-[11px] font-medium transition-all cursor-pointer ${!showLegacy ? "bg-blue-500/20 text-blue-300" : "text-white/40 hover:text-white/60"}`}>
                    With Passage
                  </button>
                  <button onClick={() => setShowLegacy(true)} className={`px-3 py-1.5 rounded-[5px] text-[11px] font-medium transition-all cursor-pointer ${showLegacy ? "bg-red-500/20 text-red-300" : "text-white/40 hover:text-white/60"}`}>
                    Legacy Process
                  </button>
                </div>
              </div>

              <div className="text-[9px] uppercase tracking-wider text-white/30 mb-6 mt-12">
                {showLegacy ? "Manual Enrollment Process" : "Automated Workflow"}
              </div>

              <AnimatePresence mode="wait">
                {showLegacy ? (
                  <motion.div key="legacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                    <LegacyProcessState reducedMotion={reducedMotion} />
                  </motion.div>
                ) : (
                  <motion.div key="passage" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="relative">
                    <WithPassageState
                      activeRuleId={activeRuleId} highlightedNodes={highlightedNodes} hoveredNode={hoveredNode}
                      setHoveredNode={setHoveredNode} reducedMotion={reducedMotion} isSequenceComplete={afterSequenceComplete} visibleStep={afterSequenceStep}
                    />
                    <Tooltip rule={activeRule} visible={!!activeRuleId} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
