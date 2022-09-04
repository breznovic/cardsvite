import React from "react"
import {combineReducers, createStore} from "redux"
import {ingredientsReducer} from "./ingredientsReducer"

export type IngredientType = {
    id: string
    ingredient: string
    price: number
}

export type IngredientsType = IngredientType[]

export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    ingredients: ingredientsReducer
})

export const store = createStore(rootReducer)









