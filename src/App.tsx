import React from 'react'
import DashBoard from './components/DashBoard/DashBoard';
import {IngredientsType} from "./store/store";

function App() {

    return (
        <div>
           <DashBoard ingredients={ingredients}/>
        </div>
    )
}

export default App;
