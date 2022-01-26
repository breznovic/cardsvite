import React from 'react';
import classes from './contact.module.css';
import styleContainer from '../common/styles/container.module.css'


function Contact() {
    return (
        <div className={classes.contactBlock}>
            <div className={`${styleContainer.container} ${classes.contactContainer}`}>
                <div className={classes.contactItems}>
                    <h2 className={classes.title}>Contact me</h2>
                    <div className={classes.contactItem}>
                        <div className={classes.item}><input/></div>
                        <div className={classes.item}><input/></div>
                        <div className={classes.item}><textarea/></div>
                        <button className={classes.button}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact