import React from "react";
import {Container, Typography} from "@mui/material";
import Post from "./Post";

const Feed = () => {

    return (
        <div>
            <Container style={{paddingTop:'10px'}}>
                <Post text='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'/>
                <Post text='emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '/>
                <Post text='Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. '/>
                <Post text='Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur? '/>
            </Container>
        </div>
    )
}

export default Feed