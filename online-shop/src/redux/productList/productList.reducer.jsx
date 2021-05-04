
const INITIAL_STATE ={
    productList:[]
  

}


const productListReducer  = (state= INITIAL_STATE ,action) =>{
switch(action.type){
    case 'SET_PRODUCT_LIST':
        return {
            ...state,
             product:action.payload 
        }
    case 'GET_ALL_PRODUCTS':
        return{
            ...state,
            getALL:action
        }
    
    default:
        return state;
}

}


export default productListReducer;