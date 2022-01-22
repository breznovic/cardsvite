import React from 'react';
import classes from './work.module.css';

type PropsType = {
    title: string
    description: string
}

function Work(props: PropsType) {
    return (
        <div className={classes.skill}>

            <button className={classes.button}>Watch</button>

            <h3>{props.title}</h3>
            <span className={classes.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Work