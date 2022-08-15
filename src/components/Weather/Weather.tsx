import React from 'react'
import s from '../Weather/Weather.module.css'
import axios from "axios";

const Weather = () => {

    const axios = require('axios')

    // axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={'18f7250b269e792fcb1845e3526767b9'}`).then(res => {
    //
    // })

    return (
        <div className={s.element}>
            <img src='https://www.offalyexpress.ie/resizer/-1/-1/true/1530458397892.jpg--.jpg?1530458397000'
                 className={s.sunny}/>
        </div>
    )
}

export default Weather





