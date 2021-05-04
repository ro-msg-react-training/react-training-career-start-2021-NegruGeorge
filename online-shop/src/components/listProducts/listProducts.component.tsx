import { Grid,Button } from "@material-ui/core";
import React from "react";
import ProductC from "../product/product.component";
import useListProductStyles from "./listProducts.styles";
import {useState,useEffect} from "react";
import axios from "axios";
import {url} from "../../utils/Api";
import {connect} from "react-redux"
import {setProductList} from "../../redux/productList/productList.action";
import { Link } from "react-router-dom";

//I left this list here because maybe I will use it later
// const productsList: Array<Product> = [
//   {
//     id: 1,
//     name: "tv",
//     category: "electronics",
//     price: 100,
//     image:
//       "https://images.unsplash.com/photo-1579894059380-1866b68bce6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//     description: "lala",
//   },
//   {
//     id: 2,
//     name: "cable",
//     category: "electronics",
//     price: 10,
//     image:
//       "https://images.unsplash.com/photo-1572721546624-05bf65ad7679?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80",
//     description: "lala",
//   },
//   {
//     id: 3,
//     name: "milk",
//     category: "food",
//     price: 15,
//     image:
//       "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80",
//     description: "lala",
//   },
//   {
//     id: 4,
//     name: "bread",
//     category: "food",
//     price: 3,
//     image:
//       "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
//     description: "lala",
//   },
//   {
//     id: 5,
//     name: "battery",
//     category: "electronics",
//     price: 5,
//     image:
//       "https://images.unsplash.com/photo-1598048145816-4d54a3af68fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
//     description: "lala",
//   },
// ];



const ListProducts = (props:any) => {
  const [ProductList, setProdList] = useState([ {
    id: 1,
    name: "",
    category: "",
    price: 1,
  },

  ]);
  console.log(props);

  useEffect(()=>{
    async function getProducts(){
      let response = await axios.get(`${url}/products`)
      setProdList(response.data);
       props.setProductList(response.data)
    }
  
    getProducts();

  })

  console.log(props);

  const classes = useListProductStyles();
  const listProd = ProductList.map((prod) => {

   return ( <ProductC  product={prod} />)
  
  });
  return (
    <Grid container className={classes.listItems}>
      <Link to={{ pathname:`/addProduct`}}>
      <Button >Add Product</Button>
      </Link>
      
      {listProd}
  
     
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setProductList: (productList:any)=> dispatch(setProductList(productList))
});


const mappStateToProps = (state:any) =>({
  prodList:state.productList
})

export default connect(mappStateToProps, mapDispatchToProps)(ListProducts);
