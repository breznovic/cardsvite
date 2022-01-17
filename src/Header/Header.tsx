import React from 'react';
import classes from './header.module.css';
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={classes.header}>
            <Nav/>
        </div>
    );
}

export default Header
