import React from 'react';
import classes from './footer.module.css';
import Icon from "./Icon";

function Footer() {
    return (
        <div className={classes.footer}>
            <h3 className={classes.title}>Evgeniy Berezkin</h3>
            <div className={classes.items}>
                <Icon icon='Telegram'/>
                <Icon icon='Email'/>
                <Icon icon='GitHub'/>
            </div>
            <div>
                <span><p>2022 &copy; All rights reserved</p></span>
            </div>
            </div>
    );
}

export default Footer
