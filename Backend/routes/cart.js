import express from "express";
import { addtocart,removefromcart,getcart } from "../controller/cart.js";

import authmiddle from "../middleware/auth.js";


const cartRouter=express.Router();

cartRouter.post("/add",authmiddle ,addtocart);
cartRouter.post("/remove",authmiddle ,removefromcart);
cartRouter.post("/get",authmiddle,getcart);


export default cartRouter;