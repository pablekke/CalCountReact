import { createSlice } from "@reduxjs/toolkit";

const inicialState = {
  cuenta: 0,
};

export const contadorSlice = createSlice({
  name: "contador",
  inicialState,
  reducers: {
    incrementar: (state) => {
      state.cuenta++;
    },
  },
});

export const {incrementar} = contadorSlice.actions;

export default contadorSlice.reducer;