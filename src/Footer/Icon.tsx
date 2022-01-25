import React from 'react';
import classes from './footer.module.css';

type PropsType = {
   icon: string
}

function Icon(props: PropsType) {
    return (
        <div className={classes.skill}>
            <div className={classes.icons}></div>
            <div>{props.icon}</div>
        </div>
    )
}

export default Icon