import React from 'react';
import {ImageGallery} from '../Photo/ImageGallery';
import Paella from "../Paella/Paella";
import s from '../DashBoard/DashBoard.module.css'
import Weather from "../Weather/Weather";
import Taxi from "../Taxi/Taxi";
import Flight from "../Flight/Flight";
import Apartment from "../Apartment/Apartment";

const DashBoard = () => {

    return (
        <div className={s.position}>
            <div className={s.cell}>
                <Paella/>
                <Taxi/>
                <Flight/>
                <Apartment/>
                <Weather/>
                <ImageGallery/>
            </div>
        </div>
    )
}

export default DashBoard
