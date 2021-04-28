import React, { useEffect, useState } from "react";
import useProductStyles from "./product.styles";
import { Button, Grid } from "@material-ui/core";
import Typeograpy from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Product from "../../models/Product";
import axios from "axios";
import {url} from "../../utils/Api";
import ProductHeader from "../../models/ProductHeader";

const ProductC = (props: ProductHeader) => {
  let prodId: number = props.id;

  const [fullproduct,setfullproduct] = useState({
    id: 1,
    name: "",
    category: "",
    price: 1,
    image: "",
    description: "",
  })

  useEffect(()=>{
    async function GetFullProduct(){
      let response = await axios.get(`${url}/products/${prodId}`)
      setfullproduct(response.data);
    }
  
    GetFullProduct();

  })

  const classes = useProductStyles();
  return (
    <Grid container className={classes.product}>
      <Grid item className={classes.headProd}>
        <Typeograpy >{fullproduct.name}</Typeograpy>
        <Typeograpy className={classes.prodcategory}>
          ({fullproduct.category})
        </Typeograpy>
      </Grid>
      <Grid item>
        <img
          className={classes.imgProduct}
          src={` ${fullproduct.image} `}
          alt=""
        />
      </Grid>

      <Grid item className={classes.footProd}>
        <Typeograpy className={classes.price}>{fullproduct.price}$</Typeograpy>
        <Link
          to={{ pathname: `/products/${props.id}`, state: { product: fullproduct } }}
        >
          <Typeograpy className={classes.button}>Details</Typeograpy>
        </Link>
      </Grid>
    </Grid>
  );
};
export default ProductC;
