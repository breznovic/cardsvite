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
                    <Skill title='HTML/CSS' description='Write tags, many, many tags everywhere'/>
                    <Skill title='JavaScript' description='Know about arrays and so on, my knowledge beyond the limits'/>
                    <Skill title='React' description='Use hooks and this is only beginning, yes, guys!'/>
                </div>
            </div>
        </div>
    );
}

export default Skills