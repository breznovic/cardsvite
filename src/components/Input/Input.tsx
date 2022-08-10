import s from './Input.module.css'
import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    addNewIngredientTitle: () => void
    setNewIngredientTitle: (e: string) => void
    newIngredientTitle: string
}

const Input = ({addNewIngredientTitle, setNewIngredientTitle, newIngredientTitle}: PropsType) => {
    return <div>
        <div className={s.ingredient}>
            <div><input
                value={newIngredientTitle}
                placeholder={'Add your ingredient'}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredientTitle(event.currentTarget.value)
                }}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.charCode === 13) {
                        addNewIngredientTitle()
                    }
                }}
            />
            </div>
            <button className={s.floatRight} onClick={addNewIngredientTitle}>+</button>
        </div>
    </div>
}

export default Input