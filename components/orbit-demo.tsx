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
  icon: string;
  category: string;
}

const availableAgents: Agent[] = [
  { id: "mark", name: "Mark", role: "AI Support", color: "#3B82F6", description: "Handle support tickets & emails" },
  { id: "jackie", name: "Jackie", role: "AI Counsellor", color: "#F97316", description: "Guide students to programs" },
  { id: "david", name: "David", role: "AI Processor", color: "#10B981", description: "Process documents & KYC" },
  { id: "ella", name: "Ella", role: "AI Interviewer", color: "#EAB308", description: "Conduct interviews & assess" },
];

const integrations: Integration[] = [
  { id: "sis", name: "Student Information System", icon: "📚", category: "Core" },
  { id: "crm", name: "Salesforce CRM", icon: "☁️", category: "CRM" },
  { id: "email", name: "Email Server", icon: "✉️", category: "Communication" },
  { id: "calendar", name: "Calendar System", icon: "📅", category: "Scheduling" },
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

        await new Promise(r => setTimeout(r, 1000));

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
        await new Promise(r => setTimeout(r, 350));

        // Click on Jackie
        const jackiePos = getPos("agent-jackie");
        if (jackiePos) setCursorPosition(jackiePos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setSelectedAgents(["mark", "jackie"]);
        await new Promise(r => setTimeout(r, 350));

        // Click on David
        const davidPos = getPos("agent-david");
        if (davidPos) setCursorPosition(davidPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setSelectedAgents(["mark", "jackie", "david"]);
        await new Promise(r => setTimeout(r, 350));

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
        // Click on SIS
        const sisPos = getPos("int-sis");
        if (sisPos) setCursorPosition(sisPos);
        await new Promise(r => setTimeout(r, 400));
        await click();
        setConnectedIntegrations(["sis"]);
        await new Promise(r => setTimeout(r, 350));

        // Click on CRM
        const crmPos = getPos("int-crm");
        if (crmPos) setCursorPosition(crmPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setConnectedIntegrations(["sis", "crm"]);
        await new Promise(r => setTimeout(r, 350));

        // Click on Email
        const emailPos = getPos("int-email");
        if (emailPos) setCursorPosition(emailPos);
        await new Promise(r => setTimeout(r, 350));
        await click();
        setConnectedIntegrations(["sis", "crm", "email"]);
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
        className="relative z-20 w-[580px]"
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
                <div className="text-[10px] text-white/40">Build your AI workforce</div>
              </div>
            </div>
          </div>

          {/* Steps Indicator */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium transition-all ${
                  currentStep >= step 
                    ? "bg-[#F97316] text-white" 
                    : "bg-white/10 text-white/40"
                }`}>
                  {currentStep > step ? "✓" : step}
                </div>
                <span className={`text-[11px] ${currentStep >= step ? "text-white" : "text-white/30"}`}>
                  {step === 1 ? "Create Agents" : step === 2 ? "Connect Systems" : "Deploy"}
                </span>
                {step < 3 && <div className={`w-8 h-[2px] ${currentStep > step ? "bg-[#F97316]" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="p-5 min-h-[340px]">
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
                    <h3 className="text-[14px] font-medium text-white">Select agents for your university</h3>
                    <p className="text-[11px] text-white/40 mt-1">Choose which AI agents you want to deploy</p>
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
                              : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                          }`}
                          animate={{ 
                            scale: isSelected ? 1.02 : 1,
                            borderColor: isSelected ? agent.color + "50" : "rgba(255,255,255,0.06)"
                          }}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div 
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                                style={{ backgroundColor: agent.color }}
                              >
                                {agent.name[0]}
                              </div>
                              <div>
                                <div className="text-[12px] font-medium text-white">{agent.name}</div>
                                <div className="text-[9px]" style={{ color: agent.color }}>{agent.role}</div>
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              isSelected ? "border-[#F97316] bg-[#F97316]" : "border-white/20"
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
                          ? "bg-[#F97316] text-white" 
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
                    <h3 className="text-[14px] font-medium text-white">Connect your school systems</h3>
                    <p className="text-[11px] text-white/40 mt-1">Integrate with your existing infrastructure</p>
                  </div>

                  {/* Selected Agents Summary */}
                  <div className="flex gap-2 mb-4">
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
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    {integrations.map((integration) => {
                      const isConnected = connectedIntegrations.includes(integration.id);
                      return (
                        <motion.div
                          key={integration.id}
                          ref={registerRef(`int-${integration.id}`)}
                          className={`flex items-center justify-between p-3 rounded-[6px] border cursor-pointer transition-all ${
                            isConnected 
                              ? "bg-[#10B981]/10 border-[#10B981]/30" 
                              : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-[5px] bg-white/10 flex items-center justify-center text-lg">
                              {integration.icon}
                            </div>
                            <div>
                              <div className="text-[12px] font-medium text-white">{integration.name}</div>
                              <div className="text-[10px] text-white/40">{integration.category}</div>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                            isConnected 
                              ? "bg-[#10B981]/20 text-[#10B981]" 
                              : "bg-white/10 text-white/50"
                          }`}>
                            {isConnected ? "✓ Connected" : "Connect"}
                          </div>
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
                        "Deploy Agents 🚀"
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
                  <div className="text-center py-6">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#10B981]/20 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#10B981]">
                        <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                    <h3 className="text-[16px] font-semibold text-white mb-2">Agents Deployed!</h3>
                    <p className="text-[12px] text-white/50 mb-6">Your AI workforce is now active</p>
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
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-[9px] text-[#10B981]">Active</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Connected Systems */}
                  <div className="p-3 rounded-[6px] bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[10px] text-white/40 mb-2">Connected Systems</div>
                    <div className="flex gap-2">
                      {connectedIntegrations.map((intId) => {
                        const integration = integrations.find(i => i.id === intId);
                        if (!integration) return null;
                        return (
                          <div key={intId} className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.05] text-[10px] text-white/60">
                            <span>{integration.icon}</span>
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
