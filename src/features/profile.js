import { createAction, createReducer } from "@reduxjs/toolkit";


const changeAlias = createAction("change Alias");
const changeName = createAction("change Name");
const resetProfile = createAction("reset Profile");

const actions = { changeAlias, changeName, resetProfile };


const initialState = {
    alias: "",
    name: "",
    
};


const reducer = createReducer(initialState, builder => {
    builder
        .addCase(changeAlias, (state, action) => ({ alias: action.payload,
                                                     name: state.name }))
        .addCase(changeName, (state, action) => ({ ...state, name: action.payload })) 
                                                    
        .addCase(resetProfile, (state, action) => initialState)

});


export { actions, reducer };