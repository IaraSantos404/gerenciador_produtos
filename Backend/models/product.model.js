import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, {
  //timestamps adiciona automaticamente campos createdAt e updatedAt
  //q servem para controlar quando o documento foi criado e atualizado
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;