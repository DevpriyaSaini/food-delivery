import express from  'express'
import { loginuser,signup } from '../controller/user.js'

const userRouter=express.Router();

userRouter.post('/register',signup);
userRouter.post('/login',loginuser);


export default userRouter;