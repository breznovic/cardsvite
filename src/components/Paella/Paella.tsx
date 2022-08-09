import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import s from '../Paella/Paella.module.css'
import {IngredientsType} from "../../store/Ingredients";
import {v1} from "uuid";

type PropsType = { ingredients: IngredientsType }

const Paella = (props: PropsType) => {

    let [ingredientList, setIngredientList] = useState(props.ingredients)
    let [newIngredientTitle, setNewIngredientTitle] = useState('')

    const deleteIngredient = (id: string) => {
        let filteredIngredient = ingredientList.filter(i => i.id !== id)
        setIngredientList(filteredIngredient)
    }

    function addNewIngredient() {
        let newIngredient = {id: v1(), ingredient: newIngredientTitle, price: 0.77}
        let newIngredientsList = [newIngredient, ...ingredientList]
        setIngredientList(newIngredientsList)
        setNewIngredientTitle('')
    }

    let paellaPrice = ingredientList.map(i => i.price).reduce((prev, curr) => prev + curr, 0)

    let paellaIngredients = ingredientList.map(i => (<div className={s.ingredients}>
        <ul key={i.id} className={s.ingredient}>
            {i.ingredient}
            <button className={s.floatRight} onClick={() => deleteIngredient(i.id)}>-</button>
        </ul>
    </div>))

    return <div>
        <img
            src='https://images.aws.nestle.recipes/resized/efc1f7093ccb8a17d90b4f33d203a732_image-1_1500x700_708_600.jpg'
            className={s.paella}/>
        {paellaIngredients}
        <div className={s.ingredient}>
            <input
                value={newIngredientTitle}
                placeholder={'Add your ingredient'}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredientTitle(event.currentTarget.value)
                }}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.charCode === 13) {
                        addNewIngredient()
                    }
                }}
            />
            <button className={s.floatRight} onClick={addNewIngredient}>+</button>
        </div>
        <div>Paella price: {Math.floor(paellaPrice * 100) / 100} euro</div>
    </div>
}

export default Paella
