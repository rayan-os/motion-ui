"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

interface Agent {
  id: string;
  name: string;
  role: string;
  color: string;
  tasks: string[];
  avatar: string;
}

const agents: Agent[] = [
  {
    id: "mark",
    name: "Mark",
    role: "AI SUPPORT",
    color: "#3B82F6",
    tasks: ["Connect to human", "Answer emails", "Answer calls"],
    avatar: "M",
  },
  {
    id: "jackie",
    name: "Jackie",
    role: "AI COUNSELLOR",
    color: "#F97316",
    tasks: ["Counseling", "Find opportunities", "Create application"],
    avatar: "J",
  },
  {
    id: "david",
    name: "David",
    role: "AI PROCESSOR",
    color: "#10B981",
    tasks: ["KYC", "Document analysis", "Diligence screening", "Credit check"],
    avatar: "D",
  },
  {
    id: "ella",
    name: "Ella",
    role: "AI INTERVIEWER",
    color: "#EAB308",
    tasks: ["Live interview", "Assess talent"],
    avatar: "E",
  },
];

// ─────────────────────────────────────────────────────────────
// Virtual Cursor
// ─────────────────────────────────────────────────────────────

const VirtualCursor = ({ position, clicking, visible }: { position: { x: number; y: number }; clicking: boolean; visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="absolute pointer-events-none z-[200]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: clicking ? 0.85 : 1, x: position.x, y: position.y }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ x: { type: "spring", stiffness: 180, damping: 20 }, y: { type: "spring", stiffness: 180, damping: 20 }, scale: { duration: 0.06 } }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}>
          <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.85a.5.5 0 0 0-.85.36Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
        </svg>
        {clicking && (
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#F97316]/50"
            initial={{ scale: 0.3, opacity: 1 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ transform: "translate(-25%, -25%)" }}
          />
        )}
      </motion.div>
    )}
  </AnimatePresence>
);

// ─────────────────────────────────────────────────────────────
// Agent Card Component
// ─────────────────────────────────────────────────────────────

