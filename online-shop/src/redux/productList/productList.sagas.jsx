// import {takeEvery} from "redux-saga/effects";
// import {Product } from "../../models/Product"
// import { setProductList } from "./productList.action";
// export function* getAllProductsAsync(){

//     const result = yield call(()=> async function getProducts(){
//         let response = await axios.get(`${url}/products`)
//         // setProdList(response.data);
//         // props.setProductList(ProductList)
//         return  response;
//     } )

//     yield put(setProdList())
// }


// export function* getAllProducts(){
//     yield takeEvery(
//         'SET_PRODUCT_LIST',
//         getAllProductsAsync
//     );
// }  