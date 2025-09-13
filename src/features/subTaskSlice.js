// src/redux/slices/subTaskSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/lib/axios";

// ====================== Async Thunks ======================

// Fetch all subtasks by taskId
export const fetchSubTasksByTaskId = createAsyncThunk(
  "subTask/fetchByTaskId",
  async (taskId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/subtask/task/${taskId}`);
      return { taskId, subtasks: res.data };
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Create a new subtask under a taskId
export const createSubTask = createAsyncThunk(
  "subTask/create",
  async ({ taskId, subTaskData }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/subtask/task/${taskId}`, subTaskData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Get a single subtask by id
export const getSubTaskById = createAsyncThunk(
  "subTask/getById",
  async (subTaskId, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/subtask/${subTaskId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Generic update (partial edit for any field: title, deadline, status, etc.)
export const updateSubTask = createAsyncThunk(
  "subTask/update",
  async ({ subTaskId, updates }, { rejectWithValue }) => {
    try {
      // PATCH is better for partial updates
      const res = await axiosInstance.patch(`/subtask/${subTaskId}`, updates);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Delete a subtask
export const deleteSubTask = createAsyncThunk(
  "subTask/delete",
  async (subTaskId, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/subtask/${subTaskId}`);
      return subTaskId;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// ====================== Slice ======================

const subTaskSlice = createSlice({
  name: "subTask",
  initialState: {
    subtasks: [],        // collection of subtasks
    currentSubTask: null, // single subtask details
    loading: false,
    error: null,
  },
  reducers: {
    clearCurrentSubTask: (state) => {
      state.currentSubTask = null;
    },
    clearAllSubTasks: (state) => {
      state.subtasks = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all by taskId
      .addCase(fetchSubTasksByTaskId.fulfilled, (state, action) => {
        const { taskId, subtasks } = action.payload;
        // Replace subtasks belonging to that task
        state.subtasks = [
          ...state.subtasks.filter((s) => s.taskId !== taskId),
          ...subtasks,
        ];
      })

      // Create
      .addCase(createSubTask.fulfilled, (state, action) => {
        state.subtasks.push(action.payload);
      })

      // Get by Id
      .addCase(getSubTaskById.fulfilled, (state, action) => {
        state.currentSubTask = action.payload;
      })

      // Update (generic, partial)
      .addCase(updateSubTask.fulfilled, (state, action) => {
        const idx = state.subtasks.findIndex((s) => s._id === action.payload._id);
        if (idx !== -1) state.subtasks[idx] = action.payload;
        if (state.currentSubTask?._id === action.payload._id) {
          state.currentSubTask = action.payload;
        }
      })

      // Delete
      .addCase(deleteSubTask.fulfilled, (state, action) => {
        state.subtasks = state.subtasks.filter((s) => s._id !== action.payload);
      })

      // Common pending/rejected
      .addMatcher((a) => a.type.endsWith("/pending"), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher((a) => a.type.endsWith("/fulfilled"), (state) => {
        state.loading = false;
      })
      .addMatcher((a) => a.type.endsWith("/rejected"), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ====================== Exports ======================

export const { clearCurrentSubTask, clearAllSubTasks } = subTaskSlice.actions;
export default subTaskSlice.reducer;
