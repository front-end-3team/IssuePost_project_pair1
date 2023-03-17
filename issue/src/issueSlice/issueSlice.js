import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const asyncIssue = createAsyncThunk("issueslice/asyncIssue", async () => {
  const response = await axios.get(
    "https://api.github.com/repos/angular/angular-cli/issues?per_page=100"
  );
  return response.data;
});

const initialState = {
  issues: [],
  state: "",
};

export const issueslice = createSlice({
  name: "issueslice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(asyncIssue.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(asyncIssue.fulfilled, (state, action) => {
        state.issues.push(...action.payload);
        state.status = "Success";
      })
      .addCase(asyncIssue.rejected, (state, action) => {
        state.status = "Fail";
      });
  },
});

export { asyncIssue };
