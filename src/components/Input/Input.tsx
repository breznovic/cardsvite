import s from './Input.module.css'
import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    addNewIngredientTitle: () => void
    setNewIngredientTitle: (e: string) => void
    newIngredientTitle: string
    setNewIngredientPrice: any
    newIngredientPrice: number
}

const Input = (props: PropsType) => {
    return <div>
        <div className={s.ingredient}>
                <div className={s.ingredients}>
                    <input
                    value={props.newIngredientTitle}
                    placeholder={'Add your ingredient'}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        props.setNewIngredientTitle(event.currentTarget.value)
                    }}
                    onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                        if (e.charCode === 13) {
                            props.addNewIngredientTitle()
                        }
                    }}
                />
                    <input
                        type='number'
                        value={props.newIngredientPrice}
                        placeholder={`Add your ingredient's price`}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            props.setNewIngredientPrice(+event.currentTarget.value)
                        }}
                    />
                    <button className={s.floatRight} onClick={props.addNewIngredientTitle}>+</button>
                </div>
        </div>
    </div>
}

export default Input