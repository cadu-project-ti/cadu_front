import { useState, useContext, useEffect } from "react";
import Logo from "../../assets/imagens/navbarImg/logo.png";
import User from "../../assets/imagens/navbarImg/usuario.png";
import Carrinho from "../../assets/imagens/navbarImg/carrinho.png";
import Logout from "../../assets/imagens/navbarImg/logout.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlert";
import Login from "../../pages/login/Login";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
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

  useEffect(() => {
    if (usuario.token !== "") {
      setDropdownVisible(false);
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
      <nav>
        <div className="font-mono">
          <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2 px-4 lg:px-12">
            <Link to="/">
              <img src={Logo} alt="Logo da empresa" className="w-32 lg:w-56" />
            </Link>

            {/* Botão do menu hamburguer para telas pequenas */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu />
            </button>

            {/* Links da Navbar para telas maiores */}
            <div className="hidden md:flex justify-center mx-4 py-4">
              <ul className="flex space-x-8 lg:space-x-24 text-center color-icones items-end">
                <Link to="/sobre" className="hover:text-white">
                  <li>Sobre nós</li>
                </Link>
                <Link to="/doacoes" className="hover:text-white">
                  <li>Doações</li>
                </Link>
                <Link to="/cadastrarProduto" className="hover:text-white">
                  <li>Cadastrar Produto</li>
                </Link>
                <Link to="/editarProdutos" className="hover:text-white">
                  <li>Editar Produto</li>
                </Link>
                <Link to="/paginaCategorias" className="hover:text-white">
                  <li>Cadastrar Categoria</li>
                </Link>
              </ul>
            </div>

            <div className="flex gap-4 md:gap-6">
              <Link to={"/carrinho"}>
                <img
                  src={Carrinho}
                  alt="Carrinho"
                  className="py-4 items-center w-8 lg:w-7"
                />
              </Link>
              <button onClick={logout} type="button" className="px-0 pr-2">
                <img src={Logout} alt="Logout" className="w-8 lg:w-7" />
              </button>
            </div>

            {isDropdownVisible && (
              <div className="dropdown login-dropdown absolute top-20 right-4 bg-gray-900 text-white p-6 rounded-lg shadow-lg z-10">
                <Login />
              </div>
            )}
          </div>

          {/* Menu hamburguer para telas pequenas */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 bg-gray-800 text-white p-6 absolute w-full z-20">
              <Link to="/sobre" className="hover:text-white">
                Sobre nós
              </Link>
              <Link to="/doacoes" className="hover:text-white">
                Doações
              </Link>
              <Link to="/cadastrarProduto" className="hover:text-white">
                Cadastrar Produto
              </Link>
              <Link to="/editarProdutos" className="hover:text-white">
                Editar Produto
              </Link>
              <Link to="/paginaCategorias" className="hover:text-white">
                Cadastrar Categoria
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  } else {
    navBarComponent = (
      <nav>
        <div className="font-mono">
          <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-emerald-500 border-b-2 px-4 lg:px-12">
            <Link to="/">
              <img src={Logo} alt="Logo da empresa" className="w-32 lg:w-56" />
            </Link>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu color="#53c38d"/>
            </button>

            <div className="hidden md:flex justify-center mx-4 py-4">
              <ul className="flex space-x-8 lg:space-x-24 text-center color-icones items-end">
                <Link to="/sobre" className="hover:text-white">
                  <li>Sobre nós</li>
                </Link>
                <Link to="/doacoes" className="hover:text-white">
                  <li>Doações</li>
                </Link>
              </ul>
            </div>

            <div className="flex gap-4 md:gap-6">
              <Link to={"/carrinho"}>
                <img
                  src={Carrinho}
                  alt="Carrinho"
                  className="py-4 items-center w-8 lg:w-7"
                />
              </Link>
              <button
                onClick={toggleDropdown}
                type="button"
                className="profile-button"
              >
                <img src={User} alt="Meu perfil" className="w-8 lg:w-7" />
              </button>
            </div>

            {isDropdownVisible && (
              <div className="dropdown login-dropdown mt-5 z-10 absolute top-20 right-4 bg-gray-900 text-white p-6 rounded-lg shadow-lg z-10">
                <Login />
              </div>
            )}
          </div>

          {isMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 bg-gray-800 text-white p-6 absolute w-full z-20">
              <Link to="/sobre" className="hover:text-white">
                Sobre nós
              </Link>
              <Link to="/doacoes" className="hover:text-white">
                Doações
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }

  return <>{navBarComponent}</>;
}

export default Navbar;
