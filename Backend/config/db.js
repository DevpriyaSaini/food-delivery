import mongoose from "mongoose"

const connectdb=async ()=>{
   try {
    await mongoose.connect("mongodb+srv://devpriyasaini:Anilsaini70177@cluster01.kzupp.mongodb.net/Cluster01");
    console.log("mongo connected");
    
    
   } catch (error) {
    console.log(error);
    
    
   }
}
export default connectdb;