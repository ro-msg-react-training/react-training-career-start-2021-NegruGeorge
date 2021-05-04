export const setProductList = products=>({
    type:'SET_PRODUCT_LIST',
    payload:products,
})

export const getAllProducts = ()=>({
    type:"GET_ALL_PRODUCTS",
});