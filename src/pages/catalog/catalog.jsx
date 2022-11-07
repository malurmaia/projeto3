import { products } from "./products";
import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const Catalog = () =>{
    return <Grid container spacing={6}>
        {
            products.map(product => {
                return <Grid item xs={12} sm={6} md={4} lg={3}>
                    <img style={{
                        width:'100%'
                    }} src={product.image}/>
                    <Typography variant="h4" componet="h2">{product.name}</Typography>
                    <Typography variant="p" component="p">{product.description.substring(0,120)}...</Typography>
                    <Link to={"product/" + product.id}> <Button fullWidth variant="contained">Ver produto</Button></Link>
                </Grid>
            })
        }
    </Grid>
}
export default Catalog;