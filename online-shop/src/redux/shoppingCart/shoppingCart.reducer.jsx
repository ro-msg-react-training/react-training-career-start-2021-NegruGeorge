const INITIAL_STATE ={
    cart:[]
}

const shoppingCartReducer  = (state= INITIAL_STATE ,action) =>{
    switch(action.type){
        case 'SET_SHOPPING_CART':
            return {
                ...state,
                 shoppingCart:action.payload 
            }

        default:
            return state;
    }

}


export default shoppingCartReducer;
