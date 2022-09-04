import React from "react"
import {IngredientsType, IngredientType} from "./store"
import {v1} from "uuid";

type AddIngredientType = {
    type: 'ADD-INGREDIENT'
    newIngredientTitle: string
}

type ActionsType = AddIngredientType

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
            if (newIngredientTitle.trim() !== '') {
                let newIngredient = {id: v1(), ingredient: newIngredientTitle, price: 0}
                let newIngredientsList = [newIngredient, ...ingredientList]
                setIngredientList(newIngredientsList)
                setNewIngredientTitle('')
                let newIngredientCost: IngredientType = {
                    id: v1(),
                    ingredient: newIngredientTitle,
                    price: +newIngredientPrice
                }
                let newIngredientsPriceList: IngredientsType = [newIngredientCost, ...ingredientList]
                setIngredientList(newIngredientsPriceList)
                setNewIngredientPrice(0)
            }
        }
        default:
            return state
    }
}

export const addIngredientAC = (newIngredientTitle: string): AddIngredientType => {
    return {type: "ADD-INGREDIENT", newIngredientTitle}
}


