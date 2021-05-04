import {combineReducers} from 'redux';
import productReducer from "./product/currentProduct.reducer";
import shoppingCartReducer from './shoppingCart/shoppingCart.reducer';
import productListReducer from "./productList/productList.reducer";
export default combineReducers({
    currentProduct: productReducer,
    shoppingCart: shoppingCartReducer,
    productList:productListReducer
})