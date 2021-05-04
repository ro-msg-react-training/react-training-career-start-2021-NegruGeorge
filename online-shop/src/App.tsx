import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import ListProducts from "./components/listProducts/listProducts.component";
import theme from "./theme/theme1";
import useAppStyles from "./App.styles";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ProductDetails from "./components/productDetails/productDetails.component";
import ShoppingCart from "./components/shoppingCart/shoppingCart.component";
import EditProduct from "./components/editProduct/editProduct.component";
import AddProduct from "./components/addProduct/addProduct.component";

function App() {
  const classes = useAppStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/products"></Redirect>
          </Route>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={ListProducts} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/editProduct/:id" component={EditProduct}/>
          <Route path="/addProduct" component={AddProduct}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}



export default App;
