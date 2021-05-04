import React, { useEffect } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import useEditProductStyles from "./editProduct.styles";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const EditProduct = (prod: any) => {
  console.log(prod);
  console.log("edit");
  const currProd = prod.prod;
  console.log(currProd);
  // const [classTextFileds,setClassTextFields] = React.useState("standard-basic")
  const [newprod, setnewprod] = React.useState({
    id: 0,
    name: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const editProduct = async () => {
    if (newprod.name === "") {
      newprod.name = currProd.product.name;
    }

    if (newprod.price === "") {
      newprod.price = currProd.product.price;
    }
    if (newprod.category === "") {
      newprod.category = currProd.product.category;
    }
    if (newprod.image === "") {
      newprod.image = currProd.product.image;
    }
    if (newprod.description === "") {
      newprod.description = currProd.product.description;
    }

    newprod.id = currProd.product.id;
    const result = await axios.put(
      "http://localhost:4000/products/" + currProd.product.id.toString(),
      newprod
    );
    return result;
  };

  const classes = useEditProductStyles();
  return (
    <Grid container className={classes.form_container}>
      <form noValidate autoComplete="off">
        <Grid item>
          <TextField
            id="standard-basic nameLabel"
            defaultValue={currProd.product.name}
            onChange={(event) => {
              newprod.name = event.target.value;
            }}
            label="Name"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic categoryLabel"
            defaultValue={currProd.product.category}
            onChange={(event) => {
              newprod.category = event.target.value;
            }}
            label="Category"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic priceLabel"
            defaultValue={currProd.product.price}
            onChange={(event) => {
              newprod.price = event.target.value;
            }}
            label="Price"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic"
            defaultValue={currProd.product.image}
            onChange={(event) => {
              newprod.image = event.target.value;
            }}
            label="imageURL"
          />
        </Grid>

        <Grid item>
          <TextField
            id="standard-basic"
            defaultValue={currProd.product.description}
            onChange={(event) => {
              newprod.description = event.target.value;
            }}
            label="Description"
          />
        </Grid>

        <Grid item>
          <Link to={"/products/"}>
            <Button onClick={editProduct}>Save</Button>
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
  prod: state.currentProduct,
});

export default connect(mappStateToProps)(EditProduct);
