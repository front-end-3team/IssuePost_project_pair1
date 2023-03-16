import { configureStore } from "@reduxjs/toolkit";
import { issueslice } from "../issueSlice/issueSlice";

export const store = configureStore({
  reducer: {
    asyncIssue: issueslice.reducer,
  },
});
