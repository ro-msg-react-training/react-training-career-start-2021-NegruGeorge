import {makeStyles} from "@material-ui/core";

 const useProductStyles = makeStyles({
     body:{
        margin:"0",
        padding:"0",
     },

   

    product:{
        margin:"10px",
        width: "250px",
        background:"#F5F5F5",
        // height: "250px",
        border: "solid 1px ",
        justifyContent:"space-around",
        alignItems: "center",
        borderRadius: "8%",
        display: "flex",
        flexDirection:"column",
          

    },
    prodName:{
        
    },

    imgProduct:{
        width: "150px",
        height: "150px",
        transition:"1.5s",
        borderRadius: "8%",
        "&:hover":{
            transform:"scale(1.55) translateY(5px)",
            overflow: "hidden",
        }
    },

    headProd:{
        width:"100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    
    },

    prodcategory:{
        fontSize: "10px",
    },

    footProd:{
        display:"flex",
        flexDirection:"row",
    },
    price:{
        marginTop:"5px",
    },
    button:{
       marginTop:"12px",
       marginLeft:"10px",
       marginBottom:"5px",
       borderRadius:"25px",
       fontSize:"13px",
    }
})

export default useProductStyles;
