import { createSlice } from "@reduxjs/toolkit";

const ReourceEmptyState = {
    resources: []//es un array!!!!
};

export const resourceSlice = createSlice({
    name:'resource',
    initialState: ReourceEmptyState,
    reducers: {
        createResource: (state,action) => {// action.payload
            return {...action.payload};
        },
        updateResource: (state,action) => {
            // const data = [];
            // data.push(action.payoad);//un objeto
            return {...state, ...action.payoad};
        },
        resetResource: () => {
            return ReourceEmptyState;
        }
    }
});

export const {createResource, updateResource, resetResource} = resourceSlice.actions;