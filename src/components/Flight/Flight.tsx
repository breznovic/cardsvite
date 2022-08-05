import React from 'react'
import s from '../Flight/Flight.module.css'
import axios from 'axios'

const Flight = () => {

    const options = {
        method: 'GET',
        url: 'https://aerodatabox.p.rapidapi.com/flights/%7BsearchBy%7D/KL1395/2020-06-10',
        headers: {
            'X-RapidAPI-Key': '63ae742d18msh30587d09d6ca28dp1de266jsn334bc5fa6427',
            'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com'
        }
    }

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    })

    return (
        <div>
            <img src='http://hcchotels2019.webs3.mirai.es/files/vuelos-a-Barcelona.jpg'
                 className={s.flight}/>
        </div>
    )
}

export default Flight
