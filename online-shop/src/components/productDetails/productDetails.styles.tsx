import { makeStyles } from "@material-ui/core";

const useProductDetailsStyles = makeStyles({
  containerGrid: {
    marginTop: "100px",
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  imgProduct: {
    width: "150px",
    height: "150px",
    transition: "1.5s",
    borderRadius: "8%",
  },
  prodDescription:{
    fontSize:"10px",
  }
});

export default useProductDetailsStyles;
