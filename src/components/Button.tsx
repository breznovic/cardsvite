import React from "react";
import {Button} from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const ButtonA = () => {

    return (
        <div>
            <Button variant='contained' startIcon={<AcUnitIcon/>} style={{backgroundColor: 'deepskyblue'}}>
                Material UI
            </Button>
        </div>
    )
}

export default ButtonA