import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from '../Paella/Paella.module.css'
import {v1} from 'uuid'
import {IngredientsType} from '../../store/Ingredients'

type PropsType = {
    ingredients: IngredientsType
    placeholder: string
}

const Input = (props: PropsType) => {

    let [ingredientList, setIngredientList] = useState(props.ingredients)

    return <div>
        <div className={s.ingredient}>
            <div><input
                value={newIngredientItem}
                placeholder={props.placeholder}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredientItem(event.currentTarget.value)
                }}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.charCode === 13) {
                        addNewIngredient()
                    }
                }}
            />
            </div>
            <button className={s.floatRight} onClick={addNewIngredient}>+</button>
        </div>
    </div>
}

export default Input
