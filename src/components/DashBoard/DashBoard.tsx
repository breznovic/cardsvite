import React, {useState} from 'react';
import {ImageGallery} from '../Photo/ImageGallery';
import Paella from "../Paella/Paella";
import s from '../DashBoard/DashBoard.module.css'
import Weather from "../Weather/Weather";
import Flight from "../Flight/Flight";
import Apartment from "../Apartment/Apartment";
import {IngredientsType} from "../../store/Ingredients";

type PropsType = { ingredients: IngredientsType }

const DashBoard = (props: PropsType) => {

    return (
        <div className={s.image}>
            <div className={s.position}>
                <div className={s.element}><Paella ingredients={props.ingredients}/></div>
                <div className={s.element}><Apartment/></div>
                <div className={s.element}><Flight/></div>
                <div className={s.element}><Weather/></div>
                <div className={s.element}><ImageGallery/></div>
            </div>
        </div>
    )
}

export default DashBoard
