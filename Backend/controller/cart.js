import usermodel from "../models/user.js";

//add items to user cart

async function addtocart(req,res) {

    try {
         let userData=await usermodel.findById(req.body.userId);
    let cartData=await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1;
    }
    else{
        cartData[req.body.itemId]+=1;
    }
    await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({sucess:true,message:"Added to cart"})
        
    } catch (error) {
        console.log(error);
       res.json({sucess:false,message:"Error"}) 

    }
   

}

//remove items from cart

async function removefromcart(req,res) {
    try {
        let userData=await usermodel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({sucess:true,message:"remove from cart"});

    } catch (error) {
        console.log(error);
        
         res.json({sucess:false,message:"Error"});
        
    }
    
}

//fetch user cart data

async function getcart(req,res) {
    try {
        let userData=await usermodel.findById(req.body.userId);
        let cartData=await userData.cartData;
        res.json({secess:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({secess:false,message:"Error"});
        
    }
    
}

export{addtocart,removefromcart,getcart}