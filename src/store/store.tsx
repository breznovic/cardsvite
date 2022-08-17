import React from "react"
import {createStore} from "redux";
import {v1} from "uuid";

export type IngredientType = {
    id: string
    ingredient: string
    price: number
}

export type IngredientsType = IngredientType[]

const appState = {
    ingredients: [
        {id: v1(), ingredient: 'Onion', price: 0.2},
        {id: v1(), ingredient: 'Bell pepper', price: 1.01},
        {id: v1(), ingredient: 'Tomatoes', price: 1},
        {id: v1(), ingredient: 'Parsley', price: 0.3},
        {id: v1(), ingredient: 'Frozen peas', price: 0.4},
        {id: v1(), ingredient: 'Bay leaf', price: 0.1},
        {id: v1(), ingredient: 'Paprika', price: 0.2},
        {id: v1(), ingredient: 'Saffron', price: 0.5},
        {id: v1(), ingredient: 'Salt', price: 0.2},
        {id: v1(), ingredient: 'Pepper', price: 0.8},
        {id: v1(), ingredient: 'Shrimp', price: 1.5},
        {id: v1(), ingredient: 'Mussels', price: 1.1},
        {id: v1(), ingredient: 'Calamari', price: 0.9},
        {id: v1(), ingredient: 'Olive oil', price: 3},
        {id: v1(), ingredient: 'White wine', price: 3.2},
        {id: v1(), ingredient: 'Rice', price: 0.8},
    ],
}

action = {type: '', payload: ''}

const reducer = (state = appState, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return {...state, ingredients: state.ingredients + action.payload}
        case 'DEL_INGREDIENT':
            return {...state, ingredients: state.ingredients - action.payload}
        default:
            return state
    }
}

export const store = createStore(reducer)