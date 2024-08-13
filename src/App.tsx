import React from "react";
import Home from "./assets/pages/home/Home";
import Categorias from "./assets/pages/Categorias/Categorias";
import Sobre from "./assets/pages/Sobre/Sobre";
import Doacoes from "./assets/pages/Doacoes/Doacoes";
import Contato from "./assets/pages/Contato/Contato";
import Navbar from "./assets/components/navbar/Navbar";
import Footer from "./assets/components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/pages/login/Login";
import { AuthProvider } from "./contexts/AuthContext";

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
          <Route path="/Categorias" element={<Categorias />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Doacoes" element={<Doacoes />} />
          <Route path="/Contato" element={<Contato />} />
          
        </Routes>
        </ div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
