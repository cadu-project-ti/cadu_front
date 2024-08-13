import React from "react";
import Home from "./pages/home/Home";
import Categorias from "./pages/categorias/Categorias";
import Sobre from "./pages/sobre/Sobre";
import Doacoes from "./pages/doacoes/Doacoes";
import Contato from "./pages/contato/Contato";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/contato" element={<Contato />} />
          
        </Routes>
        </ div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
