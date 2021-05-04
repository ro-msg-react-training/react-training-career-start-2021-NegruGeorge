import { Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import useProductDetailsStyles from "./productDetails.styles";
import axios from "axios";
import { url } from "../../utils/Api";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentProduct } from "../../redux/product/currentProduct.action";
import Product from "../../models/Product";
import { setShoppingCart } from "../../redux/shoppingCart/shoppingCart.action";

async function deleteProd(prodId: number) {
  await axios.delete(`${url}/products/${prodId}`);
}

const ProductDetails = (props: any) => {
  useEffect(() => {
    const { product } = props.location.state;
    props.setCurrentProduct(product);
  });

  console.log(props);
  console.log(props.cartlist.cart);
  const cartList = props.cartlist.cart;

  let history = useHistory();
  const { product } = props.location.state;
  // const product = props;
  console.log(product);
  console.log("aici");
  function handleHistroy() {
    history.push("/products");
  }

  const addProduct = () => {
    let ok = 0;
    let index = 0;
    let finali = -1;
    cartList.forEach((el: Product) => {
      if (el.id === product.id) {
        ok = 1;
        finali = index;
      }
      index += 1;
    });

    if (ok === 1) {
      cartList[finali].quantity += 1;
    } else
      cartList.push({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        quantity: 1,
      });

    props.setShoppingCart(cartList);
  };

  const classes = useProductDetailsStyles();
  return (
    <Grid container className={classes.containerGrid}>
      <Grid item>
        <img className={classes.imgProduct} src={` ${product.image} `} alt="" />
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
          <Button onClick={addProduct}>Add to Cart</Button>
        </Link>

        <Button
          onClick={() => {
            deleteProd(product.id);
            handleHistroy();
          }}
        >
          Delete :(
        </Button>
      </Grid>
      <Grid item>
        <Link to={{ pathname: `/editProduct/${product.id}` }}>
          <Button>Edit</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentProduct: (product: Product) => dispatch(setCurrentProduct(product)),
  setShoppingCart: (cartList: any) => dispatch(setShoppingCart(cartList)),
});

const mappStateToProps = (state: any) => ({
  cartlist: state.shoppingCart,
});

export default connect(mappStateToProps, mapDispatchToProps)(ProductDetails);
