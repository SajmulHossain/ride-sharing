import type { TRole } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  role: TRole | null;
} = {
  role: null,
};

const authSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<TRole>) => {
      state.role = action.payload;
    },
    removeRole: (state) => {
      state.role = null;
    },
  },
});

export const { setRole, removeRole } = authSlice.actions;
export default authSlice.reducer;
