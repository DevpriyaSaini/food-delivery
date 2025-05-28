import express from 'express';
import cors from 'cors';
import connectdb from './config/db.js';
import foodrouter from './routes/addfood.js';
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';
import 'dotenv/config';
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';

const app = express();
const port = process.env.PORT||4000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));

// Serve uploaded files statically
app.use('/Image', express.static('uploads'));

// Register food routes
app.use('/api/food', foodrouter);

//register and login user
app.use('/api/user',userRouter);
//add to cart
app.use("/api/cart",cartRouter);
//place order
app.use('/api/order',orderRouter);

connectdb();

app.get('/', (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
