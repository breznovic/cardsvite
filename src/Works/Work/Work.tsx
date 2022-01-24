import React from 'react';
import classes from './work.module.css';

type PropsType = {
    title: string
    description: string
    image: string
}

function Work(props: PropsType) {
    return (
        <div className={classes.skill}>
            <img className={classes.image} src={props.image}/>
                <button className={classes.button}>Watch</button>
            <h3>{props.title}</h3>
            <span className={classes.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Work