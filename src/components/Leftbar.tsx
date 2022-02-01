import React from "react";
import {Container, Typography} from "@mui/material";
import {Home} from "@mui/icons-material";
import classes from "../app.module.css";
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

const Leftbar = () => {

    return (
        <div>
            <Container style={{paddingTop: '10px'}}>
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', backgroundColor: 'darkblue', height: '87vh', color: 'white',
                    paddingTop: '30px'
                }}>
                    <Home/>
                    <Typography className={classes.home}>Homepage</Typography>
                    <AddCardIcon/>
                    <Typography className={classes.home}>Payments</Typography>
                    <AccountBalanceIcon/>
                    <Typography className={classes.home}>Banks</Typography>
                    <FingerprintIcon/>
                    <Typography className={classes.home}>Security</Typography>
                </div>
            </Container>
        </div>
    )
}

export default Leftbar