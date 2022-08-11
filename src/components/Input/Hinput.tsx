import s from './Input.module.css'
import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    addNewIngredientPrice: () => void
    setNewIngredientPrice: (e: number) => void
    newIngredientPrice: number
}

const Hinput = ({addNewIngredientPrice, setNewIngredientPrice, newIngredientPrice}: PropsType) => {
    return <div>
        <div className={s.ingredient}>
            <div><input
                type='number'
                value={newIngredientPrice}
                placeholder={`Add your ingredient's price`}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredientPrice(+event.currentTarget.value)
                }}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.charCode === 13) {
                        addNewIngredientPrice()
                    }
                }}
            />
            </div>
            <button className={s.floatRight} onClick={addNewIngredientPrice}>+</button>
        </div>
    </div>
}

export default Hinput