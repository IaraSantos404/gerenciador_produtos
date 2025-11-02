import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts =  async (req, res) => {
  try{
    const products = await Product.find({});
    res.status(200).json({sucess: true, data: products})
  }catch(error){
    console.log("error ao achar produtos", error.message);
    res.status(500).json({sucess: false, message: "server error"})
  }
}

export const createProduct = async (req, res) =>{
  const product = req.body;
  if(!product.name || !product.price || !product.image){
    return res.status(400).json({sucess: false, message: "Dados incompletos"})
  }
  const newProduct = new Product(product);
  try{
    await newProduct.save();
    res.status(201).json({sucess: true, data: newProduct, message: "adicionado com sucesso"});
  } catch(error){
    console.log("Erro ao salvar produto: ", error.message);
    res.status(500).json({sucess: false, message: "server error"})
  }
}

export const deleteProduct = async (req, res)=>{
  const id = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({sucess: false, message: "invalid product id"})
  }
  
  try{
    await Product.findByIdAndDelete(id);
    res.status(200).json({sucess: true, message: "produto deletado com sucesso"});

  }catch(error){
    console.log("Erro ao deletar produto: ", error.message);
    res.status(500).json({sucess: false, message: "Server error"});
  }
}

export const updateProduct = async (req, res) =>{
  const {id} =req.params;

  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({sucess: false, message: "invalid product id"})
  }
  try{
    const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true})
    res.status(200).json({sucess: true, data: updateProduct})
  }catch(error){
    console.log("erro ao atualizar", error.message);
    res.status(500).json({sucess: false, message: "server erro"})
  }
}