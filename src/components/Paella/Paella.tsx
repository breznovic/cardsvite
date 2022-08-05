import React, {useState} from 'react'
import s from '../Paella/Paella.module.css'
import {IngredientsType} from "../../store/Ingredients";

type PropsType =  {ingredients: IngredientsType}

const Paella = (props: PropsType) => {

    let [delIngredient, setDelIngredient] = useState(props.ingredients)
    console.log(delIngredient)
    const deleteIngredient = (id: string) => {
        let filteredIngredient = delIngredient.filter(i => i.id !== id)
        setDelIngredient(filteredIngredient)
    }

    let paellaPrice = delIngredient.map(i => i.price).reduce((prev, curr) => prev + curr, 0)

    let paellaIngredients = delIngredient.map(i => (<div className={s.ingredients}>
        <ul key={i.id} className={s.ingredient}>
            {i.ingredient}
            <button className={s.floatRight} onClick={() => deleteIngredient(i.id)}>-</button>
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
