import React, {useState} from 'react'
import s from '../Paella/Paella.module.css'
import {IngredientsType, IngredientType} from "../../store/Ingredients";
import {v1} from "uuid";
import Input from "../Input/Input";

type PropsType = { ingredients: IngredientsType }

const Paella = (props: PropsType) => {

    let [ingredientList, setIngredientList] = useState<IngredientsType>(props.ingredients)
    let [newIngredientTitle, setNewIngredientTitle] = useState('')
    const [newIngredientPrice, setNewIngredientPrice] = useState('')
    const [toggle, setToggle] = useState(false)

    const addNewIngredientTitle = () => {
        let newIngredient = {id: v1(), ingredient: newIngredientTitle, price: 0}
        let newIngredientsList = [newIngredient, ...ingredientList]
        setIngredientList(newIngredientsList)
        setNewIngredientTitle('')
        let newIngredientCost: IngredientType = {id: v1(), ingredient: newIngredientTitle, price: +newIngredientPrice}
        let newIngredientsPriceList: IngredientsType = [newIngredientCost, ...ingredientList]
        setIngredientList(newIngredientsPriceList)
        setNewIngredientPrice('')
    }

    const deleteIngredient = (id: string) => {
        let filteredIngredient = ingredientList.filter(i => i.id !== id)
        setIngredientList(filteredIngredient)
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
        <div>
            <button onClick={() => setToggle(!toggle)} className={s.toggleButton}>Show ingredients</button>
            {toggle && (
                <div>
                    {paellaIngredients}
                    <Input setNewIngredientTitle={setNewIngredientTitle}
                           addNewIngredientTitle={addNewIngredientTitle}
                           newIngredientTitle={newIngredientTitle}
                           setNewIngredientPrice={setNewIngredientPrice}
                           newIngredientPrice={+newIngredientPrice}
                    />
                </div>
            )}
        </div>
        <div className={s.text}>Paella price: {Math.floor(paellaPrice * 100) / 100} euro</div>
    </div>
}

export default Paella
