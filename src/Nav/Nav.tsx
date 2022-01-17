import React from 'react';
import classes from './nav.module.css';

function Nav() {
    return (
        <div className={classes.nav}>
            <a href=''>Main</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Contact Me</a>
        </div>
    );
}

export default Nav