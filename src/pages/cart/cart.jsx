import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"; 
import { productsCart } from "./products-cart";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () =>{
    // return Object.keys(productsCart).map(id => productsCart[id].name)
    return <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
            <List xs={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ListItem 
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon/>
                    </IconButton>
                }
                alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText primary="Produto"
                    secondary={
                        <React.Fragment>
                            <Typography
                            sx={{display: 'inline' }}
                            component="span"
                            variant="h3"
                            color="GrayText.primary"
                            >
                                product description
                            </Typography>
                            { "..."}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}></Grid>
    </Grid>
}
export default Cart;