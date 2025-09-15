module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/lib/axios.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "axiosInstance": (()=>axiosInstance),
    "axiosInstance2": (()=>axiosInstance2),
    "axiosInstance3": (()=>axiosInstance3),
    "axiosInstancePublic": (()=>axiosInstancePublic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// 🌍 Root Domain from .env
// const BASE_ROOT = 'https://bluapi.aas.technology';
const BASE_ROOT = "http://localhost:8080" || 'https://bluapi.aas.technology';
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}/api`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
const axiosInstance2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}/api`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: false
});
const axiosInstance3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});
const axiosInstancePublic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: `${BASE_ROOT}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});
}}),
"[project]/src/features/shared/authSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkAuth": (()=>checkAuth),
    "clearAuthError": (()=>clearAuthError),
    "default": (()=>__TURBOPACK__default__export__),
    "login": (()=>login),
    "logoutUser": (()=>logoutUser),
    "verifyOtp": (()=>verifyOtp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
;
const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/checkAuth', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/hrms/checkCookies');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || {
            message: 'Token check failed',
            dashboard: false
        });
    }
});
const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/login', async ({ email, password }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance2"].post('/hrms/login', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Login failed');
    }
});
const verifyOtp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/verifyOtp', async ({ email, otp }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/hrms/verifyOtp', {
            email,
            otp
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'OTP verification failed');
    }
});
const logoutUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('auth/logout', async (_, { rejectWithValue })=>{
    try {
        const email = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('email');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/hrms/logout', {
            email
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove('token');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove('email');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Logout failed');
    }
});
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        loading: false,
        error: null,
        otpSent: false,
        user: null,
        token: null,
        email: null,
        isTokenChecked: false
    },
    reducers: {
        clearAuthError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Check Auth cases
        .addCase(checkAuth.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(checkAuth.fulfilled, (state, action)=>{
            state.isTokenChecked = true;
            state.isAuthenticated = action.payload.dashboard;
            state.loading = false;
        }).addCase(checkAuth.rejected, (state, action)=>{
            state.isTokenChecked = true;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = action.payload?.message;
        })// Login cases
        .addCase(login.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action)=>{
            state.loading = false;
            state.otpSent = true;
            state.email = action.payload.email;
        }).addCase(login.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
            state.otpSent = false;
        })// Verify OTP cases
        .addCase(verifyOtp.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(verifyOtp.fulfilled, (state, action)=>{
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.error = null;
        }).addCase(verifyOtp.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        })// Logout cases
        .addCase(logoutUser.fulfilled, (state)=>{
            return {
                ...state,
                isAuthenticated: false,
                otpSent: false,
                user: null,
                token: null,
                email: null,
                error: null
            };
        }).addCase(logoutUser.rejected, (state, action)=>{
            state.error = action.payload?.message;
        });
    }
});
const { clearAuthError } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
}}),
"[project]/src/features/shared/notificationSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearErrors": (()=>clearErrors),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteAllNotifications": (()=>deleteAllNotifications),
    "deleteNotification": (()=>deleteNotification),
    "fetchNotifications": (()=>fetchNotifications),
    "markAllNotificationsAsRead": (()=>markAllNotificationsAsRead),
    "markNotificationAsRead": (()=>markNotificationAsRead)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/fetchNotifications', async (recipientId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/notification/getnotications/${recipientId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch notifications');
    }
});
const deleteNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/deleteNotification', async (_id, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/notification/soft/${_id}`);
        return _id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete notification');
    }
});
const deleteAllNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/deleteAllNotifications', async (recipientId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/notification/softdeleteall/${recipientId}`);
        return recipientId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete all notifications');
    }
});
const markNotificationAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/markNotificationAsRead', async (_id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/notification/markasread/${_id}`);
        return response.data; // updated notification
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to mark as read');
    }
});
const markAllNotificationsAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('notifications/markAllNotificationsAsRead', async (recipientId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/notification/markallasread/${recipientId}`);
        return response.data; // success flag or updated list
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to mark all as read');
    }
});
const notificationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'notifications',
    initialState: {
        items: [],
        loading: {
            fetch: false,
            delete: false,
            deleteAll: false,
            update: false,
            updateAll: false
        },
        error: {
            fetch: null,
            delete: null,
            deleteAll: null,
            update: null,
            updateAll: null
        }
    },
    reducers: {
        clearErrors: (state)=>{
            state.error.fetch = null;
            state.error.delete = null;
            state.error.deleteAll = null;
            state.error.update = null;
            state.error.updateAll = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch notifications
        .addCase(fetchNotifications.pending, (state)=>{
            state.loading.fetch = true;
            state.error.fetch = null;
        }).addCase(fetchNotifications.fulfilled, (state, action)=>{
            state.loading.fetch = false;
            state.items = Array.isArray(action.payload) ? action.payload : action.payload?.data ? action.payload.data : [];
        }).addCase(fetchNotifications.rejected, (state, action)=>{
            state.loading.fetch = false;
            state.error.fetch = action.payload;
        })// Delete single
        .addCase(deleteNotification.pending, (state)=>{
            state.loading.delete = true;
            state.error.delete = null;
        }).addCase(deleteNotification.fulfilled, (state, action)=>{
            state.loading.delete = false;
            state.items = state.items.filter((item)=>item._id !== action.payload);
        }).addCase(deleteNotification.rejected, (state, action)=>{
            state.loading.delete = false;
            state.error.delete = action.payload;
        })// Delete all
        .addCase(deleteAllNotifications.pending, (state)=>{
            state.loading.deleteAll = true;
            state.error.deleteAll = null;
        }).addCase(deleteAllNotifications.fulfilled, (state)=>{
            state.loading.deleteAll = false;
            state.items = [];
        }).addCase(deleteAllNotifications.rejected, (state, action)=>{
            state.loading.deleteAll = false;
            state.error.deleteAll = action.payload;
        })// Mark single as read
        .addCase(markNotificationAsRead.pending, (state)=>{
            state.loading.update = true;
            state.error.update = null;
        }).addCase(markNotificationAsRead.fulfilled, (state, action)=>{
            state.loading.update = false;
            const updated = action.payload;
            state.items = state.items.map((n)=>n._id === updated._id ? {
                    ...n,
                    read: true
                } : n);
        }).addCase(markNotificationAsRead.rejected, (state, action)=>{
            state.loading.update = false;
            state.error.update = action.payload;
        })// Mark all as read
        .addCase(markAllNotificationsAsRead.pending, (state)=>{
            state.loading.updateAll = true;
            state.error.updateAll = null;
        }).addCase(markAllNotificationsAsRead.fulfilled, (state)=>{
            state.loading.updateAll = false;
            state.items = state.items.map((n)=>({
                    ...n,
                    read: true
                }));
        }).addCase(markAllNotificationsAsRead.rejected, (state, action)=>{
            state.loading.updateAll = false;
            state.error.updateAll = action.payload;
        });
    }
});
const { clearErrors } = notificationSlice.actions;
const __TURBOPACK__default__export__ = notificationSlice.reducer;
}}),
"[project]/src/features/shared/userSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchUserByEmail": (()=>fetchUserByEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchUserByEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('user/fetchByEmail', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/user/profile', {
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch user data');
    }
});
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'user',
    initialState: {
        userData: null,
        employeeData: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchUserByEmail.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchUserByEmail.fulfilled, (state, action)=>{
            state.loading = false;
            state.userData = action.payload.user;
            state.employeeData = action.payload.employee;
        }).addCase(fetchUserByEmail.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = userSlice.reducer;
}}),
"[project]/src/constants/sidebarNavList.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // src/constants/sidebarNavList.js
// import {
//   LayoutDashboard,
//   PhoneCall,
//   CalendarDays,
//   User,
//   Folder,
//   Users,
//   ListChecks,
//   Bug,
//   FolderClosed,
//   FileText,
//   Inbox,
// } from "lucide-react";
// export const iconMap = {
//   LayoutDashboard,
//   PhoneCall,
//   CalendarDays,
//   User,
//   Folder,
//   Users,
//   ListChecks,
//   Bug,
//   FolderClosed,
//   FileText,Inbox
// };
// export const fullNav = [
//   {
//     title: "Dashboard",
//     url: "/dashboard",
//     icon: "LayoutDashboard",
//     roles: ["cpc", "employee(regular)"],
//   },
//   {
//     title: "Inbox",
//     url: "/inbox",
//     icon: "Inbox",
//     roles: ["cpc", "employee(regular)"],
//   },
//   {
//     title: "Client",
//     url: "/client",
//     icon: "User",
//     roles: ["cpc"],
//   },
//   {
//     title: "Project",
//     url: "/project",
//     icon: "Folder",
//     roles: ["cpc", "employee(regular)"],
//   },
//   {
//     title: "Team",
//     url: "/team",
//     icon: "Users",
//     roles: ["cpc", "employee(regular)"],
//   },
//   {
//     title: "Task",
//     url: "/task",
//     icon: "ListChecks",
//     roles: ["cpc", "employee(regular)"],
//   },
//   {
//     title: "Bug",
//     url: "/bug",
//     icon: "Bug",
//     roles: ["cpc"],
//   },
//   {
//     title: "Bug",
//     url: "/bug/assigned-bugs",
//     icon: "Bug",
//     roles: ["employee(regular)"],
//   },
//   {
//     title: "Contact",
//     url: "/contact",
//     icon: "PhoneCall",
//     roles: ["cpc"],
//   },
//   {
//     title: "Meeting",
//     url: "#",
//     icon: "CalendarDays",
//     roles: ["cpc"],
//     items: [
//       { title: "Client Meeting", url: "/meetings/all", roles: ["cpc"] },
//       { title: "Meeting Calendar", url: "/meetings/calendar", roles: ["cpc"] },
//       { title: "MOM Dashboard", url: "/meetings/mom", roles: ["cpc"] },
//       { title: "Cause Dashboard", url: "/meetings/cause", roles: ["cpc"] },
//     ],
//   },
//   {
//     title: "Quotation",
//     url: "/quotation",
//     icon: "FileText",
//     roles: ["cpc"],
//   },
//   {
//     title: "Master",
//     url: "#",
//     icon: "FolderClosed",
//     roles: ["cpc"],
//     items: [
//       { title: "Service", url: "/master/services", roles: ["cpc"] },
//       { title: "Industry", url: "/master/industry", roles: ["cpc"] },
//       { title: "Meeting Slots", url: "/master/slots", roles: ["cpc"] },
//     ],
//   },
// ];
__turbopack_context__.s({
    "fullNav": (()=>fullNav),
    "iconMap": (()=>iconMap),
    "roleGroups": (()=>roleGroups)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-ssr] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-checks.js [app-ssr] (ecmascript) <export default as ListChecks>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-ssr] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$closed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderClosed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-closed.js [app-ssr] (ecmascript) <export default as FolderClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/inbox.js [app-ssr] (ecmascript) <export default as Inbox>");
"use client";
;
const iconMap = {
    LayoutDashboard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
    PhoneCall: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"],
    CalendarDays: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
    User: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
    Folder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"],
    Users: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
    ListChecks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ListChecks$3e$__["ListChecks"],
    Bug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"],
    FolderClosed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$closed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderClosed$3e$__["FolderClosed"],
    FileText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
    Inbox: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"]
};
const roleGroups = {
    cpcGroup: [
        "cpc",
        "Team Lead"
    ],
    employeeGroup: [
        "employee(regular)"
    ]
};
const fullNav = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: "LayoutDashboard",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    {
        title: "Inbox",
        url: "/inbox",
        icon: "Inbox",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    {
        title: "Client",
        url: "/client",
        icon: "User",
        roles: [
            "cpcGroup"
        ]
    },
    {
        title: "Project",
        url: "/project",
        icon: "Folder",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    {
        title: "Team",
        url: "/team",
        icon: "Users",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    {
        title: "Task",
        url: "/task",
        icon: "ListChecks",
        roles: [
            "cpcGroup",
            "employeeGroup"
        ]
    },
    {
        title: "Bug",
        url: "/bug",
        icon: "Bug",
        roles: [
            "cpcGroup"
        ]
    },
    {
        title: "Bug",
        url: "/bug/assigned-bugs",
        icon: "Bug",
        roles: [
            "employeeGroup"
        ]
    },
    {
        title: "Contact",
        url: "/contact",
        icon: "PhoneCall",
        roles: [
            "cpcGroup"
        ]
    },
    {
        title: "Meeting",
        url: "#",
        icon: "CalendarDays",
        roles: [
            "cpcGroup"
        ],
        items: [
            {
                title: "Client Meeting",
                url: "/meetings/all",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Meeting Calendar",
                url: "/meetings/calendar",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "MOM Dashboard",
                url: "/meetings/mom",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Cause Dashboard",
                url: "/meetings/cause",
                roles: [
                    "cpcGroup"
                ]
            }
        ]
    },
    {
        title: "Quotation",
        url: "/quotation",
        icon: "FileText",
        roles: [
            "cpcGroup"
        ]
    },
    {
        title: "Master",
        url: "#",
        icon: "FolderClosed",
        roles: [
            "cpcGroup"
        ],
        items: [
            {
                title: "Service",
                url: "/master/services",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Industry",
                url: "/master/industry",
                roles: [
                    "cpcGroup"
                ]
            },
            {
                title: "Meeting Slots",
                url: "/master/slots",
                roles: [
                    "cpcGroup"
                ]
            }
        ]
    }
];
}}),
"[project]/src/features/shared/sidebarSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // store/sidebarSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import { fullNav } from "@/constants/sidebarNavList";
// const initialState = {
//   navItems: [],
// };
// // console.log(" sidebarSlice",fullNav)
// const sidebarSlice = createSlice({
//   name: "sidebar",
//   initialState,
//   reducers: {
//     setSidebarByRole: (state, action) => {
//       const role = action.payload;
//       state.navItems = fullNav
//         .filter(item => item.roles.includes(role))
//         .map(item => {
//           if (item.items) {
//             const filteredItems = item.items.filter(sub => sub.roles.includes(role));
//             return { ...item, items: filteredItems };
//           }
//           return item;
//         });
//     },
//     clearSidebar: (state) => {
//       state.navItems = [];
//     },
//   },
// });
// export const { setSidebarByRole, clearSidebar } = sidebarSlice.actions;
// export default sidebarSlice.reducer;
// store/sidebarSlice.js
__turbopack_context__.s({
    "clearSidebar": (()=>clearSidebar),
    "default": (()=>__TURBOPACK__default__export__),
    "setSidebarByRole": (()=>setSidebarByRole)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$sidebarNavList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants/sidebarNavList.js [app-ssr] (ecmascript)");
;
;
const initialState = {
    navItems: [],
    userGroup: null
};
const sidebarSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "sidebar",
    initialState,
    reducers: {
        setSidebarByRole: (state, action)=>{
            const { role, position } = action.payload;
            // Determine the correct group
            const userGroup = role === "cpc" || position === "Team Lead" ? "cpcGroup" : "employeeGroup";
            state.userGroup = userGroup;
            // Filter navigation items based on group
            state.navItems = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$sidebarNavList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fullNav"].filter((item)=>item.roles.includes(userGroup)).map((item)=>{
                if (item.items) {
                    const filteredItems = item.items.filter((sub)=>sub.roles.includes(userGroup));
                    return {
                        ...item,
                        items: filteredItems
                    };
                }
                return item;
            });
        },
        clearSidebar: (state)=>{
            state.navItems = [];
            state.userGroup = null;
        }
    }
});
const { setSidebarByRole, clearSidebar } = sidebarSlice.actions;
const __TURBOPACK__default__export__ = sidebarSlice.reducer;
}}),
"[project]/src/features/teamMembersSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createTeam": (()=>createTeam),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchTeamMembers": (()=>fetchTeamMembers),
    "fetchTeamMembersByTeamId": (()=>fetchTeamMembersByTeamId),
    "fetchTeamMembersExcludingLead": (()=>fetchTeamMembersExcludingLead),
    "updateTeam": (()=>updateTeam)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
// Thunk: Fetch all team members (e.g., all employees)
const fetchTeamMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees');
        // console.log('Fetch all team members API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Fetch all team members error:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members');
    }
});
// Thunk: Create a new team
const createTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/createTeam', async (teamData, { rejectWithValue })=>{
    try {
        // console.log('Creating team with data:', teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/team/createteam', {
            projectId: teamData.projectId,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            // console.log('Create team API response:', response.data);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error('Team creation error:', error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to create team');
    }
});
// Thunk: Fetch team members by specific team ID (includes team lead)
const fetchTeamMembersByTeamId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/fetchByTeamId', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/teammembers/${teamId}`);
        // console.log(`Fetch team members for team ${teamId} API response:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Fetch team members for team ${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch team members by team ID');
    }
});
// Thunk: Fetch team members EXCLUDING team lead
const fetchTeamMembersExcludingLead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/fetchExcludingLead', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/teamlead/${teamId}`);
        // console.log(`Fetch team members excluding lead for team ${teamId}:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Error fetching team members excluding lead for ${teamId}:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch members excluding team lead');
    }
});
// Thunk: Update a team by team ID
const updateTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/updateTeam', async ({ teamId, teamData }, { rejectWithValue })=>{
    try {
        // console.log(`Updating tea/m ${teamId} with data:`, teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/team/updateteam/${teamId}`, {
            projectId: teamData.projectId,
            teamName: teamData.teamName,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            console.log(`Update team ${teamId} API response:`, response);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error(`Update team ///${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update team');
    }
});
// Slice
const teamMembersSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'teamMembers',
    initialState: {
        members: [],
        teamMembersByTeamId: [],
        teamMembersExcludingLead: [],
        status: 'idle',
        createTeamStatus: 'idle',
        fetchByTeamIdStatus: 'idle',
        fetchExcludingLeadStatus: 'idle',
        updateTeamStatus: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder// Fetch all team members
        .addCase(fetchTeamMembers.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembers.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.members = responseData.map((member)=>({
                        employeeID: member.employeeID || member.id,
                        firstName: member.firstName || member.name?.split(' ')[0] || '',
                        lastName: member.lastName || member.name?.split(' ')[1] || '',
                        email: member.email || ''
                    }));
            } else {
                state.members = [];
            }
        // console.log('Processed all team members:', state.members);
        }).addCase(fetchTeamMembers.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Create team
        .addCase(createTeam.pending, (state)=>{
            state.createTeamStatus = 'loading';
            state.error = null;
        }).addCase(createTeam.fulfilled, (state)=>{
            state.createTeamStatus = 'succeeded';
        }).addCase(createTeam.rejected, (state, action)=>{
            state.createTeamStatus = 'failed';
            state.error = action.payload;
        })// Fetch team members by team ID (includes team lead)
        .addCase(fetchTeamMembersByTeamId.pending, (state)=>{
            state.fetchByTeamIdStatus = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembersByTeamId.fulfilled, (state, action)=>{
            state.fetchByTeamIdStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.teamMembersByTeamId = responseData.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            } else {
                state.teamMembersByTeamId = [];
            }
        // console.log('Processed team members by team ID:', state.teamMembersByTeamId);
        }).addCase(fetchTeamMembersByTeamId.rejected, (state, action)=>{
            state.fetchByTeamIdStatus = 'failed';
            state.error = action.payload;
        })// Fetch team members excluding team lead
        .addCase(fetchTeamMembersExcludingLead.pending, (state)=>{
            state.fetchExcludingLeadStatus = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembersExcludingLead.fulfilled, (state, action)=>{
            state.fetchExcludingLeadStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.teamMembersExcludingLead = responseData.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            } else {
                state.teamMembersExcludingLead = [];
            }
        // console.log('Processed members excluding team lead:', state.teamMembersExcludingLead);
        }).addCase(fetchTeamMembersExcludingLead.rejected, (state, action)=>{
            state.fetchExcludingLeadStatus = 'failed';
            state.error = action.payload;
        })// Update team
        .addCase(updateTeam.pending, (state)=>{
            state.updateTeamStatus = 'loading';
            state.error = null;
        }).addCase(updateTeam.fulfilled, (state, action)=>{
            state.updateTeamStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            // Optionally update teamMembersByTeamId if the updated team data is returned
            if (responseData && Array.isArray(responseData.teamMembers)) {
                state.teamMembersByTeamId = responseData.teamMembers.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            }
        // console.log('Team updated successfully:', responseData);
        }).addCase(updateTeam.rejected, (state, action)=>{
            state.updateTeamStatus = 'failed';
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = teamMembersSlice.reducer;
;
}}),
"[project]/src/features/viewTeamByProjectIdSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchTeamByProjectId": (()=>fetchTeamByProjectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchTeamByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectTeam/fetchByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/getallteamsbyprojectid/${projectId}`);
        // console.log('Team data response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error fetching team:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team details');
    }
});
const projectTeamSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectTeam',
    initialState: {
        teams: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchTeamByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            // Ensure teams is always an array and extract from data property
            state.teams = Array.isArray(action.payload.data) ? action.payload.data : action.payload.data ? [
                action.payload.data
            ] : [];
        // console.log('Processed teams:', state.teams); // Debug log
        }).addCase(fetchTeamByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teams = [];
        });
    }
});
const __TURBOPACK__default__export__ = projectTeamSlice.reducer;
}}),
"[project]/src/features/dashboard/dashboardSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchAllClients": (()=>fetchAllClients),
    "fetchClientInsights": (()=>fetchClientInsights),
    "fetchCurrentProject": (()=>fetchCurrentProject),
    "fetchProjectActivities": (()=>fetchProjectActivities),
    "fetchProjectById": (()=>fetchProjectById),
    "fetchProjectTasks": (()=>fetchProjectTasks),
    "fetchTaskById": (()=>fetchTaskById),
    "fetchTasksByDeadline": (()=>fetchTasksByDeadline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchCurrentProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchCurrentProject', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/getallprojectswithallteams');
        return response.data;
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch current project');
    }
});
const fetchAllClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchAllClients', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/getAllClients');
        return {
            data: response.data.clients,
            totalClients: response.data.totalClients || 0
        };
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch clients');
    }
});
const fetchClientInsights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchClientInsights', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/insights');
        return {
            activeClients: response.data.clientsWithInProgressProjects.total || 0,
            newClients: response.data.clientsOnboardedLast3Months.total || 0,
            data: response.data
        };
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch client insights');
    }
});
const fetchProjectTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchProjectTasks', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/projectswithtasks');
        return response.data;
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch project tasks');
    }
});
const fetchProjectActivities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchProjectActivities', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/near-ending');
        // Transform the data to match the expected format
        const transformedData = response.data.projects.map((project)=>({
                userInitials: project.teamLeadName?.charAt(0) || '#',
                project: {
                    name: project.projectName,
                    id: project.projectId
                },
                teamLead: project.teamLeadName,
                leadId: project.leadId,
                endDate: project.endDate,
                category: project.category,
                // Calculate days remaining
                daysRemaining: Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)),
                color: Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) <= 7 ? 'red' : Math.ceil((new Date(project.endDate) - new Date()) / (1000 * 60 * 60 * 24)) <= 30 ? 'amber' : 'blue'
            }));
        return transformedData;
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch project activities');
    }
});
const fetchProjectById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchProjectById', async (projectId)=>{
    try {
        // console.log('Project data response:');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/getProjectById/${projectId}`);
        // console.log('Project data response:', response.data);
        return response.data;
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch project details');
    }
});
const fetchTasksByDeadline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchTasksByDeadline', async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/task/bydeadline');
        return response.data;
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch deadline tasks');
    }
});
const fetchTaskById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchTaskById', async (taskId)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/getbyid/${taskId}`);
        return response.data;
    } catch (error) {
        throw Error(error.response?.data?.message || 'Failed to fetch task details');
    }
});
const initialState = {
    currentProject: {
        title: '',
        startDate: '',
        endDate: '',
        status: 'loading',
        error: null
    },
    clients: {
        data: null,
        totalClients: 0,
        status: 'idle',
        error: null
    },
    clientInsights: {
        activeClients: 0,
        newClients: 0,
        data: null,
        status: 'idle',
        error: null
    },
    projectTasks: {
        data: null,
        status: 'idle',
        error: null
    },
    projectActivities: {
        data: null,
        status: 'idle',
        error: null
    },
    selectedProject: {
        data: null,
        status: 'idle',
        error: null
    },
    deadlineTasks: {
        data: null,
        status: 'idle',
        error: null
    },
    selectedTask: {
        data: null,
        status: 'idle',
        error: null
    }
};
const dashboardSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchCurrentProject.pending, (state)=>{
            state.currentProject.status = 'loading';
        }).addCase(fetchCurrentProject.fulfilled, (state, action)=>{
            state.currentProject = {
                ...action.payload,
                status: 'succeeded',
                error: null
            };
        }).addCase(fetchCurrentProject.rejected, (state, action)=>{
            state.currentProject.status = 'failed';
            state.currentProject.error = action.error.message;
        });
        builder.addCase(fetchAllClients.pending, (state)=>{
            state.clients.status = 'loading';
        }).addCase(fetchAllClients.fulfilled, (state, action)=>{
            state.clients.status = 'succeeded';
            state.clients.data = action.payload.data;
            state.clients.totalClients = action.payload.totalClients;
            state.clients.error = null;
        }).addCase(fetchAllClients.rejected, (state, action)=>{
            state.clients.status = 'failed';
            state.clients.error = action.error.message;
        });
        builder.addCase(fetchClientInsights.pending, (state)=>{
            state.clientInsights.status = 'loading';
        }).addCase(fetchClientInsights.fulfilled, (state, action)=>{
            state.clientInsights.status = 'succeeded';
            state.clientInsights.activeClients = action.payload.activeClients;
            state.clientInsights.newClients = action.payload.newClients;
            state.clientInsights.data = action.payload.data;
            state.clientInsights.error = null;
        }).addCase(fetchClientInsights.rejected, (state, action)=>{
            state.clientInsights.status = 'failed';
            state.clientInsights.error = action.error.message;
        });
        builder.addCase(fetchProjectTasks.pending, (state)=>{
            state.projectTasks.status = 'loading';
        }).addCase(fetchProjectTasks.fulfilled, (state, action)=>{
            state.projectTasks.status = 'succeeded';
            state.projectTasks.data = action.payload;
            state.projectTasks.error = null;
        }).addCase(fetchProjectTasks.rejected, (state, action)=>{
            state.projectTasks.status = 'failed';
            state.projectTasks.error = action.error.message;
        });
        builder.addCase(fetchProjectActivities.pending, (state)=>{
            state.projectActivities.status = 'loading';
        }).addCase(fetchProjectActivities.fulfilled, (state, action)=>{
            state.projectActivities.status = 'succeeded';
            state.projectActivities.data = action.payload;
            state.projectActivities.error = null;
        }).addCase(fetchProjectActivities.rejected, (state, action)=>{
            state.projectActivities.status = 'failed';
            state.projectActivities.error = action.error.message;
        });
        builder.addCase(fetchProjectById.pending, (state)=>{
            state.selectedProject.status = 'loading';
            state.selectedProject.error = null;
        }).addCase(fetchProjectById.fulfilled, (state, action)=>{
            state.selectedProject.status = 'succeeded';
            state.selectedProject.data = action.payload;
            state.selectedProject.error = null;
        }).addCase(fetchProjectById.rejected, (state, action)=>{
            state.selectedProject.status = 'failed';
            state.selectedProject.data = null;
            state.selectedProject.error = action.error.message;
        });
        builder.addCase(fetchTasksByDeadline.pending, (state)=>{
            state.deadlineTasks.status = 'loading';
        }).addCase(fetchTasksByDeadline.fulfilled, (state, action)=>{
            state.deadlineTasks.status = 'succeeded';
            state.deadlineTasks.data = action.payload;
            state.deadlineTasks.error = null;
        }).addCase(fetchTasksByDeadline.rejected, (state, action)=>{
            state.deadlineTasks.status = 'failed';
            state.deadlineTasks.error = action.error.message;
        });
        builder.addCase(fetchTaskById.pending, (state)=>{
            state.selectedTask.status = 'loading';
        }).addCase(fetchTaskById.fulfilled, (state, action)=>{
            state.selectedTask.status = 'succeeded';
            state.selectedTask.data = action.payload;
            state.selectedTask.error = null;
        }).addCase(fetchTaskById.rejected, (state, action)=>{
            state.selectedTask.status = 'failed';
            state.selectedTask.error = action.error.message;
        });
    }
});
const __TURBOPACK__default__export__ = dashboardSlice.reducer;
}}),
"[project]/src/features/dashboard/dashSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchTeamLeads": (()=>fetchTeamLeads)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchTeamLeads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('dashboard/fetchTeamLeads', async (_, thunkAPI)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/team/team-leads'); // adjust path as needed
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch team leads');
    }
});
// Initial state
const initialState = {
    teamLeads: [],
    status: 'idle',
    error: null
};
const dashSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'dash',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchTeamLeads.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamLeads.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.teamLeads = action.payload;
        }).addCase(fetchTeamLeads.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = dashSlice.reducer;
}}),
"[project]/src/features/projectSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "changeProjectStatus": (()=>changeProjectStatus),
    "clearEmployeeProjects": (()=>clearEmployeeProjects),
    "clearErrors": (()=>clearErrors),
    "clearProjects": (()=>clearProjects),
    "createProject": (()=>createProject),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteProject": (()=>deleteProject),
    "fetchAllProjects": (()=>fetchAllProjects),
    "fetchClients": (()=>fetchClients),
    "fetchProjectById": (()=>fetchProjectById),
    "fetchProjectsByEmployeeId": (()=>fetchProjectsByEmployeeId),
    "fetchTeamLeads": (()=>fetchTeamLeads),
    "resetProjectCreation": (()=>resetProjectCreation),
    "resetSuccessMessage": (()=>resetSuccessMessage),
    "updateProject": (()=>updateProject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchProjectById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchById', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/getProjectById/${projectId}`);
        if (!response.data) {
            throw new Error('No data found for the given project ID');
        }
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch project');
    }
});
const updateProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/editById', async ({ projectId, updatedData }, { rejectWithValue })=>{
    // console.log(updatedData);
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/projects/updateProject/${projectId}`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to edit project');
    }
});
const fetchClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchClients', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/getAllClients');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch clients');
    }
});
const fetchTeamLeads = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchTeamLeads', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch team leads');
    }
});
const deleteProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/deleteProject', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/projects/soft-delete/${projectId}`);
        return {
            projectId,
            message: response.data?.message || 'Project deleted successfully'
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete project');
    }
});
const createProject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/createProject', async (projectData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/projects/onboard', projectData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to create project');
    }
});
const changeProjectStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/changeProjectStatus', async ({ projectId, status }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/projects/status/${projectId}`, {
            status
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to change project status');
    }
});
const fetchAllProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projects/getallprojects');
        if (response.data) {
            const projectData = Array.isArray(response.data) ? response.data : response.data.data || response.data.projects || [];
            return projectData;
        }
        console.log(response);
        return [];
    } catch (error) {
        console.error('Error fetching projects:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch projects');
    }
});
const fetchProjectsByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('project/fetchProjectsByEmployeeId', async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/by-person/${employeeId}`);
        return response.data.projects;
        "TURBOPACK unreachable";
    } catch (error) {
        console.error('Error fetching projects by employee ID:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch employee projects');
    }
});
const initialState = {
    project: null,
    projects: [],
    employeeProjects: [],
    clients: [],
    teamLeads: [],
    status: {
        fetchProject: 'idle',
        updateProject: 'idle',
        fetchClients: 'idle',
        fetchTeamLeads: 'idle',
        projectCreation: 'idle',
        statusChange: 'idle',
        fetchAllProjects: 'idle',
        fetchEmployeeProjects: 'idle',
        deleteProject: 'idle'
    },
    error: {
        fetchProject: null,
        updateProject: null,
        clients: null,
        teamLeads: null,
        projectCreation: null,
        statusChange: null,
        fetchAllProjects: null,
        fetchEmployeeProjects: null,
        deleteProject: null
    },
    successMessage: null
};
const projectSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'project',
    initialState,
    reducers: {
        resetProjectCreation: (state)=>{
            state.status.projectCreation = 'idle';
            state.error.projectCreation = null;
            state.successMessage = null;
        },
        clearErrors: (state)=>{
            state.error = {
                fetchProject: null,
                updateProject: null,
                clients: null,
                teamLeads: null,
                projectCreation: null,
                statusChange: null,
                fetchAllProjects: null,
                fetchEmployeeProjects: null
            };
        },
        resetSuccessMessage: (state)=>{
            state.successMessage = null;
        },
        clearProjects: (state)=>{
            state.projects = [];
            state.status.fetchAllProjects = 'idle';
            state.error.fetchAllProjects = null;
        },
        clearEmployeeProjects: (state)=>{
            state.employeeProjects = [];
            state.status.fetchEmployeeProjects = 'idle';
            state.error.fetchEmployeeProjects = null;
        }
    },
    extraReducers: (builder)=>{
        // Fetch Project by ID
        builder.addCase(fetchProjectById.pending, (state)=>{
            state.status.fetchProject = 'loading';
            state.error.fetchProject = null;
        }).addCase(fetchProjectById.fulfilled, (state, action)=>{
            state.status.fetchProject = 'succeeded';
            state.project = action.payload;
            state.error.fetchProject = null;
        }).addCase(fetchProjectById.rejected, (state, action)=>{
            state.status.fetchProject = 'failed';
            state.error.fetchProject = action.payload;
        })// Update Project
        .addCase(updateProject.pending, (state)=>{
            state.status.updateProject = 'updating';
            state.error.updateProject = null;
        }).addCase(updateProject.fulfilled, (state, action)=>{
            state.status.updateProject = 'updated';
            state.project = action.payload;
            state.error.updateProject = null;
        }).addCase(updateProject.rejected, (state, action)=>{
            state.status.updateProject = 'update_failed';
            state.error.updateProject = action.payload;
        })// Fetch Clients
        .addCase(fetchClients.pending, (state)=>{
            state.status.fetchClients = 'loading';
            state.error.clients = null;
        }).addCase(fetchClients.fulfilled, (state, action)=>{
            state.status.fetchClients = 'succeeded';
            state.clients = action.payload.clients || [];
            state.error.clients = null;
        }).addCase(fetchClients.rejected, (state, action)=>{
            state.status.fetchClients = 'failed';
            state.error.clients = action.payload;
        })// Fetch Team Leads
        .addCase(fetchTeamLeads.pending, (state)=>{
            state.status.fetchTeamLeads = 'loading';
            state.error.teamLeads = null;
        }).addCase(fetchTeamLeads.fulfilled, (state, action)=>{
            state.status.fetchTeamLeads = 'succeeded';
            state.teamLeads = action.payload;
            state.error.teamLeads = null;
        }).addCase(fetchTeamLeads.rejected, (state, action)=>{
            state.status.fetchTeamLeads = 'failed';
            state.error.teamLeads = action.payload;
        })// Create Project
        .addCase(createProject.pending, (state)=>{
            state.status.projectCreation = 'loading';
            state.error.projectCreation = null;
            state.successMessage = null;
        }).addCase(createProject.fulfilled, (state, action)=>{
            state.status.projectCreation = 'succeeded';
            state.successMessage = 'Project created successfully';
            state.error.projectCreation = null;
        }).addCase(createProject.rejected, (state, action)=>{
            state.status.projectCreation = 'failed';
            state.error.projectCreation = action.payload;
        })// Change Project Status
        .addCase(changeProjectStatus.pending, (state)=>{
            state.status.statusChange = 'loading';
            state.error.statusChange = null;
            state.successMessage = null;
        }).addCase(changeProjectStatus.fulfilled, (state, action)=>{
            state.status.statusChange = 'succeeded';
            state.successMessage = 'Project status updated successfully';
            state.error.statusChange = null;
        }).addCase(changeProjectStatus.rejected, (state, action)=>{
            state.status.statusChange = 'failed';
            state.error.statusChange = action.payload;
        })// Fetch All Projects
        .addCase(fetchAllProjects.pending, (state)=>{
            state.status.fetchAllProjects = 'loading';
            state.error.fetchAllProjects = null;
        }).addCase(fetchAllProjects.fulfilled, (state, action)=>{
            state.status.fetchAllProjects = 'succeeded';
            state.projects = action.payload;
            state.error.fetchAllProjects = null;
        }).addCase(fetchAllProjects.rejected, (state, action)=>{
            state.status.fetchAllProjects = 'failed';
            state.error.fetchAllProjects = action.payload;
        })// Fetch Projects by Employee ID
        .addCase(fetchProjectsByEmployeeId.pending, (state)=>{
            state.status.fetchEmployeeProjects = 'loading';
            state.error.fetchEmployeeProjects = null;
        }).addCase(fetchProjectsByEmployeeId.fulfilled, (state, action)=>{
            state.status.fetchEmployeeProjects = 'succeeded';
            state.employeeProjects = action.payload;
            state.error.fetchEmployeeProjects = null;
        }).addCase(fetchProjectsByEmployeeId.rejected, (state, action)=>{
            state.status.fetchEmployeeProjects = 'failed';
            state.error.fetchEmployeeProjects = action.payload;
        })// Delete Project
        .addCase(deleteProject.pending, (state)=>{
            state.status.deleteProject = 'loading';
            state.error.deleteProject = null;
            state.successMessage = null;
        }).addCase(deleteProject.fulfilled, (state, action)=>{
            state.status.deleteProject = 'succeeded';
            state.projects = state.projects.filter((project)=>project._id !== action.payload.projectId);
            state.successMessage = action.payload.message;
            state.error.deleteProject = null;
        }).addCase(deleteProject.rejected, (state, action)=>{
            state.status.deleteProject = 'failed';
            state.error.deleteProject = action.payload;
        });
    }
});
const { resetProjectCreation, clearErrors, resetSuccessMessage, clearProjects, clearEmployeeProjects } = projectSlice.actions;
const __TURBOPACK__default__export__ = projectSlice.reducer;
}}),
"[project]/src/features/teamSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearSelectedTeam": (()=>clearSelectedTeam),
    "createTeam": (()=>createTeam),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteTeam": (()=>deleteTeam),
    "fetchAllTeams": (()=>fetchAllTeams),
    "fetchTeamByProjectId": (()=>fetchTeamByProjectId),
    "fetchTeamDetails": (()=>fetchTeamDetails),
    "fetchTeamMembers": (()=>fetchTeamMembers),
    "fetchTeamMembersByTeamId": (()=>fetchTeamMembersByTeamId),
    "fetchTeamsByEmployeeId": (()=>fetchTeamsByEmployeeId),
    "getTeamMembersByProjectId": (()=>getTeamMembersByProjectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchTeamByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/getallteamsbyprojectid/${projectId}`);
        // console.log('Fetch teams by project ID API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error /fetching teams by project ID:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team details');
    }
});
const fetchAllTeams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchAllTeams', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/team/getallteams');
        // console.log('Fetch all teams API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error fetching all teams:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch teams');
    }
});
const fetchTeamDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamDetails', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/getteamid/${teamId}`);
        // console.log('Fetch team details API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Error fetching team details:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team details');
    }
});
const fetchTeamMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamMembers', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/hrms/employees');
        // console.log('Fetch all team members API response:', response.data);
        return response.data;
    } catch (error) {
        // console.error('Fetch all team members error:', error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members');
    }
});
const createTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/createTeam', async (teamData, { rejectWithValue })=>{
    try {
        // console.log('Creating team with data:', teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/team/createteam', {
            projectId: teamData.projectId,
            teamName: teamData.teamName,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            // console.log('Create team API response:', response.data);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error('Team creation error:', error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to create team');
    }
});
// Thunk: Update a team by team ID
const updateTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMembers/updateTeam', async ({ teamId, teamData }, { rejectWithValue })=>{
    try {
        // console.log(`Updating tea/m ${teamId} with data:`, teamData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/team/updateteam/${teamId}`, {
            projectId: teamData.projectId,
            teamName: teamData.teamName,
            projectName: teamData.projectName,
            teamLeadId: teamData.teamLeadId,
            teamLeadName: teamData.teamLeadName,
            teamMembers: teamData.teamMembers.map((member)=>({
                    memberId: member.memberId,
                    memberName: member.memberName,
                    role: member.role,
                    email: member.email
                }))
        });
        if (response.data) {
            // console.log(`Update team ${teamId} API response:`, response.data);
            return response.data;
        } else {
            return rejectWithValue('No data received from server');
        }
    } catch (error) {
        // console.error(`Update team ///${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update team');
    }
});
const fetchTeamMembersByTeamId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamMembersByTeamId', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/api/team/teammembers/${teamId}`);
        // console.log(`Fetch team members for team ${teamId} API response:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Fetch team members for team ${teamId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch team members by team ID');
    }
});
const fetchTeamsByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/fetchTeamsByEmployeeId', async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/user/${employeeId}`);
        // console.log(`Fetch teams for employee ${employeeId} API response:`, response.data);
        return response.data;
    } catch (error) {
        // console.error(`Fetch teams for employee ${employeeId} error:`, error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch teams by employee ID');
    }
});
const getTeamMembersByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/getTeamMembersByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/team/members/by-project/${projectId}`);
        return response.data.teamMembers; // return full response as-is
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team members by project ID');
    }
});
const deleteTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('team/deleteTeam', async (teamId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/team/soft-delete/${teamId}`);
        return {
            teamId,
            message: response.data?.message || 'Team deleted successfully'
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete team');
    }
});
const teamSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'team',
    initialState: {
        teamsByProject: [],
        allTeams: [],
        selectedTeam: null,
        allMembers: [],
        teamMembersByTeamId: [],
        status: 'idle',
        createTeamStatus: 'idle',
        error: null,
        teamsByEmployee: [],
        teamMembersByProjectId: [],
        deleteTeamStatus: 'idle'
    },
    reducers: {
        clearSelectedTeam: (state)=>{
            state.selectedTeam = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch teams by project ID
        .addCase(fetchTeamByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.teamsByProject = Array.isArray(action.payload.data) ? action.payload.data : action.payload.data ? [
                action.payload.data
            ] : [];
        // console.log('Processed teams by project:', state.teamsByProject);
        }).addCase(fetchTeamByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamsByProject = [];
        })// Fetch all teams
        .addCase(fetchAllTeams.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchAllTeams.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.allTeams = Array.isArray(action.payload) ? action.payload : [];
        // console.log('Processed all teams:', state.allTeams);
        }).addCase(fetchAllTeams.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.allTeams = [];
        })// Fetch team details
        .addCase(fetchTeamDetails.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamDetails.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.selectedTeam = action.payload;
        // console.log('Processed team details:', state.selectedTeam);
        }).addCase(fetchTeamDetails.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Fetch all team members
        .addCase(fetchTeamMembers.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembers.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.allMembers = responseData.map((member)=>({
                        employeeID: member.employeeID || member.id,
                        firstName: member.firstName || member.name?.split(' ')[0] || '',
                        lastName: member.lastName || member.name?.split(' ')[1] || '',
                        email: member.email || '',
                        designation: member.designation || ''
                    }));
            } else {
                state.allMembers = [];
            }
        // console.log('Processed all team members:', state.allMembers);
        }).addCase(fetchTeamMembers.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.allMembers = [];
        })// Create team
        .addCase(createTeam.pending, (state)=>{
            state.createTeamStatus = 'loading';
            state.error = null;
        }).addCase(createTeam.fulfilled, (state)=>{
            state.createTeamStatus = 'succeeded';
        }).addCase(createTeam.rejected, (state, action)=>{
            state.createTeamStatus = 'failed';
            state.error = action.payload;
        })// Fetch team members by team ID
        .addCase(fetchTeamMembersByTeamId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamMembersByTeamId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            if (Array.isArray(responseData)) {
                state.teamMembersByTeamId = responseData.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            } else {
                state.teamMembersByTeamId = [];
            }
        // console.log('Processed team members by team ID:', state.teamMembersByTeamId);
        }).addCase(fetchTeamMembersByTeamId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamMembersByTeamId = [];
        })// Fetch teams by employee ID
        // Fetch teams by employee ID
        .addCase(fetchTeamsByEmployeeId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTeamsByEmployeeId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            state.teamsByEmployee = Array.isArray(responseData) ? responseData : [];
        // console.log('Processed teams by employee ID:', state.teamsByEmployee);
        }).addCase(fetchTeamsByEmployeeId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamsByEmployee = [];
        })//getTeamMembersByProjectId
        .addCase(getTeamMembersByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getTeamMembersByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.teamMembersByProjectId = action.payload; // save full data directly
        }).addCase(getTeamMembersByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.teamMembersByProjectId = [];
        })// Update team
        .addCase(updateTeam.pending, (state)=>{
            state.updateTeamStatus = 'loading';
            state.error = null;
        }).addCase(updateTeam.fulfilled, (state, action)=>{
            state.updateTeamStatus = 'succeeded';
            const responseData = action.payload?.data || action.payload;
            // Optionally update teamMembersByTeamId if the updated team data is returned
            if (responseData && Array.isArray(responseData.teamMembers)) {
                state.teamMembersByTeamId = responseData.teamMembers.map((member)=>({
                        memberId: member.memberId,
                        memberName: member.memberName,
                        role: member.role,
                        email: member.email
                    }));
            }
        // console.log('Team updated successfully:', responseData);
        }).addCase(updateTeam.rejected, (state, action)=>{
            state.updateTeamStatus = 'failed';
            state.error = action.payload;
        })// Delete team
        .addCase(deleteTeam.pending, (state)=>{
            state.deleteTeamStatus = 'loading';
            state.error = null;
        }).addCase(deleteTeam.fulfilled, (state, action)=>{
            state.deleteTeamStatus = 'succeeded';
            const { teamId } = action.payload;
            state.allTeams = state.allTeams.filter((team)=>team.teamId !== teamId);
            state.teamsByProject = state.teamsByProject.filter((team)=>team.teamId !== teamId);
        }).addCase(deleteTeam.rejected, (state, action)=>{
            state.deleteTeamStatus = 'failed';
            state.error = action.payload;
        });
        ;
    }
});
const { clearSelectedTeam } = teamSlice.actions;
const __TURBOPACK__default__export__ = teamSlice.reducer;
}}),
"[project]/src/features/taskSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearError": (()=>clearError),
    "createTask": (()=>createTask),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteTask": (()=>deleteTask),
    "downloadTasksReport": (()=>downloadTasksReport),
    "fetchEmployeeProjectTasks": (()=>fetchEmployeeProjectTasks),
    "fetchTaskById": (()=>fetchTaskById),
    "fetchTasks": (()=>fetchTasks),
    "fetchTasksByProjectId": (()=>fetchTasksByProjectId),
    "getAllTaskByEmployeeId": (()=>getAllTaskByEmployeeId),
    "getAllTaskList": (()=>getAllTaskList),
    "resetCurrentTask": (()=>resetCurrentTask),
    "selectAllTaskList": (()=>selectAllTaskList),
    "selectAllTaskListByEmployeeId": (()=>selectAllTaskListByEmployeeId),
    "selectAllTasks": (()=>selectAllTasks),
    "selectCurrentTask": (()=>selectCurrentTask),
    "selectEmployeeProjectTasks": (()=>selectEmployeeProjectTasks),
    "selectTaskError": (()=>selectTaskError),
    "selectTaskStatus": (()=>selectTaskStatus),
    "selectTasksByProjectId": (()=>selectTasksByProjectId),
    "updateTask": (()=>updateTask),
    "updateTaskReviewStatus": (()=>updateTaskReviewStatus),
    "updateTaskStatus": (()=>updateTaskStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const createTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/createTask', async (taskData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/task/assign', taskData, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No data received from server');
        }
        return response.data.task || response.data;
    } catch (error) {
        // console.error('Create Task Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to create task');
    }
});
const fetchTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchTasks', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/task/getall', {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.tasks) {
            throw new Error('No tasks received from server');
        }
        const activeTasks = response.data.tasks.filter((task)=>!task.isDeleted);
        return activeTasks;
    } catch (error) {
        // console.error('Fetch Tasks Error:', error);
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch tasks');
    }
});
const fetchTaskById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchTaskById', async (task_id, { rejectWithValue })=>{
    try {
        // console.log('Fetching task with ID:', task_id);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/getbyid/${task_id}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.task) {
            throw new Error('Task not found');
        }
        // console.log('Task data received:', response.data.task);
        return response.data.task;
    } catch (error) {
        // console.error('Fetch Task By ID Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch task');
    }
});
const fetchTasksByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchTasksByProjectId', async (projectId, { rejectWithValue })=>{
    try {
        // console.log('Fetching tasks for project ID:', projectId);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/project-tasks/${projectId}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No tasks received from server');
        }
        const tasksArray = Array.isArray(response.data) ? response.data : Array.isArray(response.data.tasks) ? response.data.tasks : response.data.data ? Array.isArray(response.data.data) ? response.data.data : [
            response.data.data
        ] : [];
        const activeTasks = tasksArray.filter((task)=>!task.isDeleted);
        // console.log('Tasks for project received:', activeTasks);
        return {
            projectId,
            tasks: activeTasks
        };
    } catch (error) {
        // console.error('Fetch Tasks By Project ID Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.error || error.message || 'Failed to fetch tasks for project');
    }
});
const updateTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/updateTask', async (taskData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/task/update/${taskData.task_id}`, taskData, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.task) {
            throw new Error('Failed to update task');
        }
        return response.data.task;
    } catch (error) {
        // console.error('Update Task Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update task');
    }
});
const updateTaskStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/updateTaskStatus', async ({ taskId, status, delayReason }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/task/update/${taskId}`, {
            status,
            delayReason
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.task) {
            throw new Error('Failed to update task status');
        }
        return response.data.task;
    } catch (error) {
        // console.error('Update Task Status Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to update task status');
    }
});
const deleteTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/deleteTask', async (task_id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/task/delete/${task_id}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !response.data.message.includes('successfully')) {
            throw new Error('Failed to delete task');
        }
        return task_id;
    } catch (error) {
        // console.error('Delete Task Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to delete task');
    }
});
const getAllTaskList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/getAllTaskList', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/task/getall', {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data || !Array.isArray(response.data.tasks)) {
            throw new Error('No task list received from server');
        }
        return response.data.tasks;
    } catch (error) {
        // console.error('Get All Task List Error:', error);
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to retrieve task list');
    }
});
const getAllTaskByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/getAllTaskByEmployeeId', async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/member/${employeeId}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No tasks found for the employee');
        }
        return response.data.data;
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            return rejectWithValue('Request timeout - Server is not responding');
        }
        if (!error.response) {
            return rejectWithValue('Network error - Unable to connect to server');
        }
        return rejectWithValue(error.response?.data?.message || error.message || 'Failed to fetch tasks for employee');
    }
});
const updateTaskReviewStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/updateTaskReviewStatus', async ({ task_id, reviewStatus }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/task/review-status/${task_id}`, {
            reviewStatus
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Update failed');
    }
});
const downloadTasksReport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/downloadTasksReport', async (payload, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/task/export-tasks', payload, {
            responseType: 'blob',
            timeout: 10000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        // If it's NOT an Excel file, treat it as an error and parse JSON
        const contentType = response.headers['content-type'] || '';
        if (!contentType.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
            // Convert blob to text
            const text = await response.data.text();
            try {
                // If backend sent JSON, extract its message
                const parsed = JSON.parse(text);
                return rejectWithValue(parsed.message || text);
            } catch  {
                // If backend sent plain text, just use that
                return rejectWithValue(text);
            }
        }
        // ✅ Excel file case → download
        let fileName = `tasks_report_${payload.projectId}_${new Date().toISOString().split('T')[0]}.xlsx`;
        const contentDisposition = response.headers['content-disposition'];
        if (contentDisposition) {
            const match = contentDisposition.match(/filename="(.+)"/);
            if (match?.[1]) fileName = match[1];
        }
        const blob = new Blob([
            response.data
        ], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        return true;
    } catch (error) {
        return rejectWithValue(error.message || 'Error from server');
    }
});
const fetchEmployeeProjectTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('task/fetchEmployeeProjectTasks', async ({ projectId, employeeId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/task/getalltaskbyprojectid/${employeeId}/${projectId}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No tasks found');
        }
        return response.data; // ✅ Return the data as-is without wrapping
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message || 'Fetch failed');
    }
});
const initialState = {
    tasks: [],
    currentTask: null,
    projectTasks: {},
    status: 'idle',
    error: null,
    allTaskList: [],
    employeeTasks: [],
    isLoading: false,
    employeeProjectTasks: {},
    loading: false,
    error: null,
    successMessage: null
};
const taskSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'task',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
            state.status = 'idle';
        },
        clearTaskMessages: (state)=>{
            state.error = null;
            state.successMessage = null;
        },
        resetCurrentTask: (state)=>{
            state.currentTask = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create Task
        .addCase(createTask.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(createTask.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.tasks.push(action.payload);
            if (action.payload.projectId) {
                state.projectTasks[action.payload.projectId] = [
                    ...state.projectTasks[action.payload.projectId] || [],
                    action.payload
                ];
            }
        }).addCase(createTask.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Fetch All Tasks
        .addCase(fetchTasks.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTasks.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.tasks = action.payload;
            state.projectTasks = action.payload.reduce((acc, task)=>{
                if (task.projectId) {
                    acc[task.projectId] = [
                        ...acc[task.projectId] || [],
                        task
                    ];
                }
                return acc;
            }, {});
        }).addCase(fetchTasks.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Fetch Task By ID
        .addCase(fetchTaskById.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTaskById.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.currentTask = action.payload;
        }).addCase(fetchTaskById.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
            state.currentTask = null;
        })// Fetch Tasks By Project ID
        .addCase(fetchTasksByProjectId.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchTasksByProjectId.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.projectTasks[action.payload.projectId] = action.payload.tasks;
        }).addCase(fetchTasksByProjectId.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Update Task
        .addCase(updateTask.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(updateTask.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const index = state.tasks.findIndex((task)=>task.task_id === action.payload.task_id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
            state.currentTask = action.payload;
            if (action.payload.projectId) {
                const projectTasks = state.projectTasks[action.payload.projectId] || [];
                const taskIndex = projectTasks.findIndex((task)=>task.task_id === action.payload.task_id);
                if (taskIndex !== -1) {
                    state.projectTasks[action.payload.projectId][taskIndex] = action.payload;
                } else {
                    state.projectTasks[action.payload.projectId] = [
                        ...projectTasks,
                        action.payload
                    ];
                }
            }
        }).addCase(updateTask.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Update Task Status
        .addCase(updateTaskStatus.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(updateTaskStatus.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const index = state.tasks.findIndex((task)=>task.task_id === action.payload.task_id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
            if (state.currentTask && state.currentTask.task_id === action.payload.task_id) {
                state.currentTask = action.payload;
            }
            if (action.payload.projectId) {
                const projectTasks = state.projectTasks[action.payload.projectId] || [];
                const taskIndex = projectTasks.findIndex((task)=>task.task_id === action.payload.task_id);
                if (taskIndex !== -1) {
                    state.projectTasks[action.payload.projectId][taskIndex] = action.payload;
                } else {
                    state.projectTasks[action.payload.projectId] = [
                        ...projectTasks,
                        action.payload
                    ];
                }
            }
        }).addCase(updateTaskStatus.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Delete Task
        .addCase(deleteTask.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(deleteTask.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.tasks = state.tasks.filter((task)=>task.task_id !== action.payload);
            state.currentTask = null;
            Object.keys(state.projectTasks).forEach((projectId)=>{
                state.projectTasks[projectId] = state.projectTasks[projectId].filter((task)=>task.task_id !== action.payload);
                if (state.projectTasks[projectId].length === 0) {
                    delete state.projectTasks[projectId];
                }
            });
        }).addCase(deleteTask.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All Task List
        .addCase(getAllTaskList.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllTaskList.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.allTaskList = action.payload;
        }).addCase(getAllTaskList.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All Task By Employee ID
        .addCase(getAllTaskByEmployeeId.pending, (state)=>{
            state.isLoading = true;
            state.error = null;
        }).addCase(getAllTaskByEmployeeId.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.employeeTasks = action.payload;
        }).addCase(getAllTaskByEmployeeId.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(updateTaskReviewStatus.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(updateTaskReviewStatus.fulfilled, (state, action)=>{
            state.loading = false;
            state.successMessage = action.payload.message;
        // No local task update — payload can be shown via toast or component
        }).addCase(updateTaskReviewStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(downloadTasksReport.pending, (state)=>{
            state.status = "loading";
            state.error = null;
        }).addCase(downloadTasksReport.fulfilled, (state)=>{
            state.status = "succeeded";
        }).addCase(downloadTasksReport.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.payload || "Failed to download report";
        }).addCase(fetchEmployeeProjectTasks.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchEmployeeProjectTasks.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const { projectId, employeeId } = action.meta.arg; // ✅ Get projectId and employeeId from arguments
            const tasks = action.payload.data; // ✅ Use the response data as-is
            if (!state.employeeProjectTasks[projectId]) {
                state.employeeProjectTasks[projectId] = {};
            }
            state.employeeProjectTasks[projectId][employeeId] = tasks; // ✅ Store it exactly as received
        }).addCase(fetchEmployeeProjectTasks.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
    }
});
const { clearError, resetCurrentTask } = taskSlice.actions;
const selectTaskStatus = (state)=>state.task.status;
const selectTaskError = (state)=>state.task.error;
const selectTasksByProjectId = (state, projectId)=>state.task.projectTasks[projectId] || [];
const selectAllTasks = (state)=>state.task.tasks;
const selectCurrentTask = (state)=>state.task.currentTask;
const selectAllTaskList = (state)=>state.task.allTaskList;
const selectAllTaskListByEmployeeId = (state)=>state.task.employeeTasks;
const selectEmployeeProjectTasks = (state, projectId, employeeId)=>{
    return state.task.employeeProjectTasks[projectId]?.[employeeId] || [];
};
const __TURBOPACK__default__export__ = taskSlice.reducer;
}}),
"[project]/src/features/subTaskSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/redux/slices/subTaskSlice.js
__turbopack_context__.s({
    "clearAllSubTasks": (()=>clearAllSubTasks),
    "clearCurrentSubTask": (()=>clearCurrentSubTask),
    "createSubTask": (()=>createSubTask),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteSubTask": (()=>deleteSubTask),
    "fetchSubTasksByTaskId": (()=>fetchSubTasksByTaskId),
    "getSubTaskById": (()=>getSubTaskById),
    "updateSubTask": (()=>updateSubTask),
    "updateSubTaskStatus": (()=>updateSubTaskStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchSubTasksByTaskId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/fetchByTaskId", async (taskId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/subtask/getallsubtasks/${taskId}`);
        return {
            taskId,
            subtasks: res.data.subtasks
        };
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const createSubTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/create", async ({ taskId, subTaskData }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/subtask/createsubtask/${taskId}`, subTaskData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getSubTaskById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/getById", async (subTaskId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/subtask/getsubtask/${subTaskId}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateSubTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/update", async ({ subTaskId, updates }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/subtask/updatesubtask/${subTaskId}`, updates);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const deleteSubTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/delete", async ({ taskId, subtaskId }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/subtask/softdeletesubtask/${taskId}/${subtaskId}`);
        return subtaskId;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateSubTaskStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("subTask/updateStatus", async ({ taskId, subtaskId, status }, { rejectWithValue })=>{
    console.log("Updating subtask status:", {
        taskId,
        subtaskId,
        status
    });
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/subtask/updatesubtaskstatus/${taskId}/${subtaskId}`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
// ====================== Slice ======================
const subTaskSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "subTask",
    initialState: {
        subtasks: [],
        currentSubTask: null,
        loading: false,
        error: null
    },
    reducers: {
        clearCurrentSubTask: (state)=>{
            state.currentSubTask = null;
        },
        clearAllSubTasks: (state)=>{
            state.subtasks = [];
        }
    },
    extraReducers: (builder)=>{
        // ========== Fetch Subtasks ==========
        builder.addCase(fetchSubTasksByTaskId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchSubTasksByTaskId.fulfilled, (state, action)=>{
            state.loading = false;
            const { taskId, subtasks } = action.payload;
            state.subtasks = [
                ...state.subtasks.filter((s)=>s.taskId !== taskId),
                ...subtasks
            ];
        }).addCase(fetchSubTasksByTaskId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Create Subtask ==========
        builder.addCase(createSubTask.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createSubTask.fulfilled, (state, action)=>{
            state.loading = false;
            state.subtasks.push(action.payload);
        }).addCase(createSubTask.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Get Subtask By Id ==========
        builder.addCase(getSubTaskById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getSubTaskById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentSubTask = action.payload;
        }).addCase(getSubTaskById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Update Subtask ==========
        builder.addCase(updateSubTask.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(updateSubTask.fulfilled, (state, action)=>{
            state.loading = false;
            const idx = state.subtasks.findIndex((s)=>s._id === action.payload._id);
            if (idx !== -1) state.subtasks[idx] = action.payload;
            if (state.currentSubTask?._id === action.payload._id) {
                state.currentSubTask = action.payload;
            }
        }).addCase(updateSubTask.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Delete Subtask ==========
        builder.addCase(deleteSubTask.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteSubTask.fulfilled, (state, action)=>{
            state.loading = false;
            state.subtasks = state.subtasks.filter((s)=>s._id !== action.payload);
        }).addCase(deleteSubTask.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // ========== Update Subtask Status ==========
        builder.addCase(updateSubTaskStatus.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(updateSubTaskStatus.fulfilled, (state, action)=>{
            state.loading = false;
            const updatedSubtask = action.payload;
            const idx = state.subtasks.findIndex((s)=>s._id === updatedSubtask._id);
            if (idx !== -1) state.subtasks[idx] = updatedSubtask;
            if (state.currentSubTask?._id === updatedSubtask._id) {
                state.currentSubTask = updatedSubtask;
            }
        }).addCase(updateSubTaskStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearCurrentSubTask, clearAllSubTasks } = subTaskSlice.actions;
const __TURBOPACK__default__export__ = subTaskSlice.reducer;
}}),
"[project]/src/features/bugSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearErrors": (()=>clearErrors),
    "clearProjectBugs": (()=>clearProjectBugs),
    "createBug": (()=>createBug),
    "default": (()=>__TURBOPACK__default__export__),
    "downloadBugsByMemberId": (()=>downloadBugsByMemberId),
    "downloadBugsByProjectId": (()=>downloadBugsByProjectId),
    "fetchAllBugsByProjectId": (()=>fetchAllBugsByProjectId),
    "fetchBugByEmployeeId": (()=>fetchBugByEmployeeId),
    "fetchBugByProjectId": (()=>fetchBugByProjectId),
    "fetchEmployeeProjectBugs": (()=>fetchEmployeeProjectBugs),
    "resetBugCreation": (()=>resetBugCreation),
    "resolveBug": (()=>resolveBug),
    "selectEmployeeProjectBugs": (()=>selectEmployeeProjectBugs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const createBug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/createBug", async (bugData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post("/bugs/create", bugData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating bug:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to create bug");
    }
});
const fetchAllBugsByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchAllBugsByProjectId", async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getallbugByProjectId/${projectId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch bugs");
    }
});
const fetchBugByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchBugByProjectId", async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getallbugByProjectId/${projectId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching bugs for project:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch bugs by project");
    }
});
const resolveBug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/resolveBug", async ({ bugId, delayReason, resolutionNote }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/bugs/resolve/${bugId}`, {
            delayReason,
            resolutionNote
        });
        return response.data;
    } catch (error) {
        console.error("Error resolving bug:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to resolve bug");
    }
});
const fetchBugByEmployeeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/fetchBugByEmployeeId", async (employeeId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/assigned/${employeeId}`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching bugs for employee:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to fetch employee bugs");
    }
});
const downloadBugsByProjectId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/downloadBugsByProjectId", async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/download/${projectId}`, {
            responseType: "blob"
        });
        // Create Blob and trigger download
        const blob = new Blob([
            response.data
        ], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bugs_${projectId}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        return "Download successful";
    } catch (error) {
        console.error("Error downloading bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to download bugs");
    }
});
const downloadBugsByMemberId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("bugs/downloadBugsByMemberId", async ({ projectId, memberId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/download-by-assignee/${projectId}/${memberId}`, {
            responseType: "blob"
        });
        const blob = new Blob([
            response.data
        ], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bugs_member_${memberId}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        return "Member bug report downloaded successfully";
    } catch (error) {
        console.error("Error downloading member bugs:", error);
        return rejectWithValue(error.response?.data?.message || "Failed to download member bug report");
    }
});
const fetchEmployeeProjectBugs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('bugs/fetchEmployeeProjectBugs', async ({ projectId, employeeId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/bugs/getbugbyprojectandbmemberid/${projectId}/${employeeId}`, {
            timeout: 5000,
            validateStatus: (status)=>status >= 200 && status < 500
        });
        if (!response.data) {
            throw new Error('No Bugs found');
        }
        return response.data; // ✅ Return the data as-is without wrapping
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message || 'Fetch failed');
    }
});
//
// ✅ Initial State
//
const initialState = {
    bug: null,
    bugs: [],
    bugsByProjectId: [],
    bugsByEmployeeId: [],
    employeeProjectBugs: {},
    loading: {
        bugCreation: false,
        bugsFetch: false,
        bugsByProjectId: false,
        bugResolve: false,
        bugsByEmployeeId: false,
        bugDownload: false,
        memberBugDownload: false
    },
    error: {
        bugCreation: null,
        bugsFetch: null,
        bugsByProjectId: null,
        bugResolve: null,
        bugsByEmployeeId: null,
        bugDownload: null,
        memberBugDownload: null
    },
    successMessage: null
};
//
// ✅ Slice
//
const bugSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "bugs",
    initialState,
    reducers: {
        resetBugCreation: (state)=>{
            state.loading.bugCreation = false;
            state.error.bugCreation = null;
            state.successMessage = null;
            state.bug = null;
        },
        clearErrors: (state)=>{
            state.error.bugCreation = null;
            state.error.bugsFetch = null;
            state.error.bugResolve = null;
            state.error.bugsByProjectId = null;
        },
        clearProjectBugs: (state)=>{
            state.bugsByProjectId = [];
        }
    },
    extraReducers: (builder)=>{
        //
        // ➕ Create Bug
        //
        builder.addCase(createBug.pending, (state)=>{
            state.loading.bugCreation = true;
            state.error.bugCreation = null;
            state.successMessage = null;
        }).addCase(createBug.fulfilled, (state, action)=>{
            state.loading.bugCreation = false;
            state.bug = action.payload;
            state.bugs.push(action.payload);
            state.successMessage = "Bug created successfully";
        }).addCase(createBug.rejected, (state, action)=>{
            state.loading.bugCreation = false;
            state.error.bugCreation = action.payload;
        });
        //
        // 📥 Fetch All Bugs (global/project dashboard)
        //
        builder.addCase(fetchAllBugsByProjectId.pending, (state)=>{
            state.loading.bugsFetch = true;
            state.error.bugsFetch = null;
        }).addCase(fetchAllBugsByProjectId.fulfilled, (state, action)=>{
            state.loading.bugsFetch = false;
            state.bugs = action.payload;
        }).addCase(fetchAllBugsByProjectId.rejected, (state, action)=>{
            state.loading.bugsFetch = false;
            state.error.bugsFetch = action.payload;
        });
        //
        // 📥 Fetch Bugs for One Project (in its own array)
        //
        builder.addCase(fetchBugByProjectId.pending, (state)=>{
            state.loading.bugsByProjectId = true;
            state.error.bugsByProjectId = null;
        }).addCase(fetchBugByProjectId.fulfilled, (state, action)=>{
            state.loading.bugsByProjectId = false;
            state.bugsByProjectId = action.payload;
        }).addCase(fetchBugByProjectId.rejected, (state, action)=>{
            state.loading.bugsByProjectId = false;
            state.error.bugsByProjectId = action.payload;
        });
        //
        // ✅ Resolve Bug
        //
        builder.addCase(resolveBug.pending, (state)=>{
            state.loading.bugResolve = true;
            state.error.bugResolve = null;
            state.successMessage = null;
        }).addCase(resolveBug.fulfilled, (state, action)=>{
            state.loading.bugResolve = false;
            state.successMessage = action.payload.message;
            const updatedBug = action.payload.bug;
            // Update in main list
            state.bugs = state.bugs.map((bug)=>bug.bug_id === updatedBug.bug_id ? updatedBug : bug);
            // Update in project-specific list
            state.bugsByProjectId = state.bugsByProjectId.map((bug)=>bug.bug_id === updatedBug.bug_id ? updatedBug : bug);
        }).addCase(resolveBug.rejected, (state, action)=>{
            state.loading.bugResolve = false;
            state.error = action.payload;
        // state.error.bugResolve = action.payload;
        });
        // 📥 Fetch Bugs for Employee
        builder.addCase(fetchBugByEmployeeId.pending, (state)=>{
            state.loading.bugsByEmployeeId = true;
            state.error.bugsByEmployeeId = null;
        }).addCase(fetchBugByEmployeeId.fulfilled, (state, action)=>{
            state.loading.bugsByEmployeeId = false;
            state.bugsByEmployeeId = action.payload;
        }).addCase(fetchBugByEmployeeId.rejected, (state, action)=>{
            state.loading.bugsByEmployeeId = false;
            state.error.bugsByEmployeeId = action.payload;
        });
        //downlad pdf bug report
        builder.addCase(downloadBugsByProjectId.pending, (state)=>{
            state.loading.bugDownload = true;
            state.error.bugDownload = null;
            state.successMessage = null;
        }).addCase(downloadBugsByProjectId.fulfilled, (state, action)=>{
            state.loading.bugDownload = false;
            state.successMessage = action.payload;
        }).addCase(downloadBugsByProjectId.rejected, (state, action)=>{
            state.loading.bugDownload = false;
            state.error.bugDownload = action.payload;
        });
        //member bug downlaod 
        builder.addCase(downloadBugsByMemberId.pending, (state)=>{
            state.loading.memberBugDownload = true;
            state.error.memberBugDownload = null;
            state.successMessage = null;
        }).addCase(downloadBugsByMemberId.fulfilled, (state, action)=>{
            state.loading.memberBugDownload = false;
            state.successMessage = action.payload;
        }).addCase(downloadBugsByMemberId.rejected, (state, action)=>{
            state.loading.memberBugDownload = false;
            state.error.memberBugDownload = action.payload;
        })// Fetch Bugs by project ID and employee ID
        .addCase(fetchEmployeeProjectBugs.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(fetchEmployeeProjectBugs.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const { projectId, employeeId } = action.meta.arg; // ✅ Get projectId and employeeId from arguments
            const bugs = action.payload.data; // ✅ Use the response data as-is
            if (!state.employeeProjectBugs[projectId]) {
                state.employeeProjectBugs[projectId] = {};
            }
            state.employeeProjectBugs[projectId][employeeId] = bugs; // ✅ Store it exactly as received
        }).addCase(fetchEmployeeProjectBugs.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
        ;
        ;
    }
});
const { resetBugCreation, clearErrors, clearProjectBugs } = bugSlice.actions;
const selectEmployeeProjectBugs = (state, projectId, employeeId)=>{
    return state.bugs.employeeProjectBugs[projectId]?.[employeeId] || []; // Changed 'task' to 'bugs'
};
const __TURBOPACK__default__export__ = bugSlice.reducer;
}}),
"[project]/src/features/contactSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/store/features/contactSlice.js
__turbopack_context__.s({
    "clearSelectedContact": (()=>clearSelectedContact),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteContact": (()=>deleteContact),
    "getAllApprovedContacts": (()=>getAllApprovedContacts),
    "getAllContacts": (()=>getAllContacts),
    "getContactById": (()=>getContactById),
    "updateContactStatus": (()=>updateContactStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const getAllContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/getAllContacts', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/contact/getallcontact');
        return response.data.contacts;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
});
const getAllApprovedContacts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/geApprovedContacts', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/contact/approved');
        return response.data.contacts;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch contacts');
    }
});
const getContactById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/getContactById', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/contact/getcontactby/${contactId}`);
        return response.data.contact;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch contact');
    }
});
const deleteContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/deleteContact', async (contactId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/contact/deletecontact/${contactId}`);
        return contactId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete contact');
    }
});
const updateContactStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('contact/updateContactStatus', async ({ contactId, status, feedback }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/contact/updatecontact/${contactId}`, {
            status,
            feedback
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update contact status');
    }
});
// Initial State
const initialState = {
    contacts: [],
    Approvedcontacts: [],
    selectedContact: null,
    status: 'idle',
    error: null
};
// Slice
const contactSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'contact',
    initialState,
    reducers: {
        clearSelectedContact: (state)=>{
            state.selectedContact = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Get All Contacts
        .addCase(getAllContacts.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllContacts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.contacts = action.payload;
        }).addCase(getAllContacts.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get All approvedContacts
        .addCase(getAllApprovedContacts.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getAllApprovedContacts.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.Approvedcontacts = action.payload;
        }).addCase(getAllApprovedContacts.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Get Contact by ID
        .addCase(getContactById.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(getContactById.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.selectedContact = action.payload;
        }).addCase(getContactById.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Delete Contact
        .addCase(deleteContact.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(deleteContact.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.contacts = state.contacts.filter((c)=>c._id !== action.payload);
        }).addCase(deleteContact.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        })// Update Contact Status
        .addCase(updateContactStatus.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        }).addCase(updateContactStatus.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            const index = state.contacts.findIndex((c)=>c._id === action.payload._id);
            if (index !== -1) {
                state.contacts[index] = action.payload;
            }
            if (state.selectedContact && state.selectedContact._id === action.payload._id) {
                state.selectedContact = action.payload;
            }
        }).addCase(updateContactStatus.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.payload;
        });
    }
});
const { clearSelectedContact } = contactSlice.actions;
const __TURBOPACK__default__export__ = contactSlice.reducer;
}}),
"[project]/src/features/meetingSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearError": (()=>clearError),
    "clearSelectedMeeting": (()=>clearSelectedMeeting),
    "closeAllModals": (()=>closeAllModals),
    "createMeeting": (()=>createMeeting),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteMeeting": (()=>deleteMeeting),
    "fetchMeetings": (()=>fetchMeetings),
    "fetchMeetingsByContactId": (()=>fetchMeetingsByContactId),
    "getMeetingById": (()=>getMeetingById),
    "setCreateModalOpen": (()=>setCreateModalOpen),
    "setEditModalOpen": (()=>setEditModalOpen),
    "setSelectedMeeting": (()=>setSelectedMeeting),
    "setViewModalOpen": (()=>setViewModalOpen),
    "updateMeeting": (()=>updateMeeting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/fetchMeetings', async (email, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/upcoming/${email}`);
        console.log('Fetched meetings:', response.data);
        return response.data.events;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meetings');
    }
});
const createMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/createMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].post('/create-meeting', meetingData);
        // console.log("User not authorized",response.data);
        return response.data;
    } catch (error) {
        //  console.log("Error in createMeeting:", error.response?.url );
        return rejectWithValue(error);
    }
});
const updateMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/updateMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].post(`/meeting/update`, meetingData);
        // console.log(response)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update meeting');
    }
});
const deleteMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/deleteMeeting', async ({ id, email }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].delete(`/meeting/${email}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete meeting');
    }
});
const getMeetingById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/getMeetingById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meeting/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meeting');
    }
});
const fetchMeetingsByContactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetings/fetchMeetingsByContactId', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/contact/${contactId}`);
        // console.log("Fetched contact meetings:", response.data);
        return response.data;
    } catch (error) {
        // console.error("Error in fetchMeetingsByContactId:", error);
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meetings by contactId');
    }
});
const initialState = {
    meetings: [],
    selectedMeeting: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    contactMeetings: [],
    contactMeetingsLoading: false,
    contactMeetingsError: null,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const meetingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'meetings',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        setSelectedMeeting: (state, action)=>{
            state.selectedMeeting = action.payload;
        },
        clearSelectedMeeting: (state)=>{
            state.selectedMeeting = null;
        },
        setCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch meetings
        .addCase(fetchMeetings.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchMeetings.fulfilled, (state, action)=>{
            state.loading = false;
            state.meetings = action.payload;
        }).addCase(fetchMeetings.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Create meeting
        .addCase(createMeeting.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(createMeeting.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.meetings.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(createMeeting.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update meeting
        .addCase(updateMeeting.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateMeeting.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.meetings.findIndex((m)=>m.id === action.payload.id);
            if (index !== -1) {
                state.meetings[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateMeeting.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete meeting
        .addCase(deleteMeeting.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteMeeting.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.meetings = state.meetings.filter((m)=>m.id !== action.payload);
        }).addCase(deleteMeeting.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get meeting by ID
        .addCase(getMeetingById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getMeetingById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedMeeting = action.payload;
        }).addCase(getMeetingById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Fetch meetings by contact ID
        .addCase(fetchMeetingsByContactId.pending, (state)=>{
            state.contactMeetingsLoading = true;
            state.contactMeetingsError = null;
        }).addCase(fetchMeetingsByContactId.fulfilled, (state, action)=>{
            state.contactMeetingsLoading = false;
            state.contactMeetings = action.payload.events;
        }).addCase(fetchMeetingsByContactId.rejected, (state, action)=>{
            state.contactMeetingsLoading = false;
            state.contactMeetingsError = action.payload;
        });
    }
});
const { clearError, setSelectedMeeting, clearSelectedMeeting, setCreateModalOpen, setEditModalOpen, setViewModalOpen, closeAllModals } = meetingSlice.actions;
const __TURBOPACK__default__export__ = meetingSlice.reducer;
}}),
"[project]/src/features/calender/teammeetingMomSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearMomState": (()=>clearMomState),
    "createTeamMeetingMom": (()=>createTeamMeetingMom),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllTeamMeetingMoms": (()=>getAllTeamMeetingMoms),
    "getTeamMeetingMomById": (()=>getTeamMeetingMomById)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const createTeamMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetingMom/create', async (formData, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/mom/createprojectmom', formData);
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to create MOM');
    }
});
const getAllTeamMeetingMoms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetingMom/getAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/meetingmom/getall');
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch MOMs');
    }
});
const getTeamMeetingMomById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetingMom/getById', async (id, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/meetingmom/${id}`);
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || 'Failed to fetch MOM detail');
    }
});
// ------------------------------------------------
// Initial State
// ------------------------------------------------
const initialState = {
    allMoms: [],
    selectedMom: null,
    loading: false,
    error: null,
    success: null
};
// ------------------------------------------------
// Slice
// ------------------------------------------------
const teamMeetingMomSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'teamMeetingMom',
    initialState,
    reducers: {
        clearMomState: (state)=>{
            state.error = null;
            state.success = null;
            state.selectedMom = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create
        .addCase(createTeamMeetingMom.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createTeamMeetingMom.fulfilled, (state, action)=>{
            state.loading = false;
            state.success = 'MOM created successfully';
            state.allMoms.push(action.payload);
        }).addCase(createTeamMeetingMom.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get All
        .addCase(getAllTeamMeetingMoms.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getAllTeamMeetingMoms.fulfilled, (state, action)=>{
            state.loading = false;
            state.allMoms = action.payload;
        }).addCase(getAllTeamMeetingMoms.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get By ID
        .addCase(getTeamMeetingMomById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getTeamMeetingMomById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedMom = action.payload;
        }).addCase(getTeamMeetingMomById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearMomState } = teamMeetingMomSlice.actions;
const __TURBOPACK__default__export__ = teamMeetingMomSlice.reducer;
}}),
"[project]/src/features/calender/meetingCalendarSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "fetchAllMeetings": (()=>fetchAllMeetings)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)"); // Make sure this is correctly configured
;
;
const fetchAllMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('meetingCalendar/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get('/getallmeetings'); // Adjust endpoint as needed
        return response.data.meetings;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch meetings');
    }
});
// Slice
const meetingCalendarSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'meetingCalendar',
    initialState: {
        meetings: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchAllMeetings.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchAllMeetings.fulfilled, (state, action)=>{
            state.loading = false;
            state.meetings = action.payload;
        }).addCase(fetchAllMeetings.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = meetingCalendarSlice.reducer;
}}),
"[project]/src/features/calender/teammeetingCalenderSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearSelectedTeamMeeting": (()=>clearSelectedTeamMeeting),
    "clearTeamMeetingError": (()=>clearTeamMeetingError),
    "closeAllTeamModals": (()=>closeAllTeamModals),
    "createTeamMeeting": (()=>createTeamMeeting),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteTeamMeeting": (()=>deleteTeamMeeting),
    "fetchTeamMeetings": (()=>fetchTeamMeetings),
    "fetchTeamMeetingsByContactId": (()=>fetchTeamMeetingsByContactId),
    "getTeamMeetingById": (()=>getTeamMeetingById),
    "setSelectedTeamMeeting": (()=>setSelectedTeamMeeting),
    "setTeamCreateModalOpen": (()=>setTeamCreateModalOpen),
    "setTeamEditModalOpen": (()=>setTeamEditModalOpen),
    "setTeamViewModalOpen": (()=>setTeamViewModalOpen),
    "updateTeamMeeting": (()=>updateTeamMeeting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchTeamMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetings/fetchTeamMeetings', async (email, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/upcoming/${email}`);
        return response.data.meetings;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team meetings');
    }
});
const createTeamMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetings/createTeamMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].post('/create-meeting', meetingData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
const updateTeamMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetings/updateTeamMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].post(`/meeting/update`, meetingData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update team meeting');
    }
});
const deleteTeamMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetings/deleteTeamMeeting', async ({ id, email }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].delete(`/meeting/${email}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete team meeting');
    }
});
const getTeamMeetingById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetings/getTeamMeetingById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meeting/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team meeting');
    }
});
const fetchTeamMeetingsByContactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('teamMeetings/fetchTeamMeetingsByContactId', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/contact/${contactId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team meetings by contactId');
    }
});
// Initial state
const initialState = {
    teamMeetings: [],
    selectedTeamMeeting: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    contactTeamMeetings: [],
    contactMeetingsLoading: false,
    contactMeetingsError: null,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const teamMeetingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'teamMeetings',
    initialState,
    reducers: {
        clearTeamMeetingError: (state)=>{
            state.error = null;
        },
        setSelectedTeamMeeting: (state, action)=>{
            state.selectedTeamMeeting = action.payload;
        },
        clearSelectedTeamMeeting: (state)=>{
            state.selectedTeamMeeting = null;
        },
        setTeamCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setTeamEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setTeamViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllTeamModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch team meetings
        .addCase(fetchTeamMeetings.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchTeamMeetings.fulfilled, (state, action)=>{
            state.loading = false;
            state.teamMeetings = action.payload;
        }).addCase(fetchTeamMeetings.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Create team meeting
        .addCase(createTeamMeeting.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(createTeamMeeting.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.teamMeetings.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(createTeamMeeting.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update team meeting
        .addCase(updateTeamMeeting.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateTeamMeeting.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.teamMeetings.findIndex((m)=>m.id === action.payload.id);
            if (index !== -1) {
                state.teamMeetings[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateTeamMeeting.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete team meeting
        .addCase(deleteTeamMeeting.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteTeamMeeting.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.teamMeetings = state.teamMeetings.filter((m)=>m.id !== action.payload);
        }).addCase(deleteTeamMeeting.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get team meeting by ID
        .addCase(getTeamMeetingById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getTeamMeetingById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedTeamMeeting = action.payload;
        }).addCase(getTeamMeetingById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Fetch team meetings by contact ID
        .addCase(fetchTeamMeetingsByContactId.pending, (state)=>{
            state.contactMeetingsLoading = true;
            state.contactMeetingsError = null;
        }).addCase(fetchTeamMeetingsByContactId.fulfilled, (state, action)=>{
            state.contactMeetingsLoading = false;
            state.contactTeamMeetings = action.payload.events;
        }).addCase(fetchTeamMeetingsByContactId.rejected, (state, action)=>{
            state.contactMeetingsLoading = false;
            state.contactMeetingsError = action.payload;
        });
    }
});
const { clearTeamMeetingError, setSelectedTeamMeeting, clearSelectedTeamMeeting, setTeamCreateModalOpen, setTeamEditModalOpen, setTeamViewModalOpen, closeAllTeamModals } = teamMeetingSlice.actions;
const __TURBOPACK__default__export__ = teamMeetingSlice.reducer;
}}),
"[project]/src/features/momSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMoM": (()=>createMoM),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchMoMByMeetingId": (()=>fetchMoMByMeetingId),
    "fetchMoMView": (()=>fetchMoMView),
    "fetchMoMs": (()=>fetchMoMs),
    "resetMoMByMeetingId": (()=>resetMoMByMeetingId),
    "updateMoM": (()=>updateMoM)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchMoMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('mom/fetchMoMs', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/mom/getallmoms');
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoMs');
    }
});
const fetchMoMByMeetingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('mom/fetchMoMByMeetingId', async (meetingId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/mom/byMeeting/${meetingId}`);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoM by meeting ID');
    }
});
const fetchMoMView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('mom/fetchMoMView', async (momId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/mom/view/${momId}`, {
            responseType: 'blob'
        });
        // Log response details for debugging
        // console.log('fetchMoMView response:', {
        //   status: response.status,
        //   headers: response.headers,
        //   contentType: response.headers['content-type'],
        // });
        // Validate response is a PDF
        const contentType = response.headers['content-type'];
        if (!contentType.includes('application/pdf')) {
            throw new Error('Response is not a valid PDF');
        }
        const pdfUrl = URL.createObjectURL(response.data); // Use response.data directly
        return {
            pdfUrl,
            momId
        };
    } catch (error) {
        // console.error('fetchMoMView error:', {
        //   message: error.message,
        //   response: error.response,
        //   status: error.response?.status,
        //   data: error.response?.data,
        // });
        return rejectWithValue(error.message || 'Failed to fetch MoM PDF');
    }
});
const createMoM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("mom/createMoM", async (momData, { rejectWithValue })=>{
    try {
        console.log("Payload being sent:", momData); // Debug: Log the FormData
        for (let [key, value] of momData.entries()){
        // console.log(`${key}:`, value); // Debug: Log FormData entries
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post("/mom/createmom", momData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        // console.error("Error in createMoM:", error); // Debug: Log errors
        return rejectWithValue(error.response?.data?.message || "Failed to create MoM");
    }
});
const updateMoM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("mom/updateMoM", async (momData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post("/mom/createmom", momData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || "Failed to update MoM");
    }
});
const momSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'mom',
    initialState: {
        // All MoMs
        mom: [],
        momLoading: false,
        momError: null,
        // MoM by Meeting ID
        momByMeetingId: null,
        momByMeetingIdLoading: false,
        momByMeetingIdError: null,
        // MoM View (PDF)
        momView: null,
        momViewLoading: false,
        momViewError: null
    },
    reducers: {
        resetMoMByMeetingId: (state)=>{
            if (state.momView?.pdfUrl) {
                URL.revokeObjectURL(state.momView.pdfUrl); // Clean up blob URL
            }
            state.momByMeetingId = null;
            state.momByMeetingIdLoading = false;
            state.momByMeetingIdError = null;
            state.momView = null;
            state.momViewLoading = false;
            state.momViewError = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch all MoMs
        .addCase(fetchMoMs.pending, (state)=>{
            state.momLoading = true;
            state.momError = null;
        }).addCase(fetchMoMs.fulfilled, (state, action)=>{
            state.momLoading = false;
            state.mom = action.payload;
        }).addCase(fetchMoMs.rejected, (state, action)=>{
            state.momLoading = false;
            state.momError = action.payload;
        })// Fetch MoM by Meeting ID
        .addCase(fetchMoMByMeetingId.pending, (state)=>{
            state.momByMeetingIdLoading = true;
            state.momByMeetingIdError = null;
        }).addCase(fetchMoMByMeetingId.fulfilled, (state, action)=>{
            state.momByMeetingIdLoading = false;
            state.momByMeetingId = action.payload;
        }).addCase(fetchMoMByMeetingId.rejected, (state, action)=>{
            state.momByMeetingIdLoading = false;
            state.momByMeetingIdError = action.payload;
        })// Fetch MoM View (PDF)
        .addCase(fetchMoMView.pending, (state)=>{
            state.momViewLoading = true;
            state.momViewError = null;
        }).addCase(fetchMoMView.fulfilled, (state, action)=>{
            state.momViewLoading = false;
            state.momView = action.payload;
        }).addCase(fetchMoMView.rejected, (state, action)=>{
            state.momViewLoading = false;
            state.momViewError = action.payload;
        })// Create MoM
        .addCase(createMoM.pending, (state)=>{
            state.momLoading = true;
            state.momError = null;
        }).addCase(createMoM.fulfilled, (state, action)=>{
            state.momLoading = false;
            state.mom.push(action.payload); // Add new MoM to list
            state.momByMeetingId = action.payload; // Update current MoM
        }).addCase(createMoM.rejected, (state, action)=>{
            state.momLoading = false;
            state.momError = action.payload;
        })// Update MoM
        .addCase(updateMoM.pending, (state)=>{
            state.momLoading = true;
            state.momError = null;
        }).addCase(updateMoM.fulfilled, (state, action)=>{
            state.momLoading = false;
            const updated = action.payload;
            state.mom = state.mom.map((m)=>m._id === updated._id ? updated : m);
            if (state.momByMeetingId && state.momByMeetingId._id === updated._id) {
                state.momByMeetingId = updated;
            }
        }).addCase(updateMoM.rejected, (state, action)=>{
            state.momLoading = false;
            state.momError = action.payload;
        });
    }
});
const { resetMoMByMeetingId } = momSlice.actions;
const __TURBOPACK__default__export__ = momSlice.reducer;
}}),
"[project]/src/features/quotationSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearQuotationState": (()=>clearQuotationState),
    "createQuotation": (()=>createQuotation),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteQuotation": (()=>deleteQuotation),
    "getClientStatusByQuotationId": (()=>getClientStatusByQuotationId),
    "getPdfById": (()=>getPdfById),
    "getQuotationById": (()=>getQuotationById),
    "getQuotations": (()=>getQuotations),
    "updateQuotation": (()=>updateQuotation),
    "updateQuotationStatus": (()=>updateQuotationStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
// Initial State
const initialState = {
    quotations: [],
    quotation: null,
    loading: false,
    error: null
};
const createQuotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/createQuotation', async (quotationData, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/quotation/create', quotationData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateQuotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/updateQuotation', async (updatedData, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/quotation/create`, updatedData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getQuotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/getQuotations', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/quotation/getAllquotations');
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getQuotationById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotations/getQuotationById', async (quotationNumber, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/quotation/qoutationbynumber/${quotationNumber}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const updateQuotationStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/updateQuotationStatus', async ({ quotationNumber, statusData }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/quotation/updatequotationstatus/${quotationNumber}/status`, statusData);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const deleteQuotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/deleteQuotation', async (quotationNumber, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/quotation/${quotationNumber}`);
        return quotationNumber;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getPdfById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotations/getPdfById', async (quotationNumber, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/quotation/pdfbyqoutationnumber/${quotationNumber}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
const getClientStatusByQuotationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('quotation/getClientStatusByQuotationId', async (quotationId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/quotation/client-status-by-quotation/${quotationId}`);
        return res.data; // Expected: status, contact info, etc.
    } catch (err) {
        return rejectWithValue(err.response?.data || err.message);
    }
});
// Slice
const quotationSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'quotation',
    initialState: {
        quotations: [],
        quotation: null,
        loading: false,
        error: null
    },
    reducers: {
        clearQuotationState: (state)=>{
            state.quotation = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create
        .addCase(createQuotation.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createQuotation.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotations.unshift(action.payload);
        }).addCase(createQuotation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get All
        .addCase(getQuotations.pending, (state)=>{
            state.loading = true;
        }).addCase(getQuotations.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotations = action.payload;
        }).addCase(getQuotations.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get by ID
        .addCase(getQuotationById.pending, (state)=>{
            state.loading = true;
            state.quotation = null;
        }).addCase(getQuotationById.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotation = action.payload;
        }).addCase(getQuotationById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Update
        .addCase(updateQuotation.pending, (state)=>{
            state.loading = true;
        }).addCase(updateQuotation.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotation = action.payload;
        // state.quotations = state.quotations.map((q) =>
        //   q.quotationNumber === action.payload.quotationNumber ? action.payload : q
        // );
        }).addCase(updateQuotation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Update Status
        .addCase(updateQuotationStatus.pending, (state)=>{
            state.loading = true;
        }).addCase(updateQuotationStatus.fulfilled, (state, action)=>{
            state.loading = false;
            const updated = action.payload.quotation;
            state.quotation = updated;
            state.quotations = state.quotations.map((q)=>q.quotationNumber === updated.quotationNumber ? updated : q);
        }).addCase(updateQuotationStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Delete
        .addCase(deleteQuotation.pending, (state)=>{
            state.loading = true;
        }).addCase(deleteQuotation.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotations = state.quotations.filter((q)=>q.quotationNumber !== action.payload);
        }).addCase(deleteQuotation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get PDF by ID
        .addCase(getPdfById.pending, (state)=>{
            state.loading = true;
            state.quotation = null;
        }).addCase(getPdfById.fulfilled, (state, action)=>{
            state.loading = false;
            state.quotation = action.payload;
        }).addCase(getPdfById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Get Client Status by Quotation ID
        .addCase(getClientStatusByQuotationId.pending, (state)=>{
            state.loading = true;
            state.clientStatus = null;
        }).addCase(getClientStatusByQuotationId.fulfilled, (state, action)=>{
            state.loading = false;
            state.clientStatus = action.payload;
        }).addCase(getClientStatusByQuotationId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearQuotationState } = quotationSlice.actions;
const __TURBOPACK__default__export__ = quotationSlice.reducer;
}}),
"[project]/src/features/clientSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addClient": (()=>addClient),
    "addFile": (()=>addFile),
    "default": (()=>__TURBOPACK__default__export__),
    "fetchClientById": (()=>fetchClientById),
    "fetchClients": (()=>fetchClients),
    "fetchProjectsByClientId": (()=>fetchProjectsByClientId),
    "removeFile": (()=>removeFile),
    "resetForm": (()=>resetForm),
    "updateClient": (()=>updateClient),
    "updateFormData": (()=>updateFormData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
// Format file data from response or input
const formatFileData = (files, isFromServer = false)=>{
    if (!files) return [];
    return files.map((file, index)=>({
            name: file.name,
            downloadLink: isFromServer ? file.url : null,
            index,
            type: file.type || (file.name.toLowerCase().endsWith('.pdf') ? 'application/pdf' : file.name.toLowerCase().endsWith('.jpeg') || file.name.toLowerCase().endsWith('.jpg') ? 'image/jpeg' : file.name.toLowerCase().endsWith('.png') ? 'image/png' : 'application/octet-stream'),
            size: file.size || null
        }));
};
const addClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/addClient', async (formData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/client/clientOnboard', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || {
            message: 'Network error occurred'
        });
    }
});
const fetchClients = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/fetchClients', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/client/getAllClients');
        return response.data.clients;
    } catch (error) {
        console.error('Error fetching clients:', {
            error: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch clients');
    }
});
const fetchClientById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/fetchClientById', async (clientId, { rejectWithValue })=>{
    try {
        if (!clientId) throw new Error('No client ID provided');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/client/getClientById/${clientId}`);
        if (!response.data?.success || !response.data?.client) {
            throw new Error('Invalid response format from server');
        }
        const client = response.data.client;
        if (client.onboardingDate) {
            const date = new Date(client.onboardingDate);
            if (!isNaN(date.getTime())) {
                client.onboardingDate = date.toISOString().split('T')[0];
            }
        }
        return {
            success: response.data.success,
            message: response.data.message,
            client: {
                ...client,
                fileData: formatFileData(client.fileDownloadLinks || [], true)
            }
        };
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch client data');
    }
});
const fetchProjectsByClientId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/fetchProjectsByClientId', async (clientId, { rejectWithValue })=>{
    try {
        if (!clientId) throw new Error('No client ID provided');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projects/getallprojectsbyclientid/${clientId}`);
        if (!response.data || !Array.isArray(response.data)) {
            throw new Error('Invalid response format from server');
        }
        const formattedProjects = response.data.map((project)=>({
                projectId: project.projectId || '',
                projectName: project.projectName || '',
                startDate: project.startDate || '',
                endDate: project.endDate || '',
                teamLeadName: project.teamLeadName || '',
                status: project.status || 'Planned'
            }));
        return formattedProjects;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch project data');
    }
});
const updateClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('client/updateClient', async (formData, { rejectWithValue })=>{
    try {
        const clientId = formData.get('clientId');
        if (!clientId) throw new Error('No client ID provided');
        formData.append('preserveFiles', 'true');
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/client/updateClient/${clientId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        let data = response.data;
        if (data?.client) {
            data.client.fileData = formatFileData(data.client.fileDownloadLinks || [], true);
        }
        return data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
    }
});
// Initial State
const initialState = {
    formData: {
        clientName: '',
        industryType: '',
        contactEmail: '',
        contactNo: '',
        contactPersonName: '',
        address: '',
        onboardingDate: '',
        website: '',
        fileData: []
    },
    clients: [],
    projects: [],
    addLoading: false,
    addError: null,
    addSuccess: false,
    fetchClientsLoading: false,
    fetchClientsError: null,
    fetchClientLoading: false,
    fetchClientError: null,
    fetchProjectsLoading: false,
    fetchProjectsError: null,
    updateLoading: false,
    updateError: null,
    updateSuccess: false
};
// Slice
const clientSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'client',
    initialState,
    reducers: {
        updateFormData: (state, action)=>{
            state.formData = {
                ...state.formData,
                ...action.payload
            };
        },
        addFile: (state, action)=>{
            if (!state.formData.fileData) state.formData.fileData = [];
            state.formData.fileData.push({
                ...action.payload,
                index: state.formData.fileData.length,
                downloadLink: null
            });
        },
        removeFile: (state, action)=>{
            if (state.formData.fileData) {
                state.formData.fileData = state.formData.fileData.filter((_, index)=>index !== action.payload);
            }
        },
        resetForm: (state)=>{
            state.formData = {
                clientName: '',
                industryType: '',
                contactEmail: '',
                contactNo: '',
                contactPersonName: '',
                address: '',
                onboardingDate: '',
                website: '',
                fileData: []
            };
            state.addLoading = false;
            state.addError = null;
            state.addSuccess = false;
        }
    },
    extraReducers: (builder)=>{
        builder// addClient
        .addCase(addClient.pending, (state)=>{
            state.addLoading = true;
            state.addError = null;
            state.addSuccess = false;
        }).addCase(addClient.fulfilled, (state)=>{
            state.addLoading = false;
            state.addSuccess = true;
        }).addCase(addClient.rejected, (state, action)=>{
            state.addLoading = false;
            state.addError = action.payload?.message || 'Failed to add client';
        })// fetchClients
        .addCase(fetchClients.pending, (state)=>{
            state.fetchClientsLoading = true;
            state.fetchClientsError = null;
        }).addCase(fetchClients.fulfilled, (state, action)=>{
            state.fetchClientsLoading = false;
            state.clients = action.payload || [];
        }).addCase(fetchClients.rejected, (state, action)=>{
            console.error('API call failed', action.payload);
            state.fetchClientsLoading = false;
            state.fetchClientsError = action.payload || 'Something went wrong';
        })// fetchClientById
        .addCase(fetchClientById.pending, (state)=>{
            state.fetchClientLoading = true;
            state.fetchClientError = null;
        }).addCase(fetchClientById.fulfilled, (state, action)=>{
            state.fetchClientLoading = false;
            if (action.payload?.client) {
                state.formData = action.payload.client;
            }
        }).addCase(fetchClientById.rejected, (state, action)=>{
            state.fetchClientLoading = false;
            state.fetchClientError = action.payload || 'Failed to fetch client data';
        })// fetchProjectsByClientId
        .addCase(fetchProjectsByClientId.pending, (state)=>{
            state.fetchProjectsLoading = true;
            state.fetchProjectsError = null;
        }).addCase(fetchProjectsByClientId.fulfilled, (state, action)=>{
            state.fetchProjectsLoading = false;
            state.projects = action.payload;
        }).addCase(fetchProjectsByClientId.rejected, (state, action)=>{
            state.fetchProjectsLoading = false;
            state.fetchProjectsError = action.payload || 'Failed to fetch project data';
        })// updateClient
        .addCase(updateClient.pending, (state)=>{
            state.updateLoading = true;
            state.updateError = null;
            state.updateSuccess = false;
        }).addCase(updateClient.fulfilled, (state, action)=>{
            state.updateLoading = false;
            state.updateSuccess = true;
            if (action.payload?.client) {
                state.formData = {
                    ...action.payload.client,
                    fileData: action.payload.client.fileData || []
                };
            }
        }).addCase(updateClient.rejected, (state, action)=>{
            state.updateLoading = false;
            state.updateError = action.payload || 'Failed to update client';
        });
    }
});
const { updateFormData, addFile, removeFile, resetForm } = clientSlice.actions;
const __TURBOPACK__default__export__ = clientSlice.reducer;
}}),
"[project]/src/features/meeting/paymentSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // src/store/slices/paymentSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import {axiosInstancePublic} from '@/lib/axios'
// // ✅ Thunk: Send payment link
// export const sendPaymentlink = createAsyncThunk(
//   'payment/sendPaymentlink',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstancePublic.post('/payment/create-payment-link', payload)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Payment submission failed')
//     }
//   }
// )
// // ✅ Thunk: Send status code
// export const sendStatusCode = createAsyncThunk(
//   'payment/sendStatusCode',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstancePublic.post('/payment/send-statuscode', payload)
//       return response.data
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Sending status code failed')
//     }
//   }
// )
// // ✅ Thunk: Verify status code
// export const verifyStatusCode = createAsyncThunk(
//   'payment/verifyStatusCode',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstancePublic.get(`/payment/statuscheck/${contactId}`)
//       const paymentDataArray = response.data.data
//       if (!paymentDataArray || paymentDataArray.length === 0) {
//         return { status: 'unpaid' }
//       }
//       return paymentDataArray[0]
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Verification failed')
//     }
//   }
// )
// // ✅ NEW THUNK: Get full payment link details by contactId
// export const getPaymentLinkDetailsByContactId = createAsyncThunk(
//   'payment/getPaymentLinkDetailsByContactId',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstancePublic.get(`/payment/paymentdetails/${contactId}`)
//       return response.data.data // assuming { data: { contactId, email, ... } }
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to fetch payment link details')
//     }
//   }
// )
// // New Thunk: Delete payment link by contactId
// export const deletePaymentLink = createAsyncThunk(
//   'payment/deletePaymentLink',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const response = await axiosInstancePublic.delete(`/payment/delete-link/${contactId}`);
//       return response.data; // Assuming response.data contains success message or deleted record details
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Failed to delete payment link');
//     }
//   }
// );
// // ✅ Initial state
// const initialState = {
//   status: 'idle',
//   error: null,
//   statusCode: '',
//   countdown: 5,
//   paymentDetails: {
//     contactId: '',
//     email: '',
//     statusCode: '',
//     status: ''
//   },
//   sendStatus: 'idle',
//   verifyStatus: 'idle',
//   verificationResult: null,
//   getPaymentLinkStatus: 'idle',      // ✅ for getPaymentLinkDetailsByContactId
//   paymentLinkRecord: null            // ✅ stores full payment link object
//   ,deletePaymentLinkStatus: 'idle', // New state for deletePaymentLink
// }
// // ✅ Slice
// const paymentSlice = createSlice({
//   name: 'payment',
//   initialState,
//   reducers: {
//     setContactId: (state, action) => {
//       state.paymentDetails.contactId = action.payload
//     },
//     resetPayment: () => initialState,
//     setStatusCode: (state, action) => {
//       state.statusCode = action.payload
//       state.paymentDetails.statusCode = action.payload
//     },
//     decrementCountdown: (state) => {
//       if (state.countdown > 0) state.countdown -= 1
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // ✅ Handle payment link sending
//       .addCase(sendPaymentlink.pending, (state) => {
//         state.status = 'processing'
//         state.error = null
//       })
//       .addCase(sendPaymentlink.fulfilled, (state) => {
//         state.status = 'success'
//         state.paymentDetails.status = 'completed'
//       })
//       .addCase(sendPaymentlink.rejected, (state, action) => {
//         state.status = 'error'
//         state.error = action.payload
//       })
//       // ✅ Handle status code sending
//       .addCase(sendStatusCode.pending, (state) => {
//         state.sendStatus = 'processing'
//       })
//       .addCase(sendStatusCode.fulfilled, (state) => {
//         state.sendStatus = 'success'
//       })
//       .addCase(sendStatusCode.rejected, (state, action) => {
//         state.sendStatus = 'error'
//         state.error = action.payload
//       })
//       // ✅ Handle status code verification
//       .addCase(verifyStatusCode.pending, (state) => {
//         state.verifyStatus = 'processing'
//       })
//       .addCase(verifyStatusCode.fulfilled, (state, action) => {
//         state.verifyStatus = 'success'
//         state.verificationResult = action.payload
//         state.paymentDetails.status = action.payload?.status || 'unknown'
//         state.paymentDetails.contactId = action.payload?.contactId || ''
//         state.paymentDetails.email = action.payload?.contactEmail || ''
//         state.paymentDetails.statusCode = action.payload?.statusCode || ''
//       })
//       .addCase(verifyStatusCode.rejected, (state, action) => {
//         state.verifyStatus = 'error'
//         state.error = action.payload
//       })
//       // ✅ Handle getPaymentLinkDetailsByContactId
//       .addCase(getPaymentLinkDetailsByContactId.pending, (state) => {
//         state.getPaymentLinkStatus = 'processing'
//       })
//       .addCase(getPaymentLinkDetailsByContactId.fulfilled, (state, action) => {
//         state.getPaymentLinkStatus = 'success'
//         state.paymentLinkRecord = action.payload
//       })
//       .addCase(getPaymentLinkDetailsByContactId.rejected, (state, action) => {
//         state.getPaymentLinkStatus = 'error'
//         state.error = action.payload
//       })
//       //to be deleted 
//           // New cases for deletePaymentLink
//       .addCase(deletePaymentLink.pending, (state) => {
//         state.deletePaymentLinkStatus = 'processing';
//       })
//       .addCase(deletePaymentLink.fulfilled, (state) => {
//         state.deletePaymentLinkStatus = 'success';
//         state.paymentLinkRecord = null; // Clear payment link record after deletion
//       })
//       .addCase(deletePaymentLink.rejected, (state, action) => {
//         state.deletePaymentLinkStatus = 'error';
//         state.error = action.payload;
//       });
//   }
// })
// // ✅ Exports
// export const {
//   setContactId,
//   resetPayment,
//   setStatusCode,
//   decrementCountdown
// } = paymentSlice.actions
// export default paymentSlice.reducer
// src/store/slices/paymentSlice.js
__turbopack_context__.s({
    "decrementCountdown": (()=>decrementCountdown),
    "default": (()=>__TURBOPACK__default__export__),
    "deletePaymentLink": (()=>deletePaymentLink),
    "getPaymentLinkDetailsByContactId": (()=>getPaymentLinkDetailsByContactId),
    "getPaymentStatusByPaymentId": (()=>getPaymentStatusByPaymentId),
    "resetPayment": (()=>resetPayment),
    "sendPaymentlink": (()=>sendPaymentlink),
    "sendStatusCode": (()=>sendStatusCode),
    "setContactId": (()=>setContactId),
    "setStatusCode": (()=>setStatusCode),
    "updatePaymentStatusByPaymentId": (()=>updatePaymentStatusByPaymentId),
    "verifyStatusCode": (()=>verifyStatusCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const sendPaymentlink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/sendPaymentlink', async (payload, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].post('/payment/create-payment-link', payload);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Payment submission failed');
    }
});
const sendStatusCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/sendStatusCode', async (payload, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].post('/payment/send-statuscode', payload);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Sending status code failed');
    }
});
const verifyStatusCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/verifyStatusCode', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].get(`/payment/statuscheck/${contactId}`);
        const paymentDataArray = response.data.data;
        if (!paymentDataArray || paymentDataArray.length === 0) {
            return {
                status: 'unpaid'
            };
        }
        return paymentDataArray[0];
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Verification failed');
    }
});
const getPaymentLinkDetailsByContactId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/getPaymentLinkDetailsByContactId', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].get(`/payment/paymentdetails/${contactId}`);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch payment link details');
    }
});
const deletePaymentLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/deletePaymentLink', async (contactId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].delete(`/payment/delete-link/${contactId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to delete payment link');
    }
});
const getPaymentStatusByPaymentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/getPaymentStatusByPaymentId', async (paymentId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].get(`/payment/razorpay/payment/${paymentId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to get payment status');
    }
});
const updatePaymentStatusByPaymentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('payment/updatePaymentStatusByPaymentId', async ({ paymentId, status }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstancePublic"].put(`/payment/update-status/${paymentId}`, {
            status
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to update payment status');
    }
});
// ✅ Initial state
const initialState = {
    status: 'idle',
    error: null,
    statusCode: '',
    countdown: 5,
    paymentDetails: {
        contactId: '',
        email: '',
        statusCode: '',
        status: ''
    },
    sendStatus: 'idle',
    verifyStatus: 'idle',
    verificationResult: null,
    getPaymentLinkStatus: 'idle',
    paymentLinkRecord: null,
    deletePaymentLinkStatus: 'idle',
    // ✅ NEW STATES
    getPaymentStatusByPaymentIdStatus: 'idle',
    paymentStatusResult: null,
    updatePaymentStatusByPaymentIdStatus: 'idle',
    updatePaymentStatusResult: null
};
// ✅ Slice
const paymentSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'payment',
    initialState,
    reducers: {
        setContactId: (state, action)=>{
            state.paymentDetails.contactId = action.payload;
        },
        resetPayment: ()=>initialState,
        setStatusCode: (state, action)=>{
            state.statusCode = action.payload;
            state.paymentDetails.statusCode = action.payload;
        },
        decrementCountdown: (state)=>{
            if (state.countdown > 0) state.countdown -= 1;
        }
    },
    extraReducers: (builder)=>{
        builder// ✅ sendPaymentlink
        .addCase(sendPaymentlink.pending, (state)=>{
            state.status = 'processing';
            state.error = null;
        }).addCase(sendPaymentlink.fulfilled, (state)=>{
            state.status = 'success';
            state.paymentDetails.status = 'completed';
        }).addCase(sendPaymentlink.rejected, (state, action)=>{
            state.status = 'error';
            state.error = action.payload;
        })// ✅ sendStatusCode
        .addCase(sendStatusCode.pending, (state)=>{
            state.sendStatus = 'processing';
        }).addCase(sendStatusCode.fulfilled, (state)=>{
            state.sendStatus = 'success';
        }).addCase(sendStatusCode.rejected, (state, action)=>{
            state.sendStatus = 'error';
            state.error = action.payload;
        })// ✅ verifyStatusCode
        .addCase(verifyStatusCode.pending, (state)=>{
            state.verifyStatus = 'processing';
        }).addCase(verifyStatusCode.fulfilled, (state, action)=>{
            state.verifyStatus = 'success';
            state.verificationResult = action.payload;
            state.paymentDetails.status = action.payload?.status || 'unknown';
            state.paymentDetails.contactId = action.payload?.contactId || '';
            state.paymentDetails.email = action.payload?.contactEmail || '';
            state.paymentDetails.statusCode = action.payload?.statusCode || '';
        }).addCase(verifyStatusCode.rejected, (state, action)=>{
            state.verifyStatus = 'error';
            state.error = action.payload;
        })// ✅ getPaymentLinkDetailsByContactId
        .addCase(getPaymentLinkDetailsByContactId.pending, (state)=>{
            state.getPaymentLinkStatus = 'processing';
        }).addCase(getPaymentLinkDetailsByContactId.fulfilled, (state, action)=>{
            state.getPaymentLinkStatus = 'success';
            state.paymentLinkRecord = action.payload;
        }).addCase(getPaymentLinkDetailsByContactId.rejected, (state, action)=>{
            state.getPaymentLinkStatus = 'error';
            state.error = action.payload;
        })// ✅ deletePaymentLink
        .addCase(deletePaymentLink.pending, (state)=>{
            state.deletePaymentLinkStatus = 'processing';
        }).addCase(deletePaymentLink.fulfilled, (state)=>{
            state.deletePaymentLinkStatus = 'success';
            state.paymentLinkRecord = null;
        }).addCase(deletePaymentLink.rejected, (state, action)=>{
            state.deletePaymentLinkStatus = 'error';
            state.error = action.payload;
        })// ✅ getPaymentStatusByPaymentId
        .addCase(getPaymentStatusByPaymentId.pending, (state)=>{
            state.getPaymentStatusByPaymentIdStatus = 'processing';
        }).addCase(getPaymentStatusByPaymentId.fulfilled, (state, action)=>{
            state.getPaymentStatusByPaymentIdStatus = 'success';
            state.paymentStatusResult = action.payload;
        }).addCase(getPaymentStatusByPaymentId.rejected, (state, action)=>{
            state.getPaymentStatusByPaymentIdStatus = 'error';
            state.error = action.payload;
        })// ✅ updatePaymentStatusByPaymentId
        .addCase(updatePaymentStatusByPaymentId.pending, (state)=>{
            state.updatePaymentStatusByPaymentIdStatus = 'processing';
        }).addCase(updatePaymentStatusByPaymentId.fulfilled, (state, action)=>{
            state.updatePaymentStatusByPaymentIdStatus = 'success';
            state.updatePaymentStatusResult = action.payload;
        }).addCase(updatePaymentStatusByPaymentId.rejected, (state, action)=>{
            state.updatePaymentStatusByPaymentIdStatus = 'error';
            state.error = action.payload;
        });
    }
});
const { setContactId, resetPayment, setStatusCode, decrementCountdown } = paymentSlice.actions;
const __TURBOPACK__default__export__ = paymentSlice.reducer;
}}),
"[project]/src/features/causeSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearCauseState": (()=>clearCauseState),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllCauses": (()=>getAllCauses),
    "getCauseByMeetingId": (()=>getCauseByMeetingId),
    "submitCause": (()=>submitCause),
    "updateCauseStatusById": (()=>updateCauseStatusById),
    "updateCauseStatusByMeetingId": (()=>updateCauseStatusByMeetingId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const submitCause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/submit', async ({ meetingId, reason, submittedBy }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/showcause/submit', {
            meetingId,
            reason,
            submittedBy
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Submit failed'
        });
    }
});
const getCauseByMeetingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/getByMeetingId', async (meetingId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/showcause/meeting/${meetingId}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Not found'
        });
    }
});
const getAllCauses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/getAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/showcause/all');
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Fetch failed'
        });
    }
});
const updateCauseStatusById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/updateStatusById', async ({ id, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/showcause/updatestatus/${id}`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
const updateCauseStatusByMeetingId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('cause/updateStatusByMeetingId', async ({ meetingId, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/api/showcause/meeting/${meetingId}/status`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
// ========================
// INITIAL STATE
// ========================
const initialState = {
    loading: false,
    error: null,
    cause: null,
    allCauses: [],
    submittedData: null // For submit
};
// ========================
// SLICE
// ========================
const causeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'cause',
    initialState,
    reducers: {
        clearCauseState: (state)=>{
            state.loading = false;
            state.error = null;
            state.cause = null;
            state.submittedData = null;
        }
    },
    extraReducers: (builder)=>{
        // === Submit Cause ===
        builder.addCase(submitCause.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(submitCause.fulfilled, (state, action)=>{
            state.loading = false;
            state.submittedData = action.payload.data;
        });
        builder.addCase(submitCause.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get Cause by Meeting ID ===
        builder.addCase(getCauseByMeetingId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getCauseByMeetingId.fulfilled, (state, action)=>{
            state.loading = false;
            state.cause = action.payload.data;
        });
        builder.addCase(getCauseByMeetingId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get All Causes ===
        builder.addCase(getAllCauses.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllCauses.fulfilled, (state, action)=>{
            state.loading = false;
            state.allCauses = action.payload.data;
        });
        builder.addCase(getAllCauses.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by ID ===
        builder.addCase(updateCauseStatusById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateCauseStatusById.fulfilled, (state, action)=>{
            state.loading = false;
            state.cause = action.payload.data;
        });
        builder.addCase(updateCauseStatusById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by Meeting ID ===
        builder.addCase(updateCauseStatusByMeetingId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateCauseStatusByMeetingId.fulfilled, (state, action)=>{
            state.loading = false;
            state.cause = action.payload.data;
        });
        builder.addCase(updateCauseStatusByMeetingId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
    }
});
const { clearCauseState } = causeSlice.actions;
const __TURBOPACK__default__export__ = causeSlice.reducer;
}}),
"[project]/src/features/master/slotMasterSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// store/features/slot/slotSlice.js
__turbopack_context__.s({
    "createSlot": (()=>createSlot),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteSlot": (()=>deleteSlot),
    "fetchAllSlots": (()=>fetchAllSlots)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const createSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('slot/create', async (slotData, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/slot/createslot', slotData);
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
const fetchAllSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('slot/fetchAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/slot/getallslots');
        return res.data.data;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
const deleteSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('slot/delete', async (slotNo, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/slot/delteslot/${slotNo}`);
        return res.data.deleted;
    } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
    }
});
// 🧠 Initial state
const initialState = {
    slots: [],
    loading: false,
    error: null
};
const slotSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'slots',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder// Fetch All Slots
        .addCase(fetchAllSlots.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchAllSlots.fulfilled, (state, action)=>{
            state.loading = false;
            state.slots = action.payload;
        }).addCase(fetchAllSlots.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Create Slot
        .addCase(createSlot.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(createSlot.fulfilled, (state, action)=>{
            state.loading = false;
            state.slots.push(action.payload);
        }).addCase(createSlot.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Delete Slot
        .addCase(deleteSlot.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteSlot.fulfilled, (state, action)=>{
            state.loading = false;
            state.slots = state.slots.filter((s)=>s.slotNo !== action.payload.slotNo);
        }).addCase(deleteSlot.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const __TURBOPACK__default__export__ = slotSlice.reducer;
}}),
"[project]/src/features/master/serviceMasterSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addService": (()=>addService),
    "clearError": (()=>clearError),
    "clearSelectedService": (()=>clearSelectedService),
    "closeAllModals": (()=>closeAllModals),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteService": (()=>deleteService),
    "fetchServices": (()=>fetchServices),
    "getServiceById": (()=>getServiceById),
    "setCreateModalOpen": (()=>setCreateModalOpen),
    "setEditModalOpen": (()=>setEditModalOpen),
    "setSelectedService": (()=>setSelectedService),
    "setViewModalOpen": (()=>setViewModalOpen),
    "updateService": (()=>updateService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchServices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/fetchServices', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/service/getservice');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch services');
    }
});
const addService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/addService', async (serviceData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/service/createservice', serviceData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to add service');
    }
});
const updateService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/updateService', async (serviceData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/service/updateservice/${serviceData.id}`, serviceData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update service');
    }
});
const deleteService = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/deleteService', async (serviceId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/service/deleteservice/${serviceId}`);
        return serviceId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete service');
    }
});
const getServiceById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('services/getServiceById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/service/getServiceById/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch service');
    }
});
const initialState = {
    services: [],
    selectedService: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const serviceSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'services',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        setSelectedService: (state, action)=>{
            state.selectedService = action.payload;
        },
        clearSelectedService: (state)=>{
            state.selectedService = null;
        },
        setCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch services
        .addCase(fetchServices.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchServices.fulfilled, (state, action)=>{
            state.loading = false;
            state.services = action.payload;
        }).addCase(fetchServices.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Add service
        .addCase(addService.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(addService.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.services.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(addService.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update service
        .addCase(updateService.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateService.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.services.findIndex((s)=>s.id === action.payload.id);
            if (index !== -1) {
                state.services[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateService.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete service
        .addCase(deleteService.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteService.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.services = state.services.filter((s)=>s.id !== action.payload);
        }).addCase(deleteService.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get service by ID
        .addCase(getServiceById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getServiceById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedService = action.payload;
        }).addCase(getServiceById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearError, setSelectedService, clearSelectedService, setCreateModalOpen, setEditModalOpen, setViewModalOpen, closeAllModals } = serviceSlice.actions;
const __TURBOPACK__default__export__ = serviceSlice.reducer;
}}),
"[project]/src/features/master/industriesMasterSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addIndustry": (()=>addIndustry),
    "clearError": (()=>clearError),
    "clearSelectedIndustry": (()=>clearSelectedIndustry),
    "closeAllModals": (()=>closeAllModals),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteIndustry": (()=>deleteIndustry),
    "fetchIndustries": (()=>fetchIndustries),
    "getIndustryById": (()=>getIndustryById),
    "setCreateModalOpen": (()=>setCreateModalOpen),
    "setEditModalOpen": (()=>setEditModalOpen),
    "setSelectedIndustry": (()=>setSelectedIndustry),
    "setViewModalOpen": (()=>setViewModalOpen),
    "updateIndustry": (()=>updateIndustry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchIndustries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/fetchIndustries', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/industry/getindustry');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch industries');
    }
});
const addIndustry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/addIndustry', async (industryData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/industry/createindustry', industryData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to add industry');
    }
});
const updateIndustry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/updateIndustry', async (industryData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/industry/updateIndustry/${industryData.id}`, industryData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update industry');
    }
});
const deleteIndustry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/deleteIndustry', async (industryId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/industry/deleteIndustry/${industryId}`);
        return industryId;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete industry');
    }
});
const getIndustryById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('industries/getIndustryById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/industry/IndustryById/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch industry');
    }
});
const initialState = {
    industries: [],
    selectedIndustry: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
const industrySlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'industries',
    initialState,
    reducers: {
        clearError: (state)=>{
            state.error = null;
        },
        setSelectedIndustry: (state, action)=>{
            state.selectedIndustry = action.payload;
        },
        clearSelectedIndustry: (state)=>{
            state.selectedIndustry = null;
        },
        setCreateModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllModals: (state)=>{
            state.modals.isCreateOpen = false;
            state.modals.isEditOpen = false;
            state.modals.isViewOpen = false;
        }
    },
    extraReducers: (builder)=>{
        builder// Fetch industries
        .addCase(fetchIndustries.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchIndustries.fulfilled, (state, action)=>{
            state.loading = false;
            state.industries = action.payload;
        }).addCase(fetchIndustries.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })// Add industry
        .addCase(addIndustry.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(addIndustry.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.industries.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(addIndustry.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        })// Update industry
        .addCase(updateIndustry.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateIndustry.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.industries.findIndex((i)=>i._id === action.payload._id);
            if (index !== -1) {
                state.industries[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateIndustry.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        })// Delete industry
        .addCase(deleteIndustry.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteIndustry.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.industries = state.industries.filter((i)=>i._id !== action.payload);
        }).addCase(deleteIndustry.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        })// Get industry by ID
        .addCase(getIndustryById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getIndustryById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedIndustry = action.payload;
        }).addCase(getIndustryById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearError, setSelectedIndustry, clearSelectedIndustry, setCreateModalOpen, setEditModalOpen, setViewModalOpen, closeAllModals } = industrySlice.actions;
const __TURBOPACK__default__export__ = industrySlice.reducer;
}}),
"[project]/src/features/projectteammeetingSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearProjectMeetingError": (()=>clearProjectMeetingError),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllTeamMeetings": (()=>getAllTeamMeetings),
    "getTeamMeetingData": (()=>getTeamMeetingData),
    "resetProjectTeamMeeting": (()=>resetProjectTeamMeeting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const getTeamMeetingData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectTeamMeeting/getTeamMeetingData', async ({ projectId, teamLeadId }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/api/projects/emails/${projectId}/${teamLeadId}`, {
            projectId,
            teamLeadId
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch team meeting data');
    }
});
const getAllTeamMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectTeamMeeting/getAllTeamMeetings', async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get('/team-meeting/all');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch all team meetings');
    }
});
// Initial state scoped to the slice
const initialState = {
    teamMeetingLoading: false,
    teamMeetingError: null,
    currentTeamMeeting: null,
    allTeamMeetings: []
};
const projectTeamMeetingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectTeamMeeting',
    initialState,
    reducers: {
        clearProjectMeetingError: (state)=>{
            state.teamMeetingError = null;
        },
        resetProjectTeamMeeting: (state)=>{
            state.teamMeetingLoading = false;
            state.teamMeetingError = null;
            state.currentTeamMeeting = null;
            state.allTeamMeetings = [];
        }
    },
    extraReducers: (builder)=>{
        builder// Get single meeting details
        .addCase(getTeamMeetingData.pending, (state)=>{
            state.teamMeetingLoading = true;
            state.teamMeetingError = null;
        }).addCase(getTeamMeetingData.fulfilled, (state, action)=>{
            state.teamMeetingLoading = false;
            state.currentTeamMeeting = action.payload;
        }).addCase(getTeamMeetingData.rejected, (state, action)=>{
            state.teamMeetingLoading = false;
            state.teamMeetingError = action.payload;
        })// Get all meetings
        .addCase(getAllTeamMeetings.pending, (state)=>{
            state.teamMeetingLoading = true;
            state.teamMeetingError = null;
        }).addCase(getAllTeamMeetings.fulfilled, (state, action)=>{
            state.teamMeetingLoading = false;
            state.allTeamMeetings = action.payload;
        }).addCase(getAllTeamMeetings.rejected, (state, action)=>{
            state.teamMeetingLoading = false;
            state.teamMeetingError = action.payload;
        });
    }
});
const { clearProjectMeetingError, resetProjectTeamMeeting } = projectTeamMeetingSlice.actions;
const __TURBOPACK__default__export__ = projectTeamMeetingSlice.reducer;
}}),
"[project]/src/features/projetMeetingSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearProjectMeetingsError": (()=>clearProjectMeetingsError),
    "default": (()=>__TURBOPACK__default__export__),
    "getMeetingsByEmail": (()=>getMeetingsByEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const getMeetingsByEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetings/getMeetingsByEmail', async (email, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/upcoming/${email}`);
        return response.data.meetings;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch meetings for project');
    }
});
// ✅ Initial state
const initialState = {
    projectmeetings: [],
    loading: false
};
// ✅ Slice
const projectMeetingsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectMeetings',
    initialState,
    reducers: {
        clearProjectMeetingsError: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getMeetingsByEmail.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getMeetingsByEmail.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectmeetings = action.payload;
        }).addCase(getMeetingsByEmail.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearProjectMeetingsError } = projectMeetingsSlice.actions;
