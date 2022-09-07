import React from 'react'
import s from "./App.module.css"
import Paella from "./components/Paella/Paella"
import Apartment from "./components/Apartment/Apartment"
import Flight from "./components/Flight/Flight"
import Weather from "./components/Weather/Weather"
import {ImageGallery} from "./components/Photo/ImageGallery"

function App() {

    return <div className={s.image}>
            <div className={s.position}>
                <div className={s.element}><Paella/></div>
                <div className={s.element}><Apartment/></div>
                <div className={s.element}><Flight/></div>
                <div className={s.element}><Weather/></div>
                <div className={s.element}><ImageGallery/></div>
            </div>
        </div>
}

export default App
