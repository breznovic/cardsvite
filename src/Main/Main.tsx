import React from 'react';
import classes from './main.module.css';
import styleContainer from '../common/styles/container.module.css';

function Main() {
    return (
        <div className={classes.mainBlock}>
            <div className={styleContainer.container}>
                <div className={classes.text}>
                    <span>Hi there!</span>
                    <h1>I am Evgeniy Berezkin</h1>
                    <p>Frontend developer</p>
                </div>
                    <div className={classes.photo}></div>
                </div>
            </div>
            );
            }

            export default Main
