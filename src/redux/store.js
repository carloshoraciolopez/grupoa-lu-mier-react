import { configureStore } from "@reduxjs/toolkit";
import { mensajeSlice } from "./states/mensaje";
import { resourceSlice } from "./states/resource";

export default configureStore({
    reducer:{
        mensaje: mensajeSlice.reducer,
        resource: resourceSlice.reducer,
    }
});