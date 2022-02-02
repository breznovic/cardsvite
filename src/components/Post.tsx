import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Container, Typography} from "@mui/material";

const Post = () => {

    return (
        <div>
            <Container style={{paddingTop: '10px'}}>
                <Card>
                    <CardActionArea>
                        <div></div>
                        <img src='https://core.brusselstimes.com/wp-content/uploads/2021/07/dfgfdgfdgsdfdg.jpeg'
                             style={{maxHeight: '50px'}}/>
                        <CardMedia
                        title='My post'/>
                        <CardContent>
                            <Typography variant='h5'>My first post</Typography>
                            <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, placeat!</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    )
}

export default Post