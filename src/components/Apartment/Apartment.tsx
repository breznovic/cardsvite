import React, {useState} from 'react'
import s from '../Apartment/Apartment.module.css'
import apartments from "../../store/Apartments"
import {Rating} from "@mui/material";

const Apartment = () => {

    const [toggle, setToggle] = useState(false)

    let apartmentsForChoose = apartments.map(a => (
        <ul key={a.id}>
            <div className={s.elements}>
                <div><img src={a.apartmentPhoto} className={s.photo}/></div>
                <div>Price: &#8364;{a.monthPrice}/month</div>
                <div>Address: {a.address}</div>
                <div>Space: {a.space}</div>
            </div>
            <Rating className={s.rating}/>
        </ul>
    ))

    return <div className={s.element}>
        <img src='https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/15/db/63/caption.jpg'
             className={s.apartment}/>
        <button onClick={() => setToggle(!toggle)} className={s.toggleButton}>
            {!toggle ? 'Show apartments' : 'Hide apartments'}
        </button>
        {toggle && <div>{apartmentsForChoose}</div>}
    </div>
}

export default Apartment
