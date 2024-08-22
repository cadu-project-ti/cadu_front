import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlert";
import Categoria from "../../../models/Categoria";
import Banner2 from "../../../assets/imagens/controle.jpg";

function FormularioProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });

  const [produto, setProdutos] = useState<Produto>({
    id: 0,
    descricao: "",
    foto: "",
    nome: "",
    preco: 0,
    quantidade: 0,
    categoria: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
      console.log(categorias);
    }
  }, [id]);

  useEffect(() => {
    setProdutos({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProdutos({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ produto });

    if (id != undefined) {
      try {
        await atualizar(`/produtos`, produto, setProdutos, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Produto atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o Produto", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProdutos, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Produto cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Produto", "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricao === "";

  {
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh]">
      <img src={Banner2} alt="Plano de fundo" className="opacity-70 h-screen w-screen object-cover absolute"
      />
      <div className="container flex flex-col justify-center text-black text-opacity-100 mt-10 items-center rounded-md font-semibold font-">
        <h1 className="text-4xl text-center my-8 ">
          {id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
        </h1>

        <form
          onSubmit={gerarNovoProduto}
          className="flex flex-col bg-black bg-opacity-80 p-4 rounded-md z-10 font-semibold text-white w-1/3 gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do produto</label>
            <input
              value={produto.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Nome"
              name="nome"
              required
              className="border-2 border-slate-700 rounded p-2 text-[#53c38d]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao">Descrição do Produto</label>
            <input
              value={produto.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              className="border-2 border-slate-700 rounded p-2 text-[#53c38d]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="foto">Imagem do produto</label>
            <input
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Imagem do Produto"
              name="foto"
              required
              className="border-2 border-slate-700 rounded p-2 text-[#53c38d]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="preco">Preço do Produto</label>
            <input
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Preço do Produto"
              name="preco"
              required
              className="border-2 border-slate-700 rounded p-2 text-[#53c38d]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="quantidade">Quantidade do Produto</label>
            <input
              value={produto.quantidade}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Quantidade"
              name="quantidade"
              required
              className="border-2 border-slate-700 rounded p-2 text-[#53c38d]"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <p>Categoria do Produto</p>
            <select
              name="categoria"
              id="categoria"
              className="border p-2 border-slate-800 rounded text-[#53c38d]"
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione um tema
              </option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id}>{categoria.descricao}</option>
                </>
              ))}
            </select>
          </div>
          <button
            disabled={carregandoCategoria}
            type="submit"
            className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2"
          >
            {carregandoCategoria ? (
              <span>Carregando</span>
            ) : id !== undefined ? (
              "Editar"
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
export default FormularioProduto;