const AgentCard = ({ agent, isActive, isConfiguring, configuredTasks }: { agent: Agent; isActive: boolean; isConfiguring: boolean; configuredTasks: string[] }) => (
  <motion.div
    className={`p-3 rounded-[6px] border transition-all ${
      isActive 
        ? "bg-[#1a1a1a] border-white/20" 
        : "bg-[#0f0f0f] border-white/[0.06]"
    }`}
    animate={{ 
      scale: isActive ? 1.02 : 1,
      boxShadow: isActive ? `0 0 20px ${agent.color}20` : "none"
    }}
  >
    <div className="flex items-center gap-2 mb-2">
      <div 
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
        style={{ backgroundColor: agent.color }}
      >
        {agent.avatar}
      </div>
      <div>
        <div className="text-[12px] font-medium text-white">{agent.name}</div>
        <div className="text-[9px] font-medium" style={{ color: agent.color }}>{agent.role}</div>
      </div>
    </div>
    <div className="space-y-1">
      {agent.tasks.map((task, idx) => (
        <motion.div
          key={task}
          className={`flex items-center gap-2 px-2 py-1.5 rounded-[4px] text-[10px] ${
            configuredTasks.includes(task)
              ? "bg-white/10 text-white"
              : "bg-white/[0.03] text-white/40"
          }`}
          animate={{
            backgroundColor: configuredTasks.includes(task) ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)",
            color: configuredTasks.includes(task) ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)",
          }}
          transition={{ delay: idx * 0.05 }}
        >
          {configuredTasks.includes(task) && (
            <motion.svg 
              width="10" height="10" viewBox="0 0 24 24" fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{ color: agent.color }}
            >
              <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </motion.svg>
          )}
          <span>{task}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────

export default function OrbitDemo() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [configuredAgents, setConfiguredAgents] = useState<Record<string, string[]>>({});
  const [showDeployed, setShowDeployed] = useState(false);
  const [flowLines, setFlowLines] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 300, y: 200 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<Map<string, HTMLElement>>(new Map());

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) elementRefs.current.set(id, el);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPos = (id: string) => {
    const el = elementRefs.current.get(id);
    if (el && containerRef.current) {
      const rect = el.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      return { x: rect.left - containerRect.left + rect.width / 2 - 12, y: rect.top - containerRect.top + rect.height / 2 - 12 };
    }
    return null;
  };

  // Demo automation
  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    const click = async () => {
      setCursorClicking(true);
      await new Promise(r => setTimeout(r, 80));
      setCursorClicking(false);
    };

    const runDemo = async () => {
      while (!cancelled) {
        // Reset
        setStep(0);
        setActiveAgent(null);
        setConfiguredAgents({});
        setShowDeployed(false);
        setFlowLines(false);
        setCursorVisible(false);

        await new Promise(r => setTimeout(r, 800));

        // Step 1: Show platform
        setStep(1);
        await new Promise(r => setTimeout(r, 1200));

        // Show cursor
        setCursorVisible(true);

        // Step 2: Click on Mark to configure
        const markPos = getPos("agent-mark");
        if (markPos) setCursorPosition(markPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setActiveAgent("mark");
        await new Promise(r => setTimeout(r, 300));
        
        // Configure Mark's tasks one by one
        setConfiguredAgents(prev => ({ ...prev, mark: ["Connect to human"] }));
        await new Promise(r => setTimeout(r, 200));
        setConfiguredAgents(prev => ({ ...prev, mark: ["Connect to human", "Answer emails"] }));
        await new Promise(r => setTimeout(r, 200));
        setConfiguredAgents(prev => ({ ...prev, mark: ["Connect to human", "Answer emails", "Answer calls"] }));
        await new Promise(r => setTimeout(r, 400));

        // Step 3: Click on Jackie
        const jackiePos = getPos("agent-jackie");
        if (jackiePos) setCursorPosition(jackiePos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setActiveAgent("jackie");
        await new Promise(r => setTimeout(r, 300));

        // Configure Jackie's tasks
        setConfiguredAgents(prev => ({ ...prev, jackie: ["Counseling"] }));
        await new Promise(r => setTimeout(r, 200));
        setConfiguredAgents(prev => ({ ...prev, jackie: ["Counseling", "Find opportunities"] }));
        await new Promise(r => setTimeout(r, 200));
        setConfiguredAgents(prev => ({ ...prev, jackie: ["Counseling", "Find opportunities", "Create application"] }));
        await new Promise(r => setTimeout(r, 400));

        // Step 4: Click on David
        const davidPos = getPos("agent-david");
        if (davidPos) setCursorPosition(davidPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setActiveAgent("david");
        await new Promise(r => setTimeout(r, 300));

        // Configure David's tasks
        setConfiguredAgents(prev => ({ ...prev, david: ["KYC", "Document analysis"] }));
        await new Promise(r => setTimeout(r, 250));
        setConfiguredAgents(prev => ({ ...prev, david: ["KYC", "Document analysis", "Diligence screening", "Credit check"] }));
        await new Promise(r => setTimeout(r, 400));

        // Step 5: Click on Ella
        const ellaPos = getPos("agent-ella");
        if (ellaPos) setCursorPosition(ellaPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setActiveAgent("ella");
        await new Promise(r => setTimeout(r, 300));

        // Configure Ella's tasks
        setConfiguredAgents(prev => ({ ...prev, ella: ["Live interview", "Assess talent"] }));
        await new Promise(r => setTimeout(r, 500));

        // Step 6: Click Deploy
        const deployPos = getPos("deploy-btn");
        if (deployPos) setCursorPosition(deployPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setActiveAgent(null);
        await new Promise(r => setTimeout(r, 300));

        // Show flow connections
        setFlowLines(true);
        await new Promise(r => setTimeout(r, 400));

        // Show deployed status
        setShowDeployed(true);
        setCursorVisible(false);

        // Hold
        await new Promise(r => setTimeout(r, 3500));
      }
    };

    runDemo();
    return () => { cancelled = true; };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Main Window */}
      <motion.div
        ref={containerRef}
        className="relative z-20 w-[700px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      >
        <VirtualCursor position={cursorPosition} clicking={cursorClicking} visible={cursorVisible} />

        <div className="rounded-[8px] overflow-hidden bg-[#141414] border border-white/[0.08]" style={{ boxShadow: "0 30px 100px rgba(0,0,0,0.5)" }}>
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#F97316]">Passage Orbit</div>
                <div className="text-[10px] text-white/40">Design your AI workforce</div>
              </div>
            </div>
            <motion.button
              ref={registerRef("deploy-btn")}
              className={`px-4 py-1.5 rounded-[5px] text-[11px] font-medium transition-all ${
                showDeployed 
                  ? "bg-[#10B981] text-white" 
                  : "bg-[#F97316] text-white hover:bg-[#F97316]/80"
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {showDeployed ? "✓ Deployed" : "Deploy Agents"}
            </motion.button>
          </div>

          {/* Content */}
          <div className="p-5">
            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div
                  key="loading"
                  className="h-[380px] flex items-center justify-center"
                  exit={{ opacity: 0 }}
                >
                  <div className="text-white/30 text-sm">Loading workspace...</div>
                </motion.div>
              ) : (
                <motion.div
                  key="workspace"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* Info Banner */}
                  <div className="mb-4 p-3 rounded-[5px] bg-[#F97316]/10 border border-[#F97316]/20">
                    <div className="text-[11px] text-[#F97316] font-medium">Tailored to your workflow</div>
                    <div className="text-[10px] text-white/50 mt-1">Design agents that match your policies and deploy in days.</div>
                  </div>

                  {/* Agent Flow Diagram */}
                  <div className="relative">
                    {/* Flow lines */}
                    {flowLines && (
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: "visible" }}>
                        <motion.path
                          d="M 90 60 Q 150 100 175 140"
                          stroke="#F97316"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.4 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.path
                          d="M 90 60 Q 150 60 175 80"
                          stroke="#3B82F6"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.4 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        />
                        <motion.path
                          d="M 350 120 Q 420 150 450 180"
                          stroke="#10B981"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.4 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                        <motion.path
                          d="M 350 220 Q 420 250 450 270"
                          stroke="#EAB308"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.4 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                      </svg>
                    )}

                    {/* Talent Entry Point */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                      <motion.div 
                        className="flex items-center gap-2 px-3 py-2 rounded-[5px] bg-[#1a1a1a] border border-white/10"
                        animate={{ x: flowLines ? 0 : 0 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/60">
                            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>
                        <span className="text-[10px] text-white/60">Talent</span>
                      </motion.div>
                    </div>

                    {/* Submit Application End Point */}
                    {flowLines && (
                      <motion.div 
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-2 px-3 py-2 rounded-[5px] bg-[#10B981]/20 border border-[#10B981]/30">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#10B981]">
                            <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                          </svg>
                          <span className="text-[10px] text-[#10B981]">Submit application</span>
                        </div>
                      </motion.div>
                    )}

                    {/* Agent Cards Grid */}
                    <div className="grid grid-cols-2 gap-3 ml-24 mr-32">
                      {agents.map((agent) => (
                        <div key={agent.id} ref={registerRef(`agent-${agent.id}`)}>
                          <div className="text-[9px] text-white/30 uppercase tracking-wider mb-1.5">
                            {agent.name}'s Workflow
                          </div>
                          <AgentCard
                            agent={agent}
                            isActive={activeAgent === agent.id}
                            isConfiguring={activeAgent === agent.id}
                            configuredTasks={configuredAgents[agent.id] || []}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deployed Status */}
                  <AnimatePresence>
                    {showDeployed && (
                      <motion.div
                        className="mt-4 p-3 rounded-[5px] bg-[#10B981]/10 border border-[#10B981]/20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#10B981]">
                                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                              </svg>
                            </div>
                            <span className="text-[11px] text-[#10B981] font-medium">4 agents deployed successfully</span>
                          </div>
                          <span className="text-[10px] text-white/30">Ready to process applications</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
