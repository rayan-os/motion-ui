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

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  isVideo?: boolean;
  skills?: SkillAssessment[];
  showComplete?: boolean;
}

const assessedSkills: SkillAssessment[] = [
  { skill: "Communication", score: 85, color: "#10B981" },
  { skill: "Technical Knowledge", score: 78, color: "#3B82F6" },
  { skill: "Problem Solving", score: 92, color: "#8B5CF6" },
];

const chatFlow: ChatMessage[] = [
  { id: "1", role: "assistant", content: "Hi! I'm Ella, your AI interviewer. Ready to start your video interview?" },
  { id: "2", role: "user", content: "Yes, I'm ready" },
  { id: "3", role: "assistant", content: "Great! Tell me about yourself and why you're interested in this program.", isVideo: true },
  { id: "4", role: "user", content: "I'm a motivated student passionate about technology...", isVideo: true },
  { id: "5", role: "assistant", content: "Excellent! Here's your skill assessment:", skills: assessedSkills, showComplete: true },
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
            className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#EAB308]/50"
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
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [skillProgress, setSkillProgress] = useState(0);

  const [cursorPosition, setCursorPosition] = useState({ x: 200, y: 150 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const elementRefs = useRef<Map<string, HTMLElement>>(new Map());

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) elementRefs.current.set(id, el);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [chatMessages, isTyping]);

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

    const typeAndSend = async (text: string, messageIndex: number) => {
      for (const char of text.split("")) {
        if (cancelled) break;
        setChatInput(p => p + char);
        await new Promise(r => setTimeout(r, 35));
      }
      await new Promise(r => setTimeout(r, 200));

      const sendPos = getPos("send-btn");
      if (sendPos) setCursorPosition(sendPos);
      await new Promise(r => setTimeout(r, 200));
      setCursorClicking(true);
      await new Promise(r => setTimeout(r, 80));
      setCursorClicking(false);

      setChatMessages(prev => [...prev, chatFlow[messageIndex]]);
      setChatInput("");
      await new Promise(r => setTimeout(r, 300));

      if (chatFlow[messageIndex + 1]) {
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 500));
        setIsTyping(false);
        setChatMessages(prev => [...prev, chatFlow[messageIndex + 1]]);
      }
    };

    const runDemo = async () => {
      while (!cancelled) {
        // Reset
        setChatMessages([]);
        setChatInput("");
        setCursorVisible(false);
        setIsTyping(false);
        setIsRecording(false);
        setSkillProgress(0);

        await new Promise(r => setTimeout(r, 400));

        // Ella greeting
        setChatMessages([chatFlow[0]]);
        await new Promise(r => setTimeout(r, 800));

        // Show cursor
        setCursorVisible(true);
        const inputPos = getPos("chat-input");
        if (inputPos) setCursorPosition(inputPos);
        await new Promise(r => setTimeout(r, 300));

        // User ready
        await typeAndSend("Yes, I'm ready", 1);
        await new Promise(r => setTimeout(r, 600));

        // Video recording simulation
        setIsRecording(true);
        await new Promise(r => setTimeout(r, 800));

        // User responds (video)
        const inputPos2 = getPos("record-btn");
        if (inputPos2) setCursorPosition(inputPos2);
        await new Promise(r => setTimeout(r, 300));
        setCursorClicking(true);
        await new Promise(r => setTimeout(r, 80));
        setCursorClicking(false);
        
        setChatMessages(prev => [...prev, chatFlow[3]]);
        setIsRecording(false);
        await new Promise(r => setTimeout(r, 500));

        // Show assessment
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 600));
        setIsTyping(false);
        setChatMessages(prev => [...prev, chatFlow[4]]);

        // Animate skill scores
        for (let i = 1; i <= 3; i++) {
          if (cancelled) break;
          setSkillProgress(i);
          await new Promise(r => setTimeout(r, 400));
        }

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
        className="relative z-20 w-[415px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -3, 0] }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      >
        <VirtualCursor position={cursorPosition} clicking={cursorClicking} visible={cursorVisible} />

        <div className="rounded-[7px] overflow-hidden bg-[#1a1a1a] border border-white/[0.1]" style={{ boxShadow: "0 25px 80px rgba(0,0,0,0.5)" }}>
          
          {/* Header */}
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#252525] border-b border-white/[0.06]">
            <span className="text-[14px] font-semibold text-white">Ella</span>
            <span className="w-2 h-2 rounded-full bg-[#EAB308]" />
            <span className="text-[11px] text-white/40">AI Interviewer</span>
          </div>

          {/* Chat Area */}
          <div className="flex flex-col h-[420px]">
            <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-2">
              <AnimatePresence mode="popLayout">
                {chatMessages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <div className={`max-w-[85%]`}>
                      {/* Video indicator */}
                      {msg.isVideo && (
                        <div className={`flex items-center gap-1.5 mb-1 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-[9px] text-red-400">VIDEO</span>
                        </div>
                      )}
                      
                      <div
                        className={`px-3 py-1.5 text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#007AFF] text-white rounded-[6px] rounded-br-[2px]"
                            : "bg-[#3a3a3c] text-white/90 rounded-[6px] rounded-bl-[2px]"
                        }`}
                      >
                        {msg.content}
                      </div>
                      
                      {/* Skill Assessment */}
                      {msg.skills && (
                        <motion.div 
                          className="mt-2 space-y-2 p-3 rounded-[6px] bg-white/[0.03] border border-white/[0.08]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {msg.skills.map((skill, idx) => (
                            <motion.div
                              key={skill.skill}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + idx * 0.1 }}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[11px] text-white/70">{skill.skill}</span>
                                <span className="text-[11px] font-medium" style={{ color: skill.color }}>
                                  {skillProgress > idx ? `${skill.score}%` : "..."}
                                </span>
                              </div>
                              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: skill.color }}
                                  initial={{ width: 0 }}
                                  animate={{ width: skillProgress > idx ? `${skill.score}%` : 0 }}
                                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Interview complete */}
                      {msg.showComplete && (
                        <motion.div
                          className="mt-2 p-3 rounded-[6px] bg-[#EAB308]/15 border border-[#EAB308]/25"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-[4px] bg-[#EAB308]/20 flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#EAB308]">
                                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium text-[#EAB308]">Interview Complete</span>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div className="flex justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="px-3 py-2 rounded-[6px] rounded-bl-[2px] bg-[#3a3a3c]">
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-white/40"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                {/* Record button */}
                <motion.button
                  ref={registerRef("record-btn")}
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isRecording ? "bg-red-500" : "bg-[#3a3a3c] hover:bg-[#4a4a4c]"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {isRecording ? (
                    <motion.div 
                      className="w-3 h-3 bg-white rounded-sm"
                      animate={{ scale: [1, 0.8, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/60">
                      <path d="M23 7l-7 5 7 5V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="1" y="5" width="15" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  )}
                </motion.button>
                
                <div
                  ref={registerRef("chat-input")}
                  className="flex-1 px-4 py-2 rounded-full bg-[#3a3a3c] text-[13px]"
                >
                  <span className={chatInput ? "text-white" : "text-white/35"}>
                    {chatInput || (isRecording ? "Recording..." : "Type or record video...")}
                    {chatInput && (
                      <motion.span
                        className="inline-block w-0.5 h-3.5 bg-[#007AFF] ml-0.5 align-middle"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.4, repeat: Infinity }}
                      />
                    )}
                  </span>
                </div>
                <motion.button
                  ref={registerRef("send-btn")}
                  className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center flex-shrink-0"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
