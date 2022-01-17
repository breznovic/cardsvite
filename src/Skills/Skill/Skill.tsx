import React from 'react';
import classes from './skill.module.css';

type PropsType = {
    title: string
    description: string
}

function Skill(props: PropsType) {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3>{props.title}</h3>
            <span className={classes.description}>
                {props.description}
            </span>
        </div>
    )
}

export default Skill