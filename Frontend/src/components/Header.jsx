import { MdOutlineLightMode } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
// no hooks required here; header triggers parent actions via props

// Header now receives an `onOpenCreate` prop to request opening the create modal
export default function Header({ onOpenCreate }) {
  return (
    <header id="header">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-primary">Gerenciador de Produtos</h1>
        <div className="flex gap-3">
          <button className="bg-background-button p-3 cursor-pointer rounded-lg text-primary"><MdOutlineLightMode /></button>
          <button onClick={onOpenCreate} className="bg-background-button p-3 cursor-pointer rounded-lg text-primary"><CiSquarePlus /></button>
        </div>
      </div>
    </header>
  );
}