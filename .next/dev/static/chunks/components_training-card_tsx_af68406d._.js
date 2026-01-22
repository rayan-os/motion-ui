(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/training-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
// ─────────────────────────────────────────────────────────────
// Generate Students Data
// ─────────────────────────────────────────────────────────────
const countries = [
    {
        name: "United States",
        flag: "🇺🇸"
    },
    {
        name: "United Kingdom",
        flag: "🇬🇧"
    },
    {
        name: "Germany",
        flag: "🇩🇪"
    },
    {
        name: "France",
        flag: "🇫🇷"
    },
    {
        name: "Japan",
        flag: "🇯🇵"
    },
    {
        name: "South Korea",
        flag: "🇰🇷"
    },
    {
        name: "China",
        flag: "🇨🇳"
    },
    {
        name: "India",
        flag: "🇮🇳"
    },
    {
        name: "Brazil",
        flag: "🇧🇷"
    },
    {
        name: "Canada",
        flag: "🇨🇦"
    },
    {
        name: "Australia",
        flag: "🇦🇺"
    },
    {
        name: "Mexico",
        flag: "🇲🇽"
    },
    {
        name: "Nigeria",
        flag: "🇳🇬"
    },
    {
        name: "Egypt",
        flag: "🇪🇬"
    },
    {
        name: "UAE",
        flag: "🇦🇪"
    },
    {
        name: "Singapore",
        flag: "🇸🇬"
    },
    {
        name: "Netherlands",
        flag: "🇳🇱"
    },
    {
        name: "Sweden",
        flag: "🇸🇪"
    },
    {
        name: "Italy",
        flag: "🇮🇹"
    },
    {
        name: "Spain",
        flag: "🇪🇸"
    }
];
const firstNames = [
    "Emma",
    "Liam",
    "Yuki",
    "Chen",
    "Priya",
    "Mohammed",
    "Sofia",
    "Lucas",
    "Fatima",
    "Hiroshi",
    "Anna",
    "Carlos",
    "Aisha",
    "Viktor",
    "Maria",
    "Jin",
    "Olga",
    "Ahmed",
    "Nina",
    "David",
    "Sara",
    "Max",
    "Leila",
    "Tom",
    "Zara",
    "Kai",
    "Elena",
    "Omar",
    "Julia",
    "Raj"
];
const lastNames = [
    "Smith",
    "Müller",
    "Tanaka",
    "Wang",
    "Patel",
    "Al-Hassan",
    "Garcia",
    "Silva",
    "Kim",
    "Johnson",
    "Novak",
    "Santos",
    "Ibrahim",
    "Petrov",
    "Martinez",
    "Liu",
    "Ivanova",
    "Hassan",
    "Kowalski",
    "Anderson",
    "Yamamoto",
    "Chen",
    "Schmidt",
    "Rossi",
    "Park"
];
const programs = [
    "Computer Science",
    "Business Administration",
    "Mechanical Engineering",
    "Data Science",
    "Medicine",
    "Law",
    "Architecture",
    "Psychology",
    "Economics",
    "Biotechnology"
];
const statuses = [
    "submitted",
    "in_review",
    "approved",
    "rejected",
    "pending"
];
const generateStudents = (count)=>{
    return Array.from({
        length: count
    }, (_, i)=>{
        const country = countries[Math.floor(Math.random() * countries.length)];
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const gpa = (3.0 + Math.random() * 1.0).toFixed(2);
        const aiScore = Math.floor(60 + Math.random() * 40);
        return {
            id: `STU-${String(i + 1).padStart(4, "0")}`,
            name: `${firstName} ${lastName}`,
            country: country.name,
            flag: country.flag,
            program: programs[Math.floor(Math.random() * programs.length)],
            gpa: parseFloat(gpa),
            status,
            photo: `${firstName[0]}${lastName[0]}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.com`,
            documents: [
                {
                    name: "Transcript",
                    status: Math.random() > 0.2 ? "verified" : "pending"
                },
                {
                    name: "Passport",
                    status: Math.random() > 0.15 ? "verified" : "pending"
                },
                {
                    name: "Statement of Purpose",
                    status: Math.random() > 0.25 ? "verified" : "missing"
                },
                {
                    name: "Recommendation Letters",
                    status: Math.random() > 0.3 ? "verified" : "pending"
                },
                {
                    name: "English Proficiency",
                    status: Math.random() > 0.2 ? "verified" : "pending"
                }
            ],
            appliedDate: `${Math.floor(Math.random() * 28) + 1} days ago`,
            aiScore
        };
    });
};
const allStudents = generateStudents(100);
// Demo sequence
const demoSequence = [
    {
        type: "wait",
        duration: 600
    },
    {
        type: "move",
        target: "search-bar",
        duration: 500
    },
    {
        type: "click",
        target: "search-bar"
    },
    {
        type: "type",
        text: "passage.ai/admissions",
        duration: 1400
    },
    {
        type: "wait",
        duration: 300
    },
    {
        type: "click",
        target: "search-bar"
    },
    {
        type: "load",
        duration: 1800
    },
    {
        type: "wait",
        duration: 800
    },
    {
        type: "scroll",
        scrollTo: 150,
        duration: 1200
    },
    {
        type: "wait",
        duration: 400
    },
    {
        type: "scroll",
        scrollTo: 350,
        duration: 1000
    },
    {
        type: "wait",
        duration: 300
    },
    {
        type: "move",
        target: "student-5",
        duration: 500
    },
    {
        type: "click",
        target: "student-5"
    },
    {
        type: "wait",
        duration: 1500
    },
    {
        type: "move",
        target: "approve-btn",
        duration: 400
    },
    {
        type: "click",
        target: "approve-btn"
    },
    {
        type: "wait",
        duration: 2500
    },
    {
        type: "move",
        target: "close-modal",
        duration: 300
    },
    {
        type: "click",
        target: "close-modal"
    },
    {
        type: "wait",
        duration: 500
    },
    {
        type: "scroll",
        scrollTo: 600,
        duration: 800
    },
    {
        type: "move",
        target: "student-12",
        duration: 400
    },
    {
        type: "click",
        target: "student-12"
    },
    {
        type: "wait",
        duration: 1200
    },
    {
        type: "move",
        target: "reject-btn",
        duration: 400
    },
    {
        type: "click",
        target: "reject-btn"
    },
    {
        type: "wait",
        duration: 1500
    },
    {
        type: "move",
        target: "close-modal",
        duration: 300
    },
    {
        type: "click",
        target: "close-modal"
    },
    {
        type: "wait",
        duration: 800
    },
    {
        type: "move",
        target: "filter-in-review",
        duration: 500
    },
    {
        type: "click",
        target: "filter-in-review"
    },
    {
        type: "wait",
        duration: 2000
    },
    {
        type: "scroll",
        scrollTo: 0,
        duration: 600
    },
    {
        type: "wait",
        duration: 1500
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
                    stiffness: 150,
                    damping: 22
                },
                y: {
                    type: "spring",
                    stiffness: 150,
                    damping: 22
                },
                scale: {
                    duration: 0.1
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "28",
                    height: "28",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    style: {
                        filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.5))"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.48 0 .72-.58.38-.92L6.35 2.85a.5.5 0 0 0-.85.36Z",
                        fill: "#fff",
                        stroke: "#000",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/training-card.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/training-card.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: clicking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-0 left-0 w-10 h-10 rounded-full bg-emerald-400/60",
                        initial: {
                            scale: 0.3,
                            opacity: 1
                        },
                        animate: {
                            scale: 3,
                            opacity: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        style: {
                            transform: "translate(-30%, -30%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/training-card.tsx",
                        lineNumber: 158,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/training-card.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/training-card.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/training-card.tsx",
        lineNumber: 144,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = VirtualCursor;
// ─────────────────────────────────────────────────────────────
// Status Badge
// ─────────────────────────────────────────────────────────────
const StatusBadge = ({ status })=>{
    const config = {
        submitted: {
            bg: "bg-blue-500/20",
            border: "border-blue-500/30",
            text: "text-blue-400",
            label: "Submitted"
        },
        in_review: {
            bg: "bg-yellow-500/20",
            border: "border-yellow-500/30",
            text: "text-yellow-400",
            label: "In Review"
        },
        approved: {
            bg: "bg-emerald-500/20",
            border: "border-emerald-500/30",
            text: "text-emerald-400",
            label: "Approved"
        },
        rejected: {
            bg: "bg-red-500/20",
            border: "border-red-500/30",
            text: "text-red-400",
            label: "Rejected"
        },
        pending: {
            bg: "bg-white/10",
            border: "border-white/20",
            text: "text-white/60",
            label: "Pending"
        }
    };
    const c = config[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `text-[10px] px-2 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`,
        children: c.label
    }, void 0, false, {
        fileName: "[project]/components/training-card.tsx",
        lineNumber: 187,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = StatusBadge;
// ─────────────────────────────────────────────────────────────
// LOI Modal
// ─────────────────────────────────────────────────────────────
const LOIModal = ({ student, action, onClose })=>{
    _s();
    const [generating, setGenerating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LOIModal.useEffect": ()=>{
            const interval = setInterval({
                "LOIModal.useEffect.interval": ()=>{
                    setProgress({
                        "LOIModal.useEffect.interval": (p)=>{
                            if (p >= 100) {
                                clearInterval(interval);
                                setGenerating(false);
                                return 100;
                            }
                            return p + 2;
                        }
                    }["LOIModal.useEffect.interval"]);
                }
            }["LOIModal.useEffect.interval"], 30);
            return ({
                "LOIModal.useEffect": ()=>clearInterval(interval)
            })["LOIModal.useEffect"];
        }
    }["LOIModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute inset-0 z-[150] flex items-center justify-center bg-black/70 backdrop-blur-md rounded-[20px]",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "w-[380px] p-5 rounded-2xl bg-[#151515] border border-white/10 shadow-2xl",
            initial: {
                scale: 0.9,
                y: 20
            },
            animate: {
                scale: 1,
                y: 0
            },
            exit: {
                scale: 0.9,
                y: 20
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-semibold text-white",
                                    children: action === "approve" ? "Generating Letter of Intent" : "Generating Rejection Letter"
                                }, void 0, false, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-white/50 mt-1",
                                    children: [
                                        "For ",
                                        student.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 233,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20",
                            onClick: onClose,
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/training-card.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                generating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `w-16 h-16 rounded-2xl ${action === "approve" ? "bg-emerald-500/20" : "bg-red-500/20"} flex items-center justify-center`,
                                animate: {
                                    rotate: [
                                        0,
                                        5,
                                        -5,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 0.5,
                                    repeat: Infinity
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    className: action === "approve" ? "text-emerald-400" : "text-red-400",
                                    animate: {
                                        scale: [
                                            1,
                                            1.1,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 0.8,
                                        repeat: Infinity
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "4",
                                            y: "2",
                                            width: "16",
                                            height: "20",
                                            rx: "2",
                                            stroke: "currentColor",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8 6h8M8 10h8M8 14h4",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 263,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 248,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 247,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "text-sm text-white/70",
                                animate: {
                                    opacity: [
                                        0.5,
                                        1,
                                        0.5
                                    ]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity
                                },
                                children: "AI is generating document..."
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 bg-white/10 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `h-full ${action === "approve" ? "bg-gradient-to-r from-emerald-500 to-cyan-500" : "bg-gradient-to-r from-red-500 to-orange-500"} rounded-full`,
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-white/40 mt-2",
                            children: [
                                progress,
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/training-card.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 rounded-xl ${action === "approve" ? "bg-emerald-500/10 border border-emerald-500/20" : "bg-red-500/10 border border-red-500/20"} mb-4`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `w-8 h-8 rounded-full ${action === "approve" ? "bg-emerald-500/30" : "bg-red-500/30"} flex items-center justify-center`,
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
                                            children: action === "approve" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                className: "text-emerald-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 12l5 5L20 7",
                                                    stroke: "currentColor",
                                                    strokeWidth: "3",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 291,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                className: "text-red-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 6l12 12M6 18L18 6",
                                                    stroke: "currentColor",
                                                    strokeWidth: "3",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 295,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm font-medium ${action === "approve" ? "text-emerald-400" : "text-red-400"}`,
                                            children: action === "approve" ? "LOI Generated Successfully" : "Rejection Letter Generated"
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-white/60 space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40",
                                                    children: "Student:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                student.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40",
                                                    children: "Program:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                student.program
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40",
                                                    children: "Document ID:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " LOI-",
                                                student.id.replace("STU-", "")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white/40",
                                                    children: "Generated:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Just now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 282,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "flex-1 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs font-medium flex items-center justify-center gap-2",
                                    whileHover: {
                                        backgroundColor: "rgba(255,255,255,0.1)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 5v14M5 12h14",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 317,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Download PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: `flex-1 py-2.5 rounded-lg text-xs font-medium flex items-center justify-center gap-2 ${action === "approve" ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400" : "bg-red-500/20 border border-red-500/30 text-red-400"}`,
                                    whileHover: {
                                        scale: 1.02
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 328,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Send to Student"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/training-card.tsx",
                    lineNumber: 281,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/training-card.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/training-card.tsx",
        lineNumber: 216,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LOIModal, "AP4mLBU578oRKjEvvwyUgFFzzEc=");
_c2 = LOIModal;
function TrainingCard() {
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchFocused, setSearchFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [appLoaded, setAppLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [students, setStudents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(allStudents);
    const [selectedStudent, setSelectedStudent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [showLOI, setShowLOI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollPosition, setScrollPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cursorPosition, setCursorPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 300,
        y: 200
    });
    const [cursorClicking, setCursorClicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cursorVisible, setCursorVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const elementRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const registerRef = (id)=>(el)=>{
            if (el) elementRefs.current.set(id, el);
        };
    const filteredStudents = activeFilter === "all" ? students : students.filter((s)=>s.status === activeFilter);
    const stats = {
        total: students.length,
        approved: students.filter((s)=>s.status === "approved").length,
        rejected: students.filter((s)=>s.status === "rejected").length,
        inReview: students.filter((s)=>s.status === "in_review").length
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrainingCard.useEffect": ()=>{
            setMounted(true);
        }
    }["TrainingCard.useEffect"], []);
    // Demo automation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrainingCard.useEffect": ()=>{
            if (!mounted) return;
            let cancelled = false;
            const getPos = {
                "TrainingCard.useEffect.getPos": (id)=>{
                    const el = elementRefs.current.get(id);
                    if (el && containerRef.current) {
                        const rect = el.getBoundingClientRect();
                        const containerRect = containerRef.current.getBoundingClientRect();
                        return {
                            x: rect.left - containerRect.left + rect.width / 2 - 14,
                            y: rect.top - containerRect.top + rect.height / 2 - 14
                        };
                    }
                    return null;
                }
            }["TrainingCard.useEffect.getPos"];
            const runStep = {
                "TrainingCard.useEffect.runStep": async (step)=>{
                    if (cancelled) return;
                    switch(step.type){
                        case "move":
                            {
                                if (step.target) {
                                    const pos = getPos(step.target);
                                    if (pos) setCursorPosition(pos);
                                }
                                setCursorVisible(true);
                                await new Promise({
                                    "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, step.duration || 500)
                                }["TrainingCard.useEffect.runStep"]);
                                break;
                            }
                        case "click":
                            {
                                setCursorClicking(true);
                                await new Promise({
                                    "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, 150)
                                }["TrainingCard.useEffect.runStep"]);
                                if (step.target === "search-bar") setSearchFocused(true);
                                else if (step.target?.startsWith("student-")) {
                                    const idx = parseInt(step.target.replace("student-", ""));
                                    const student = filteredStudents[idx];
                                    if (student) setSelectedStudent(student);
                                } else if (step.target === "approve-btn" && selectedStudent) {
                                    setStudents({
                                        "TrainingCard.useEffect.runStep": (prev)=>prev.map({
                                                "TrainingCard.useEffect.runStep": (s)=>s.id === selectedStudent.id ? {
                                                        ...s,
                                                        status: "approved"
                                                    } : s
                                            }["TrainingCard.useEffect.runStep"])
                                    }["TrainingCard.useEffect.runStep"]);
                                    setShowLOI({
                                        student: selectedStudent,
                                        action: "approve"
                                    });
                                } else if (step.target === "reject-btn" && selectedStudent) {
                                    setStudents({
                                        "TrainingCard.useEffect.runStep": (prev)=>prev.map({
                                                "TrainingCard.useEffect.runStep": (s)=>s.id === selectedStudent.id ? {
                                                        ...s,
                                                        status: "rejected"
                                                    } : s
                                            }["TrainingCard.useEffect.runStep"])
                                    }["TrainingCard.useEffect.runStep"]);
                                    setShowLOI({
                                        student: selectedStudent,
                                        action: "reject"
                                    });
                                } else if (step.target === "close-modal") {
                                    setShowLOI(null);
                                    setSelectedStudent(null);
                                } else if (step.target === "filter-in-review") {
                                    setActiveFilter("in_review");
                                }
                                await new Promise({
                                    "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, 100)
                                }["TrainingCard.useEffect.runStep"]);
                                setCursorClicking(false);
                                break;
                            }
                        case "type":
                            {
                                if (step.text) {
                                    for (const char of step.text.split("")){
                                        if (cancelled) break;
                                        setSearchText({
                                            "TrainingCard.useEffect.runStep": (p)=>p + char
                                        }["TrainingCard.useEffect.runStep"]);
                                        await new Promise({
                                            "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, (step.duration || 1000) / step.text.length)
                                        }["TrainingCard.useEffect.runStep"]);
                                    }
                                }
                                break;
                            }
                        case "scroll":
                            {
                                if (listRef.current && step.scrollTo !== undefined) {
                                    const start = listRef.current.scrollTop;
                                    const end = step.scrollTo;
                                    const duration = step.duration || 500;
                                    const startTime = Date.now();
                                    const animate = {
                                        "TrainingCard.useEffect.runStep.animate": ()=>{
                                            const elapsed = Date.now() - startTime;
                                            const progress = Math.min(elapsed / duration, 1);
                                            const eased = 1 - Math.pow(1 - progress, 3);
                                            if (listRef.current) {
                                                listRef.current.scrollTop = start + (end - start) * eased;
                                                setScrollPosition(listRef.current.scrollTop);
                                            }
                                            if (progress < 1 && !cancelled) requestAnimationFrame(animate);
                                        }
                                    }["TrainingCard.useEffect.runStep.animate"];
                                    animate();
                                    await new Promise({
                                        "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, duration)
                                    }["TrainingCard.useEffect.runStep"]);
                                }
                                break;
                            }
                        case "load":
                            {
                                setIsLoading(true);
                                await new Promise({
                                    "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, step.duration || 1500)
                                }["TrainingCard.useEffect.runStep"]);
                                setIsLoading(false);
                                setAppLoaded(true);
                                break;
                            }
                        case "wait":
                            {
                                await new Promise({
                                    "TrainingCard.useEffect.runStep": (r)=>setTimeout(r, step.duration || 500)
                                }["TrainingCard.useEffect.runStep"]);
                                break;
                            }
                    }
                }
            }["TrainingCard.useEffect.runStep"];
            const runDemo = {
                "TrainingCard.useEffect.runDemo": async ()=>{
                    while(!cancelled){
                        // Reset
                        setSearchText("");
                        setSearchFocused(false);
                        setAppLoaded(false);
                        setSelectedStudent(null);
                        setShowLOI(null);
                        setActiveFilter("all");
                        setStudents(allStudents);
                        setCursorVisible(false);
                        if (listRef.current) listRef.current.scrollTop = 0;
                        for (const step of demoSequence){
                            if (cancelled) break;
                            await runStep(step);
                            await new Promise({
                                "TrainingCard.useEffect.runDemo": (r)=>setTimeout(r, 30)
                            }["TrainingCard.useEffect.runDemo"]);
                        }
                        await new Promise({
                            "TrainingCard.useEffect.runDemo": (r)=>setTimeout(r, 2000)
                        }["TrainingCard.useEffect.runDemo"]);
                    }
                }
            }["TrainingCard.useEffect.runDemo"];
            runDemo();
            return ({
                "TrainingCard.useEffect": ()=>{
                    cancelled = true;
                }
            })["TrainingCard.useEffect"];
        }
    }["TrainingCard.useEffect"], [
        mounted
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white/40 text-sm",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/components/training-card.tsx",
                lineNumber: 504,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/training-card.tsx",
            lineNumber: 504,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#050505]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0",
                    animate: {
                        x: [
                            0,
                            25,
                            0,
                            -25,
                            0
                        ],
                        y: [
                            0,
                            -10,
                            0,
                            -10,
                            0
                        ]
                    },
                    transition: {
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-[1000px] h-[1000px] -top-[400px] -left-[300px] rounded-full",
                            style: {
                                background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 50%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 512,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-[800px] h-[600px] bottom-0 right-0",
                            style: {
                                background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 60%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 513,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
                            style: {
                                background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 50%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/training-card.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/training-card.tsx",
                    lineNumber: 511,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/training-card.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: containerRef,
                className: "relative z-20 w-full max-w-[900px] mx-4",
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: [
                        0,
                        -5,
                        0
                    ]
                },
                transition: {
                    opacity: {
                        duration: 0.8
                    },
                    y: {
                        duration: 9,
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
                        fileName: "[project]/components/training-card.tsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative rounded-[24px] overflow-hidden",
                        style: {
                            background: "rgba(10, 10, 10, 0.95)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            boxShadow: "0 40px 120px rgba(0, 0, 0, 0.7)",
                            backdropFilter: "blur(30px)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] rounded-[24px]",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mb-4",
                                            animate: {
                                                rotate: [
                                                    0,
                                                    10,
                                                    -10,
                                                    0
                                                ],
                                                scale: [
                                                    1,
                                                    1.05,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 1.2,
                                                repeat: Infinity
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-bold text-white",
                                                children: "P"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 534,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 533,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "flex gap-1.5",
                                            children: [
                                                0,
                                                1,
                                                2
                                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "w-2.5 h-2.5 rounded-full bg-emerald-400",
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -10,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 0.6,
                                                        repeat: Infinity,
                                                        delay: i * 0.15
                                                    }
                                                }, i, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 77
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "mt-4 text-sm text-white/50",
                                            animate: {
                                                opacity: [
                                                    0.4,
                                                    1,
                                                    0.4
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            children: "Loading Admissions Portal..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 530,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                children: showLOI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LOIModal, {
                                    student: showLOI.student,
                                    action: showLOI.action,
                                    onClose: ()=>setShowLOI(null)
                                }, void 0, false, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 544,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-5 py-3 border-b border-white/[0.06]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-[#ff5f57]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-[#febc2e]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 551,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 rounded-full bg-[#28c840]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 552,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/training-card.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        ref: registerRef("search-bar"),
                                        className: `flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${searchFocused ? "bg-white/10 border-emerald-500/50 ring-2 ring-emerald-500/20" : "bg-white/5 border-white/10"} border min-w-[240px]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "14",
                                                height: "14",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                className: "text-white/40",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "11",
                                                        cy: "11",
                                                        r: "7",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/training-card.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 101
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M21 21l-4.35-4.35",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/training-card.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 171
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 555,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-white/60",
                                                children: [
                                                    searchText || "Search...",
                                                    searchFocused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        className: "inline-block w-0.5 h-4 bg-emerald-400 ml-0.5",
                                                        animate: {
                                                            opacity: [
                                                                1,
                                                                0,
                                                                1
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 0.6,
                                                            repeat: Infinity
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/training-card.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 100
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 556,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/training-card.tsx",
                                        lineNumber: 554,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16"
                                    }, void 0, false, {
                                        fileName: "[project]/components/training-card.tsx",
                                        lineNumber: 558,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: !appLoaded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center justify-center h-[500px] text-white/30",
                                    exit: {
                                        opacity: 0
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl mb-4",
                                                children: "🎓"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 565,
                                                columnNumber: 46
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "Search passage.ai/admissions to begin"
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 565,
                                                columnNumber: 85
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/training-card.tsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                }, "empty", false, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 564,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex h-[500px]",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[200px] border-r border-white/[0.06] p-4 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-bold text-white",
                                                                children: "P"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/training-card.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 139
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-semibold text-white",
                                                                    children: "Passage AI"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 26
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-white/40",
                                                                    children: "Admissions Portal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 92
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 571,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 mb-6",
                                                    children: [
                                                        {
                                                            label: "All Applications",
                                                            value: "all",
                                                            count: stats.total
                                                        },
                                                        {
                                                            label: "Approved",
                                                            value: "approved",
                                                            count: stats.approved
                                                        },
                                                        {
                                                            label: "In Review",
                                                            value: "in_review",
                                                            count: stats.inReview
                                                        },
                                                        {
                                                            label: "Rejected",
                                                            value: "rejected",
                                                            count: stats.rejected
                                                        }
                                                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            ref: f.value === "in_review" ? registerRef("filter-in-review") : undefined,
                                                            className: `flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeFilter === f.value ? "bg-emerald-500/10 border border-emerald-500/20" : "hover:bg-white/[0.04]"}`,
                                                            whileHover: {
                                                                x: 2
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs ${activeFilter === f.value ? "text-emerald-400" : "text-white/70"}`,
                                                                    children: f.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `text-xs px-1.5 py-0.5 rounded ${activeFilter === f.value ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-white/40"}`,
                                                                    children: f.count
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 580,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, f.value, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-auto p-3 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-emerald-400/70 uppercase tracking-wider mb-1",
                                                            children: "AI Processing"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-bold text-white",
                                                            children: stats.total - stats.inReview
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-white/40",
                                                            children: "Documents analyzed today"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-4 py-3 border-b border-white/[0.06]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-sm font-semibold text-white",
                                                                children: "Student Applications"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/training-card.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-white/40",
                                                                children: [
                                                                    filteredStudents.length,
                                                                    " students"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/training-card.tsx",
                                                                lineNumber: 597,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/training-card.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: listRef,
                                                    className: "flex-1 overflow-y-auto p-2 space-y-1",
                                                    style: {
                                                        scrollBehavior: "auto"
                                                    },
                                                    children: filteredStudents.slice(0, 20).map((student, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            ref: registerRef(`student-${idx}`),
                                                            className: `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${selectedStudent?.id === student.id ? "bg-emerald-500/10 border border-emerald-500/30" : "hover:bg-white/[0.04] border border-transparent"}`,
                                                            initial: {
                                                                opacity: 0,
                                                                x: -10
                                                            },
                                                            animate: {
                                                                opacity: 1,
                                                                x: 0
                                                            },
                                                            transition: {
                                                                delay: idx * 0.02
                                                            },
                                                            whileHover: {
                                                                x: 4
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm font-medium text-white/70 border border-white/10",
                                                                    children: student.photo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 612,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium text-white truncate",
                                                                                    children: student.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 615,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-base",
                                                                                    children: student.flag
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 616,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 614,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-white/40 truncate",
                                                                            children: [
                                                                                student.program,
                                                                                " • GPA ",
                                                                                student.gpa
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 618,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 613,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col items-end gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                                            status: student.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 621,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] text-white/30",
                                                                            children: student.appliedDate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 622,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 620,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, student.id, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 593,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[260px] border-l border-white/[0.06] p-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "wait",
                                                children: selectedStudent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    exit: {
                                                        opacity: 0,
                                                        x: -20
                                                    },
                                                    ref: registerRef("close-modal"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center text-xl font-bold text-white/80 border border-white/10",
                                                                    children: selectedStudent.photo
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 635,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-white",
                                                                            children: selectedStudent.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 637,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-white/50 flex items-center gap-1",
                                                                            children: [
                                                                                selectedStudent.flag,
                                                                                " ",
                                                                                selectedStudent.country
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 638,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 636,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 634,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2.5 rounded-lg bg-white/[0.03]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[9px] text-white/40 uppercase tracking-wider",
                                                                            children: "Program"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 644,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-white/80",
                                                                            children: selectedStudent.program
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 645,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-2.5 rounded-lg bg-white/[0.03]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[9px] text-white/40 uppercase",
                                                                                    children: "GPA"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 649,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-sm font-semibold text-white",
                                                                                    children: selectedStudent.gpa
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 650,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 648,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "p-2.5 rounded-lg bg-white/[0.03]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-[9px] text-white/40 uppercase",
                                                                                    children: "AI Score"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 653,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `text-sm font-semibold ${selectedStudent.aiScore >= 85 ? "text-emerald-400" : selectedStudent.aiScore >= 70 ? "text-yellow-400" : "text-red-400"}`,
                                                                                    children: [
                                                                                        selectedStudent.aiScore,
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 654,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 652,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 647,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[9px] text-white/40 uppercase tracking-wider mb-2",
                                                                    children: "Documents"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 660,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1.5",
                                                                    children: selectedStudent.documents.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center justify-between px-2 py-1.5 rounded-lg bg-white/[0.02]",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[10px] text-white/60",
                                                                                    children: doc.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 664,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: `text-[9px] px-1.5 py-0.5 rounded ${doc.status === "verified" ? "bg-emerald-500/20 text-emerald-400" : doc.status === "pending" ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`,
                                                                                    children: doc.status
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/training-card.tsx",
                                                                                    lineNumber: 665,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, doc.name, true, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 663,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    ref: registerRef("approve-btn"),
                                                                    className: "w-full py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center justify-center gap-2",
                                                                    whileHover: {
                                                                        scale: 1.02,
                                                                        backgroundColor: "rgba(16,185,129,0.3)"
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.98
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            width: "14",
                                                                            height: "14",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "none",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M5 12l5 5L20 7",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: "2",
                                                                                strokeLinecap: "round"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/training-card.tsx",
                                                                                lineNumber: 675,
                                                                                columnNumber: 89
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/training-card.tsx",
                                                                            lineNumber: 675,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Approve & Generate LOI"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 674,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                    ref: registerRef("reject-btn"),
                                                                    className: "w-full py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white/50 text-xs font-medium",
                                                                    whileHover: {
                                                                        backgroundColor: "rgba(239,68,68,0.1)",
                                                                        borderColor: "rgba(239,68,68,0.3)",
                                                                        color: "#f87171"
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.98
                                                                    },
                                                                    children: "Reject Application"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 673,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, selectedStudent.id, true, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "flex flex-col items-center justify-center h-full text-center py-20",
                                                    initial: {
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        opacity: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-4xl mb-3",
                                                            children: "📋"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 685,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-white/40",
                                                            children: [
                                                                "Select a student",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/training-card.tsx",
                                                                    lineNumber: 686,
                                                                    columnNumber: 78
                                                                }, this),
                                                                "to review their application"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/training-card.tsx",
                                                            lineNumber: 686,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, "empty", true, {
                                                    fileName: "[project]/components/training-card.tsx",
                                                    lineNumber: 684,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/training-card.tsx",
                                                lineNumber: 631,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/training-card.tsx",
                                            lineNumber: 630,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, "app", true, {
                                    fileName: "[project]/components/training-card.tsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/training-card.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-white/30",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-2 h-2 rounded-full bg-emerald-400",
                                animate: {
                                    scale: [
                                        1,
                                        1.4,
                                        1
                                    ],
                                    opacity: [
                                        0.5,
                                        1,
                                        0.5
                                    ]
                                },
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Demo • AI Admissions Document Processor"
                            }, void 0, false, {
                                fileName: "[project]/components/training-card.tsx",
                                lineNumber: 699,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/training-card.tsx",
                        lineNumber: 697,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/training-card.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/training-card.tsx",
        lineNumber: 508,
        columnNumber: 5
    }, this);
}
_s1(TrainingCard, "/Di4zrVjToklUftUKkkc1MqTm4s=");
_c3 = TrainingCard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "VirtualCursor");
__turbopack_context__.k.register(_c1, "StatusBadge");
__turbopack_context__.k.register(_c2, "LOIModal");
__turbopack_context__.k.register(_c3, "TrainingCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_training-card_tsx_af68406d._.js.map