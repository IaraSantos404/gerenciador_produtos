import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

export default function Card({ _id, image, name, price, onDelete, onEdit }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  
  return(
    <>
      <div className="bg-background-button max-w-[95%] p-4 rounded-lg flex flex-col gap-4 ">
        <img width={400} src={image} alt={name} />
        <h2 className="text-xl font-bold text-white">{name}</h2>
        {/* <p className="text-gray-300">{description}</p> */}
        <p className="text-primary">Preço: R$ {price}</p>

        <div className="flex gap-4">
          <button onClick={() => setModalIsOpen(true)} className="bg-primary p-3 cursor-pointer rounded-lg text-white"><HiOutlinePencilSquare /></button>
          <button onClick={() => setDeleteModalIsOpen(true)} className="bg-red-500 p-3 cursor-pointer rounded-lg text-white"><FaRegTrashCan /></button>
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          title="Editar produto"
          text="Altere as informações do produto"
          initialData={{ name, price, image }}
          onClose={() => setModalIsOpen(false)}
          onSave={async (data) => {
            try {
              await onEdit?.(_id, data);
              setModalIsOpen(false);
            } catch (err) {
              console.error("Erro ao editar:", err);
            }
          }}
        />
      )}
      {deleteModalIsOpen && (
        <DeleteModal
          onClose={() => setDeleteModalIsOpen(false)}
          loading={deleting}
          onConfirm={async () => {
            try {
              setDeleting(true);
              await onDelete?.(_id);
              setDeleteModalIsOpen(false);
            } catch (err) {
              console.error("Erro ao deletar:", err);
              // optionally show toast
            } finally {
              setDeleting(false);
            }
          }}
        />
      )}
    </>
  )
}