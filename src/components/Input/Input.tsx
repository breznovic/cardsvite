import s from './Input.module.css'
import React, {ChangeEvent, KeyboardEvent, useState} from "react"

type PropsType = {
    addNewIngredient: (title: string, price: number) => void
    setNewIngredientTitle: (e: string) => void
    newIngredientTitle: string
    setNewIngredientPrice: (e: number) => void
    newIngredientPrice: number
}

const Input = (props: PropsType) => {

    return (
        <div className={s.title}>
            <div className={s.ingredients}>
                <input
                    value={props.newIngredientTitle}
                    placeholder={'Add your ingredient'}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        props.setNewIngredientTitle(e.currentTarget.value)
                    }}
                    onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.charCode === 13) {
                            props.addNewIngredient(props.newIngredientTitle, props.newIngredientPrice)
                        }
                    }}
                />
                <input
                    min={0}
                    type='number'
                    value={props.newIngredientPrice || ''}
                    placeholder={`Add your ingredient's price`}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        props.setNewIngredientPrice(+event.currentTarget.value)
                    }}
                    onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.charCode === 13) {
                            props.addNewIngredient(props.newIngredientTitle, props.newIngredientPrice)
                        }
                    }}
                />
                <button className={s.button} onClick={() =>  props.addNewIngredient(props.newIngredientTitle, props.newIngredientPrice)}>+</button>
            </div>
        </div>
    )
}

export default Input