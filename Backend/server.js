// const express = require('express')
import express from 'express'
import path from "path"
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import cors from "cors"

import productRoutes from "./routes/product.routes.js"

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use("/uploads", express.static(path.resolve("uploads")));

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

app.use("/api/products", productRoutes);

connectDB();
app.listen(PORT, ()=>{
  
  console.log("server iniciado na da casa porta: http://localhost:" + PORT);
})

//  
//iarassantosdev404_db_user

//mongodb+srv://iarassantosdev404_db_user:<db_password>@cluster0.hqibwdy.mongodb.net/?appName=Cluster0