import {v1} from 'uuid'

export type IngredientType = {
    id: string
    ingredient: string
    price: number
}

export type IngredientsType = IngredientType[]

let ingredients = [
    {id: v1(), ingredient: 'Onion', price: 0.14},
    {id: v1(), ingredient: 'Bell pepper', price: 1},
    {id: v1(), ingredient: 'Tomatoes', price: 0.39},
    {id: v1(), ingredient: 'Parsley', price: 1},
    {id: v1(), ingredient: 'Frozen peas', price: 1},
    {id: v1(), ingredient: 'Bay leaf', price: 1},
    {id: v1(), ingredient: 'Paprika', price: 1},
    {id: v1(), ingredient: 'Saffron', price: 1},
    {id: v1(), ingredient: 'Salt', price: 1},
    {id: v1(), ingredient: 'Pepper', price: 1},
    {id: v1(), ingredient: 'Shrimp', price: 1},
    {id: v1(), ingredient: 'Mussels', price: 1},
    {id: v1(), ingredient: 'Calamari', price: 1},
    {id: v1(), ingredient: 'Olive oil', price: 1},
    {id: v1(), ingredient: 'White wine', price: 1},
    {id: v1(), ingredient: 'Rice', price: 0.65},
]

export default ingredients