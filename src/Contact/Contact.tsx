import React from 'react';
import classes from './contact.module.css';
import styleContainer from '../common/styles/container.module.css'


function Contact() {
    return (
        <div className={classes.contactBlock}>
        <div className={`${styleContainer.container} ${classes.contactContainer}`}>
            <h2 className={classes.title}>Contact me</h2>
            <div className={classes.contactItems}>
                <div><input/></div>
                <div><input/></div>
                <div><textarea/></div>
                <button className={classes.button}>Send message</button>
            </div>
        </div>
        </div>
    )
}

export default Contact