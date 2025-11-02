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

app.use(cors());


app.use(express.json());

app.use("/api/products", productRoutes);

connectDB();
app.listen(PORT, ()=>{
  
  console.log("server iniciado na da casa porta: http://localhost:" + PORT);
})
