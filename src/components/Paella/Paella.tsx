import React, {MouseEventHandler, useState} from 'react'
import {v1} from 'uuid'
import s from '../Paella/Paella.module.css'

const Paella = () => {

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

    let [delIngredient, setDelIngredient] = useState(ingredients)

    const deleteIngredient = (id: string) => {
        let filteredIngredient = delIngredient.filter(i => i.id !== id)
        setDelIngredient(filteredIngredient)
    }

    let paellaPrice = ingredients.map(i => i.price).reduce((prev, curr) => prev + curr, 0)

    let paellaIngredients = ingredients.map(i => (<div className={s.ingredient}>
        <ul key={i.id}>
            {i.ingredient}
            <button className={s.floatRight} onClick={() => deleteIngredient}>-</button>
        </ul>
    </div>))

    return <div>
        <div><img
            src='https://images.aws.nestle.recipes/resized/efc1f7093ccb8a17d90b4f33d203a732_image-1_1500x700_708_600.jpg'
            className={s.paella}/></div>
        {paellaIngredients}
        <div>Paella price: {Math.floor(paellaPrice * 100) / 100} euro</div>
    </div>
}

export default Paella
