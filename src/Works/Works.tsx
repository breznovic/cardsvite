import React from 'react';
import classes from './works.module.css';
import styleContainer from '../common/styles/container.module.css'
import Work from "./Work/Work";

function Works() {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>My works</h2>
                <div className={classes.skills}>
                    <Work title='HTML/CSS' description='Write tags'/>
                    <Work title='JavaScript' description='Know about arrays'/>
                </div>
            </div>
        </div>
    );
}

export default Works