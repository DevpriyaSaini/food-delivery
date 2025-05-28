import ordermodel from "../models/order.js";
import usermodel from "../models/user.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function placeorder(req, res) {
    const frontend_url = "http://localhost:5174";

    try {
        const { userId, items, amount, address } = req.body;

        if (!userId || !Array.isArray(items) || items.length === 0 || !amount || !address) {
            return res.status(400).json({ success: false, message: "Invalid input data" });
        }

        const order = await ordermodel.create({
            userId,
            items,
            amount,
            address,
        });
    console.log("orderid",order._id);
    
        await usermodel.findByIdAndUpdate(userId, { cartData: {} });

        // Safely construct line_items
        const line_items = [];

        for (const item of items) {
            const priceInPaise = Math.round(Number(item.Price) * 100);

            if (isNaN(priceInPaise)) {
                throw new Error(`Invalid price for item: ${JSON.stringify(item)}`);
            }

            line_items.push({
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: item.name || "Unnamed Product",
                    },
                    unit_amount: priceInPaise,
                },
                quantity: item.quantity || 1,
            });
        }

        // Add delivery charge
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charge",
                },
                unit_amount: 2 * 100, // ₹2 delivery charge
            },
            quantity: 1,
        });

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&orderId=${order._id}`,
    cancel_url: `${frontend_url}/verify?success=false&orderId=${order._id}`,
        });

        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.error("Stripe Error:", error);
        res.status(500).json({ success: false, message: error.message || "Error processing payment" });
    }
}

async function verify(req,res) {
    const {orderId,success}=req.body;
    try {
        if(success=="true"){
            await ordermodel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"paid"})
        }
        else{
             res.json({success:false,message:"payment failed"})
        }
    } catch (error) {
        console.log(error);
          res.json({success:false,message:"Error"})
        
    }
}


//users order for frontend

async function userorder(req,res) {
    
    try {
        const orders=await ordermodel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    } catch (error) {
        res.json({success:false,message:"Error"})
    }
}
//admin order
async function listorder(req,res) {
    try {
        const orders=await ordermodel.find({});
        res.json({success:true,data:orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }
}

async function updatestatus(req,res) {
    try {
        const order=await ordermodel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
        res.json({success:true,message:"status updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
    
}


export { placeorder,verify,userorder,listorder,updatestatus};
