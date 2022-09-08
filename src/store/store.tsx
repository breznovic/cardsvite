import React from "react"
import {combineReducers, createStore} from "redux"
import {ingredientsReducer} from "./ingredientsReducer"

export type AppRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    ingredients: ingredientsReducer
})

export const store = createStore(rootReducer)









