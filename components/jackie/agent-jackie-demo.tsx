"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

interface Program {
  name: string;
  school: string;
  duration: string;
  color: string;
}

interface Job {
  title: string;
  salary: string;
  color: string;
}

interface DocItem {
  name: string;
  required: boolean;
}

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  programs?: Program[];
  jobs?: Job[];
  docs?: DocItem[];
  showApplication?: boolean;
}

const foundPrograms: Program[] = [
  { name: "IT Support", school: "Diploma", duration: "1 year", color: "from-blue-500/20 to-cyan-500/20" },
  { name: "Software Development", school: "Diploma", duration: "2 years", color: "from-purple-500/20 to-pink-500/20" },
  { name: "Data Analytics", school: "Diploma", duration: "2 years", color: "from-amber-500/20 to-orange-500/20" },
];

const chatFlow: ChatMessage[] = [
  { id: "1", role: "user", content: "Hi Jackie, I want to apply but I'm not sure which program fits" },
  { id: "2", role: "assistant", content: "I can match you fast. What are you aiming for — tech, healthcare, or trades?" },
  { id: "3", role: "user", content: "Tech" },
  { id: "4", role: "assistant", content: "Great. Upload your transcript, I'll pre-check eligibility and shortlist programs." },
  { id: "5", role: "user", content: "Uploaded" },
  { id: "6", role: "assistant", content: "You're eligible! Top matches are ready:", programs: foundPrograms, showApplication: true },
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
            className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#007AFF]/50"
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

export default function AgentJackieDemo() {
  const [mounted, setMounted] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

  // Demo
  useEffect(() => {
    if (!mounted) return;
    let cancelled = false;

    const getPos = (id: string) => {
      const el = elementRefs.current.get(id);
      if (el && containerRef.current) {
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        return { x: rect.left - containerRect.left + rect.width / 2 - 12, y: rect.top - containerRect.top + rect.height / 2 - 12 };
      }
      return null;
    };

    const typeAndSend = async (text: string, messageIndex: number) => {
      // Type
      for (const char of text.split("")) {
        if (cancelled) break;
        setChatInput(p => p + char);
        await new Promise(r => setTimeout(r, 35));
      }
      await new Promise(r => setTimeout(r, 200));

      // Send
      const sendPos = getPos("send-btn");
      if (sendPos) setCursorPosition(sendPos);
      await new Promise(r => setTimeout(r, 200));
      setCursorClicking(true);
      await new Promise(r => setTimeout(r, 80));
      setCursorClicking(false);

      setChatMessages(prev => [...prev, chatFlow[messageIndex]]);
      setChatInput("");
      await new Promise(r => setTimeout(r, 300));

      // Jackie responds
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

        await new Promise(r => setTimeout(r, 400));

        // Show cursor
        setCursorVisible(true);
        const inputPos = getPos("chat-input");
        if (inputPos) setCursorPosition(inputPos);
        await new Promise(r => setTimeout(r, 300));

        // User asks for help
        await typeAndSend("Hi Jackie, I want to apply but I'm not sure which program fits", 0);
        await new Promise(r => setTimeout(r, 600));

        // User says Tech
        const inputPos2 = getPos("chat-input");
        if (inputPos2) setCursorPosition(inputPos2);
        await new Promise(r => setTimeout(r, 200));
        await typeAndSend("Tech", 2);
        await new Promise(r => setTimeout(r, 600));

        // User uploads transcript
        const inputPos3 = getPos("chat-input");
        if (inputPos3) setCursorPosition(inputPos3);
        await new Promise(r => setTimeout(r, 200));
        await typeAndSend("Uploaded", 4);

        // Hide cursor
        setCursorVisible(false);

        // Hold on results
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
            <span className="text-[14px] font-semibold text-white">Jackie</span>
            <span className="w-2 h-2 rounded-full bg-[#30D158]" />
            <span className="text-[11px] text-white/40">AI Counsellor</span>
          </div>

          {/* Chat Area */}
          <div className="flex flex-col h-[400px]">
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
                      <div
                        className={`px-3 py-1.5 text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#007AFF] text-white rounded-[6px] rounded-br-[2px]"
                            : "bg-[#3a3a3c] text-white/90 rounded-[6px] rounded-bl-[2px]"
                        }`}
                      >
                        {msg.content}
                      </div>
                      
                      {/* Programs found */}
                      {msg.programs && (
                        <motion.div 
                          className="mt-2 space-y-1.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {msg.programs.map((prog, idx) => (
                            <motion.div
                              key={prog.name}
                              className={`flex items-center gap-3 p-2.5 rounded-[6px] bg-gradient-to-r ${prog.color} border border-white/[0.08]`}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 + idx * 0.08 }}
                            >
                              <div className="w-8 h-8 rounded-[5px] bg-white/10 flex items-center justify-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/70">
                                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                                  <path d="M8 12h8M8 8h8M8 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <div className="text-[12px] font-medium text-white truncate">{prog.name}</div>
                                <div className="text-[10px] text-white/50 mt-0.5">
                                  {prog.school} · {prog.duration}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Job opportunities */}
                      {msg.jobs && (
                        <motion.div 
                          className="mt-2 space-y-1.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {msg.jobs.map((job, idx) => (
                            <motion.div
                              key={job.title}
                              className={`flex items-center gap-3 p-2.5 rounded-[6px] bg-gradient-to-r ${job.color} border border-white/[0.08]`}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 + idx * 0.08 }}
                            >
                              <div className="w-8 h-8 rounded-[5px] bg-white/10 flex items-center justify-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/70">
                                  <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" stroke="currentColor" strokeWidth="2"/>
                                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <div className="text-[12px] font-medium text-white truncate">{job.title}</div>
                                <div className="text-[10px] text-white/50 mt-0.5">{job.salary}</div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Required documents */}
                      {msg.docs && (
                        <motion.div 
                          className="mt-2 p-3 rounded-[6px] bg-white/[0.03] border border-white/[0.08]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="space-y-2">
                            {msg.docs.map((doc, idx) => (
                              <motion.div
                                key={doc.name}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + idx * 0.08 }}
                              >
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${doc.required ? 'bg-[#007AFF]/20' : 'bg-white/10'}`}>
                                  {doc.required ? (
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-[#007AFF]">
                                      <circle cx="12" cy="12" r="4" fill="currentColor"/>
                                    </svg>
                                  ) : (
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" className="text-white/30">
                                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                  )}
                                </div>
                                <span className={`text-[11px] ${doc.required ? 'text-white/80' : 'text-white/40'}`}>
                                  {doc.name}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Application ready */}
                      {msg.showApplication && (
                        <motion.div
                          className="mt-2 p-3 rounded-[6px] bg-[#30D158]/15 border border-[#30D158]/25"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-[4px] bg-[#30D158]/20 flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#30D158]">
                                <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium text-[#30D158]">Ready to apply</span>
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
                <div
                  ref={registerRef("chat-input")}
                  className="flex-1 px-4 py-2 rounded-full bg-[#3a3a3c] text-[13px]"
                >
                  <span className={chatInput ? "text-white" : "text-white/35"}>
                    {chatInput || "Message"}
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
