import React from 'react'
import classes from'./app.module.css'
import Header from "./Header/Header"
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";

function App() {
    return (
        <div className={classes.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
        </div>
    )
}

export default App;
