import {addfood,listfood,delfood} from "../controller/foodcontroller.js";
import express from "express";
import multer from "multer";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const UPLOADS_DIR = join(process.cwd(), 'uploads');
await mkdir(UPLOADS_DIR, { recursive: true }); 

const foodrouter=express.Router();
console.log("Upload path:", join(__dirname, 'uploads'));

const storage=multer.diskStorage({
     destination: (req, file, cb) => cb(null, UPLOADS_DIR),
    filename:(req,file,cb)=>{
      return cb(null,Date.now()+"-"+file.originalname);
    }
})
const upload=multer({storage:storage});



foodrouter.post('/add',upload.single("image"),addfood);
foodrouter.get('/list',listfood);
foodrouter.post('/remove',delfood);

export default foodrouter;