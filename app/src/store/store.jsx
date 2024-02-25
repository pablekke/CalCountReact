import { configureStore } from "@reduxjs/toolkit";
import {contadorSlice} from "../features/contadorSlice";

export const store = configureStore({
  reducer: {
    contador: contadorSlice
  }

})