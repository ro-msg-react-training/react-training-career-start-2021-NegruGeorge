import { Grid } from "@material-ui/core";
import React from "react";
import Product, {Produs} from "../product/product.component"
import useListProductStyles from "./listProducts.styles";


const productsList: Array<Produs>= 
[ {id:1,name:"tv", category:"electronics", price:100, imageUrl:"https://images.unsplash.com/photo-1579894059380-1866b68bce6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"},
  {id:2,name:"cable", category:"electronics", price:10, imageUrl:"https://images.unsplash.com/photo-1572721546624-05bf65ad7679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"},
  {id:3,name:"milk", category:"food", price:15, imageUrl:"https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80"},
  {id:4,name:"bread", category:"food", price:3, imageUrl:"https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"},
  {id:5,name:"battery", category:"electronics", price:5 , imageUrl:"https://images.unsplash.com/photo-1598048145816-4d54a3af68fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"}

]   

const ListProducts = () =>{
    const classes = useListProductStyles();
    const listProd = productsList.map((prod)=>
    <Product key={prod.id} {...prod} />
    );
    return(
       <Grid container className={classes.listItems}>
            {listProd}
       </Grid>
    )

}

export default ListProducts