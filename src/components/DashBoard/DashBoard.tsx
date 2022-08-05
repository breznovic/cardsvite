import React from 'react';
import {ImageGallery} from '../Photo/ImageGallery';
import Paella from "../Paella/Paella";
import s from '../DashBoard/DashBoard.module.css'
import Weather from "../Weather/Weather";
import Taxi from "../Taxi/Taxi";
import Flight from "../Flight/Flight";
import Apartment from "../Apartment/Apartment";
import {IngredientsType} from "../../store/Ingredients";

type PropsType =  {ingredients: IngredientsType}

const DashBoard = (props: PropsType) => {

    return (
        <div className={s.position}>
            <Paella ingredients={props.ingredients}/>
            <Taxi/>
            <Flight/>
            <Apartment/>
            <Weather/>
            <ImageGallery/>
        </div>
    )
}

export default DashBoard
