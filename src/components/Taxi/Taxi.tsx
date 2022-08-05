import React from 'react';
import s from '../Taxi/Taxi.module.css'

const Taxi = () => {
    return (
        <div>
            <img src='https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/05/Taxi-Barcelona-1-scaled.jpg'
                 className={s.taxi}/>
            <div>Taxi price: 7 euro per km</div>
        </div>
    )
}

export default Taxi
