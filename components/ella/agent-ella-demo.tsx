"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

interface SkillAssessment {
  skill: string;
  score: number;
  color: string;
}

const assessedSkills: SkillAssessment[] = [
  { skill: "Communication", score: 85, color: "#10B981" },
  { skill: "Technical Knowledge", score: 78, color: "#3B82F6" },
  { skill: "Problem Solving", score: 92, color: "#8B5CF6" },
];

type CallState = "calling" | "connected" | "interviewing" | "assessing" | "complete";

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
            className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#30D158]/50"
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

export default function AgentEllaDemo() {
  const [mounted, setMounted] = useState(false);
  const [callState, setCallState] = useState<CallState>("calling");
  const [isMuted, setIsMuted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [skillProgress, setSkillProgress] = useState(0);
  const [showSkills, setShowSkills] = useState(false);

  const [cursorPosition, setCursorPosition] = useState({ x: 200, y: 400 });
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

  // Demo
  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    const runDemo = async () => {
      while (!cancelled) {
        // Reset
        setCallState("calling");
        setIsMuted(false);
        setCurrentQuestion("");
        setSkillProgress(0);
        setShowSkills(false);
        setCursorVisible(false);

        await new Promise(r => setTimeout(r, 800));

        // Show cursor and click Start call
        setCursorVisible(true);
        const startPos = getPos("start-btn");
        if (startPos) setCursorPosition(startPos);
        await new Promise(r => setTimeout(r, 600));
        
        setCursorClicking(true);
        await new Promise(r => setTimeout(r, 80));
        setCursorClicking(false);
        
        // Connected
        setCallState("connected");
        await new Promise(r => setTimeout(r, 1500));

        // Start interview
        setCallState("interviewing");
        setCurrentQuestion("Tell me about yourself and your goals.");
        await new Promise(r => setTimeout(r, 3000));

        setCurrentQuestion("What interests you about this program?");
        await new Promise(r => setTimeout(r, 3000));

        setCurrentQuestion("Describe a challenge you've overcome.");
        await new Promise(r => setTimeout(r, 3000));

        // Assessment
        setCallState("assessing");
        setCurrentQuestion("");
        setShowSkills(true);
        await new Promise(r => setTimeout(r, 500));

        // Animate skills
        for (let i = 1; i <= 3; i++) {
          if (cancelled) break;
          setSkillProgress(i);
          await new Promise(r => setTimeout(r, 500));
        }

        await new Promise(r => setTimeout(r, 800));

        // Complete
        setCallState("complete");
        setCursorVisible(false);

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
        className="relative z-20 w-[360px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      >
        <VirtualCursor position={cursorPosition} clicking={cursorClicking} visible={cursorVisible} />

        <div className="rounded-[12px] overflow-hidden bg-[#1a1a1a] border border-white/[0.1]" style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.5)" }}>
          
          {/* Video Call Screen */}
          <div className="relative h-[520px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] overflow-hidden">
            
            {/* Ella's "Video" - Avatar placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Avatar circle */}
                <motion.div 
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-[#EAB308] to-[#CA8A04] flex items-center justify-center"
                  animate={callState === "connected" || callState === "interviewing" ? { scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-6xl font-bold text-white">E</span>
                </motion.div>
                
                {/* Speaking indicator */}
                {(callState === "interviewing") && (
                  <motion.div
                    className="absolute -inset-3 rounded-full border-2 border-[#EAB308]"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </div>
            </div>

            {/* Top overlay - Name and status */}
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white">Ella</h2>
                <motion.p 
                  className="text-sm text-white/60 mt-1"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {callState === "calling" && "calling..."}
                  {callState === "connected" && "connected"}
                  {callState === "interviewing" && "interviewing..."}
                  {callState === "assessing" && "analyzing responses..."}
                  {callState === "complete" && "interview complete"}
                </motion.p>
              </div>
            </div>

            {/* Current Question Overlay */}
            <AnimatePresence>
              {currentQuestion && (
                <motion.div
                  className="absolute top-24 left-4 right-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <p className="text-[13px] text-white/90 text-center">{currentQuestion}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Skills Assessment Overlay */}
            <AnimatePresence>
              {showSkills && (
                <motion.div
                  className="absolute top-20 left-4 right-4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <p className="text-[11px] text-white/50 uppercase tracking-wider mb-3">Skill Assessment</p>
                    <div className="space-y-3">
                      {assessedSkills.map((skill, idx) => (
                        <div key={skill.skill}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[12px] text-white/80">{skill.skill}</span>
                            <span className="text-[12px] font-medium" style={{ color: skill.color }}>
                              {skillProgress > idx ? `${skill.score}%` : "..."}
                            </span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: skill.color }}
                              initial={{ width: 0 }}
                              animate={{ width: skillProgress > idx ? `${skill.score}%` : 0 }}
                              transition={{ duration: 0.6, delay: idx * 0.15 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Complete Badge */}
            <AnimatePresence>
              {callState === "complete" && (
                <motion.div
                  className="absolute bottom-32 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-[#30D158]/20 backdrop-blur-sm rounded-lg p-4 border border-[#30D158]/30">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#30D158] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-[14px] font-medium text-[#30D158]">Application Sent</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-center gap-8">
                {/* Mute Button */}
                <motion.button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                    isMuted ? "bg-red-500" : "bg-white/20"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M1 1l22 22M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M12 19v4M8 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </motion.button>
                <span className="text-[11px] text-white/50 absolute bottom-2 left-1/2 -translate-x-16">Mute</span>

                {/* Start/End Call Button */}
                <motion.button
                  ref={registerRef("start-btn")}
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    callState === "calling" ? "bg-[#30D158]" : "bg-red-500"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {callState === "calling" ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M23 1L1 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </motion.button>
                <span className="text-[11px] text-white/50 absolute bottom-2 left-1/2 translate-x-4">
                  {callState === "calling" ? "Start call" : "End"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
