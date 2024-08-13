import React from "react";
import Logo from "../../assets/imagens/logo.png";
import User from "../../assets/imagens/usuario.png";
import Carrinho from "../../assets/imagens/carrinho.png"
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      {/* CONF NAVBAR*/}
      <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2">

        <button type="submit"><img src={Logo} alt="Logo da empresa" className=" left-0 md:w-56" /></button>

        <div className="justify-center mx-4 py-4">
          <ul className="flex space-x-24 text-center color-icones items-end text-2xl">
            <button type="submit"  className="hover:text-white"><li>Categorias</li></button>
            <button type="submit" className="hover:text-white"><li >Sobre nós</li></button>
            <button type="submit" className="hover:text-white"><li>Doações</li></button>
            <button type="submit" className="hover:text-white"><li >Contato</li></button>
          </ul>
        </div>
        

        <div className="flex ">
          <input type="text" placeholder="Pesquisar..." className="color-pesquisar text-white mx-10 px-8 rounded-full"/>
          <button type="submit"><img src={Carrinho} alt="Meu perfil" className="py-4 items-center p-0" /></button>
          <button type="submit"><img src={User} alt="Meu perfil" className="py-4 items-center p-10" /></button>
          
        </div>
        

      </div>

    </div>

    
  );
}

export default Navbar;
