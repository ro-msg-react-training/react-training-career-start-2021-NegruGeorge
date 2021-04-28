import { Grid, TableContainer,Table, TableHead, TableRow,TableCell, TableBody, Button} from "@material-ui/core";
import React from "react";
import {useState} from "react";
import ProductHeader from "../../models/ProductHeader";
import axios from "axios";
import {url} from "../../utils/Api"
import {useHistory} from "react-router-dom"


function ShoppingCart(){

   
    const [CartProducts,setCartProduct] = useState([{
    id: 1,
    name: "tv",
    category: "electronics",
    price: 100,
    quantity:10,
  },
  {
    id: 2,
    name: "cable",
    category: "electronics",
    price: 10,
    quantity:3,
  },
  {
    id: 3,
    name: "milk",
    category: "food",
    price: 15,
    quantity:15,
  },
  {
    id: 4,
    name: "bread",
    category: "food",
    price: 3,
    quantity:2,
  },
    ]);
    let history = useHistory();
    async function checkout() {

        let data = {
            customer: "doej",
            products: [] as any,
        };
        CartProducts.forEach((el) => {
          data.products[data.products.length] = {
            productId: el.id,
            quantity: el.quantity,
          };
        });
   
        await axios.post(`${url}/orders`, data)
        .then((response)=>{
            console.log(response)
        },(error)=>{
            console.log(error);
        })

        history.push("/products");
      }


    return (
        <Grid container>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name:</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price $:</TableCell>
                            <TableCell>Quantity</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                    {
                        CartProducts.map((row)=>(
                            <TableRow>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.price}$</TableCell>
                                <TableCell>{row.price}$</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                            </TableRow>

                        ))}

                    </TableBody>

                </Table>
            </TableContainer>

            <Button variant="outlined" color="primary"  onClick={async ()=>{
                await checkout();
            }} >
            checkout
            </Button>
        </Grid>

    );


}

export default ShoppingCart;