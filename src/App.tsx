import React from 'react'
import DashBoard from './components/DashBoard/DashBoard';
import {IngredientsType} from "./store/Ingredients";

function App(props: {ingredients: IngredientsType }) {

    return (
        <div>
           <DashBoard ingredients={props.ingredients}/>
        </div>
    )
}

export default App;
