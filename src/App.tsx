import Home from "./pages/home/Home";
import Categorias from "./pages/categorias/Categorias";
import 'react-toastify/dist/ReactToastify.css';
import Sobre from "./pages/sobre/Sobre";
import Doacoes from "./pages/doacoes/Doacoes";
import Contato from "./pages/contato/Contato";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";
import Carrinho from "./pages/carrinho/Carrinho";
import FormularioProduto from "./components/produtos/formularioProduto/FormularioProduto";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import { ToastContainer } from "react-toastify";
import DeletarProduto from "./components/produtos/deletarProduto/DeletarProduto";
import ListaProdutosEdit from "./components/produtos/listaProdutos/ListaProdutosEdit";

function App() {
  return (
    <>
      <AuthProvider>
        <CarrinhoProvider>
          <ToastContainer/>
          <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/doacoes" element={<Doacoes />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/cadastrarProduto" element={<FormularioProduto />}/>
                <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                <Route path="/editarProdutos" element={<ListaProdutosEdit />} />
                <Route path="/produtos" element={<ListaProdutos />}/>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </CarrinhoProvider>
      </AuthProvider>
    </>
  );
}

export default App;
