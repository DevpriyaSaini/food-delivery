import foodmodel from "../models/food.js";
import fs from 'fs';

async function addfood(req,res){
  let Image_filename=`${req.file.filename}`;
  const food=new foodmodel({
    name:req.body.name,
    description:req.body.description,
    Price:req.body.Price,
    category:req.body.category,
    image:Image_filename,
  })

  try {
    await food.save();
    res.json({sucess:true,msg:'food added'})
    
  } catch (error) {
    console.log(error);
    res.json({sucess:false,msg:`${error}`})
  }


}


//all list food

async function listfood(req,res) {
  
try {
  const foods=await foodmodel.find({}).sort({createdAt: -1 });
  res.json({sucess:true,data:foods})
} catch (error) {
  console.log(error);
  res.json({sucess:false,msg:`${error}`})
  
}

}


//remove food item

async function  delfood(req,res) {

 try {
  const food=await foodmodel.findById(req.body.id);
   fs.unlink(`uploads/${food.image}`,()=>{});

  await foodmodel.findByIdAndDelete(req.body.id);
  res.json({sucess:true,msg:"food remove"});
  
 } catch (error) {
  console.log(error);
  res.json({sucess:false,msg:`${error}`});
  
 }
}



export{addfood,listfood,delfood};