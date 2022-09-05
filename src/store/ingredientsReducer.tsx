import React from "react"
import {IngredientsType} from "./store"
import {v1} from "uuid"

type AddIngredientType = {
    type: 'ADD-INGREDIENT'
    ingredient: string
}

type AddIngredientPriceType = {
    type: 'ADD-INGREDIENT-PRICE'
    ingredient: string
    price: number
}

type DeleteIngredientType = {
    type: 'DELETE-INGREDIENT'
    id: string
}

type ActionsType = AddIngredientType | AddIngredientPriceType | DeleteIngredientType

const initialState: IngredientsType = [
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
]

export const ingredientsReducer = (state: IngredientsType = initialState, action: ActionsType): IngredientsType => {
    switch (action.type) {
        case 'ADD-INGREDIENT': {
            const stateCopy = [...state]
            const newIngredient = {id: v1(), ingredient: action.ingredient, price: 0}
            return [newIngredient, ...stateCopy]
        }
        case 'ADD-INGREDIENT-PRICE': {
            const stateCopy = [...state]
            const newIngredientCost = {id: v1(), ingredient: newIngredient, price: action.price}
            return [newIngredientCost, ...stateCopy]
        }
        case 'DELETE-INGREDIENT': {
            let stateCopy = {...state}
            const filteredIngredient = initialState.filter(i => i.id !== id)
            stateCopy = filteredIngredient
            return stateCopy
        }
        default:
            return state
    }
}

export const addIngredientAC = (ingredient: string): AddIngredientType => {
    return {type: "ADD-INGREDIENT", ingredient}
}

export const addIngredientPriceAC = (ingredient: string, price: number): AddIngredientPriceType => {
    return {type: "ADD-INGREDIENT-PRICE", ingredient, price}
}

export const deleteIngredientAC = (id: string): DeleteIngredientType => {
    return {type: "DELETE-INGREDIENT", id}
}


