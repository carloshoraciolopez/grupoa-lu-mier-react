import { configureStore } from "@reduxjs/toolkit";
import { mensajeSlice } from "./states/mensaje";

export default configureStore({
    reducer:{
        mensaje: mensajeSlice.reducer,
    }
});