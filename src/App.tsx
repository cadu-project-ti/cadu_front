import React from "react";
import Home from "./assets/pages/home/Home";
import Categorias from "./assets/pages/categorias/Categorias";
import Sobre from "./assets/pages/sobre/Sobre";
import Doacoes from "./assets/pages/doacoes/Doacoes";
import Contato from "./assets/pages/contato/Contato";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Cadastro from "./assets/pages/cadastro/Cadastro";

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
