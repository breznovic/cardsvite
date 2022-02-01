import React from 'react'
import classes from './app.module.css'
import Navbar from "./components/Navbar";
import {Grid} from "@mui/material";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {

    return (
        <div className={classes.app}>
            <div><Navbar/>
                <Grid container>
                    <Grid item sm={2}><Leftbar/></Grid>
                    <Grid item sm={7}><Feed/></Grid >
                    <Grid item sm={3}><Rightbar/></Grid>
                </Grid>
            </div>
        </div>
    )
}

export default App;
