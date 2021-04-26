import React from 'react';
import useProductStyles from "./product.styles"
import { Button,Grid} from "@material-ui/core";
import Typeograpy from "@material-ui/core/Typography"
import { Link } from "react-router-dom";


export interface Produs {
    id:number,
    name:String,
    category:String,
    price: number,
    imageUrl: String
}


const Product = ( props:Produs ) =>{
    let prodId:number = props.id;
    
    const classes = useProductStyles();
    return(
    <Grid container className={classes.product}>
        <Grid item className={classes.headProd}>
            <Typeograpy className={classes.prodName}>{props.name}</Typeograpy>
            <Typeograpy className={classes.prodcategory}>({props.category})</Typeograpy>
        </Grid>
        <Grid item>
            <img className={classes.imgProduct} src= { ` ${props.imageUrl} ` } alt=""  />
        </Grid>
        
        <Grid item className={classes.footProd}>
            <Typeograpy className={classes.price}>{props.price}$</Typeograpy> 
            <Link to= {{pathname: `/products/${props.id}`, state: {product :props} } }  >
                 <Typeograpy  className={classes.button}>Details</Typeograpy>
            </Link>
      
        </Grid>

    </Grid>

)}
export default Product;
