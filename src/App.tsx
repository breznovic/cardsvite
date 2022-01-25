import React from 'react'
import classes from'./app.module.css'
import Header from "./Header/Header"
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className={classes.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;
