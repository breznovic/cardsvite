import React from 'react'
import {v1} from 'uuid'
import s from '../Paella/Paella.module.css'

const Paella = () => {

    let ingredients = [
        {id: v1(), ingredient: 'Onion', price: 1},
        {id: v1(), ingredient: 'Bell pepper', price: 1},
        {id: v1(), ingredient: 'Tomatoes', price: 1},
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
        {id: v1(), ingredient: 'Rice', price: 1},
    ]

    let paellaPrice = ingredients.map(i => i.price).reduce((prev, curr) => prev + curr, 0)

    return (
        <div>
            <img
                src='https://images.aws.nestle.recipes/resized/efc1f7093ccb8a17d90b4f33d203a732_image-1_1500x700_708_600.jpg'
                className={s.paella}/>
            <div>Paella price: {paellaPrice} euro</div>
        </div>
    )
}

export default Paella;
