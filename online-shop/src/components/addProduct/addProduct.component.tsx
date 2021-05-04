import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import useAddProductStyles from "./addProduct.styles";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
const AddProduct = (prodList: any) => {
  const history = useHistory();
  console.log(prodList);
  let newId = -1;
  try {
    console.log(prodList.prodList.product.length);
    newId = prodList.prodList.product.length + 1;
  } catch (e) {
    history.push("/products");
  }

  // const [classTextFileds,setClassTextFields] = React.useState("standard-basic")
  const [newprod, setnewprod] = React.useState({
    id: newId,
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });



  const addProduct = async () => {
    if (newprod.name === "") {
      alert("please enter a name")
      return;
    }

    if (newprod.price === "") {
      alert("please enter a price")
      return;
    }
    if (newprod.category === "") {
      alert("please enter a category")
      return;
    }
    if (newprod.image === "") {
      alert("please enter an image")
      return;
    }
    if (newprod.description === "") {
      alert("please enter a description")
      return;
    }

    
    const result = await axios.post("http://localhost:4000/products", newprod);
    return result;
  };

  const classes = useAddProductStyles();
  return (
    <Grid container className={classes.form_container}>
      <form noValidate autoComplete="off">
        <Grid item>
          <TextField
            id="standard-basic nameLabel"
            onChange={(event) => {
              newprod.name = event.target.value;
            }}
            label="Name"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic categoryLabel"
            onChange={(event) => {
              newprod.category = event.target.value;
            }}
            label="Category"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic priceLabel"
            onChange={(event) => {
              newprod.price = event.target.value;
            }}
            label="Price"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic"
            onChange={(event) => {
              newprod.image = event.target.value;
            }}
            label="imageURL"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic"
            onChange={(event) => {
              newprod.description = event.target.value;
            }}
            label="Description"
          />
        </Grid>

        <Grid item>
          <Link to={"/products/"}>
            <Button onClick={addProduct}>Add product</Button>
          </Link>
          <Link to={"/products/"}>
            <Button>Cancel</Button>
          </Link>
        </Grid>
      </form>
    </Grid>
  );
};

const mappStateToProps = (state: any) => ({
  prodList: state.productList,
});

export default connect(mappStateToProps)(AddProduct);
