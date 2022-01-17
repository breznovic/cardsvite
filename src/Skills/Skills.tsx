import React from 'react';
import classes from './skills.module.css';
import styleContainer from '../common/styles/container.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>My skills</h2>
                <div className={classes.skills}>
                    <Skill title='HTML/CSS' description='Write tags'/>
                    <Skill title='JavaScript' description='Know about arrays'/>
                    <Skill title='React' description='Use hooks'/>
                </div>
            </div>
        </div>
    );
}

export default Skills