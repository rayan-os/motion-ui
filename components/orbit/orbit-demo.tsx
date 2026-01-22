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
  description: string;
}

interface Integration {
  id: string;
  name: string;
  category: string;
}

const availableAgents: Agent[] = [
  { id: "mark", name: "Mark", role: "AI Support", color: "#3B82F6", description: "Handle support tickets & emails" },
  { id: "jackie", name: "Jackie", role: "AI Counsellor", color: "#F97316", description: "Guide students to programs" },
  { id: "david", name: "David", role: "AI Processor", color: "#10B981", description: "Process documents & KYC" },
  { id: "ella", name: "Ella", role: "AI Interviewer", color: "#EAB308", description: "Conduct interviews & assess" },
];

const integrations: Integration[] = [
  { id: "ellucian", name: "Ellucian Banner", category: "SIS" },
  { id: "peoplesoft", name: "Oracle PeopleSoft", category: "ERP" },
  { id: "workday", name: "Workday Student", category: "HCM" },
  { id: "canvas", name: "Canvas", category: "LMS" },
  { id: "slate", name: "Slate by Technolutions", category: "CRM" },
  { id: "salesforce", name: "Salesforce Education Cloud", category: "CRM" },
  { id: "okta", name: "Okta", category: "Identity" },
  { id: "entra", name: "Microsoft Entra ID", category: "Identity" },
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
// Main Component
// ─────────────────────────────────────────────────────────────

export default function OrbitDemo() {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [connectedIntegrations, setConnectedIntegrations] = useState<string[]>([]);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);

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
        setCurrentStep(1);
        setSelectedAgents([]);
        setConnectedIntegrations([]);
        setIsDeploying(false);
        setIsDeployed(false);
        setCursorVisible(false);

        await new Promise(r => setTimeout(r, 800));

        // Show cursor
        setCursorVisible(true);
        await new Promise(r => setTimeout(r, 400));

        // STEP 1: Create Agents
        // Click on Mark
        const markPos = getPos("agent-mark");
        if (markPos) setCursorPosition(markPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setSelectedAgents(["mark"]);
        await new Promise(r => setTimeout(r, 300));

        // Click on Jackie
        const jackiePos = getPos("agent-jackie");
        if (jackiePos) setCursorPosition(jackiePos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setSelectedAgents(["mark", "jackie"]);
        await new Promise(r => setTimeout(r, 300));

        // Click on David
        const davidPos = getPos("agent-david");
        if (davidPos) setCursorPosition(davidPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setSelectedAgents(["mark", "jackie", "david"]);
        await new Promise(r => setTimeout(r, 300));

        // Click on Ella
        const ellaPos = getPos("agent-ella");
        if (ellaPos) setCursorPosition(ellaPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setSelectedAgents(["mark", "jackie", "david", "ella"]);
        await new Promise(r => setTimeout(r, 500));

        // Click Next to go to Step 2
        const nextPos = getPos("next-btn");
        if (nextPos) setCursorPosition(nextPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setCurrentStep(2);
        await new Promise(r => setTimeout(r, 600));

        // STEP 2: Connect Systems
        // Click on Ellucian Banner
        const ellucianPos = getPos("int-ellucian");
        if (ellucianPos) setCursorPosition(ellucianPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setConnectedIntegrations(["ellucian"]);
        await new Promise(r => setTimeout(r, 300));

        // Click on Canvas
        const canvasPos = getPos("int-canvas");
        if (canvasPos) setCursorPosition(canvasPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setConnectedIntegrations(["ellucian", "canvas"]);
        await new Promise(r => setTimeout(r, 300));

        // Click on Slate
        const slatePos = getPos("int-slate");
        if (slatePos) setCursorPosition(slatePos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setConnectedIntegrations(["ellucian", "canvas", "slate"]);
        await new Promise(r => setTimeout(r, 300));

        // Click on Okta
        const oktaPos = getPos("int-okta");
        if (oktaPos) setCursorPosition(oktaPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setConnectedIntegrations(["ellucian", "canvas", "slate", "okta"]);
        await new Promise(r => setTimeout(r, 500));

        // Click Deploy
        const deployPos = getPos("deploy-btn");
        if (deployPos) setCursorPosition(deployPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setIsDeploying(true);
        await new Promise(r => setTimeout(r, 1500));
        setIsDeploying(false);
        setCurrentStep(3);
        setIsDeployed(true);

        // Hide cursor
        setCursorVisible(false);

        // Hold on deployed screen
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
        className="relative z-20 w-[600px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      >
        <VirtualCursor position={cursorPosition} clicking={cursorClicking} visible={cursorVisible} />

        <div className="rounded-[8px] overflow-hidden bg-[#141414] border border-white/[0.08]" style={{ boxShadow: "0 30px 100px rgba(0,0,0,0.5)" }}>
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#1a1a1a] border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2"/>
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[#3B82F6]">Passage Orbit</div>
                <div className="text-[10px] text-white/40">Build your AI workforce</div>
              </div>
            </div>
          </div>

          {/* Steps Indicator */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06]">
            {[
              { num: 1, label: "Create Agents" },
              { num: 2, label: "Connect Systems" },
              { num: 3, label: "Deploy" }
            ].map((step, idx) => (
              <div key={step.num} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium transition-all ${
                  currentStep >= step.num 
                    ? "bg-[#3B82F6] text-white" 
                    : "bg-white/10 text-white/40"
                }`}>
                  {currentStep > step.num ? "✓" : step.num}
                </div>
                <span className={`text-[11px] ${currentStep >= step.num ? "text-white" : "text-white/30"}`}>
                  {step.label}
                </span>
                {idx < 2 && <div className={`w-6 h-[2px] ${currentStep > step.num ? "bg-[#3B82F6]" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="p-5 min-h-[380px]">
            <AnimatePresence mode="wait">
              {/* STEP 1: Create Agents */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-4">
                    <h3 className="text-[14px] font-medium text-white">Create your AI agents</h3>
                    <p className="text-[11px] text-white/40 mt-1">Select which agents to deploy for your university</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {availableAgents.map((agent) => {
                      const isSelected = selectedAgents.includes(agent.id);
                      return (
                        <motion.div
                          key={agent.id}
                          ref={registerRef(`agent-${agent.id}`)}
                          className={`p-3 rounded-[6px] border cursor-pointer transition-all ${
                            isSelected 
                              ? "bg-white/[0.08] border-white/20" 
                              : "bg-white/[0.02] border-white/[0.06]"
                          }`}
                          animate={{ 
                            scale: isSelected ? 1.02 : 1,
                            borderColor: isSelected ? agent.color + "50" : "rgba(255,255,255,0.06)"
                          }}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                style={{ backgroundColor: agent.color }}
                              >
                                {agent.name[0]}
                              </div>
                              <div>
                                <div className="text-[12px] font-medium text-white">{agent.name}</div>
                                <div className="text-[10px]" style={{ color: agent.color }}>{agent.role}</div>
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isSelected ? "border-[#3B82F6] bg-[#3B82F6]" : "border-white/20"
                            }`}>
                              {isSelected && (
                                <motion.svg 
                                  width="10" height="10" viewBox="0 0 24 24" fill="none"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                                </motion.svg>
                              )}
                            </div>
                          </div>
                          <div className="text-[10px] text-white/40">{agent.description}</div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <div className="text-[11px] text-white/40">
                      {selectedAgents.length} agents selected
                    </div>
                    <motion.button
                      ref={registerRef("next-btn")}
                      className={`px-5 py-2 rounded-[5px] text-[12px] font-medium transition-all ${
                        selectedAgents.length > 0 
                          ? "bg-[#3B82F6] text-white" 
                          : "bg-white/10 text-white/30"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      Next: Connect Systems →
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Connect Systems */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="mb-4">
                    <h3 className="text-[14px] font-medium text-white">Connect your systems</h3>
                    <p className="text-[11px] text-white/40 mt-1">Integrate with your existing school infrastructure</p>
                  </div>

                  {/* Selected Agents Summary */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {selectedAgents.map((agentId) => {
                      const agent = availableAgents.find(a => a.id === agentId);
                      if (!agent) return null;
                      return (
                        <div 
                          key={agent.id}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px]"
                          style={{ backgroundColor: agent.color + "20", color: agent.color }}
                        >
                          <span className="font-medium">{agent.name}</span>
                          <span className="text-white/40">·</span>
                          <span className="text-white/50">{agent.role}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {integrations.map((integration) => {
                      const isConnected = connectedIntegrations.includes(integration.id);
                      return (
                        <motion.div
                          key={integration.id}
                          ref={registerRef(`int-${integration.id}`)}
                          className={`flex items-center justify-between p-2.5 rounded-[6px] border cursor-pointer transition-all ${
                            isConnected 
                              ? "bg-[#10B981]/10 border-[#10B981]/30" 
                              : "bg-white/[0.02] border-white/[0.06]"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-7 h-7 rounded-[4px] flex items-center justify-center text-[10px] font-bold ${
                              isConnected ? "bg-[#10B981]/20 text-[#10B981]" : "bg-white/10 text-white/50"
                            }`}>
                              {integration.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-[11px] font-medium text-white">{integration.name}</div>
                              <div className="text-[9px] text-white/40">{integration.category}</div>
                            </div>
                          </div>
                          {isConnected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center"
                            >
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                              </svg>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <div className="text-[11px] text-white/40">
                      {connectedIntegrations.length} systems connected
                    </div>
                    <motion.button
                      ref={registerRef("deploy-btn")}
                      className={`px-5 py-2 rounded-[5px] text-[12px] font-medium transition-all ${
                        connectedIntegrations.length > 0 
                          ? "bg-[#10B981] text-white" 
                          : "bg-white/10 text-white/30"
                      }`}
                      whileTap={{ scale: 0.97 }}
                    >
                      {isDeploying ? (
                        <span className="flex items-center gap-2">
                          <motion.div 
                            className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Deploying...
                        </span>
                      ) : (
                        "Deploy Agents →"
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Deployed */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="text-center py-4">
                    <motion.div
                      className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#10B981]/20 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#10B981]">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-[15px] font-semibold text-white mb-1">Agents Deployed!</h3>
                    <p className="text-[11px] text-white/50">Your AI workforce is now active and ready</p>
                  </div>

                  {/* Active Agents */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {selectedAgents.map((agentId, idx) => {
                      const agent = availableAgents.find(a => a.id === agentId);
                      if (!agent) return null;
                      return (
                        <motion.div
                          key={agent.id}
                          className="p-3 rounded-[6px] bg-white/[0.04] border border-white/[0.06] text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <div 
                            className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center text-white text-sm font-bold"
                            style={{ backgroundColor: agent.color }}
                          >
                            {agent.name[0]}
                          </div>
                          <div className="text-[11px] font-medium text-white">{agent.name}</div>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <motion.span 
                              className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
                              animate={{ opacity: [1, 0.4, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="text-[9px] text-[#10B981]">Active</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Connected Systems */}
                  <div className="p-3 rounded-[6px] bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-white/40 mb-2">Connected Systems</div>
                    <div className="flex gap-2 flex-wrap">
                      {connectedIntegrations.map((intId) => {
                        const integration = integrations.find(i => i.id === intId);
                        if (!integration) return null;
                        return (
                          <div key={intId} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.05] text-[10px] text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                            <span>{integration.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
