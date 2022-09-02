const express= require("express");
const connect =require("./configs/db")
const productController=require("./controllers/product.controller");
const cartController=require("./controllers/cart.controller")
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/products",productController);

app.use("/carts",cartController)



app.get("",async(req,res)=>{
  try {
    return res.send("Server is live now")
  } catch (error) {
    return res.send(error.message)
  }
})

const port=process.env.PORT||5000;
app.listen(port,async()=>{
    try {
         await connect();
         console.log("Listening the port number 5000");
    } catch (error) {
        console.log(error.message)
    }
})