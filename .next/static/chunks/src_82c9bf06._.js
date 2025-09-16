(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/utils/sanitize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Input validation utility functions
/**
 * Checks if the input contains any potentially dangerous content
 * @param {string} input - The input string to validate
 * @returns {Object} - Contains validation result and warning message
 */ __turbopack_context__.s({
    "sanitizeInput": (()=>sanitizeInput),
    "validateInput": (()=>validateInput)
});
const validateInput = (input)=>{
    if (input == null) return {
        isValid: true,
        warning: null
    };
    input = String(input); // Ensure it's a string
    // URL patterns - more comprehensive
    const urlPatterns = [
        /(https?:\/\/[^\s]+)/i,
        /(www\.[^\s]+)/i,
        /([^\s]+\.(com|net|org|edu|gov|mil|biz|info|io|ai|app|dev|web|online|site|xyz|me)[^\s]*)/i,
        /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/,
        /(localhost(:\d+)?)/i // localhost
    ];
    // Script and code patterns
    const scriptPatterns = [
        /(<script[\s\S]*?>)/i,
        /(\/?script>)/i,
        /(javascript:|vbscript:|livescript:)/i,
        /(on\w+\s*=)/i,
        /(data:\s*\w+\/\w+;base64)/i
    ];
    // HTML and special character patterns
    const htmlPatterns = [
        /(<[^>]*>)/g,
        /(&[#\w]+;)/g,
        /(^|\s)(div|span|img|<a>|script|style|link|meta|iframe|form|input|button|textarea)(\s|$)/i,
        /[<>{}\[\]`]/g
    ];
    // Check for URLs
    for (const pattern of urlPatterns){
        if (pattern.test(input)) {
            return {
                isValid: false,
                warning: "URLs or web addresses are not allowed in this field"
            };
        }
    }
    // Check for scripts
    for (const pattern of scriptPatterns){
        if (pattern.test(input)) {
            return {
                isValid: false,
                warning: "Script-like content is not allowed in this field"
            };
        }
    }
    // Check for HTML and special characters
    for (const pattern of htmlPatterns){
        if (pattern.test(input)) {
            return {
                isValid: false,
                warning: "HTML tags, special characters, or code-like content are not allowed in this field"
            };
        }
    }
    // Only allow alphanumeric characters, spaces, and basic punctuation
    const validContentPattern = /^[\w\s.,!?-]*$/;
    if (!validContentPattern.test(input)) {
        return {
            isValid: false,
            warning: "Only letters, numbers, spaces, and basic punctuation are allowed"
        };
    }
    return {
        isValid: true,
        warning: null
    };
};
const sanitizeInput = (input)=>{
    if (input == null) return ''; // Handles undefined and null
    let sanitized = String(input); // Ensure it's a string
    // Remove URLs and web addresses
    sanitized = sanitized.replace(/(https?:\/\/[^\s]+)/gi, '') // http(s) URLs
    .replace(/(www\.[^\s]+)/gi, '') // www URLs
    .replace(/([^\s]+\.(com|net|org|edu|gov|mil|biz|info|io|ai|app|dev|web|online|site|xyz|me)[^\s]*)/gi, '') // TLDs
    .replace(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g, '') // IP addresses
    .replace(/(localhost(:\d+)?)/gi, ''); // localhost
    // Remove script-related content
    sanitized = sanitized.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '') // Complete script tags
    .replace(/<script[\s\S]*?>/gi, '') // Opening script tags
    .replace(/(<\/?script>)/gi, '') // Simple script tags
    .replace(/(javascript:|vbscript:|livescript:)/gi, '') // Script protocols
    .replace(/(on\w+\s*=)/gi, '') // Event handlers
    .replace(/(data:\s*\w+\/\w+;base64)/gi, ''); // Base64 content
    // Remove HTML tags and entities
    sanitized = sanitized.replace(/<[^>]*>/g, '') // HTML tags
    .replace(/(&[#\w]+;)/g, '') // HTML entities
    .replace(/(^|\s)(div|span|img|<a>|script|style|link|meta|iframe|form|input|button|textarea)(\s|$)/gi, ' '); // Common HTML words
    // Remove special characters
    sanitized = sanitized.replace(/[<>{}\[\]`]/g, '');
    // Only keep alphanumeric characters, spaces, and basic punctuation
    sanitized = sanitized.replace(/[^\w\s.,!?-]/g, '');
    sanitized = sanitized.replace(/[^a-zA-Z0-9\s.,!?-]/g, '');
    // Trim extra whitespace
    // sanitized = sanitized.trim().replace(/\s+/g, ' ');
    // sanitized = sanitized.trim();
    return sanitized;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project/TeamLeadSelect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TeamLeadSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function TeamLeadSelect({ value, onChange, isOpen, onToggle, disabled }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { teamLeads, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "TeamLeadSelect.useSelector": (state)=>({
                teamLeads: state.project.teamLeads,
                loading: state.project.status.fetchTeamLeads === 'loading',
                error: state.project.error.teamLeads
            })
    }["TeamLeadSelect.useSelector"]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TeamLeadSelect.useEffect": ()=>{
            if (!teamLeads || teamLeads.length === 0) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchTeamLeads"])());
            }
        }
    }["TeamLeadSelect.useEffect"], [
        dispatch,
        teamLeads
    ]);
    const filteredTeamLeads = Array.isArray(teamLeads) ? teamLeads.filter((lead)=>(lead.firstName?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || (lead.lastName?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || (lead.employeeID?.toLowerCase() || '').includes(searchQuery.toLowerCase())) : [];
    const selectedTeamLead = Array.isArray(teamLeads) ? teamLeads.find((lead)=>lead.employeeID === value) : null;
    const handleSelect = (teamLead)=>{
        if (onChange && teamLead) {
            onChange({
                teamLeadId: teamLead.employeeID,
                teamLeadName: `${teamLead.firstName} ${teamLead.lastName}`
            });
            onToggle(); // Close dropdown
            setSearchQuery('');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onToggle,
                disabled: disabled || loading,
                className: `w-full px-4 py-2 border ${disabled || loading ? 'border-gray-200 bg-gray-100 cursor-not-allowed' : 'border-gray-300 hover:border-black'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer flex items-center justify-between bg-white`,
                "aria-label": selectedTeamLead ? `Selected team lead: ${selectedTeamLead.firstName} ${selectedTeamLead.lastName}` : 'Select a team lead',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                            className: "text-gray-600",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black font-medium",
                            children: loading ? 'Loading...' : selectedTeamLead ? `${selectedTeamLead.firstName} ${selectedTeamLead.lastName}` : 'Select Team Lead'
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search team leads...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-10 pr-4 py-2 border border-gray-300 hover:border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black bg-white",
                                    "aria-label": "Search team leads"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-center text-gray-600",
                        children: "Loading team leads..."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-center text-red-600",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this),
                    !loading && !error && filteredTeamLeads.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-center text-gray-600",
                        children: "No team leads found"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this),
                    !loading && !error && filteredTeamLeads.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-60 overflow-y-auto",
                        children: filteredTeamLeads.map((teamLead)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSelect(teamLead),
                                className: "w-full px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors text-left text-black",
                                "aria-label": `Select team lead: ${teamLead.firstName} ${teamLead.lastName}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-black",
                                        children: `${teamLead.firstName} ${teamLead.lastName}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                                        lineNumber: 105,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 flex items-center gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-black",
                                            children: teamLead.employeeID
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                                            lineNumber: 107,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                                        lineNumber: 106,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, teamLead.employeeID, true, {
                                fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project/TeamLeadSelect.js",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project/TeamLeadSelect.js",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(TeamLeadSelect, "AqyIuX8wTxzE/MqtrfotZ6nnfSk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = TeamLeadSelect;
var _c;
__turbopack_context__.k.register(_c, "TeamLeadSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project/ClientSelect.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectSlice.js [app-client] (ecmascript)"); // Correct import
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ClientSelect({ value, onChange }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { clients, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ClientSelect.useSelector": (state)=>{
            return {
                clients: state.project.clients || [],
                loading: state.project.status.fetch12lients,
                error: state.project.error.clients
            };
        }
    }["ClientSelect.useSelector"]);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientSelect.useEffect": ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClients"])());
        }
    }["ClientSelect.useEffect"], [
        dispatch
    ]);
    if (loading === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading clients..."
        }, void 0, false, {
            fileName: "[project]/src/modules/project/ClientSelect.js",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                "Error: ",
                error
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/project/ClientSelect.js",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    const filteredClients = Array.isArray(clients) ? clients.filter((client)=>client.clientName?.toLowerCase().includes(searchQuery.toLowerCase()) || client.clientId?.toLowerCase().includes(searchQuery.toLowerCase())) : [];
    const selectedClient = Array.isArray(clients) ? clients.find((client)=>client.clientId === value) : null;
    const handleSelect = (client)=>{
        onChange(client.clientId);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full px-4 py-2 border border-gray-300 hover:border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer flex items-center justify-between bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBriefcase"], {
                            className: "text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/ClientSelect.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-black font-medium",
                            children: selectedClient ? selectedClient.clientName : 'Select Client'
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/ClientSelect.js",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project/ClientSelect.js",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project/ClientSelect.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/ClientSelect.js",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search clients...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "w-full pl-10 pr-4 py-2 border border-gray-300 hover:border-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-black bg-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/ClientSelect.js",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project/ClientSelect.js",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/ClientSelect.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-60 overflow-y-auto",
                        children: filteredClients.length > 0 ? filteredClients.map((client)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleSelect(client),
                                className: "px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors text-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium text-black",
                                        children: client.clientName
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/project/ClientSelect.js",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-600 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-black",
                                                children: client.clientId
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project/ClientSelect.js",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project/ClientSelect.js",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-black",
                                                children: client.industryType
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/project/ClientSelect.js",
                                                lineNumber: 94,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/project/ClientSelect.js",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, client._id, true, {
                                fileName: "[project]/src/modules/project/ClientSelect.js",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-2 text-gray-600",
                            children: "No clients found"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/ClientSelect.js",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/ClientSelect.js",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project/ClientSelect.js",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project/ClientSelect.js",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(ClientSelect, "C+10+sd5CTzOflSEznBWekQ9/XI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ClientSelect;
var _c;
__turbopack_context__.k.register(_c, "ClientSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Textarea;
;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/label.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.jsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.jsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.jsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.jsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.jsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.jsx",
            lineNumber: 150,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.jsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/modules/project/ProjectEditForm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useState, useRef } from "react";
// import { validateInput, sanitizeInput } from "@/utils/sanitize";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import { fetchProjectById, updateProject } from "@/features/projectSlice";
// import {
//   FiCalendar,
//   FiUser,
//   FiFileText,
//   FiSave,
//   FiUpload,
//   FiX,
//   FiFolder,
//   FiFile,
//   FiBook,
//   FiCheck,
//   FiArrowLeft,
// } from "react-icons/fi";
// import { toast } from "sonner";
// import TeamLeadSelect from "@/modules/project/TeamLeadSelect";
// import ClientSelect from "@/modules/project/ClientSelect";
// import gsap from "gsap";
// export default function ProjectEditForm({ projectId }) {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { project, status, error } = useSelector((state) => state.project);
//   const formRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const teamLeadSelectRef = useRef(null);
//   const clientSelectRef = useRef(null);
//   const [formData, setFormData] = useState({
//     projectName: "",
//     description: "",
//     clientId: "",
//     teamLeadId: "",
//     teamLeadName: "",
//     startDate: "",
//     endDate: "",
//     expectedEndDate: "",
//     category: "",
//     attachments: [],
//   });
//   const [isTeamLeadSelectOpen, setIsTeamLeadSelectOpen] = useState(false);
//   const [isClientSelectOpen, setIsClientSelectOpen] = useState(false);
//   const [dragActive, setDragActive] = useState(false);
//   const [fileErrors, setFileErrors] = useState([]);
//   const [isFormInitialized, setIsFormInitialized] = useState(false);
//   // Fetch project data on component mount
//   useEffect(() => {
//     if (projectId && status.fetchProject === "idle") {
//       dispatch(fetchProjectById(projectId));
//     }
//   }, [dispatch, projectId, status.fetchProject]);
//   // Animate form appearance
//   useEffect(() => {
//     gsap.fromTo(
//       formRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
//     );
//   }, []);
//   // Update form data when project data is fetched, only if not initialized
//   useEffect(() => {
//     if (
//       project &&
//       project.data &&
//       !isFormInitialized &&
//       status.fetchProject === "succeeded"
//     ) {
//       setFormData({
//         projectName: project.data.projectName || "",
//         description: project.data.description || "",
//         clientId: project.data.clientId || "",
//         teamLeadId: project.data.teamLeadId || "",
//         teamLeadName: project.data.teamLeadName || "",
//         startDate: project.data.startDate
//           ? project.data.startDate.split("T")[0]
//           : "",
//         endDate: project.data.endDate ? project.data.endDate.split("T")[0] : "",
//         expectedEndDate: project.data.expectedEndDate
//           ? project.data.expectedEndDate.split("T")[0]
//           : "",
//         category: project.data.category || "",
//         attachments: [],
//       });
//       setIsFormInitialized(true);
//     }
//   }, [project, status.fetchProject, isFormInitialized]);
//   // Click outside handler for select dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         teamLeadSelectRef.current &&
//         !teamLeadSelectRef.current.contains(event.target)
//       ) {
//         setIsTeamLeadSelectOpen(false);
//       }
//       if (
//         clientSelectRef.current &&
//         !clientSelectRef.current.contains(event.target)
//       ) {
//         setIsClientSelectOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const [formErrors, setFormErrors] = useState({
//     projectName: "",
//     description: "",
//     clientId: "",
//     teamLeadId: "",
//     teamLeadName: "",
//     startDate: "",
//     endDate: "",
//     expectedEndDate: "",
//     category: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const validation = validateInput(value);
//     if (!validation.isValid) {
//       setFormErrors((prev) => ({
//         ...prev,
//         [name]: validation.warning,
//       }));
//       return;
//     }
//     setFormErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//     const sanitizedValue = sanitizeInput(value);
//     const updatedFormData = {
//       ...formData,
//       [name]: sanitizedValue,
//     };
//     // Reset clientId when category changes to in house
//     if (name === "category" && sanitizedValue === "in house") {
//       updatedFormData.clientId = "";
//       setFormErrors((prev) => ({
//         ...prev,
//         clientId: "",
//       }));
//     }
//     if (
//       name === "startDate" &&
//       updatedFormData.endDate &&
//       new Date(sanitizedValue) > new Date(updatedFormData.endDate)
//     ) {
//       setFormErrors((prev) => ({
//         ...prev,
//         startDate: "Start date cannot be after end date",
//       }));
//     } else if (
//       name === "endDate" &&
//       updatedFormData.startDate &&
//       new Date(updatedFormData.startDate) > new Date(sanitizedValue)
//     ) {
//       setFormErrors((prev) => ({
//         ...prev,
//         endDate: "End date cannot be before start date",
//       }));
//     } else if (
//       name === "expectedEndDate" &&
//       updatedFormData.endDate &&
//       new Date(sanitizedValue) < new Date(updatedFormData.endDate)
//     ) {
//       setFormErrors((prev) => ({
//         ...prev,
//         expectedEndDate: "Expected end date must be after end date",
//       }));
//     } else if (
//       name === "endDate" &&
//       updatedFormData.expectedEndDate &&
//       new Date(sanitizedValue) > new Date(updatedFormData.expectedEndDate)
//     ) {
//       setFormErrors((prev) => ({
//         ...prev,
//         expectedEndDate: "Expected end date must be after end date",
//       }));
//     }
//     setFormData(updatedFormData);
//   };
//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === "dragenter" || e.type === "dragover") {
//       setDragActive(true);
//     } else if (e.type === "dragleave") {
//       setDragActive(false);
//     }
//   };
//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       handleFiles(e.dataTransfer.files);
//     }
//   };
//   const handleFiles = (files) => {
//     const newFiles = Array.from(files);
//     const validFiles = [];
//     const errors = [];
//     const allowedTypes = [
//       "application/pdf",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "application/vnd.ms-excel",
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       "application/vnd.ms-powerpoint",
//       "application/vnd.openxmlformats-officedocument.presentationml.presentation",
//       "text/plain",
//     ];
//     const maxSize = 10 * 1024 * 1024; // 10MB
//     newFiles.forEach((file) => {
//       if (!allowedTypes.includes(file.type)) {
//         errors.push(`File ${file.name} has an unsupported type.`);
//       } else if (file.size > maxSize) {
//         errors.push(`File ${file.name} exceeds 10MB.`);
//       } else {
//         validFiles.push(file);
//       }
//     });
//     if (errors.length > 0) {
//       setFileErrors(errors);
//       toast.error(errors.join(" "));
//     }
//     if (validFiles.length > 0) {
//       setFormData((prev) => ({
//         ...prev,
//         attachments: [...prev.attachments, ...validFiles],
//       }));
//       gsap.from(".file-item:last-child", {
//         opacity: 0,
//         x: -30,
//         duration: 0.5,
//         ease: "power4.out",
//       });
//     }
//   };
//   const removeFile = (index) => {
//     const fileElement = document.querySelector(`.file-item:nth-child(${index + 1})`);
//     gsap.to(fileElement, {
//       opacity: 0,
//       x: 30,
//       duration: 0.5,
//       ease: "power4.in",
//       onComplete: () => {
//         setFormData((prev) => ({
//           ...prev,
//           attachments: prev.attachments.filter((_, i) => i !== index),
//         }));
//       },
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let hasErrors = false;
//     const newErrors = { ...formErrors };
//     for (const [key, value] of Object.entries(formData)) {
//       if (key === "attachments" || key === "teamLeadName") continue;
//       if (key === "clientId" && formData.category === "in house") continue;
//       const validation = validateInput(value);
//       if (!validation.isValid) {
//         newErrors[key] = validation.warning;
//         hasErrors = true;
//       }
//     }
//     if (formData.startDate && formData.endDate) {
//       if (new Date(formData.startDate) > new Date(formData.endDate)) {
//         newErrors.startDate = "Start date cannot be after end date";
//         newErrors.endDate = "End date cannot be before start date";
//         hasErrors = true;
//       }
//     }
//     if (formData.endDate && formData.expectedEndDate) {
//       if (new Date(formData.endDate) > new Date(formData.expectedEndDate)) {
//         newErrors.expectedEndDate = "Expected end date must be after end date";
//         hasErrors = true;
//       }
//     }
//     if (hasErrors) {
//       setFormErrors(newErrors);
//       toast.error("Please fix the errors in the form before submitting.");
//       return;
//     }
//     try {
//       const submissionData = new FormData();
//       submissionData.append("projectName", formData.projectName);
//       submissionData.append("description", formData.description);
//       if (formData.category === "client") {
//         submissionData.append("clientId", formData.clientId);
//       }
//       submissionData.append("teamLeadId", formData.teamLeadId);
//       submissionData.append("teamLeadName", formData.teamLeadName);
//       submissionData.append("startDate", formData.startDate);
//       submissionData.append("endDate", formData.endDate);
//       submissionData.append("expectedEndDate", formData.expectedEndDate);
//       submissionData.append("category", formData.category);
//       formData.attachments.forEach((file) => {
//         submissionData.append("attachments[]", file);
//       });
//       await gsap.to(formRef.current, {
//         opacity: 0,
//         y: -30,
//         duration: 0.5,
//         ease: "power4.in",
//       });
//       await dispatch(
//         updateProject({ projectId, updatedData: submissionData })
//       ).unwrap();
//       toast.success("Project updated successfully!");
//       router.push("/project");
//     } catch (err) {
//       toast.error(`Failed to update project: ${err.message || "Unknown error"}`);
//       gsap.to(formRef.current, {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         ease: "power4.out",
//       });
//     }
//   };
//   const getFileIcon = (file) => {
//     const fileName = file.name || "unknown";
//     const extension = fileName.split(".").pop().toLowerCase();
//     switch (extension) {
//       case "pdf":
//         return <FiBook className="text-red-500" />;
//       case "doc":
//       case "docx":
//         return <FiFile className="text-blue-500" />;
//       case "xls":
//       case "xlsx":
//         return <FiFile className="text-green-500" />;
//       case "ppt":
//       case "pptx":
//         return <FiFile className="text-orange-500" />;
//       case "txt":
//         return <FiFile className="text-gray-500" />;
//       default:
//         return <FiFile className="text-gray-500" />;
//     }
//   };
//   if (status.fetchProject === "loading") {
//     return (
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-64">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-t-3 border-blue-600 mb-4"></div>
//         <p className="text-gray-600 font-medium text-sm sm:text-base">
//           Loading project details...
//         </p>
//       </div>
//     );
//   }
//   if (status.fetchProject === "failed") {
//     return (
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
//         <div className="bg-red-50 border border-red-200 text-red-700 px-4 sm:px-6 py-5 rounded-lg max-w-md w-full">
//           <p className="font-semibold text-base sm:text-lg mb-2">
//             Unable to load project
//           </p>
//           <p className="text-red-600 text-sm sm:text-base">
//             {error.fetchProject || "An error occurred"}
//           </p>
//           <button
//             onClick={() => dispatch(fetchProjectById(projectId))}
//             className="mt-4 bg-red-100 hover:bg-red-200 text-red-700 px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base font-medium flex items-center gap-2 mx-auto transition-colors"
//             aria-label="Retry loading project"
//           >
//             <FiArrowLeft className="h-4 w-4" />
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div
//       ref={formRef}
//       className="container mx-auto px-4 py-6 bg-white rounded-lg shadow-sm transform transition-all duration-300 min-h-screen min-w-full overflow-y-auto"
//     >
//       <div className="flex items-center gap-3 mb-6">
//         <button
//           onClick={() => router.push("/project")}
//           className="cursor-pointer inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-2 rounded-full font-medium text-sm transition-all hover:bg-blue-100"
//           aria-label="Back to projects"
//         >
//           <FiArrowLeft className="h-5 w-5" />
//           <span className="hidden sm:inline">Back</span>
//         </button>
//         <h1 className="text-xl font-semibold text-gray-800 text-center">
//           Edit Project
//         </h1>
//       </div>
//       <form
//         id="project-form"
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-4"
//       >
//         <div className="space-y-4">
//           <div className="p-4 border border-gray-200 rounded-lg">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.projectName ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiFileText className="mr-2" />
//               Project Name
//               {formErrors.projectName && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.projectName})
//                 </span>
//               )}
//             </label>
//             <input
//               type="text"
//               name="projectName"
//               value={formData.projectName}
//               onChange={handleChange}
//               required
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               className={`w-full p-2 border ${
//                 formErrors.projectName
//                   ? "border-red-300 bg-red-50"
//                   : "border-gray-200 bg-white"
//               } rounded-md focus:outline-none disabled:opacity-50 ${
//                 formErrors.projectName
//                   ? "focus:border-red-400"
//                   : "focus:border-gray-400"
//               }`}
//               placeholder="Enter project name"
//               aria-label="Project name"
//             />
//           </div>
//           <div className="p-4 border border-gray-200 rounded-lg">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.category ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiFolder className="mr-2" />
//               Category
//               {formErrors.category && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.category})
//                 </span>
//               )}
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               className={`w-full p-2 cursor-pointer border ${
//                 formErrors.category
//                   ? "border-red-300 bg-red-50"
//                   : "border-gray-200 bg-white"
//               } rounded-md focus:outline-none disabled:opacity-50 ${
//                 formErrors.category
//                   ? "focus:border-red-400"
//                   : "focus:border-gray-400"
//               }`}
//               aria-label="Project category"
//             >
//               <option value="">Select Category</option>
//               <option value="client">Client</option>
//               <option value="in house">In House</option>
//             </select>
//           </div>
//           {formData.category === "client" && (
//             <div ref={clientSelectRef} className="p-4 border border-gray-200 rounded-lg">
//               <label
//                 className={`flex items-center text-sm font-medium mb-1 ${
//                   formErrors.clientId ? "text-red-500" : "text-gray-600"
//                 }`}
//               >
//                 <FiUser className="mr-2" />
//                 Client
//                 {formErrors.clientId && (
//                   <span className="ml-2 text-xs font-normal">
//                     ({formErrors.clientId})
//                   </span>
//                 )}
//               </label>
//               <ClientSelect
//                 value={formData.clientId}
//                 isOpen={isClientSelectOpen}
//                 onToggle={() => setIsClientSelectOpen(!isClientSelectOpen)}
//                 onChange={(value) => {
//                   setFormData((prev) => ({ ...prev, clientId: value }));
//                   setIsClientSelectOpen(false);
//                   setFormErrors((prev) => ({ ...prev, clientId: "" }));
//                 }}
//                 disabled={
//                   status.fetchProject === "loading" ||
//                   status.updateProject === "loading"
//                 }
//               />
//             </div>
//           )}
//           <div ref={teamLeadSelectRef} className="p-4 border border-gray-200 rounded-lg">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.teamLeadId ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiUser className="mr-2" />
//               Team Lead
//               {formErrors.teamLeadId && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.teamLeadId})
//                 </span>
//               )}
//             </label>
//             <TeamLeadSelect
//               value={formData.teamLeadId}
//               isOpen={isTeamLeadSelectOpen}
//               onToggle={() => setIsTeamLeadSelectOpen(!isTeamLeadSelectOpen)}
//               onChange={({ teamLeadId, teamLeadName }) => {
//                 setFormData((prev) => ({
//                   ...prev,
//                   teamLeadId,
//                   teamLeadName,
//                 }));
//                 setIsTeamLeadSelectOpen(false);
//               }}
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//             />
//           </div>
//           <div className="p-4 border border-gray-200 rounded-lg">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.startDate ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiCalendar className="mr-2" />
//               Start Date
//               {formErrors.startDate && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.startDate})
//                 </span>
//               )}
//             </label>
//             <input
//               type="date"
//               name="startDate"
//               value={formData.startDate}
//               onChange={handleChange}
//               required
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               className={`w-full cursor-pointer p-2 border ${
//                 formErrors.startDate
//                   ? "border-red-300 bg-red-50"
//                   : "border-gray-200 bg-white"
//               } rounded-md focus:outline-none disabled:opacity-50 ${
//                 formErrors.startDate
//                   ? "focus:border-red-400"
//                   : "focus:border-gray-400"
//               }`}
//               aria-label="Start date"
//             />
//           </div>
//           <div className="p-4 border border-gray-200 rounded-lg">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.endDate ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiCalendar className="mr-2" />
//               End Date
//               {formErrors.endDate && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.endDate})
//                 </span>
//               )}
//             </label>
//             <input
//               type="date"
//               name="endDate"
//               value={formData.endDate}
//               onChange={handleChange}
//               required
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               className={`w-full cursor-pointer p-2 border ${
//                 formErrors.endDate
//                   ? "border-red-300 bg-red-50"
//                   : "border-gray-200 bg-white"
//               } rounded-md focus:outline-none disabled:opacity-50 ${
//                 formErrors.endDate
//                   ? "focus:border-red-400"
//                   : "focus:border-gray-400"
//               }`}
//               aria-label="End date"
//             />
//           </div>
//           <div className="p-4 border border-gray-200 rounded-lg">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.expectedEndDate ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiCalendar className="mr-2" />
//               Expected End Date
//               {formErrors.expectedEndDate && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.expectedEndDate})
//                 </span>
//               )}
//             </label>
//             <input
//               type="date"
//               name="expectedEndDate"
//               value={formData.expectedEndDate}
//               onChange={handleChange}
//               required
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               className={`w-full cursor-pointer p-2 border ${
//                 formErrors.expectedEndDate
//                   ? "border-red-300 bg-red-50"
//                   : "border-gray-200 bg-white"
//               } rounded-md focus:outline-none disabled:opacity-50 ${
//                 formErrors.expectedEndDate
//                   ? "focus:border-red-400"
//                   : "focus:border-gray-400"
//               }`}
//               aria-label="Expected end date"
//             />
//           </div>
//           <div
//             className={`p-4 border ${
//               dragActive ? "border-gray-400 bg-gray-50" : "border-gray-200 bg-white"
//             } rounded-lg transition-colors duration-200`}
//             onDragEnter={handleDrag}
//             onDragLeave={handleDrag}
//             onDragOver={handleDrag}
//             onDrop={handleDrop}
//             onClick={() =>
//               status.fetchProject !== "loading" &&
//               status.updateProject !== "loading" &&
//               fileInputRef.current?.click()
//             }
//           >
//             <input
//               ref={fileInputRef}
//               type="file"
//               multiple
//               onChange={(e) => handleFiles(e.target.files)}
//               className="hidden"
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain"
//               aria-label="Upload files"
//             />
//             <div className="text-center mb-2">
//               <FiUpload className="mx-auto text-xl text-gray-500 mb-1" />
//               <p className="text-gray-500 text-sm">
//                 Drag & drop files or click to upload (PDF, DOC, DOCX, XLS, XLSX,
//                 PPT, PPTX, TXT)
//               </p>
//             </div>
//             {formData.attachments.length > 0 && (
//               <div className="mt-3 grid grid-cols-4 gap-2 max-h-40 overflow-y-auto p-2">
//                 {formData.attachments.map((file, index) => {
//                   const fileName = file.name;
//                   const extension = fileName.split(".").pop().toLowerCase();
//                   const truncatedName = fileName.substring(
//                     0,
//                     Math.min(8, fileName.length - extension.length - 1)
//                   );
//                   const displayName = `${truncatedName}...${extension}`;
//                   return (
//                     <div
//                       key={`attachment-${index}`}
//                       className="file-item relative group flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 transition-all duration-200"
//                     >
//                       <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <button
//                           type="button"
//                           onClick={() => removeFile(index)}
//                           className="text-gray-400 hover:text-red-400 p-1"
//                           disabled={
//                             status.fetchProject === "loading" ||
//                             status.updateProject === "loading"
//                           }
//                           aria-label={`Remove ${fileName}`}
//                         >
//                           <FiX size={16} />
//                         </button>
//                       </div>
//                       <div className="flex flex-col items-center gap-2">
//                         <div className="text-2xl">{getFileIcon(file)}</div>
//                         <span
//                           className="text-gray-600 text-xs text-center"
//                           title={fileName}
//                         >
//                           {displayName}
//                         </span>
//                       </div>
//                       <div className="absolute -top-1 -left-1 bg-green-500 text-white rounded-full p-1">
//                         <FiCheck size={12} />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="space-y-4">
//           <div className="p-4 border border-gray-200 rounded-lg h-full">
//             <label
//               className={`flex items-center text-sm font-medium mb-1 ${
//                 formErrors.description ? "text-red-500" : "text-gray-600"
//               }`}
//             >
//               <FiFileText className="mr-2" />
//               Description
//               {formErrors.description && (
//                 <span className="ml-2 text-xs font-normal">
//                   ({formErrors.description})
//                 </span>
//               )}
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               disabled={
//                 status.fetchProject === "loading" ||
//                 status.updateProject === "loading"
//               }
//               className={`w-full h-[calc(100%-32px)] resize-none p-2 border ${
//                 formErrors.description
//                   ? "border-red-300 bg-red-50"
//                   : "border-gray-200 bg-white"
//               } rounded-md focus:outline-none disabled:opacity-50 ${
//                 formErrors.description
//                   ? "focus:border-red-400"
//                   : "focus:border-gray-400"
//               }`}
//               placeholder="Describe your project..."
//               aria-label="Project description"
//             />
//           </div>
//         </div>
//       </form>
//       <div className="flex justify-end mt-6">
//         <button
//           type="submit"
//           form="project-form"
//           disabled={
//             status.fetchProject === "loading" ||
//             status.updateProject === "loading"
//           }
//           className={`flex items-center gap-2 rounded-full py-2 px-4 text-white transition-colors duration-200 ${
//             status.fetchProject === "loading" || status.updateProject === "loading"
//               ? "bg-blue-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//           aria-label="Save changes"
//         >
//           {status.fetchProject === "loading" ||
//           status.updateProject === "loading" ? (
//             <>
//               <svg
//                 className="animate-spin h-5 w-5 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
//                 ></path>
//               </svg>
//               Saving...
//             </>
//           ) : (
//             <>
//               Save Changes
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s({
    "default": (()=>ProjectEditForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sanitize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2f$TeamLeadSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project/TeamLeadSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2f$ClientSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project/ClientSelect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ProjectEditForm({ projectId }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { project, status, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "ProjectEditForm.useSelector": (state)=>state.project
    }["ProjectEditForm.useSelector"]);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const teamLeadSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clientSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projectName: "",
        description: "",
        clientId: "",
        teamLeadId: "",
        teamLeadName: "",
        startDate: "",
        expectedEndDate: "",
        category: "",
        attachments: []
    });
    const [isTeamLeadSelectOpen, setIsTeamLeadSelectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClientSelectOpen, setIsClientSelectOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileErrors, setFileErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFormInitialized, setIsFormInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch project data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectEditForm.useEffect": ()=>{
            if (projectId && status.fetchProject === "idle") {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectById"])(projectId));
            }
        }
    }["ProjectEditForm.useEffect"], [
        dispatch,
        projectId,
        status.fetchProject
    ]);
    // Animate form appearance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectEditForm.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(formRef.current, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power4.out"
            });
        }
    }["ProjectEditForm.useEffect"], []);
    // Update form data when project data is fetched, only if not initialized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectEditForm.useEffect": ()=>{
            if (project && project.data && !isFormInitialized && status.fetchProject === "succeeded") {
                setFormData({
                    projectName: project.data.projectName || "",
                    description: project.data.description || "",
                    clientId: project.data.clientId || "",
                    teamLeadId: project.data.teamLeadId || "",
                    teamLeadName: project.data.teamLeadName || "",
                    startDate: project.data.startDate ? project.data.startDate.split("T")[0] : "",
                    expectedEndDate: project.data.expectedEndDate ? project.data.expectedEndDate.split("T")[0] : "",
                    category: project.data.category || "",
                    attachments: []
                });
                setIsFormInitialized(true);
            }
        }
    }["ProjectEditForm.useEffect"], [
        project,
        status.fetchProject,
        isFormInitialized
    ]);
    // Click outside handler for select dropdowns
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectEditForm.useEffect": ()=>{
            const handleClickOutside = {
                "ProjectEditForm.useEffect.handleClickOutside": (event)=>{
                    if (teamLeadSelectRef.current && !teamLeadSelectRef.current.contains(event.target)) {
                        setIsTeamLeadSelectOpen(false);
                    }
                    if (clientSelectRef.current && !clientSelectRef.current.contains(event.target)) {
                        setIsClientSelectOpen(false);
                    }
                }
            }["ProjectEditForm.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
            return ({
                "ProjectEditForm.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("touchstart", handleClickOutside);
                }
            })["ProjectEditForm.useEffect"];
        }
    }["ProjectEditForm.useEffect"], []);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projectName: "",
        description: "",
        clientId: "",
        teamLeadId: "",
        teamLeadName: "",
        startDate: "",
        expectedEndDate: "",
        category: ""
    });
    const handleChange = (e)=>{
        const { name, value } = e.target;
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateInput"])(value);
        if (!validation.isValid) {
            setFormErrors((prev)=>({
                    ...prev,
                    [name]: validation.warning
                }));
            return;
        }
        setFormErrors((prev)=>({
                ...prev,
                [name]: ""
            }));
        const sanitizedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeInput"])(value);
        const updatedFormData = {
            ...formData,
            [name]: sanitizedValue
        };
        // Reset clientId when category changes to in house
        if (name === "category" && sanitizedValue === "in house") {
            updatedFormData.clientId = "";
            setFormErrors((prev)=>({
                    ...prev,
                    clientId: ""
                }));
        }
        if (name === "startDate" && updatedFormData.expectedEndDate && new Date(sanitizedValue) > new Date(updatedFormData.expectedEndDate)) {
            setFormErrors((prev)=>({
                    ...prev,
                    startDate: "Start date cannot be after expected end date"
                }));
        } else if (name === "expectedEndDate" && updatedFormData.startDate && new Date(updatedFormData.startDate) > new Date(sanitizedValue)) {
            setFormErrors((prev)=>({
                    ...prev,
                    expectedEndDate: "Expected end date cannot be before start date"
                }));
        }
        setFormData(updatedFormData);
    };
    const handleDrag = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(e.dataTransfer.files);
        }
    };
    const handleFiles = (files)=>{
        const newFiles = Array.from(files);
        const validFiles = [];
        const errors = [];
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "text/plain"
        ];
        const maxSize = 10 * 1024 * 1024; // 10MB
        newFiles.forEach((file)=>{
            if (!allowedTypes.includes(file.type)) {
                errors.push(`File ${file.name} has an unsupported type.`);
            } else if (file.size > maxSize) {
                errors.push(`File ${file.name} exceeds 10MB.`);
            } else {
                validFiles.push(file);
            }
        });
        if (errors.length > 0) {
            setFileErrors(errors);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(errors.join(" "));
        }
        if (validFiles.length > 0) {
            setFormData((prev)=>({
                    ...prev,
                    attachments: [
                        ...prev.attachments,
                        ...validFiles
                    ]
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".file-item:last-child", {
                opacity: 0,
                x: -30,
                duration: 0.5,
                ease: "power4.out"
            });
        }
    };
    const removeFile = (index)=>{
        const fileElement = document.querySelector(`.file-item:nth-child(${index + 1})`);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(fileElement, {
            opacity: 0,
            x: 30,
            duration: 0.5,
            ease: "power4.in",
            onComplete: ()=>{
                setFormData((prev)=>({
                        ...prev,
                        attachments: prev.attachments.filter((_, i)=>i !== index)
                    }));
            }
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let hasErrors = false;
        const newErrors = {
            ...formErrors
        };
        for (const [key, value] of Object.entries(formData)){
            if (key === "attachments" || key === "teamLeadName") continue;
            if (key === "clientId" && formData.category === "in house") continue;
            const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sanitize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateInput"])(value);
            if (!validation.isValid) {
                newErrors[key] = validation.warning;
                hasErrors = true;
            }
        }
        if (formData.startDate && formData.expectedEndDate) {
            if (new Date(formData.startDate) > new Date(formData.expectedEndDate)) {
                newErrors.startDate = "Start date cannot be after expected end date";
                newErrors.expectedEndDate = "Expected end date cannot be before start date";
                hasErrors = true;
            }
        }
        if (hasErrors) {
            setFormErrors(newErrors);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fix the errors in the form before submitting.");
            return;
        }
        try {
            const submissionData = new FormData();
            submissionData.append("projectName", formData.projectName);
            submissionData.append("description", formData.description);
            if (formData.category === "client") {
                submissionData.append("clientId", formData.clientId);
            }
            submissionData.append("teamLeadId", formData.teamLeadId);
            submissionData.append("teamLeadName", formData.teamLeadName);
            submissionData.append("startDate", formData.startDate);
            submissionData.append("expectedEndDate", formData.expectedEndDate);
            submissionData.append("category", formData.category);
            formData.attachments.forEach((file)=>{
                submissionData.append("attachments[]", file);
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(formRef.current, {
                opacity: 0,
                y: -30,
                duration: 0.5,
                ease: "power4.in"
            });
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProject"])({
                projectId,
                updatedData: submissionData
            })).unwrap();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Project updated successfully!");
            router.push("/project");
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed to update project: ${err.message || "Unknown error"}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(formRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power4.out"
            });
        }
    };
    const getFileIcon = (file)=>{
        const fileName = file.name || "unknown";
        const extension = fileName.split(".").pop().toLowerCase();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFile"], {
            className: "text-gray-800",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/modules/project/ProjectEditForm.js",
            lineNumber: 1242,
            columnNumber: 12
        }, this);
    };
    if (status.fetchProject === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center justify-center min-h-64",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-3 border-t-3 border-[#1447e6] mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                    lineNumber: 1248,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 font-medium text-sm sm:text-base",
                    children: "Loading project details..."
                }, void 0, false, {
                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                    lineNumber: 1249,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/project/ProjectEditForm.js",
            lineNumber: 1247,
            columnNumber: 7
        }, this);
    }
    if (status.fetchProject === "failed") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-red-50 border border-red-200 text-red-700 px-4 sm:px-6 py-5 rounded-lg max-w-md w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        className: "font-semibold text-base sm:text-lg mb-2",
                        children: "Unable to load project"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                        lineNumber: 1260,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 text-sm sm:text-base",
                        children: error.fetchProject || "An error occurred"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                        lineNumber: 1263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProjectById"])(projectId)),
                        className: "mt-4 bg-red-100 hover:bg-red-200 text-red-700 px-4 sm:px-5 py-2 rounded-md text-sm sm:text-base font-medium flex items-center gap-2 mx-auto transition-colors",
                        "aria-label": "Retry loading project",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                lineNumber: 1271,
                                columnNumber: 13
                            }, this),
                            "Retry"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                        lineNumber: 1266,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                lineNumber: 1259,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/project/ProjectEditForm.js",
            lineNumber: 1258,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        ref: formRef,
        className: "min-h-screen bg-white border border-gray-200 shadow-md w-full max-w-[100vw] mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                className: "px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: ()=>router.back(),
                            className: "flex items-center gap-2 border-gray-300 text-gray-800 hover:bg-gray-100 rounded-md text-xs sm:text-sm px-3 sm:px-4 py-2",
                            "aria-label": "Back to projects",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiArrowLeft"], {
                                    className: "h-4 w-4 sm:h-5 sm:w-5",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                    lineNumber: 1292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                    lineNumber: 1293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                            lineNumber: 1286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-lg sm:text-xl md:text-2xl font-bold text-gray-800",
                            children: "Edit Project"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                            lineNumber: 1295,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                    lineNumber: 1285,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                lineNumber: 1284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    id: "project-form",
                    onSubmit: handleSubmit,
                    className: "space-y-6 sm:space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-4 sm:gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-4 sm:space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "projectName",
                                                    className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.projectName ? "text-red-500" : "text-gray-800"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                                            "aria-hidden": "true",
                                                            className: "h-4 w-4 sm:h-5 sm:w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1311,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Project Name",
                                                        formErrors.projectName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-xs ml-2",
                                                            children: [
                                                                "(",
                                                                formErrors.projectName,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1314,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1305,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    id: "projectName",
                                                    name: "projectName",
                                                    value: formData.projectName,
                                                    onChange: handleChange,
                                                    required: true,
                                                    disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                    placeholder: "Enter project name",
                                                    className: `border-gray-300 focus:ring-[#1447e6] text-gray-800 placeholder:text-gray-400 rounded-md text-sm h-10 sm:h-11 w-full ${formErrors.projectName ? "border-red-300" : ""} touch-manipulation`,
                                                    "aria-label": "Project name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1317,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "category",
                                                            className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.category ? "text-red-500" : "text-gray-800"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFolder"], {
                                                                    "aria-hidden": "true",
                                                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1343,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Project Type",
                                                                formErrors.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] sm:text-xs ml-2",
                                                                    children: [
                                                                        "(",
                                                                        formErrors.category,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1346,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1337,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            name: "category",
                                                            value: formData.category,
                                                            onValueChange: (value)=>handleChange({
                                                                    target: {
                                                                        name: "category",
                                                                        value
                                                                    }
                                                                }),
                                                            disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                    className: `border-gray-300 focus:ring-[#1447e6] text-gray-800 rounded-md text-sm h-10 sm:h-11 w-full ${formErrors.category ? "border-red-300" : ""} touch-manipulation`,
                                                                    "aria-label": "Project type",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                        placeholder: "Select Project Type"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                        lineNumber: 1367,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1361,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "client",
                                                                            children: "Client"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                            lineNumber: 1370,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                            value: "in house",
                                                                            children: "In House"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                            lineNumber: 1371,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1369,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1350,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1336,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 space-y-2",
                                                    children: formData.category === "client" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        ref: clientSelectRef,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: "clientId",
                                                                className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.clientId ? "text-red-500" : "text-gray-800"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                                        "aria-hidden": "true",
                                                                        className: "h-4 w-4 sm:h-5 sm:w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                        lineNumber: 1384,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Client",
                                                                    formErrors.clientId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] sm:text-xs ml-2",
                                                                        children: [
                                                                            "(",
                                                                            formErrors.clientId,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                lineNumber: 1378,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2f$ClientSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                value: formData.clientId,
                                                                isOpen: isClientSelectOpen,
                                                                onToggle: ()=>setIsClientSelectOpen(!isClientSelectOpen),
                                                                onChange: (value)=>{
                                                                    setFormData((prev)=>({
                                                                            ...prev,
                                                                            clientId: value
                                                                        }));
                                                                    setIsClientSelectOpen(false);
                                                                    setFormErrors((prev)=>({
                                                                            ...prev,
                                                                            clientId: ""
                                                                        }));
                                                                },
                                                                disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                                className: "border-gray-300 focus:ring-[#1447e6] text-gray-800 rounded-md text-sm h-10 sm:h-11 w-full touch-manipulation"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                lineNumber: 1390,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                        lineNumber: 1377,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-10 sm:h-11"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                        lineNumber: 1407,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1375,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1335,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    htmlFor: "teamLeadId",
                                                    className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.teamLeadId ? "text-red-500" : "text-gray-800"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                                            "aria-hidden": "true",
                                                            className: "h-4 w-4 sm:h-5 sm:w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1419,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Team Lead",
                                                        formErrors.teamLeadId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] sm:text-xs ml-2",
                                                            children: [
                                                                "(",
                                                                formErrors.teamLeadId,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1422,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1413,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2f$TeamLeadSelect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    value: formData.teamLeadId,
                                                    isOpen: isTeamLeadSelectOpen,
                                                    onToggle: ()=>setIsTeamLeadSelectOpen(!isTeamLeadSelectOpen),
                                                    onChange: ({ teamLeadId, teamLeadName })=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                teamLeadId,
                                                                teamLeadName
                                                            }));
                                                        setIsTeamLeadSelectOpen(false);
                                                        setFormErrors((prev)=>({
                                                                ...prev,
                                                                teamLeadId: ""
                                                            }));
                                                    },
                                                    disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                    className: "border-gray-300 focus:ring-[#1447e6] text-gray-800 rounded-md text-sm h-10 sm:h-11 w-full touch-manipulation"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1425,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "startDate",
                                                            className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.startDate ? "text-red-500" : "text-gray-800"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                    "aria-hidden": "true",
                                                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1454,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Start Date",
                                                                formErrors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] sm:text-xs ml-2",
                                                                    children: [
                                                                        "(",
                                                                        formErrors.startDate,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1457,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1448,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "startDate",
                                                            type: "date",
                                                            name: "startDate",
                                                            value: formData.startDate,
                                                            onChange: handleChange,
                                                            required: true,
                                                            disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                            className: `border-gray-300 focus:ring-[#1447e6] text-gray-800 placeholder:text-gray-400 rounded-md text-sm h-10 sm:h-11 w-full ${formErrors.startDate ? "border-red-300" : ""} touch-manipulation`,
                                                            "aria-label": "Start date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1460,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1447,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "expectedEndDate",
                                                            className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.expectedEndDate ? "text-red-500" : "text-gray-800"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCalendar"], {
                                                                    "aria-hidden": "true",
                                                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1484,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Expected End Date",
                                                                formErrors.expectedEndDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] sm:text-xs ml-2",
                                                                    children: [
                                                                        "(",
                                                                        formErrors.expectedEndDate,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1487,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1478,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "expectedEndDate",
                                                            type: "date",
                                                            name: "expectedEndDate",
                                                            value: formData.expectedEndDate,
                                                            onChange: handleChange,
                                                            required: true,
                                                            disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                            className: `border-gray-300 focus:ring-[#1447e6] text-gray-800 placeholder:text-gray-400 rounded-md text-sm h-10 sm:h-11 w-full ${formErrors.expectedEndDate ? "border-red-300" : ""} touch-manipulation`,
                                                            "aria-label": "Expected end date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1490,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1477,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1446,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                    lineNumber: 1303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-2 lg:max-w-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "font-semibold flex items-center gap-2 text-xs sm:text-sm text-gray-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUpload"], {
                                                    "aria-hidden": "true",
                                                    className: "h-4 w-4 sm:h-5 sm:w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1512,
                                                    columnNumber: 17
                                                }, this),
                                                "File Upload"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1511,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border rounded-md bg-white flex flex-col h-[300px] sm:h-[400px] lg:h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-4 border-b border-gray-200 transition-colors duration-200 flex flex-col items-center justify-center flex-grow ${dragActive ? "border-blue-300 bg-gray-50" : "bg-white"}`,
                                                    onDragEnter: handleDrag,
                                                    onDragLeave: handleDrag,
                                                    onDragOver: handleDrag,
                                                    onDrop: handleDrop,
                                                    onClick: ()=>status.fetchProject !== "loading" && status.updateProject !== "loading" && fileInputRef.current?.click(),
                                                    role: "button",
                                                    tabIndex: 0,
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" || e.key === " ") {
                                                            status.fetchProject !== "loading" && status.updateProject !== "loading" && fileInputRef.current?.click();
                                                        }
                                                    },
                                                    "aria-label": "File upload area",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: fileInputRef,
                                                            type: "file",
                                                            multiple: true,
                                                            onChange: (e)=>handleFiles(e.target.files),
                                                            className: "hidden",
                                                            disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                            accept: "application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,text/plain",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1540,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col items-center justify-center space-y-2 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUpload"], {
                                                                    className: "text-xl sm:text-2xl text-gray-800",
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1554,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] sm:text-sm text-gray-600 px-2",
                                                                    children: "Drag & drop files or tap to upload (PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                    lineNumber: 1555,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1553,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1516,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 flex flex-col",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] sm:text-sm text-gray-600 mb-2",
                                                            children: formData.attachments.length > 0 ? `${formData.attachments.length} file${formData.attachments.length > 1 ? "s" : ""} chosen` : "No files chosen"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1561,
                                                            columnNumber: 19
                                                        }, this),
                                                        formData.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "max-h-40 sm:max-h-48 overflow-y-auto",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 gap-2 w-full",
                                                                children: formData.attachments.map((file, index)=>{
                                                                    const fileName = file.name;
                                                                    const extension = fileName.split(".").pop().toLowerCase();
                                                                    const truncatedName = fileName.substring(0, Math.min(15, fileName.length - extension.length - 1));
                                                                    const displayName = `${truncatedName}...${extension}`;
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "file-item relative group flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-md text-sm sm:text-base hover:bg-gray-100 transition-all duration-200 w-full",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 sm:gap-3 truncate",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-lg sm:text-2xl",
                                                                                        children: getFileIcon(file)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                                        lineNumber: 1586,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-600 text-xs sm:text-base truncate",
                                                                                        title: fileName,
                                                                                        children: displayName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                                        lineNumber: 1587,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                                lineNumber: 1585,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                variant: "ghost",
                                                                                size: "sm",
                                                                                onClick: ()=>removeFile(index),
                                                                                disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                                                                className: "text-gray-800 hover:text-[#1447e6] p-1",
                                                                                "aria-label": `Remove ${fileName}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                                                                    size: 16,
                                                                                    sm: 18
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                                    lineNumber: 1605,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                                lineNumber: 1594,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, `attachment-${index}`, true, {
                                                                        fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                        lineNumber: 1581,
                                                                        columnNumber: 29
                                                                    }, this);
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                                lineNumber: 1570,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                            lineNumber: 1569,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1560,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1515,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                    lineNumber: 1510,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                            lineNumber: 1302,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "description",
                                    className: `font-semibold flex items-center gap-2 text-xs sm:text-sm ${formErrors.description ? "text-red-500" : "text-gray-800"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFileText"], {
                                            "aria-hidden": "true",
                                            className: "h-4 w-4 sm:h-5 sm:w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1625,
                                            columnNumber: 15
                                        }, this),
                                        "Description",
                                        formErrors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] sm:text-xs ml-2",
                                            children: [
                                                "(",
                                                formErrors.description,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1628,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                    lineNumber: 1619,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                    id: "description",
                                    name: "description",
                                    value: formData.description,
                                    onChange: handleChange,
                                    required: true,
                                    disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                    className: `min-h-[40vh] sm:min-h-[60vh] border-gray-300 focus:ring-[#1447e6] text-gray-800 placeholder:text-gray-400 rounded-md text-sm w-full ${formErrors.description ? "border-red-300" : ""} touch-manipulation`,
                                    placeholder: "Describe your project...",
                                    "aria-label": "Project description"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                    lineNumber: 1631,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                            lineNumber: 1618,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-4 sm:mt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                form: "project-form",
                                disabled: status.fetchProject === "loading" || status.updateProject === "loading",
                                className: "flex items-center gap-2 bg-[#1447e6] hover:bg-[#0f3cb5] text-white rounded-md px-4 sm:px-6 py-2 text-xs sm:text-sm w-full sm:w-auto",
                                "aria-label": "Save changes",
                                children: status.fetchProject === "loading" || status.updateProject === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1669,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                                    lineNumber: 1677,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                            lineNumber: 1663,
                                            columnNumber: 19
                                        }, this),
                                        "Saving..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "Save Changes"
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                                lineNumber: 1650,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/project/ProjectEditForm.js",
                            lineNumber: 1649,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/project/ProjectEditForm.js",
                    lineNumber: 1301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/project/ProjectEditForm.js",
                lineNumber: 1300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/project/ProjectEditForm.js",
        lineNumber: 1280,
        columnNumber: 5
    }, this);
}
_s(ProjectEditForm, "JTIsrlSci4GOwhAV36UjE5ZrnAM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ProjectEditForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectEditForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(protected)/project/edit/[id]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2f$ProjectEditForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/project/ProjectEditForm.js [app-client] (ecmascript)");
'use client';
;
;
;
function Page({ params }) {
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params); // ✅ unwrap the promise
    const projectId = resolvedParams.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$project$2f$ProjectEditForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            projectId: projectId
        }, void 0, false, {
            fileName: "[project]/src/app/(protected)/project/edit/[id]/page.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(protected)/project/edit/[id]/page.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_82c9bf06._.js.map