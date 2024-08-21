import { useState, useContext, useEffect } from "react";
import Logo from "../../assets/imagens/navbarImg/logo.png";
import User from "../../assets/imagens/navbarImg/usuario.png";
import Carrinho from "../../assets/imagens/navbarImg/carrinho.png";
import Logout from '../../assets/imagens/navbarImg/logout.png'
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlert";
import Login from "../../pages/login/Login"; // Importa o componente Login

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

    // Verifica se o usuário está logado e fecha o dropdown após o login
    useEffect(() => {
      if (usuario.token !== "") {
        setDropdownVisible(false); // Fecha o dropdown ao detectar login
      }
    }, [usuario]);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/home");
  }

  let navBarComponent;

  if (usuario.token !== "") {
    navBarComponent = (
      <div className="font-mono">
        <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2">
          <button type="submit" onClick={() => navigate('/home')}>
              <img
                src={Logo}
                alt="Logo da empresa"
                className="left-0 md:w-56"
              />
          </button>

          <div className="justify-center mx-4 py-4">
            <ul className="flex space-x-24 text-center color-icones items-end text-">
              <button type="submit" onClick={() => navigate("/categorias")} className="hover:text-white">
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
              <Link to="/cadastrarProduto">
                <li>Cadastrar Produto</li>
              </Link>
              <Link to="/editarProdutos">
                <li>Editar Produto</li>
              </Link>
              <Link to="/cadastrarCategoria">
                <li>Cadastrar Categoria</li>
              </Link>
            </ul>
          </div>

          <div className="flex gap-6">
            <Link to={"/carrinho"}>
              <img
                src={Carrinho}
                alt="Carrinho"
                className="py-4 items-center"
              />
            </Link>
            <button
              onClick={logout}
              type="button"
              className="px-0 pr-2"
            >
              <img
                src={Logout}
                alt="Meu perfil"
                className="items-center"
              />
            </button>
          </div>

          {isDropdownVisible && (
            <div className="dropdown login-dropdown absolute top-20 mt-10 right-7 mr-5 bg-gray-900 text-white p-6 rounded-lg shadow-lg z-10">
              <Login /> {/* Usa o componente Login */}
            </div>
          )}
        </div>
      </div>
    );
  } else {
    navBarComponent = (
      <div className="font-mono">
        <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2">
          <button type="submit">
            <a href="/home">
              <img
                src={Logo}
                alt="Logo da empresa"
                className="left-0 md:w-56"
              />
            </a>
          </button>

          <div className="justify-center mx-4 py-4">
            <ul className="flex space-x-24 text-center color-icones items-end text-2xl">
              <button type="submit" onClick={() => navigate("/categorias")} className="hover:text-white">
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

          <div className="flex gap-6">
            <Link to={"/carrinho"}>
              <img
                src={Carrinho}
                alt="Carrinho"
                className="py-4 items-center"
              />
            </Link>
            <button
              onClick={toggleDropdown}
              type="button"
              className="profile-button"
            >
              <img
                src={User}
                alt="Meu perfil"
                className="px-0 pr-2"
              />
            </button>
          </div>

          {isDropdownVisible && (
            <div className="dropdown login-dropdown absolute top-20 mt-10 right-7 mr-5 bg-gray-900 text-white p-6 rounded-lg shadow-lg z-10">
              <Login /> {/* Usa o componente Login */}
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div>{navBarComponent}</div>;
}

export default Navbar;
