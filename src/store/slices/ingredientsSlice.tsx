import React from "react"
import {createSlice} from "@reduxjs/toolkit";
import {v1} from "uuid";

const initialState = {
    ingredients: []
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addIngredient: (state) => {
            state.ingredients + newIngredient
    }
})

export const {addIngredient} = ingredientsSlice.actions

export default ingredientsSlice.reducer