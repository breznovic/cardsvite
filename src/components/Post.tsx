import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography} from "@mui/material";

type PropsType = {
    text: string
}

const Post = (props: PropsType) => {

    return (
        <div>
            <Container style={{paddingTop: '10px'}}>
                <Card>
                    <CardActionArea>
                        <img src='https://core.brusselstimes.com/wp-content/uploads/2021/07/dfgfdgfdgsdfdg.jpeg'
                             style={{maxHeight: '50px'}}/>
                        <CardMedia
                        title='My post'/>
                        <CardContent>
                            <Typography variant='h5'>My first post</Typography>
                            <Typography variant='body1'><p>{props.text}</p></Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{display:'flex', justifyContent:'center'}}>
                        <Button size='small' color='primary'>Share</Button>
                        <Button size='small' color='primary'>Learn more</Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default Post