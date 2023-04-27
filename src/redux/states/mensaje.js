import { createSlice } from "@reduxjs/toolkit";

const MensajeEmptyState = {
    mensaje: '',
};

export const mensajeSlice = createSlice({
    name :'mensaje',
    initialState:MensajeEmptyState,
    reducers: {
        createMensaje: (state,action) => {//vienen con payload
            return {...action.payload};
        },
        updateMensaje: (state,action) => {
            return {...state, ...action.payload};
        },
        resetMessage:() => {
            return MensajeEmptyState;
        } 
    }
});

export const { createMensaje, resetMessage, updateMensaje} = mensajeSlice.actions;
