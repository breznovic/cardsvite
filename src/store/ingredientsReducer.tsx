import React from "react"
import {v1} from "uuid"

export type IngredientType = {
    id: string
    title: string
    price: number
}

type AddIngredientType = {
    type: 'ADD-INGREDIENT'
    title: string
    price: number
}

type DeleteIngredientType = {
    type: 'DELETE-INGREDIENT'
    id: string
}

type ChangeIngredientTitleType = {
    type: 'CHANGE-ING-TITLE'
    id: string
    newTitle: string
}

export type IngredientsType = {
    ingredients: IngredientType[]
}

type ActionsType = AddIngredientType | DeleteIngredientType | ChangeIngredientTitleType

const initialState: IngredientsType = {
    ingredients: [
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
}

export const ingredientsReducer = (state: IngredientsType = initialState, action: ActionsType): IngredientsType => {
    switch (action.type) {
        case 'ADD-INGREDIENT': {
            const newIngredient: IngredientType = {id: v1(), title: action.title, price: action.price}
            return {
                ...state, ingredients: [newIngredient, ...state.ingredients]
            }
        }

        case 'DELETE-INGREDIENT': {
            const newIngredientList: IngredientType[] = state.ingredients.filter(i => i.id !== action.id)
            const copyState = {...state}
            copyState.ingredients = newIngredientList
            return copyState
        }

        case 'CHANGE-ING-TITLE': {
            const newIngredientList: IngredientType[] = state.ingredients.map
            (i => i.id === action.id ?
                {...i, title: action.newTitle} : i)
            const copyState = {...state}
            copyState.ingredients = newIngredientList
            return copyState
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

export const changeIngredientTitleAC = (newTitle: string, id: string): ChangeIngredientTitleType => {
    return {type: 'CHANGE-ING-TITLE', newTitle, id}
}


