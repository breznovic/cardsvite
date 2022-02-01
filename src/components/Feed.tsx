import React from "react";
import {Container, Typography} from "@mui/material";
import Post from "./Post";

const Feed = () => {

    return (
        <div>
            <Container style={{paddingTop: '10px'}}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </Container>
        </div>
    )
}

export default Feed