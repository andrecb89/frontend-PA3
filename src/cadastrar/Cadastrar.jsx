import { Link } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import '../styles.css'

function Cadastro() {

  return (
   <>
  <div className="div-container gradient-background min-h-screen flex">
    <div className="w-64">
      <Sidebar />
    </div>
    {/* Menu principal */}
    <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[500px]">
        <Link to="/cadastrarCompra" className="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-xl shadow-2xl hover:bg-gray-100 transition z-10">
          <span className="material-icons text-[#052561] text-4xl">shopping_cart</span>
          <span className="font-semibold">Cadastrar Compra</span>
        </Link>

        <Link to="/cadastrarItens" className="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-xl shadow-2xl hover:bg-gray-100 transition z-10">
          <span className="material-icons text-[#052561] text-4xl">inventory</span>
          <span className="font-semibold">Cadastrar Itens</span>
        </Link>

        <Link to="/cadastrarFornecedor" className="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-xl shadow-2xl hover:bg-gray-100 transition z-10">
          <span className="material-icons text-[#052561] text-4xl">store</span>
          <span className="font-semibold">Cadastrar Fornecedor</span>
        </Link>

        <Link to="/cadastrarProjeto" className="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-xl shadow-2xl hover:bg-gray-100 transition z-10">
          <span className="material-icons text-[#052561] text-4xl">work</span>
          <span className="font-semibold">Cadastrar Projeto</span>
        </Link>

        <Link to="/cadastrarLocal" className="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-xl shadow-2xl hover:bg-gray-100 transition z-10">
          <span className="material-icons text-[#052561] text-4xl">place</span>
          <span className="font-semibold">Cadastrar Local</span>
        </Link>

        <Link to="/cadastrarConjuntoItens" className="flex flex-col items-center justify-center gap-2 bg-white p-6 rounded-xl shadow-2xl hover:bg-gray-100 transition z-10">
          <span className="material-icons text-[#052561] text-4xl">view_compact_alt</span>
          <span className="font-semibold text-center">Cadastrar <br />Conjunto Itens</span>
        </Link>
      </div>
    </div>
  </div>
</>

  )
}

export default Cadastro
