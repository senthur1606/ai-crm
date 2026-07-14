import { createSlice } from "@reduxjs/toolkit";

const interactionSlice = createSlice({
  name: "interactions",

  initialState: {
    rows: [],
  },

  reducers: {
    setInteractions: (state, action) => {
      state.rows = action.payload;
    },

    addInteraction: (state, action) => {
      state.rows.push(action.payload);
    },

    updateInteraction: (state, action) => {
      const index = state.rows.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.rows[index] = action.payload;
      }
    },

    deleteInteraction: (state, action) => {
      state.rows = state.rows.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setInteractions,
  addInteraction,
  updateInteraction,
  deleteInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;