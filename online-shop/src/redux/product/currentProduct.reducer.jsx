
const INITIAL_STATE ={
        product:
        {   id: 0,
            name: "12",
            category: "32",
            price: 12,
            image: "33",
            description:"32",
        }
      

}


const productReducer  = (state= INITIAL_STATE ,action) =>{
    switch(action.type){
        case 'SET_CURRENT_PRODUCT':
            return {
                ...state,
                 product:action.payload 
            }

        default:
            return state;
    }

}


export default productReducer;