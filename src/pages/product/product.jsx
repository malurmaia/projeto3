import './product.css';
import { Button,
        Grid,
        TextField,
        Typography,
        Stack,
        IconButton,
        Chip,
        
} from "@mui/material";
import { useParams } from "react-router-dom";
import { products, categories } from "../catalog/products";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { valueToPercent } from '@mui/base';


const Product = () =>{
    const params = useParams();
    const [currentImage, setCurrentImage] = useState("");
    const [ quantity, setQuantity] = useState(1);
    
    useEffect(() =>{
        setCurrentImage(products[params.id].image[0]);
    }, [])
    const setImageToView = (position) => {
        setCurrentImage(products[params.id].image[position])
    }
    const changeQuantityButton = (value) => {
        if(quantity >=0){
            let result = quantity + value;
            if(result === -1){
                result = 0
            }
            setQuantity(result)

        }
    }
    return <Grid container spacing={2} className="product">
        <Grid item xs={12} sm={5} className="imageSide">
        <Stack className="imageSide_image">
            <div className='imageSide_image-item' style={{
                backgroundImage:`url(${currentImage})`
            }}></div>
        </Stack>
        <Stack direction="row" className="imageSide_images">
            {
                products[params.id].image.map((image, idx)=> <img onClick={()=>setImageToView(idx)} width="auto" height="104px" src={image} alt=""/>)
            }
        </Stack>
        </Grid>
        <Grid item xs={12} sm={7} className="productItem">
            <Typography variant="h4" component="h1" className="productItem_title">{products[params.id].name}</Typography>
            <div className='productItem_categories'>
                {
                    products[params.id].categories.map(categoryId => <Chip className="productItem_categories-label" label={categories[categoryId].name}/>)
                }
            </div>
            {
                products[params.id].promo_price ? <Typography variant="p" component="p" className="productItem_promo_price">{products[params.id].promo_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Typography> : ""
            }
            <Typography variant="p" component="p" className="productItem_price" style={{
                fontSize: products[params.id].promo_price ? '16px' : '20px',
                color: products[params.id].promo_price ? '#a9a9a9' : '#333333',
                textDecoration: products[params.id].promo_price ? 'line-through' : 'none',
            }}>{products[params.id].price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Typography>
            <Typography variant="p" component="p" className="productItem_description">{products[params.id].description}</Typography>
            <div className='productItem_quantity'>
                <IconButton onClick={() => changeQuantityButton(-1)}>
                    <RemoveIcon color='primary'/>
                </IconButton>
                <TextField size="small" type="number" value={quantity} onChange={(event)=>{ setQuantity(event.target.value)}}/>
                <IconButton onClick={()=> changeQuantityButton(1)}>
                    <AddIcon color='primary'/>
                </IconButton>
            </div>
            <Button size="large" variant="contained" endIcon={<ShoppingBagIcon/>}
            className="productItem_buy">Comprar</Button>
        </Grid>
    </Grid>
}
       
export default Product;