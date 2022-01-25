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
            <div style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 500,
                width: 500,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <button className={classes.button}>Watch</button>
            </div>
            <h3>{props.title}</h3>
            <span className={classes.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Work