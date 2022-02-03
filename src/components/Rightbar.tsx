import React from "react";
import {Avatar, AvatarGroup, Container, Typography} from "@mui/material";

const Rightbar = () => {

        return (
            <div>
                <Container
                    style={{paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <Typography variant='h5'>Online friends</Typography>
                    <AvatarGroup max={6}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg"/>
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg"/>
                        <Avatar alt="Trevor Terferson" src="/static/images/avatar/6.jpg"/>
                    </AvatarGroup>
                </Container>
            </div>
        )
    }

    export default Rightbar