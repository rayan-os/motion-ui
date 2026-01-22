"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────

interface Document {
  name: string;
  type: string;
  status: "pending" | "verifying" | "verified" | "error";
}

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  documents?: Document[];
  showVerified?: boolean;
}

const uploadedDocs: Document[] = [
  { name: "Transcript.pdf", type: "Academic", status: "verified" },
  { name: "Passport.pdf", type: "Identity", status: "verified" },
  { name: "English_Test.pdf", type: "Language", status: "verified" },
];

const chatFlow: ChatMessage[] = [
  { id: "1", role: "assistant", content: "Hey! Upload your documents and I'll verify them." },
  { id: "2", role: "user", content: "Here are my documents" },
  { id: "3", role: "assistant", content: "Got it! Processing your files...", documents: uploadedDocs },
  { id: "4", role: "assistant", content: "All documents verified successfully!", showVerified: true },
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
            className="absolute top-0 left-0 w-8 h-8 rounded-full bg-[#10B981]/50"
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

export default function AgentDavidDemo() {
  const [mounted, setMounted] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [docProgress, setDocProgress] = useState(0);

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

    const runDemo = async () => {
      while (!cancelled) {
        // Reset
        setChatMessages([]);
        setChatInput("");
        setCursorVisible(false);
        setIsTyping(false);
        setDocProgress(0);

        await new Promise(r => setTimeout(r, 400));

        // David greeting
        setChatMessages([chatFlow[0]]);
        await new Promise(r => setTimeout(r, 800));

        // Show cursor
        setCursorVisible(true);
        const uploadPos = getPos("upload-btn");
        if (uploadPos) setCursorPosition(uploadPos);
        await new Promise(r => setTimeout(r, 400));

        // Click upload
        setCursorClicking(true);
        await new Promise(r => setTimeout(r, 80));
        setCursorClicking(false);
        await new Promise(r => setTimeout(r, 200));

        // User sends docs
        setChatInput("Here are my documents");
        await new Promise(r => setTimeout(r, 300));
        
        const sendPos = getPos("send-btn");
        if (sendPos) setCursorPosition(sendPos);
        await new Promise(r => setTimeout(r, 300));
        setCursorClicking(true);
        await new Promise(r => setTimeout(r, 80));
        setCursorClicking(false);

        setChatMessages(prev => [...prev, chatFlow[1]]);
        setChatInput("");
        await new Promise(r => setTimeout(r, 400));

        // David processing
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 500));
        setIsTyping(false);
        setChatMessages(prev => [...prev, chatFlow[2]]);
        
        // Animate document verification
        await new Promise(r => setTimeout(r, 300));
        for (let i = 1; i <= 3; i++) {
          if (cancelled) break;
          setDocProgress(i);
          await new Promise(r => setTimeout(r, 500));
        }
        
        await new Promise(r => setTimeout(r, 400));

        // David confirms
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 400));
        setIsTyping(false);
        setChatMessages(prev => [...prev, chatFlow[3]]);

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
            <span className="text-[14px] font-semibold text-white">David</span>
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[11px] text-white/40">AI Processor</span>
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
                      <div
                        className={`px-3 py-1.5 text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#007AFF] text-white rounded-[6px] rounded-br-[2px]"
                            : "bg-[#3a3a3c] text-white/90 rounded-[6px] rounded-bl-[2px]"
                        }`}
                      >
                        {msg.content}
                      </div>
                      
                      {/* Documents List */}
                      {msg.documents && (
                        <motion.div 
                          className="mt-2 space-y-1.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {msg.documents.map((doc, idx) => (
                            <motion.div
                              key={doc.name}
                              className="flex items-center justify-between p-2.5 rounded-[6px] border border-white/[0.08] bg-transparent"
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 + idx * 0.08 }}
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-[4px] flex items-center justify-center flex-shrink-0 bg-white/10">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/50">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2"/>
                                  </svg>
                                </div>
                                <div>
                                  <div className="text-[11px] font-medium text-white">{doc.name}</div>
                                  <div className={`text-[9px] ${docProgress > idx ? "text-[#10B981]" : "text-white/40"}`}>
                                    {docProgress > idx ? "Verified" : doc.type}
                                  </div>
                                </div>
                              </div>
                              {docProgress > idx ? (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="flex items-center gap-1.5"
                                >
                                  <span className="text-[10px] text-[#10B981] font-medium">Done</span>
                                  <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-white">
                                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                                  </div>
                                </motion.div>
                              ) : (
                                <motion.div 
                                  className="w-4 h-4 border-2 border-white/20 border-t-[#10B981] rounded-full"
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                      {/* Verified confirmation */}
                      {msg.showVerified && (
                        <motion.div
                          className="mt-2 p-3 rounded-[6px] bg-[#10B981]/15 border border-[#10B981]/25"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-[4px] bg-[#10B981]/20 flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#10B981]">
                                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              </svg>
                            </div>
                            <span className="text-[12px] font-medium text-[#10B981]">KYC Complete</span>
                          </div>
                          <p className="text-[10px] text-white/40 mt-1.5 ml-7">
                            All 3 documents verified · Ready for submission
                          </p>
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
                <motion.button
                  ref={registerRef("upload-btn")}
                  className="w-8 h-8 rounded-full bg-[#3a3a3c] flex items-center justify-center flex-shrink-0 hover:bg-[#4a4a4c] transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-white/60">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.button>
                <div
                  ref={registerRef("chat-input")}
                  className="flex-1 px-4 py-2 rounded-full bg-[#3a3a3c] text-[13px]"
                >
                  <span className={chatInput ? "text-white" : "text-white/35"}>
                    {chatInput || "Upload documents..."}
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
