import React, {useState} from 'react'
import s from '../Paella/Paella.module.css'
import Input from "../Input/Input"
import {useDispatch, useSelector} from "react-redux"
import {addIngredientAC, deleteIngredientAC} from "../../store/ingredientsReducer"
import {AppRootState, IngredientType} from "../../store/store"

const Paella = () => {

    const dispatch = useDispatch()
    const ingredients = useSelector<AppRootState, IngredientType>((state) => state.ingredients)

    let [newIngredientTitle, setNewIngredientTitle] = useState('')
    const [newIngredientPrice, setNewIngredientPrice] = useState(0)
    const [toggle, setToggle] = useState(false)

    const addNewIngredient = () => {

        if (newIngredientTitle.trim() !== '') {
            dispatch(addIngredientAC(title, price))
            setNewIngredientTitle('')
            setNewIngredientPrice(0)
        }

        const deleteIngredient = (id: string) => {
           dispatch(deleteIngredientAC(id))
        }

        let paellaPrice = ingredients.map(i => i.price).reduce((prev, curr) => prev + curr, 0)

        let paellaIngredients = ingredients.map(i => (<div className={s.ingredients}>
            <ul key={i.id} className={s.title}>
                <li>{i.title}</li>
                <span className={s.basis}>Price: <span>&#8364;</span>{i.price}</span>
                <button className={s.buttonBasis} onClick={() => deleteIngredient}>-</button>
            </ul>
        </div>))

        return <div className={s.element}>
            <img
                src='https://images.aws.nestle.recipes/resized/efc1f7093ccb8a17d90b4f33d203a732_image-1_1500x700_708_600.jpg'
                className={s.paella}/>
            <div>
                <button onClick={() => setToggle(!toggle)} className={s.toggleButton}>
                    {!toggle ? 'Show ingredients' : 'Hide ingredients'}
                </button>
                {toggle && <div>
                    <Input setNewIngredientTitle={setNewIngredientTitle}
                           addNewIngredient={addNewIngredient}
                           newIngredientTitle={newIngredientTitle}
                           setNewIngredientPrice={setNewIngredientPrice}
                           newIngredientPrice={+newIngredientPrice}
                    />
                    {paellaIngredients}
                </div>
                }
            </div>
            <div className={s.text}>Paella price: <span>&#8364;</span>{Math.floor(paellaPrice * 100) / 100}</div>
        </div>
    }

    export default Paella
