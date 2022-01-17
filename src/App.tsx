import React from 'react'
import classes from'./app.module.css'
import Header from "./Header/Header"
import Main from "./Main/Main";

function App() {
    return (
        <div className={classes.app}>
            <Header/>
            <Main/>
        </div>
    )
}

export default App;
