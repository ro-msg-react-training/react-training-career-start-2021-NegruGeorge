import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import useProductDetailsStyles from "./productDetails.styles";
import axios from "axios";
import {url} from "../../utils/Api"
import {useHistory,Link} from "react-router-dom"

async function deleteProd(prodId:number){
  await axios.delete(`${url}/products/${prodId}`);
}


const ProductDetails = (props: any) => {
  let history = useHistory();

  function handleHistroy()
  {
    history.push("/products");
  }

  const classes = useProductDetailsStyles();
  const { product } = props.location.state;
  return (
    <Grid container className={classes.containerGrid}>
      <Grid item>
        <img
          className={classes.imgProduct}
          src={` ${product.image} `}
          alt=""
        />
      </Grid>
      <Grid item>
        <Typography>
          {product.name} ({product.category})
        </Typography>
      </Grid>

      <Grid item>
        <Typography className={classes.prodDescription}>
          {product.description} ({product.category})
        </Typography>
      </Grid>
      <Grid item>
        <Typography>{product.price}$</Typography>
      </Grid>
      <Grid item>
        <Link to="/cart">
        <Button >Add to Cart</Button>
        </Link>
        
        <Button  onClick={()=>{
          deleteProd(product.id);
          handleHistroy();
          
        }} >Delete :(</Button>
      </Grid>
    </Grid>
  );
};
export default ProductDetails;
