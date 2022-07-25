import React from 'react';
import {ImageGallery} from '../Photo/ImageGallery';
import Paella from "../Paella/Paella";
import s from '../DashBoard/DashBoard.module.css'

const DashBoard = () => {

    return (
        <div className={s.position}>
            <Paella/>
            Taxi
            Flight
            Apartment
            Weather
            <ImageGallery/>
        </div>
    )
}

export default DashBoard
