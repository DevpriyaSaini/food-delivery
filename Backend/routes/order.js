import { placeorder,verify,userorder, listorder, updatestatus } from "../controller/order.js";
import authmiddle from "../middleware/auth.js"
import express from "express";

const orderRouter=express.Router();

orderRouter.post("/place",authmiddle,placeorder);
orderRouter.post("/verify",verify);
orderRouter.post("/userorders",authmiddle,userorder);
orderRouter.get('/list',listorder);
orderRouter.post("/status",updatestatus)


export default orderRouter;