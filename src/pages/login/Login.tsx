import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";

function Login() {
  let navigate = useNavigate();

  // Estado para armazenar as credenciais do usuário
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);
  const { isLoading } = useContext(AuthContext);

  // Redirecionar o usuário após o login bem-sucedido
  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  // Atualiza o estado conforme o usuário digita nos campos
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  // Função para lidar com o login ao submeter o formulário
  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validação básica antes de enviar o login
    if (!usuarioLogin.usuario || !usuarioLogin.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    handleLogin(usuarioLogin);
  }

  return (
    <form onSubmit={login}>
      <label htmlFor="usuario">Usuário</label>
      <input
        type="text"
        id="usuario"
        name="usuario"
        placeholder="Usuário"
        className="w-full bg-gray-800 text-white p-2 rounded-2xl mt-1 mb-4"
        value={usuarioLogin.usuario || ""}
        onChange={atualizarEstado}
        required
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Senha"
        name="senha"  /* Certifique-se de usar o nome correto do campo */
        className="w-full bg-gray-800 text-white p-2 rounded-2xl mt-1 mb-4"
        value={usuarioLogin.senha || ""}
        onChange={atualizarEstado}
        required
      />

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white p-2 rounded mt-2 hover:bg-emerald-700"
      >
        {isLoading ? "Entrando..." : "Entrar"}
      </button>

      <p className="text-center mt-4">
        <a href="#" className="text-emerald-500">
          Faça seu login ou{" "}
        </a>
        <Link to="/cadastro" className="text-emerald-500 hover:underline">
          cadastre-se
        </Link>
      </p>
    </form>
  );
}

export default Login;
