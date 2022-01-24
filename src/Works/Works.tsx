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
                    <Work title='Cats' description='I draw cats' image='https://cdn.mos.cms.futurecdn.net/AESHMNgFLdtaTbA7vsGjmn.jpg'/>
                    <Work title='Mountains' description='I construct mountains' image='https://cdn.britannica.com/73/189273-131-DA3E2F9A/Denali-peak-center-Alaska-Range-North-America.jpg'/>
                </div>
            </div>
        </div>
    );
}

export default Works