(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/lens/agent-david-demo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AgentDavidDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const uploadedDocs = [
    {
        name: "Transcript.pdf",
        type: "Academic",
        status: "verified"
    },
    {
        name: "Passport.pdf",
        type: "Identity",
        status: "verified"
    },
    {
        name: "English_Test.pdf",
        type: "Language",
        status: "verified"
    }
];
const chatFlow = [
    {
        id: "1",
        role: "assistant",
        content: "Hey! Upload your documents and I'll verify them."
    },
    {
        id: "2",
        role: "user",
        content: "Here are my documents"
    },
    {
        id: "3",
        role: "assistant",
        content: "Got it! Processing your files...",
        documents: uploadedDocs
    },
    {
        id: "4",
        role: "assistant",
        content: "All documents verified successfully!",
        showVerified: true
    }
];
// ─────────────────────────────────────────────────────────────
// Virtual Cursor
// ─────────────────────────────────────────────────────────────
const VirtualCursor = ({ position, clicking, visible })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute pointer-events-none z-[200]",
            initial: {
                opacity: 0,
                scale: 0.5
            },
            animate: {
                opacity: 1,
                scale: clicking ? 0.85 : 1,
                x: position.x,
                y: position.y
            },
            exit: {
                opacity: 0,
                scale: 0.5
            },
            transition: {
                x: {
                    type: "spring",
                    stiffness: 180,
                    damping: 20
                },
                y: {
                    type: "spring",
                    stiffness: 180,
                    damping: 20
                },
                scale: {
                    duration: 0.06
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    style: {
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.85a.5.5 0 0 0-.85.36Z",
                        fill: "#fff",
                        stroke: "#000",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                clicking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute top-0 left-0 w-8 h-8 rounded-full bg-[#10B981]/50",
                    initial: {
                        scale: 0.3,
                        opacity: 1
                    },
                    animate: {
                        scale: 2.5,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    style: {
                        transform: "translate(-25%, -25%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/lens/agent-david-demo.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/lens/agent-david-demo.tsx",
        lineNumber: 42,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = VirtualCursor;
function AgentDavidDemo() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chatInput, setChatInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [docProgress, setDocProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cursorPosition, setCursorPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 200,
        y: 150
    });
    const [cursorClicking, setCursorClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cursorVisible, setCursorVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const registerRef = (id)=>(el)=>{
            if (el) elementRefs.current.set(id, el);
        };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentDavidDemo.useEffect": ()=>{
            setMounted(true);
        }
    }["AgentDavidDemo.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentDavidDemo.useEffect": ()=>{
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
        }
    }["AgentDavidDemo.useEffect"], [
        chatMessages,
        isTyping
    ]);
    // Demo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentDavidDemo.useEffect": ()=>{
            if (!mounted) return;
            let cancelled = false;
            const getPos = {
                "AgentDavidDemo.useEffect.getPos": (id)=>{
                    const el = elementRefs.current.get(id);
                    if (el && containerRef.current) {
                        const rect = el.getBoundingClientRect();
                        const containerRect = containerRef.current.getBoundingClientRect();
                        return {
                            x: rect.left - containerRect.left + rect.width / 2 - 12,
                            y: rect.top - containerRect.top + rect.height / 2 - 12
                        };
                    }
                    return null;
                }
            }["AgentDavidDemo.useEffect.getPos"];
            const runDemo = {
                "AgentDavidDemo.useEffect.runDemo": async ()=>{
                    while(!cancelled){
                        // Reset
                        setChatMessages([]);
                        setChatInput("");
                        setCursorVisible(false);
                        setIsTyping(false);
                        setDocProgress(0);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 400)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // David greeting
                        setChatMessages([
                            chatFlow[0]
                        ]);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 800)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // Show cursor
                        setCursorVisible(true);
                        const uploadPos = getPos("upload-btn");
                        if (uploadPos) setCursorPosition(uploadPos);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 400)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // Click upload
                        setCursorClicking(true);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 80)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        setCursorClicking(false);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 200)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // User sends docs
                        setChatInput("Here are my documents");
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 300)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        const sendPos = getPos("send-btn");
                        if (sendPos) setCursorPosition(sendPos);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 300)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        setCursorClicking(true);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 80)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        setCursorClicking(false);
                        setChatMessages({
                            "AgentDavidDemo.useEffect.runDemo": (prev)=>[
                                    ...prev,
                                    chatFlow[1]
                                ]
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        setChatInput("");
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 400)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // David processing
                        setIsTyping(true);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 500)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        setIsTyping(false);
                        setChatMessages({
                            "AgentDavidDemo.useEffect.runDemo": (prev)=>[
                                    ...prev,
                                    chatFlow[2]
                                ]
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // Animate document verification
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 300)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        for(let i = 1; i <= 3; i++){
                            if (cancelled) break;
                            setDocProgress(i);
                            await new Promise({
                                "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 500)
                            }["AgentDavidDemo.useEffect.runDemo"]);
                        }
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 400)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // David confirms
                        setIsTyping(true);
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 400)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        setIsTyping(false);
                        setChatMessages({
                            "AgentDavidDemo.useEffect.runDemo": (prev)=>[
                                    ...prev,
                                    chatFlow[3]
                                ]
                        }["AgentDavidDemo.useEffect.runDemo"]);
                        // Hide cursor
                        setCursorVisible(false);
                        // Hold
                        await new Promise({
                            "AgentDavidDemo.useEffect.runDemo": (r)=>setTimeout(r, 3500)
                        }["AgentDavidDemo.useEffect.runDemo"]);
                    }
                }
            }["AgentDavidDemo.useEffect.runDemo"];
            runDemo();
            return ({
                "AgentDavidDemo.useEffect": ()=>{
                    cancelled = true;
                }
            })["AgentDavidDemo.useEffect"];
        }
    }["AgentDavidDemo.useEffect"], [
        mounted
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#0a0a0a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: containerRef,
            className: "relative z-20 w-[415px]",
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: [
                    0,
                    -3,
                    0
                ]
            },
            transition: {
                opacity: {
                    duration: 0.5
                },
                y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VirtualCursor, {
                    position: cursorPosition,
                    clicking: cursorClicking,
                    visible: cursorVisible
                }, void 0, false, {
                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[7px] overflow-hidden bg-[#1a1a1a] border border-white/[0.1]",
                    style: {
                        boxShadow: "0 25px 80px rgba(0,0,0,0.5)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2 px-4 py-3 bg-[#252525] border-b border-white/[0.06]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[14px] font-semibold text-white",
                                    children: "David"
                                }, void 0, false, {
                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[#10B981]"
                                }, void 0, false, {
                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] text-white/40",
                                    children: "AI Processor"
                                }, void 0, false, {
                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-[420px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesRef,
                                    className: "flex-1 overflow-y-auto p-4 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "popLayout",
                                            children: chatMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                                    initial: {
                                                        opacity: 0,
                                                        y: 6
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        duration: 0.15
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `max-w-[85%]`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `px-3 py-1.5 text-[13px] leading-relaxed ${msg.role === "user" ? "bg-[#007AFF] text-white rounded-[6px] rounded-br-[2px]" : "bg-[#3a3a3c] text-white/90 rounded-[6px] rounded-bl-[2px]"}`,
                                                                children: msg.content
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 23
                                                            }, this),
                                                            msg.documents && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "mt-2 space-y-1.5",
                                                                initial: {
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1
                                                                },
                                                                transition: {
                                                                    delay: 0.1
                                                                },
                                                                children: msg.documents.map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "flex items-center justify-between p-2.5 rounded-[6px] border border-white/[0.08] bg-transparent",
                                                                        initial: {
                                                                            opacity: 0,
                                                                            x: -8
                                                                        },
                                                                        animate: {
                                                                            opacity: 1,
                                                                            x: 0
                                                                        },
                                                                        transition: {
                                                                            delay: 0.05 + idx * 0.08
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-8 h-8 rounded-[4px] flex items-center justify-center flex-shrink-0 bg-white/10",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "14",
                                                                                            height: "14",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            className: "text-white/50",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
                                                                                                    stroke: "currentColor",
                                                                                                    strokeWidth: "2"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                                    lineNumber: 257,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    d: "M14 2v6h6",
                                                                                                    stroke: "currentColor",
                                                                                                    strokeWidth: "2"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                                    lineNumber: 258,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                            lineNumber: 256,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                        lineNumber: 255,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-[11px] font-medium text-white",
                                                                                                children: doc.name
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                                lineNumber: 262,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: `text-[9px] ${docProgress > idx ? "text-[#10B981]" : "text-white/40"}`,
                                                                                                children: docProgress > idx ? "Verified" : doc.type
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                                lineNumber: 263,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                        lineNumber: 261,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                lineNumber: 254,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            docProgress > idx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                initial: {
                                                                                    scale: 0
                                                                                },
                                                                                animate: {
                                                                                    scale: 1
                                                                                },
                                                                                className: "flex items-center gap-1.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[10px] text-[#10B981] font-medium",
                                                                                        children: "Done"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                        lineNumber: 274,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "10",
                                                                                            height: "10",
                                                                                            viewBox: "0 0 24 24",
                                                                                            fill: "none",
                                                                                            className: "text-white",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                d: "M5 12l5 5L20 7",
                                                                                                stroke: "currentColor",
                                                                                                strokeWidth: "3",
                                                                                                strokeLinecap: "round"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                                lineNumber: 277,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                            lineNumber: 276,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                        lineNumber: 275,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 33
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                className: "w-4 h-4 border-2 border-white/20 border-t-[#10B981] rounded-full",
                                                                                animate: {
                                                                                    rotate: 360
                                                                                },
                                                                                transition: {
                                                                                    duration: 1,
                                                                                    repeat: Infinity,
                                                                                    ease: "linear"
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                lineNumber: 282,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, doc.name, true, {
                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 25
                                                            }, this),
                                                            msg.showVerified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "mt-2 p-3 rounded-[6px] bg-[#10B981]/15 border border-[#10B981]/25",
                                                                initial: {
                                                                    opacity: 0,
                                                                    scale: 0.95
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    scale: 1
                                                                },
                                                                transition: {
                                                                    delay: 0.1
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "w-5 h-5 rounded-[4px] bg-[#10B981]/20 flex items-center justify-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                    width: "12",
                                                                                    height: "12",
                                                                                    viewBox: "0 0 24 24",
                                                                                    fill: "none",
                                                                                    className: "text-[#10B981]",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            d: "M9 12l2 2 4-4",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2.5",
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                            lineNumber: 304,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                            cx: "12",
                                                                                            cy: "12",
                                                                                            r: "10",
                                                                                            stroke: "currentColor",
                                                                                            strokeWidth: "2"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                            lineNumber: 305,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                    lineNumber: 303,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                lineNumber: 302,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-[12px] font-medium text-[#10B981]",
                                                                                children: "KYC Complete"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                                lineNumber: 308,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                        lineNumber: 301,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[10px] text-white/40 mt-1.5 ml-7",
                                                                        children: "All 3 documents verified · Ready for submission"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                        lineNumber: 310,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this)
                                                }, msg.id, false, {
                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        isTyping && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "flex justify-start",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2 rounded-[6px] rounded-bl-[2px] bg-[#3a3a3c]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-1",
                                                    children: [
                                                        0,
                                                        1,
                                                        2
                                                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "w-1.5 h-1.5 rounded-full bg-white/40",
                                                            animate: {
                                                                y: [
                                                                    0,
                                                                    -3,
                                                                    0
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 0.4,
                                                                repeat: Infinity,
                                                                delay: i * 0.1
                                                            }
                                                        }, i, false, {
                                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 border-t border-white/[0.06]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                ref: registerRef("upload-btn"),
                                                className: "w-8 h-8 rounded-full bg-[#3a3a3c] flex items-center justify-center flex-shrink-0 hover:bg-[#4a4a4c] transition-colors",
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "14",
                                                    height: "14",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "text-white/60",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: registerRef("chat-input"),
                                                className: "flex-1 px-4 py-2 rounded-full bg-[#3a3a3c] text-[13px]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: chatInput ? "text-white" : "text-white/35",
                                                    children: [
                                                        chatInput || "Upload documents...",
                                                        chatInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                            className: "inline-block w-0.5 h-3.5 bg-[#007AFF] ml-0.5 align-middle",
                                                            animate: {
                                                                opacity: [
                                                                    1,
                                                                    0,
                                                                    1
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 0.4,
                                                                repeat: Infinity
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                ref: registerRef("send-btn"),
                                                className: "w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center flex-shrink-0",
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    className: "text-white",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 19V5M5 12l7-7 7 7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/lens/agent-david-demo.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/lens/agent-david-demo.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/lens/agent-david-demo.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/lens/agent-david-demo.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/lens/agent-david-demo.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/lens/agent-david-demo.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s(AgentDavidDemo, "TmgD0LbHRyNWbmEkZjgAcR3PbBg=");
_c1 = AgentDavidDemo;
var _c, _c1;
__turbopack_context__.k.register(_c, "VirtualCursor");
__turbopack_context__.k.register(_c1, "AgentDavidDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_lens_agent-david-demo_tsx_91335abc._.js.map