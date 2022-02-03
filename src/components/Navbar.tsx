import React from 'react'
import {AppBar, Avatar, Icon, InputBase, Toolbar, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import Badge, {BadgeProps} from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {deepOrange} from "@mui/material/colors";

const Navbar = () => {

    const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div>
            <AppBar style={{position:'static'}}>
                <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography variant="h6">
                        My project
                    </Typography>
                    <div style={{display: 'flex', alignItems: 'center', backgroundColor: 'rgba(39, 191, 245, 0.31)'}}>
                        <Search />
                        <InputBase placeholder='Search...' style={{color: 'whitesmoke', minWidth: '500px' }}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={0} color="secondary">
                                <ShoppingCartIcon/>
                            </StyledBadge>
                        </IconButton>
                        <Avatar sx={{bgcolor: deepOrange[500]}} variant="square">
                            N
                        </Avatar>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar