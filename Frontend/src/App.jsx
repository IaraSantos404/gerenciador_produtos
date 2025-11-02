import Header from "./components/Header"
import Card from "./components/ProductCard"
import Modal from "./components/Modal"
import DeleteModal from "./components/DeleteModal"
import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";

import { getProducts, deleteProduct, updateProduct } from "./services/product"

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cards, setCards] = useState([])
  const BASE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function load(){
      try {
        const data = await getProducts();

        setCards(data.data);
      } catch(error){
        console.log("Erro:", error);
      }
    }
    load()
  }, []);

  const handleAddProduct = async (newProduct) =>{
    try{
      await axios.post(`${BASE}/api/products`, newProduct);
      const data = await getProducts();
      setCards(data.data);
    }catch(error){
      console.log("Erro ao adicionar produto:", error);
    }
    
  }

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      setCards((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      throw error;
    }
  }

  const handleUpdateProduct = async (id, updatedData) => {
    try {
      const payload = { ...updatedData, price: Number(updatedData.price) };
      const res = await updateProduct(id, payload);
      const updated = res?.data || res;
      setCards((prev) => prev.map((c) => (c._id === id ? updated : c)));
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      throw error;
    }
  }

  return (
    <>
      <Header onOpenCreate={() => setModalIsOpen(true)} />
      <section className="flex justify-around flex-wrap gap-5 mx-auto w-[90%] mt-[8em]">
          {cards.length == 0 ? (
          <p className="text-white text-xl">Nenhum produto cadastrado <span onClick={() => setModalIsOpen(true)} className="text-primary cursor-pointer">Cadastrar produto</span></p>
        ) : cards.map(card => (
          <Card 
            key={card._id}
            _id={card._id}
            name={card.name}
            price={card.price}
            image={card.image}
            onDelete={handleDeleteProduct}
            onEdit={handleUpdateProduct}
          />
        ))}
      
      </section>
      {modalIsOpen && (
        <Modal  title="Cadastrar produto" text="Preencha as informações do produto"
        onClose={() => setModalIsOpen(false)}
        onSave={(data) => {
          handleAddProduct(data);
          setModalIsOpen(false);
        }}
      />
      )}
    
    </>
  )
}

export default App
