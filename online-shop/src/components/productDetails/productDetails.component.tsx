import { Grid, Typography ,Button} from "@material-ui/core";
import React from "react";
import  {Produs} from "../product/product.component"
import useProductDetailsStyles from "./productDetails.styles"


const ProductDetails = (props:any) =>{
    const classes = useProductDetailsStyles();
    const { product } = props.location.state;
    return(
        <Grid container className={classes.containerGrid}>
            <Grid item>
                <img className={classes.imgProduct} src= { ` ${product.imageUrl} ` } alt=""  />
            </Grid>

            <Grid item>
                <Typography>{product.name}  ({product.category})</Typography>
            </Grid>
            <Grid item>
            <Typography>{product.price}$</Typography>
            </Grid>
            
            <Grid item>
                    <Button>Add to Cart</Button>                    
            </Grid>
                
        </Grid>
    );
}

export default ProductDetails;