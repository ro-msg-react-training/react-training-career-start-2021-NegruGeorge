import React, { useEffect, useState } from "react";
import useProductStyles from "./product.styles";
import {  Grid } from "@material-ui/core";
import Typeograpy from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import axios from "axios";
import {url} from "../../utils/Api";



const ProductC = (props:any) => {
  let prodId: number = props.product.id;

  const [fullproduct,setfullproduct] = useState({
    id: 1,
    name: "12",
    category: "3",
    price: 1,
    image: "2",
    description: "2",
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
          to={{ pathname: `/products/${props.product.id}`, state: { product: fullproduct } }}
        >
          <Typeograpy className={classes.button}>Details</Typeograpy>
        </Link>
      </Grid>
    </Grid>
  );
};
export default ProductC;
