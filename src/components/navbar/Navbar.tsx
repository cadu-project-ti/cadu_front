import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/imagens/logo.png";
import User from "../../assets/imagens/usuario.png";
import Carrinho from "../../assets/imagens/carrinho.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlert";

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector(".dropdown");
    const profileButton = document.querySelector(".profile-button");

    if (
      dropdown &&
      !dropdown.contains(target) &&
      profileButton &&
      !profileButton.contains(target)
    ) {
      setDropdownVisible(false);
    }
  };


  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownVisible]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  let navBarComponent;

  if (usuario.token !== "") {
    navBarComponent = (
      <div>
        {/* CONF NAVBAR */}
        <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2">
          <button type="submit">
            <a href="/home">
            <img src={Logo} alt="Logo da empresa" className="left-0 md:w-56" />
            </a>
          </button>

          <div className="justify-center mx-4 py-4">
            <ul className="flex space-x-24 text-center color-icones items-end text-2xl">
              <button type="submit" className="hover:text-white">
                <li>Categorias</li>
              </button>
              <button type="submit" className="hover:text-white">
                <li>Sobre nós</li>
              </button>
              <button type="submit" className="hover:text-white">
                <li>Doações</li>
              </button>
              <button type="submit" className="hover:text-white">
                <li>Contato</li>
              </button>
            </ul>
          </div>

          <div className="flex ">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="color-pesquisar text-white mx-10 px-8 rounded-full"
            />
            <button type="submit">
              <img src={Carrinho} alt="Meu perfil" className="py-4 items-center p-0" />
            </button>
            <button onClick={toggleDropdown} type="button">
              <img src={User} alt="Meu perfil" className="py-4 items-center p-10" />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    navBarComponent = (
      <div>
        {/* CONF NAVBAR */}
        <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2">
          <button type="submit">
          <a href="/">
            <img src={Logo} alt="Logo da empresa" className="left-0 md:w-56" />
            </a>
          </button>

          <div className="justify-center mx-4 py-4">
            <ul className="flex space-x-24 text-center color-icones items-end text-2xl">
              <button type="submit" className="hover:text-white">
                <li>Categorias</li>
              </button>
              <button type="submit" className="hover:text-white">
                <li>Sobre nós</li>
              </button>
              <button type="submit" className="hover:text-white">
                <li>Doações</li>
              </button>
              <button type="submit" className="hover:text-white">
                <li>Contato</li>
              </button>
            </ul>
          </div>

          <div className="flex ">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="color-pesquisar text-white mx-10 px-8 rounded-full"
            />
            <button type="submit">
              <img src={Carrinho} alt="Meu perfil" className="py-4 items-center p-0" />
            </button>
            <button onClick={toggleDropdown} type="button">
              <img src={User} alt="Meu perfil" className="py-4 items-center p-10" />
            </button>
          </div>

          {isDropdownVisible && (
            <div className="dropdown login-dropdown absolute top-20 mt-10 right-7 mr-5 bg-gray-900 text-white p-6 rounded-lg shadow-lg z-10">
              <form>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 text-white p-2 rounded-2xl mt-1 mb-4"
                  required
                />
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-800 text-white p-2 rounded-2xl mt-1 mb-4"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white p-2 rounded mt-2 hover:bg-emerald-700"
                >
                  Entrar
                </button>
                <p className="text-center mt-4">
                  <a href="#" className="text-emerald-500">
                    Faça seu login ou{" "}
                  </a>
                  <a href="/cadastro" className="text-emerald-500 hover:underline">
                    cadastre-se
                  </a>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <>{navBarComponent}</>;
}

export default Navbar;
