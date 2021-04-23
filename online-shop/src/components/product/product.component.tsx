import React from 'react';
// import { preProcessFile } from 'typescript';

import "./product.styles.css"


export interface Produs {
    id:number,
    name:String,
    category:String,
    price: number,
    imageUrl: String
}

// m-am oprit aici cu style ul pana ma uit peste materialUI :(
// nu e responsive inca

const Product = ( props:Produs ) =>(
    <div className="product">
        <div className="headProd">
  
            <h1 className="prodName">{props.name}</h1>
            <h1 className="prodcateogry">({ props.category})</h1>
    
           
        </div>
        <img className="imgProduct" src= { ` ${props.imageUrl} ` } alt=""  />

        <div> <h1>{props.price}$</h1></div> 


    </div>

)

export default Product;