(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PolicyToCode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PolicyToCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const ruleChips = [
    {
        id: "transcript",
        label: "Transcript required",
        linkedNodes: [
            "check-transcript",
            "missing-docs"
        ],
        tooltip: "If missing, Passage requests the transcript, sends reminders, and routes to review only when complete."
    },
    {
        id: "gpa",
        label: "GPA minimum",
        linkedNodes: [
            "route-program"
        ],
        tooltip: "GPA is evaluated and the applicant is routed to eligible programs automatically."
    },
    {
        id: "prereq",
        label: "Prerequisites",
        linkedNodes: [
            "validate-prereq"
        ],
        tooltip: "Course prerequisites are verified against the student's academic history."
    },
    {
        id: "residency",
        label: "Residency",
        linkedNodes: [
            "residency-check"
        ],
        tooltip: "Residency status is confirmed using submitted documents and flagged if unclear."
    },
    {
        id: "language",
        label: "Language score",
        linkedNodes: [
            "validate-prereq",
            "route-program"
        ],
        tooltip: "Language proficiency scores are validated and matched to program requirements."
    },
    {
        id: "portfolio",
        label: "Portfolio",
        linkedNodes: [
            "decision-summary"
        ],
        tooltip: "Portfolio submissions are compiled into the decision-ready summary for reviewers."
    }
];
const workflowNodes = [
    {
        id: "check-transcript",
        label: "Check transcript",
        row: 0,
        col: 0,
        linkedRules: [
            "transcript"
        ],
        color: "#3B82F6",
        step: 1
    },
    {
        id: "validate-prereq",
        label: "Validate prerequisites",
        row: 0,
        col: 1,
        linkedRules: [
            "prereq",
            "language"
        ],
        color: "#8B5CF6",
        step: 2
    },
    {
        id: "residency-check",
        label: "Residency check",
        row: 1,
        col: 0,
        linkedRules: [
            "residency"
        ],
        color: "#F97316",
        step: 3
    },
    {
        id: "route-program",
        label: "Route to program",
        row: 1,
        col: 1,
        linkedRules: [
            "gpa",
            "language"
        ],
        color: "#10B981",
        step: 4
    },
    {
        id: "missing-docs",
        label: "Missing docs reminder",
        row: 2,
        col: 0,
        linkedRules: [
            "transcript"
        ],
        color: "#EF4444",
        step: 5
    },
    {
        id: "decision-summary",
        label: "Decision ready",
        row: 2,
        col: 1,
        linkedRules: [
            "portfolio"
        ],
        color: "#06B6D4",
        step: 6
    }
];
const workflowConnections = [
    {
        from: "check-transcript",
        to: "validate-prereq",
        step: 1
    },
    {
        from: "check-transcript",
        to: "residency-check",
        step: 2
    },
    {
        from: "validate-prereq",
        to: "route-program",
        step: 3
    },
    {
        from: "residency-check",
        to: "route-program",
        step: 4
    },
    {
        from: "residency-check",
        to: "missing-docs",
        step: 5
    },
    {
        from: "route-program",
        to: "decision-summary",
        step: 6
    },
    {
        from: "missing-docs",
        to: "decision-summary",
        step: 7
    }
];
// ─────────────────────────────────────────────────────────────
// Step Connection
// ─────────────────────────────────────────────────────────────
const StepConnection = ({ x1, y1, x2, y2, isHighlighted, isVisible, stepDelay, reducedMotion })=>{
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const curveOffset = Math.abs(dx) > Math.abs(dy) ? 15 : 10;
    const cx = midX;
    const cy = midY - curveOffset;
    const pathD = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            isHighlighted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: pathD,
                fill: "none",
                stroke: "#3B82F6",
                strokeWidth: 8,
                strokeLinecap: "round",
                style: {
                    filter: "blur(6px)"
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.4
                }
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: pathD,
                fill: "none",
                strokeLinecap: "round",
                initial: {
                    pathLength: 0,
                    opacity: 0
                },
                animate: {
                    pathLength: isVisible ? 1 : 0,
                    opacity: isVisible ? 1 : 0,
                    stroke: isHighlighted ? "#3B82F6" : "#444",
                    strokeWidth: isHighlighted ? 2.5 : 2
                },
                transition: {
                    duration: 0.5,
                    delay: reducedMotion ? 0 : stepDelay,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isVisible && !reducedMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                r: isHighlighted ? 4 : 3,
                fill: isHighlighted ? "#60A5FA" : "#888",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: [
                        0,
                        1,
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 2.5,
                    delay: stepDelay + 0.3,
                    repeat: Infinity,
                    repeatDelay: 0.5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                    dur: "2.5s",
                    repeatCount: "indefinite",
                    path: pathD
                }, void 0, false, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/PolicyToCode.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StepConnection;
// ─────────────────────────────────────────────────────────────
// Tooltip
// ─────────────────────────────────────────────────────────────
const Tooltip = ({ rule, visible })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && rule && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute bottom-4 left-4 right-4 z-30 p-4 rounded-[8px] bg-[#1a1a1a]/95 border border-blue-500/30 backdrop-blur-sm",
            style: {
                boxShadow: "0 0 30px rgba(59,130,246,0.15)"
            },
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 10
            },
            transition: {
                duration: 0.2
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[10px] uppercase tracking-wider text-blue-400 mb-1",
                    children: "What happens"
                }, void 0, false, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-[12px] text-white/80 leading-relaxed",
                    children: rule.tooltip
                }, void 0, false, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/PolicyToCode.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/PolicyToCode.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Tooltip;
// ─────────────────────────────────────────────────────────────
// Legacy Process State (Chaotic)
// ─────────────────────────────────────────────────────────────
const LegacyProcessState = ({ reducedMotion })=>{
    _s();
    const [emailCount, setEmailCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errorCount, setErrorCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pendingCount, setPendingCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showAlert, setShowAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegacyProcessState.useEffect": ()=>{
            if (reducedMotion) {
                setEmailCount(847);
                setErrorCount(23);
                setPendingCount(156);
                return;
            }
            const emailInterval = setInterval({
                "LegacyProcessState.useEffect.emailInterval": ()=>setEmailCount({
                        "LegacyProcessState.useEffect.emailInterval": (c)=>Math.min(c + Math.floor(Math.random() * 15) + 5, 847)
                    }["LegacyProcessState.useEffect.emailInterval"])
            }["LegacyProcessState.useEffect.emailInterval"], 100);
            const errorInterval = setInterval({
                "LegacyProcessState.useEffect.errorInterval": ()=>setErrorCount({
                        "LegacyProcessState.useEffect.errorInterval": (c)=>Math.min(c + 1, 23)
                    }["LegacyProcessState.useEffect.errorInterval"])
            }["LegacyProcessState.useEffect.errorInterval"], 200);
            const pendingInterval = setInterval({
                "LegacyProcessState.useEffect.pendingInterval": ()=>setPendingCount({
                        "LegacyProcessState.useEffect.pendingInterval": (c)=>Math.min(c + Math.floor(Math.random() * 8) + 2, 156)
                    }["LegacyProcessState.useEffect.pendingInterval"])
            }["LegacyProcessState.useEffect.pendingInterval"], 120);
            const alertTimer = setTimeout({
                "LegacyProcessState.useEffect.alertTimer": ()=>setShowAlert(true)
            }["LegacyProcessState.useEffect.alertTimer"], 1500);
            return ({
                "LegacyProcessState.useEffect": ()=>{
                    clearInterval(emailInterval);
                    clearInterval(errorInterval);
                    clearInterval(pendingInterval);
                    clearTimeout(alertTimer);
                }
            })["LegacyProcessState.useEffect"];
        }
    }["LegacyProcessState.useEffect"], [
        reducedMotion
    ]);
    const spreadsheets = [
        {
            name: "Applications_2024_FINAL.xlsx",
            x: -60,
            y: -40,
            rotate: -8,
            delay: 0
        },
        {
            name: "Applications_2024_v2.xlsx",
            x: 20,
            y: -20,
            rotate: 5,
            delay: 0.1
        },
        {
            name: "Tracking_Sheet_OLD.xlsx",
            x: -30,
            y: 30,
            rotate: -3,
            delay: 0.2
        },
        {
            name: "DO_NOT_DELETE.xlsx",
            x: 50,
            y: 10,
            rotate: 7,
            delay: 0.3
        },
        {
            name: "Copy of Copy of Apps.xlsx",
            x: -10,
            y: 70,
            rotate: -5,
            delay: 0.4
        },
        {
            name: "URGENT_Review_List.xlsx",
            x: 70,
            y: 50,
            rotate: 4,
            delay: 0.5
        },
        {
            name: "Backup_March15.xlsx",
            x: -50,
            y: 100,
            rotate: -6,
            delay: 0.6
        },
        {
            name: "Final_FINAL_v3.xlsx",
            x: 30,
            y: 90,
            rotate: 3,
            delay: 0.7
        }
    ];
    const emails = [
        "RE: RE: RE: Missing transcript",
        "URGENT: Application status?",
        "FW: Document clarification",
        "RE: Where is my decision?",
        "URGENT: Deadline extension"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[380px] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: spreadsheets.map((sheet, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute w-[140px] p-2 rounded-[6px] bg-[#1a3a1a] border border-green-500/30",
                        style: {
                            left: `calc(50% + ${sheet.x}px - 70px)`,
                            top: `calc(40% + ${sheet.y}px)`
                        },
                        initial: {
                            opacity: 0,
                            scale: 0.5,
                            rotate: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            rotate: sheet.rotate,
                            y: reducedMotion ? 0 : [
                                0,
                                -3,
                                2,
                                0
                            ]
                        },
                        transition: {
                            delay: sheet.delay,
                            duration: 0.3,
                            y: {
                                duration: 2 + idx * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded bg-green-600 flex items-center justify-center text-[8px] text-white font-bold",
                                        children: "X"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[8px] text-green-400/80 truncate flex-1",
                                        children: sheet.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: [
                                    ...Array(3)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-0.5",
                                        children: [
                                            ...Array(4)
                                        ].map((_, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1.5 flex-1 rounded-sm bg-green-500/20"
                                            }, j, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 182,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, i, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 space-y-1.5",
                children: emails.map((email, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center gap-2 px-2 py-1.5 rounded bg-red-500/10 border border-red-500/30 max-w-[180px]",
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: 0.5 + idx * 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-red-400 text-xs",
                                children: "📧"
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-red-300/80 truncate",
                                children: email
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-0 right-0 flex justify-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-red-400/60 uppercase",
                                children: "Unread Emails"
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-red-400",
                                children: emailCount
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-orange-400/60 uppercase",
                                children: "Data Errors"
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-orange-400",
                                children: errorCount
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.5
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-yellow-400/60 uppercase",
                                children: "Pending Review"
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-yellow-400",
                                children: pendingCount
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showAlert && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 p-4 rounded-lg bg-red-900/90 border-2 border-red-500",
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: [
                            1,
                            1.02,
                            1
                        ]
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        scale: {
                            duration: 0.5,
                            repeat: Infinity
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-red-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold",
                                        children: "VERSION CONFLICT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-400",
                                        children: "3 people editing the same file"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 217,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-4 left-0 right-0 text-center",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 0.8
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "w-2 h-2 rounded-full bg-red-500",
                            animate: {
                                opacity: [
                                    1,
                                    0.3,
                                    1
                                ],
                                scale: [
                                    1,
                                    1.2,
                                    1
                                ]
                            },
                            transition: {
                                duration: 0.8,
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/PolicyToCode.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[12px] text-red-400 font-medium",
                            children: "This is unsustainable"
                        }, void 0, false, {
                            fileName: "[project]/components/PolicyToCode.tsx",
                            lineNumber: 233,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/PolicyToCode.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LegacyProcessState, "64ybnYd4nPiq9aLOaK8d0DuS2Xg=");
_c2 = LegacyProcessState;
// ─────────────────────────────────────────────────────────────
// With Passage State (Clean Workflow)
// ─────────────────────────────────────────────────────────────
const WithPassageState = ({ activeRuleId, highlightedNodes, hoveredNode, setHoveredNode, reducedMotion, isSequenceComplete, visibleStep })=>{
    const nodeWidth = 160;
    const nodeHeight = 50;
    const gapX = 40;
    const gapY = 30;
    const gridWidth = nodeWidth * 2 + gapX;
    const gridHeight = nodeHeight * 3 + gapY * 2;
    const getNodePosition = (node)=>({
            x: node.col * (nodeWidth + gapX),
            y: node.row * (nodeHeight + gapY)
        });
    const getNodeCenter = (node)=>{
        const pos = getNodePosition(node);
        return {
            x: pos.x + nodeWidth / 2,
            y: pos.y + nodeHeight / 2
        };
    };
    const isConnectionHighlighted = (from, to)=>highlightedNodes.includes(from) && highlightedNodes.includes(to);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center h-[380px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    width: gridWidth,
                    height: gridHeight
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute inset-0 w-full h-full pointer-events-none",
                        style: {
                            overflow: "visible"
                        },
                        children: workflowConnections.map((conn, idx)=>{
                            const fromNode = workflowNodes.find((n)=>n.id === conn.from);
                            const toNode = workflowNodes.find((n)=>n.id === conn.to);
                            if (!fromNode || !toNode) return null;
                            const from = getNodeCenter(fromNode);
                            const to = getNodeCenter(toNode);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepConnection, {
                                x1: from.x,
                                y1: from.y,
                                x2: to.x,
                                y2: to.y,
                                isHighlighted: isConnectionHighlighted(conn.from, conn.to),
                                isVisible: isSequenceComplete || visibleStep >= conn.step,
                                stepDelay: conn.step * 0.12,
                                reducedMotion: reducedMotion
                            }, idx, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    workflowNodes.map((node)=>{
                        const pos = getNodePosition(node);
                        const isHighlighted = highlightedNodes.includes(node.id);
                        const isNodeHovered = hoveredNode === node.id;
                        const isDimmed = activeRuleId && !isHighlighted;
                        const isVisible = isSequenceComplete || visibleStep >= node.step;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            "data-node": true,
                            className: `absolute flex items-center gap-3 px-4 py-3 rounded-[10px] border-2 cursor-pointer select-none ${isHighlighted ? "bg-gradient-to-br from-blue-500/20 to-blue-600/10 border-blue-400/60" : isNodeHovered ? "bg-white/[0.06] border-white/20" : "bg-[#161616] border-white/[0.08]"}`,
                            style: {
                                left: pos.x,
                                top: pos.y,
                                width: nodeWidth,
                                height: nodeHeight,
                                boxShadow: isHighlighted ? `0 0 30px ${node.color}30, 0 4px 20px rgba(0,0,0,0.3)` : "0 4px 20px rgba(0,0,0,0.2)"
                            },
                            initial: {
                                opacity: 0,
                                scale: 0.8
                            },
                            animate: {
                                opacity: isVisible ? isDimmed ? 0.35 : 1 : 0,
                                scale: isVisible ? isHighlighted ? 1.03 : 1 : 0.8
                            },
                            transition: {
                                duration: 0.4,
                                delay: reducedMotion ? 0 : node.step * 0.12,
                                type: "spring",
                                stiffness: 200,
                                damping: 20
                            },
                            onMouseEnter: ()=>setHoveredNode(node.id),
                            onMouseLeave: ()=>setHoveredNode(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `absolute -top-2.5 -left-2.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isHighlighted ? "bg-blue-500 text-white" : "bg-[#222] border border-white/10 text-white/50"}`,
                                    initial: {
                                        scale: 0
                                    },
                                    animate: {
                                        scale: isVisible ? 1 : 0
                                    },
                                    transition: {
                                        delay: reducedMotion ? 0 : node.step * 0.12 + 0.15,
                                        type: "spring"
                                    },
                                    children: node.step
                                }, void 0, false, {
                                    fileName: "[project]/components/PolicyToCode.tsx",
                                    lineNumber: 300,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "w-3 h-3 rounded-full flex-shrink-0",
                                    style: {
                                        backgroundColor: isHighlighted ? "#60A5FA" : node.color
                                    },
                                    animate: !reducedMotion && isHighlighted ? {
                                        scale: [
                                            1,
                                            1.4,
                                            1
                                        ]
                                    } : {},
                                    transition: {
                                        duration: 1.2,
                                        repeat: Infinity
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/PolicyToCode.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-[12px] font-medium ${isHighlighted ? "text-white" : "text-white/70"}`,
                                    children: node.label
                                }, void 0, false, {
                                    fileName: "[project]/components/PolicyToCode.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, node.id, true, {
                            fileName: "[project]/components/PolicyToCode.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isSequenceComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "mt-6",
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center",
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    delay: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "10",
                                    height: "10",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 12l5 5L20 7",
                                        stroke: "white",
                                        strokeWidth: "3",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 324,
                                        columnNumber: 77
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/PolicyToCode.tsx",
                                    lineNumber: 324,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 322,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[12px] text-emerald-400 font-medium",
                                children: "Automated workflow ready"
                            }, void 0, false, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 321,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 320,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/PolicyToCode.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/PolicyToCode.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = WithPassageState;
function PolicyToCode() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(containerRef, {
        once: true,
        margin: "-100px"
    });
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    const [hoveredRule, setHoveredRule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedRule, setSelectedRule] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredNode, setHoveredNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showLegacy, setShowLegacy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [afterSequenceStep, setAfterSequenceStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [afterSequenceComplete, setAfterSequenceComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeRuleId = selectedRule || hoveredRule || (hoveredNode ? workflowNodes.find((n)=>n.id === hoveredNode)?.linkedRules[0] : null);
    const activeRule = ruleChips.find((r)=>r.id === activeRuleId) || null;
    const highlightedNodes = activeRuleId ? ruleChips.find((r)=>r.id === activeRuleId)?.linkedNodes || [] : [];
    // Fade hint
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PolicyToCode.useEffect": ()=>{
            if (!isInView || showLegacy) return;
            const timer = setTimeout({
                "PolicyToCode.useEffect.timer": ()=>setShowHint(false)
            }["PolicyToCode.useEffect.timer"], 4000);
            return ({
                "PolicyToCode.useEffect": ()=>clearTimeout(timer)
            })["PolicyToCode.useEffect"];
        }
    }["PolicyToCode.useEffect"], [
        isInView,
        showLegacy
    ]);
    // Sequence animation for With Passage state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PolicyToCode.useEffect": ()=>{
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
            const runSequence = {
                "PolicyToCode.useEffect.runSequence": async ()=>{
                    for(let i = 1; i <= 8; i++){
                        await new Promise({
                            "PolicyToCode.useEffect.runSequence": (r)=>setTimeout(r, 150)
                        }["PolicyToCode.useEffect.runSequence"]);
                        setAfterSequenceStep(i);
                    }
                    await new Promise({
                        "PolicyToCode.useEffect.runSequence": (r)=>setTimeout(r, 200)
                    }["PolicyToCode.useEffect.runSequence"]);
                    setAfterSequenceComplete(true);
                }
            }["PolicyToCode.useEffect.runSequence"];
            runSequence();
        }
    }["PolicyToCode.useEffect"], [
        showLegacy,
        isInView,
        reducedMotion
    ]);
    const handleContainerClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PolicyToCode.useCallback[handleContainerClick]": (e)=>{
            const target = e.target;
            if (!target.closest('[data-chip]') && !target.closest('[data-node]')) {
                setSelectedRule(null);
            }
        }
    }["PolicyToCode.useCallback[handleContainerClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full py-20 px-6 bg-[#0a0a0a]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            ref: containerRef,
            className: "max-w-5xl mx-auto",
            initial: {
                opacity: 0,
                y: 40
            },
            animate: isInView ? {
                opacity: 1,
                y: 0
            } : {
                opacity: 0,
                y: 40
            },
            transition: {
                duration: 0.7,
                ease: "easeOut"
            },
            onClick: handleContainerClick,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-center text-[32px] md:text-[40px] font-light text-white mb-12 tracking-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#3B82F6]",
                            children: "Turn policy"
                        }, void 0, false, {
                            fileName: "[project]/components/PolicyToCode.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this),
                        " into operating code"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[12px] bg-[#111] border border-white/[0.08] overflow-hidden",
                    style: {
                        boxShadow: "0 0 80px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.05)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-[280px_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 flex flex-col border-r border-white/[0.06]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: isInView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {
                                            opacity: 0,
                                            y: 20
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2
                                        },
                                        className: "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[15px] font-medium text-white mb-2",
                                                children: "Policy in"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-white/50 leading-relaxed",
                                                children: "Upload admissions requirements, Passage extracts rules and flags ambiguity."
                                            }, void 0, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 413,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: isInView ? {
                                            opacity: 1,
                                            y: 0
                                        } : {
                                            opacity: 0,
                                            y: 20
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.3
                                        },
                                        className: "mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[15px] font-medium text-white mb-2",
                                                children: "Workflow out"
                                            }, void 0, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 419,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[13px] text-white/50 leading-relaxed",
                                                children: "Those rules become a workflow you can simulate, tweak, and deploy."
                                            }, void 0, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 420,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] uppercase tracking-wider text-white/30",
                                                        children: "Extracted Rules"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                        children: showHint && !showLegacy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "text-[9px] text-blue-400/60",
                                                            initial: {
                                                                opacity: 0
                                                            },
                                                            animate: {
                                                                opacity: 1
                                                            },
                                                            exit: {
                                                                opacity: 0
                                                            },
                                                            children: "Hover to explore →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PolicyToCode.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: ruleChips.map((rule, idx)=>{
                                                    const isActive = activeRuleId === rule.id;
                                                    const isSelected = selectedRule === rule.id;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        "data-chip": true,
                                                        className: `flex items-center gap-2 px-3 py-2 rounded-[6px] border cursor-pointer transition-colors select-none ${isActive ? "bg-blue-500/15 border-blue-500/50" : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]"}`,
                                                        style: {
                                                            boxShadow: isActive ? "0 0 15px rgba(59,130,246,0.2)" : "none"
                                                        },
                                                        initial: {
                                                            opacity: 0,
                                                            x: -15
                                                        },
                                                        animate: {
                                                            opacity: showLegacy ? 0.5 : activeRuleId && !isActive ? 0.4 : 1,
                                                            x: 0,
                                                            scale: isActive ? 1.02 : 1
                                                        },
                                                        transition: {
                                                            duration: 0.25,
                                                            delay: isInView ? 0.3 + idx * 0.05 : 0
                                                        },
                                                        onMouseEnter: ()=>!showLegacy && setHoveredRule(rule.id),
                                                        onMouseLeave: ()=>setHoveredRule(null),
                                                        onClick: (e)=>{
                                                            if (showLegacy) return;
                                                            e.stopPropagation();
                                                            setSelectedRule(isSelected ? null : rule.id);
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: `w-2 h-2 rounded-full ${isActive ? "bg-blue-400" : "bg-white/30"}`,
                                                                animate: !reducedMotion && isActive ? {
                                                                    scale: [
                                                                        1,
                                                                        1.3,
                                                                        1
                                                                    ]
                                                                } : {},
                                                                transition: {
                                                                    duration: 1.5,
                                                                    repeat: Infinity
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[11px] flex-1 ${isActive ? "text-white font-medium" : "text-white/60"}`,
                                                                children: rule.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 25
                                                            }, this),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center",
                                                                initial: {
                                                                    scale: 0
                                                                },
                                                                animate: {
                                                                    scale: 1
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "8",
                                                                    height: "8",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "none",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 12l5 5L20 7",
                                                                        stroke: "white",
                                                                        strokeWidth: "3",
                                                                        strokeLinecap: "round"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                                        lineNumber: 457,
                                                                        columnNumber: 87
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/PolicyToCode.tsx",
                                                                    lineNumber: 457,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, rule.id, true, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 435,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 bg-[#0c0c0c] min-h-[500px] relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 left-4 right-4 z-20 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "flex items-center gap-2",
                                                initial: {
                                                    opacity: 0,
                                                    x: -10
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.3
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            className: "text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13 3L4 14h7l-2 7 9-11h-7l2-7z",
                                                                fill: "currentColor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/PolicyToCode.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12px] font-semibold text-white",
                                                                children: "Passage AI"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] text-white/40",
                                                                children: "Automated Workflows"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 472,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 p-1 rounded-[6px] bg-white/[0.04] border border-white/[0.08]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowLegacy(false),
                                                        className: `px-3 py-1.5 rounded-[5px] text-[11px] font-medium transition-all cursor-pointer ${!showLegacy ? "bg-blue-500/20 text-blue-300" : "text-white/40 hover:text-white/60"}`,
                                                        children: "With Passage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowLegacy(true),
                                                        className: `px-3 py-1.5 rounded-[5px] text-[11px] font-medium transition-all cursor-pointer ${showLegacy ? "bg-red-500/20 text-red-300" : "text-white/40 hover:text-white/60"}`,
                                                        children: "Legacy Process"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/PolicyToCode.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 490,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[9px] uppercase tracking-wider text-white/30 mb-6 mt-12",
                                        children: showLegacy ? "Manual Enrollment Process" : "Automated Workflow"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 500,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: showLegacy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegacyProcessState, {
                                                reducedMotion: reducedMotion
                                            }, void 0, false, {
                                                fileName: "[project]/components/PolicyToCode.tsx",
                                                lineNumber: 507,
                                                columnNumber: 21
                                            }, this)
                                        }, "legacy", false, {
                                            fileName: "[project]/components/PolicyToCode.tsx",
                                            lineNumber: 506,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.3
                                            },
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WithPassageState, {
                                                    activeRuleId: activeRuleId,
                                                    highlightedNodes: highlightedNodes,
                                                    hoveredNode: hoveredNode,
                                                    setHoveredNode: setHoveredNode,
                                                    reducedMotion: reducedMotion,
                                                    isSequenceComplete: afterSequenceComplete,
                                                    visibleStep: afterSequenceStep
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PolicyToCode.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                                    rule: activeRule,
                                                    visible: !!activeRuleId
                                                }, void 0, false, {
                                                    fileName: "[project]/components/PolicyToCode.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, "passage", true, {
                                            fileName: "[project]/components/PolicyToCode.tsx",
                                            lineNumber: 510,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/PolicyToCode.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PolicyToCode.tsx",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PolicyToCode.tsx",
                        lineNumber: 410,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PolicyToCode.tsx",
                    lineNumber: 409,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PolicyToCode.tsx",
            lineNumber: 398,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PolicyToCode.tsx",
        lineNumber: 397,
        columnNumber: 5
    }, this);
}
_s1(PolicyToCode, "aHVuyJJPJ6MdN4u66iAlBbErhOQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c4 = PolicyToCode;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "StepConnection");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "LegacyProcessState");
__turbopack_context__.k.register(_c3, "WithPassageState");
__turbopack_context__.k.register(_c4, "PolicyToCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_PolicyToCode_tsx_0631ba47._.js.map