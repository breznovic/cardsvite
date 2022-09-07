import React from "react"
import {v1} from "uuid"
import {IngredientType} from "./store"


type AddIngredientType = {
    type: 'ADD-INGREDIENT'
    title: string
    price: number
}

type DeleteIngredientType = {
    type: 'DELETE-INGREDIENT'
    id: string
}

type ActionsType = AddIngredientType | DeleteIngredientType

const initialState: IngredientType[] = [
    {id: v1(), title: 'Onion', price: 0.2},
    {id: v1(), title: 'Bell pepper', price: 1.01},
    {id: v1(), title: 'Tomatoes', price: 1},
    {id: v1(), title: 'Parsley', price: 0.3},
    {id: v1(), title: 'Frozen peas', price: 0.4},
    {id: v1(), title: 'Bay leaf', price: 0.1},
    {id: v1(), title: 'Paprika', price: 0.2},
    {id: v1(), title: 'Saffron', price: 0.5},
    {id: v1(), title: 'Salt', price: 0.2},
    {id: v1(), title: 'Pepper', price: 0.8},
    {id: v1(), title: 'Shrimp', price: 1.5},
    {id: v1(), title: 'Mussels', price: 1.1},
    {id: v1(), title: 'Calamari', price: 0.9},
    {id: v1(), title: 'Olive oil', price: 3},
    {id: v1(), title: 'White wine', price: 3.2},
    {id: v1(), title: 'Rice', price: 0.8},
]

export const ingredientsReducer = (state: IngredientType[] = initialState, action: ActionsType): IngredientType[] => {
    switch (action.type) {
        case 'ADD-INGREDIENT': {
            return [{id: v1(), title: action.title, price: action.price}, ...state]
        }

        case 'DELETE-INGREDIENT': {
            return initialState.filter(i => i.id !== action.id)
        }
        default:
            return state
    }
}

export const addIngredientAC = (title: string, price: number): AddIngredientType => {
    return {type: "ADD-INGREDIENT", title, price}
}

export const deleteIngredientAC = (id: string): DeleteIngredientType => {
    return {type: "DELETE-INGREDIENT", id}
}