const __TURBOPACK__default__export__ = projectMeetingsSlice.reducer;
}}),
"[project]/src/features/projectmeetSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearProjectMeetingError": (()=>clearProjectMeetingError),
    "clearSelectedProjectMeeting": (()=>clearSelectedProjectMeeting),
    "closeAllProjectModals": (()=>closeAllProjectModals),
    "createProjectMeeting": (()=>createProjectMeeting),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteProjectMeeting": (()=>deleteProjectMeeting),
    "fetchAllProjectMeetings": (()=>fetchAllProjectMeetings),
    "getProjectMeetingById": (()=>getProjectMeetingById),
    "setCreateProjectModalOpen": (()=>setCreateProjectModalOpen),
    "setEditProjectModalOpen": (()=>setEditProjectModalOpen),
    "setSelectedProjectMeeting": (()=>setSelectedProjectMeeting),
    "setViewProjectModalOpen": (()=>setViewProjectModalOpen),
    "updateProjectMeeting": (()=>updateProjectMeeting)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const fetchAllProjectMeetings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetings/fetchAllProjectMeetings', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/meetings/project/${projectId}`);
        return response.data.meetings;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch project meetings');
    }
});
const createProjectMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetings/createProjectMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].post('/createteammeeting', meetingData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to create project meeting');
    }
});
const updateProjectMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetings/updateProjectMeeting', async (meetingData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].post('/project-meeting/update', meetingData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update project meeting');
    }
});
const deleteProjectMeeting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetings/deleteProjectMeeting', async ({ id, email }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].delete(`/project-meeting/${email}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete project meeting');
    }
});
const getProjectMeetingById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetings/getProjectMeetingById', async (id, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance3"].get(`/project-meeting/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch project meeting');
    }
});
// ✅ Initial state
const initialState = {
    meetings: [],
    selectedMeeting: null,
    loading: false,
    error: null,
    createLoading: false,
    updateLoading: false,
    deleteLoading: false,
    modals: {
        isCreateOpen: false,
        isEditOpen: false,
        isViewOpen: false
    }
};
// ✅ Slice
const projectMeetingSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectMeet',
    initialState,
    reducers: {
        clearProjectMeetingError: (state)=>{
            state.error = null;
        },
        setSelectedProjectMeeting: (state, action)=>{
            state.selectedMeeting = action.payload;
        },
        clearSelectedProjectMeeting: (state)=>{
            state.selectedMeeting = null;
        },
        setCreateProjectModalOpen: (state, action)=>{
            state.modals.isCreateOpen = action.payload;
        },
        setEditProjectModalOpen: (state, action)=>{
            state.modals.isEditOpen = action.payload;
        },
        setViewProjectModalOpen: (state, action)=>{
            state.modals.isViewOpen = action.payload;
        },
        closeAllProjectModals: (state)=>{
            state.modals = {
                isCreateOpen: false,
                isEditOpen: false,
                isViewOpen: false
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAllProjectMeetings.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchAllProjectMeetings.fulfilled, (state, action)=>{
            state.loading = false;
            state.meetings = action.payload;
        }).addCase(fetchAllProjectMeetings.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(createProjectMeeting.pending, (state)=>{
            state.createLoading = true;
            state.error = null;
        }).addCase(createProjectMeeting.fulfilled, (state, action)=>{
            state.createLoading = false;
            state.meetings.push(action.payload);
            state.modals.isCreateOpen = false;
        }).addCase(createProjectMeeting.rejected, (state, action)=>{
            state.createLoading = false;
            state.error = action.payload;
        }).addCase(updateProjectMeeting.pending, (state)=>{
            state.updateLoading = true;
            state.error = null;
        }).addCase(updateProjectMeeting.fulfilled, (state, action)=>{
            state.updateLoading = false;
            const index = state.meetings.findIndex((m)=>m.id === action.payload.id);
            if (index !== -1) {
                state.meetings[index] = action.payload;
            }
            state.modals.isEditOpen = false;
        }).addCase(updateProjectMeeting.rejected, (state, action)=>{
            state.updateLoading = false;
            state.error = action.payload;
        }).addCase(deleteProjectMeeting.pending, (state)=>{
            state.deleteLoading = true;
            state.error = null;
        }).addCase(deleteProjectMeeting.fulfilled, (state, action)=>{
            state.deleteLoading = false;
            state.meetings = state.meetings.filter((m)=>m.id !== action.payload);
        }).addCase(deleteProjectMeeting.rejected, (state, action)=>{
            state.deleteLoading = false;
            state.error = action.payload;
        }).addCase(getProjectMeetingById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getProjectMeetingById.fulfilled, (state, action)=>{
            state.loading = false;
            state.selectedMeeting = action.payload;
        }).addCase(getProjectMeetingById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearProjectMeetingError, setSelectedProjectMeeting, clearSelectedProjectMeeting, setCreateProjectModalOpen, setEditProjectModalOpen, setViewProjectModalOpen, closeAllProjectModals } = projectMeetingSlice.actions;
const __TURBOPACK__default__export__ = projectMeetingSlice.reducer;
}}),
"[project]/src/features/projectmeetingmomSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createProjectMeetingMom": (()=>createProjectMeetingMom),
    "default": (()=>__TURBOPACK__default__export__),
    "deleteProjectMeetingMom": (()=>deleteProjectMeetingMom),
    "fetchAllProjectMoms": (()=>fetchAllProjectMoms),
    "fetchMeetingMomById": (()=>fetchMeetingMomById),
    "fetchMeetingMomView": (()=>fetchMeetingMomView),
    "resetMeetingMomView": (()=>resetMeetingMomView),
    "resetSelectedMom": (()=>resetSelectedMom),
    "updateProjectMeetingMom": (()=>updateProjectMeetingMom)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const createProjectMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/create', async (momData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/projectmom/creatprojectmom', momData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to create project MoM');
    }
});
const fetchAllProjectMoms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/fetchAll', async (projectId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectmom/fetchallmom/${projectId}`);
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoMs');
    }
});
const fetchMeetingMomById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/fetchById', async (momId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectmom/getmombymomId/${momId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch MoM');
    }
});
const updateProjectMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/update', async ({ momId, updatedData }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post(`/projectmom/creatprojectmom`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to update MoM');
    }
});
const deleteProjectMeetingMom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/delete', async (momId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].delete(`/projectmom/${momId}`);
        return momId; // return deleted ID so we can remove from state
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to delete MoM');
    }
});
const fetchMeetingMomView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectMeetingMom/fetchPdf', async (momId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectmom/view/${momId}`, {
            responseType: 'blob'
        });
        const contentType = response.headers['content-type'];
        if (!contentType.includes('application/pdf')) {
            throw new Error('Response is not a valid PDF');
        }
        const pdfUrl = URL.createObjectURL(response.data);
        return {
            pdfUrl,
            momId
        };
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to fetch MoM PDF');
    }
});
/* ========== Slice ========== */ const projectMeetingMomSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectMeetingMom',
    initialState: {
        moms: [],
        momsLoading: false,
        momsError: null,
        selectedMom: null,
        selectedMomLoading: false,
        selectedMomError: null,
        deleteSuccess: false,
        meetingMomView: null,
        meetingMomViewLoading: false,
        meetingMomViewError: null
    },
    reducers: {
        resetSelectedMom: (state)=>{
            state.selectedMom = null;
            state.selectedMomLoading = false;
            state.selectedMomError = null;
            state.deleteSuccess = false;
        },
        resetMeetingMomView: (state)=>{
            state.meetingMomView = null;
            state.meetingMomViewLoading = false;
            state.meetingMomViewError = null;
        }
    },
    extraReducers: (builder)=>{
        builder// Create MoM
        .addCase(createProjectMeetingMom.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
        }).addCase(createProjectMeetingMom.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = action.payload;
            state.moms.unshift(action.payload); // add new mom to top
        }).addCase(createProjectMeetingMom.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
        })// Fetch all MoMs
        .addCase(fetchAllProjectMoms.pending, (state)=>{
            state.momsLoading = true;
            state.momsError = null;
        }).addCase(fetchAllProjectMoms.fulfilled, (state, action)=>{
            state.momsLoading = false;
            state.moms = action.payload;
        }).addCase(fetchAllProjectMoms.rejected, (state, action)=>{
            state.momsLoading = false;
            state.momsError = action.payload;
        })// Fetch by ID
        .addCase(fetchMeetingMomById.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
        }).addCase(fetchMeetingMomById.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = action.payload;
        }).addCase(fetchMeetingMomById.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
        })// Update MoM
        .addCase(updateProjectMeetingMom.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
        }).addCase(updateProjectMeetingMom.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = action.payload;
            state.moms = state.moms.map((mom)=>mom.id === action.payload.id ? action.payload : mom);
        }).addCase(updateProjectMeetingMom.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
        })// Delete MoM
        .addCase(deleteProjectMeetingMom.pending, (state)=>{
            state.selectedMomLoading = true;
            state.selectedMomError = null;
            state.deleteSuccess = false;
        }).addCase(deleteProjectMeetingMom.fulfilled, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMom = null;
            state.deleteSuccess = true;
            state.moms = state.moms.filter((mom)=>mom.id !== action.payload);
        }).addCase(deleteProjectMeetingMom.rejected, (state, action)=>{
            state.selectedMomLoading = false;
            state.selectedMomError = action.payload;
            state.deleteSuccess = false;
        })// Fetch MoM PDF
        .addCase(fetchMeetingMomView.pending, (state)=>{
            state.meetingMomViewLoading = true;
            state.meetingMomViewError = null;
            state.meetingMomView = null;
        }).addCase(fetchMeetingMomView.fulfilled, (state, action)=>{
            state.meetingMomViewLoading = false;
            state.meetingMomView = action.payload;
        }).addCase(fetchMeetingMomView.rejected, (state, action)=>{
            state.meetingMomViewLoading = false;
            state.meetingMomViewError = action.payload;
            state.meetingMomView = null;
        });
    }
});
const { resetSelectedMom, resetMeetingMomView } = projectMeetingMomSlice.actions;
const __TURBOPACK__default__export__ = projectMeetingMomSlice.reducer;
}}),
"[project]/src/features/projectShowCauseSlice.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clearProjectShowCauseState": (()=>clearProjectShowCauseState),
    "default": (()=>__TURBOPACK__default__export__),
    "getAllProjectShowCauses": (()=>getAllProjectShowCauses),
    "getProjectShowCauseByMomId": (()=>getProjectShowCauseByMomId),
    "submitProjectShowCause": (()=>submitProjectShowCause),
    "updateProjectShowCauseStatusById": (()=>updateProjectShowCauseStatusById),
    "updateProjectShowCauseStatusByMomId": (()=>updateProjectShowCauseStatusByMomId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.js [app-ssr] (ecmascript)");
;
;
const submitProjectShowCause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/submit', async ({ projectId, reason, submittedBy }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].post('/projectshowcause/submit', {
            projectId,
            reason,
            submittedBy
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Submit failed'
        });
    }
});
const getProjectShowCauseByMomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/getByMomId', async (momId, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get(`/projectshowcause/mom/${momId}`);
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Not found'
        });
    }
});
const getAllProjectShowCauses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/getAll', async (_, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].get('/projectshowcause/all');
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Fetch failed'
        });
    }
});
const updateProjectShowCauseStatusById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/updateStatusById', async ({ id, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].put(`/projectshowcause/updatestatus/${id}`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
const updateProjectShowCauseStatusByMomId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('projectShowCause/updateStatusByMomId', async ({ momId, status }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["axiosInstance"].patch(`/api/projectshowcause/mom/${momId}/status`, {
            status
        });
        return res.data;
    } catch (err) {
        return rejectWithValue(err.response?.data || {
            message: 'Update failed'
        });
    }
});
// ========================
// INITIAL STATE
// ========================
const initialState = {
    loading: false,
    error: null,
    projectShowCause: null,
    allProjectShowCauses: [],
    submittedData: null // For submit
};
// ========================
// SLICE
// ========================
const projectShowCauseSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'projectShowCause',
    initialState,
    reducers: {
        clearProjectShowCauseState: (state)=>{
            state.loading = false;
            state.error = null;
            state.projectShowCause = null;
            state.submittedData = null;
        }
    },
    extraReducers: (builder)=>{
        // === Submit ===
        builder.addCase(submitProjectShowCause.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(submitProjectShowCause.fulfilled, (state, action)=>{
            state.loading = false;
            state.submittedData = action.payload.data;
        });
        builder.addCase(submitProjectShowCause.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get by MOM ID ===
        builder.addCase(getProjectShowCauseByMomId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProjectShowCauseByMomId.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectShowCause = action.payload.data;
        });
        builder.addCase(getProjectShowCauseByMomId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Get All ===
        builder.addCase(getAllProjectShowCauses.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllProjectShowCauses.fulfilled, (state, action)=>{
            state.loading = false;
            state.allProjectShowCauses = action.payload.data;
        });
        builder.addCase(getAllProjectShowCauses.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by ID ===
        builder.addCase(updateProjectShowCauseStatusById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateProjectShowCauseStatusById.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectShowCause = action.payload.data;
        });
        builder.addCase(updateProjectShowCauseStatusById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
        // === Update Status by MOM ID ===
        builder.addCase(updateProjectShowCauseStatusByMomId.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateProjectShowCauseStatusByMomId.fulfilled, (state, action)=>{
            state.loading = false;
            state.projectShowCause = action.payload.data;
        });
        builder.addCase(updateProjectShowCauseStatusByMomId.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload?.message;
        });
    }
});
const { clearProjectShowCauseState } = projectShowCauseSlice.actions;
const __TURBOPACK__default__export__ = projectShowCauseSlice.reducer;
}}),
"[project]/src/store/store.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$authSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shared/authSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$notificationSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shared/notificationSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$userSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shared/userSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$sidebarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/shared/sidebarSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$teamMembersSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/teamMembersSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$viewTeamByProjectIdSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/viewTeamByProjectIdSlice.js [app-ssr] (ecmascript)");
//dashbaord & reports
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashboardSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/dashboard/dashboardSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/dashboard/dashSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$teamSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/teamSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/taskSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$subTaskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/subTaskSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$bugSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/bugSlice.js [app-ssr] (ecmascript)");
// module reducer
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contactSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/contactSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$meetingSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/meetingSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$calender$2f$teammeetingMomSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/calender/teammeetingMomSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$calender$2f$meetingCalendarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/calender/meetingCalendarSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$calender$2f$teammeetingCalenderSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/calender/teammeetingCalenderSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$momSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/momSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$quotationSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/quotationSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$clientSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/clientSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$meeting$2f$paymentSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/meeting/paymentSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$causeSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/causeSlice.js [app-ssr] (ecmascript)");
//master table
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$master$2f$slotMasterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/master/slotMasterSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$master$2f$serviceMasterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/master/serviceMasterSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$master$2f$industriesMasterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/master/industriesMasterSlice.js [app-ssr] (ecmascript)");
//meetings
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectteammeetingSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectteammeetingSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projetMeetingSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projetMeetingSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectmeetSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectmeetSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectmeetingmomSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectmeetingmomSlice.js [app-ssr] (ecmascript)"); // Adjust path as needed
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectShowCauseSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/projectShowCauseSlice.js [app-ssr] (ecmascript)");
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
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        sidebar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$sidebarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        //shared reducers
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$authSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        notifications: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$notificationSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$shared$2f$userSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        //dashboard
        dash: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        dashboard: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$dashboard$2f$dashboardSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        // module reducer
        contact: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$contactSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        meetings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$meetingSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        meetingCalendar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$calender$2f$meetingCalendarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        mom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$momSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        quotation: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$quotationSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        client: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$clientSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        project: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        task: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$taskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        subTask: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$subTaskSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        team: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$teamSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        bugs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$bugSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        cause: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$causeSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        payment: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$meeting$2f$paymentSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        //master
        slots: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$master$2f$slotMasterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$master$2f$serviceMasterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        industries: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$master$2f$industriesMasterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        teamMeetings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$calender$2f$teammeetingCalenderSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        teammeetingMom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$calender$2f$teammeetingMomSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        teamMembers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$teamMembersSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        projectTeam: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$viewTeamByProjectIdSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        projectTeamMeeting: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectteammeetingSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        projectMeetings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projetMeetingSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        //project meeting
        projectMeet: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectmeetSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        projectMeetingMom: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectmeetingmomSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        //
        projectShowCause: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$projectShowCauseSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
const __TURBOPACK__default__export__ = store;
}}),
"[project]/src/store/provider.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Providers": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        children: children
    }, void 0, false, {
        fileName: "[project]/src/store/provider.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/components/ui/sonner.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
;
}}),
"[project]/src/components/actions/Toast.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ClientOnlyToaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sonner.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ClientOnlyToaster(props) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/actions/Toast.jsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bf4b8116._.js.map