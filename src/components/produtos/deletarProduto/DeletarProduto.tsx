import { useContext, useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlert";

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      toastAlerta("Produto apagado com sucesso", "sucesso");
    } catch (error) {
      toastAlerta("Erro ao apagar o Produto", "erro");
    }

    retornar();
  }
  return <div>
     <div className='container w-80 text-white mx-auto'>
      <h1 className='text-4xl text-center text-white font-mono'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja deletar o produto a seguir?</p>

      <div className='border-2 flex flex-col rounded-2xl overflow-hidden justify-between font-mono'>
        <header className='py-2 px-6 text-[#53c38d] font-semibold text-2xl text-center'>Produto</header>
        <img src={produto.foto} alt="" className="bg-white bg-opacity-75"/>
        <div className="bg-white bg-opacity-75 text-black">
          
          <p className='text-xl h-full text-center'>{produto.descricao}</p>
          <p className="text-center">{produto.nome}</p>
        </div>
        <div className="flex">
          <button className='bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 w-full py-2' onClick={retornar}>Não</button>
          <button className='w-full bg-[#53c38d] hover:bg-white hover:text-[#53c38d] hover:border-[#53c38d] flex items-center justify-center' onClick={deletarProduto}>
            Sim
          </button>
        </div>
      </div>
    </div>
  </div>;
}

export default DeletarProduto;
