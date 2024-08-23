import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthContext';
import Categorias from './../../models/Categoria';
import { atualizar, buscar, cadastrar, deletar } from './../../service/Service';
import { toastAlerta } from './../../util/toastAlert';
import CardCategorias from './../../components/categorias/cardCategoria/CardCategorias';

function PaginaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  const [categoria, setCategoria] = useState<Categorias>({} as Categorias);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function deletarCategoria(id: number) {
    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      toastAlerta('Categoria deletada com sucesso', 'sucesso');
      buscarCategorias();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info');
        handleLogout();
      } else {
        toastAlerta('Erro ao deletar a Categoria', 'erro');
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
      setIsEditing(true);
    } else {
      setCategoria({} as Categorias);
      setIsEditing(false);
    }
    buscarCategorias();
  }, [id]);

  function editarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/${id}`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Categoria atualizada com sucesso', 'sucesso');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info');
          handleLogout();
        } else {
          toastAlerta('Erro ao atualizar a Categoria', 'erro');
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta('Categoria cadastrada com sucesso', 'sucesso');
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info');
          handleLogout();
        } else {
          toastAlerta('Erro ao cadastrar a Categoria', 'erro');
        }
      }
    }
    setCategoria({} as Categorias);
    setIsEditing(false);
    buscarCategorias();
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center text-grey">
        <h1 className="text-4xl text-center my-8 text-white">
          {isEditing ? 'Editar Categoria' : 'Cadastrar Nova Categoria'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao"></label>
            <input
              type="text"
              placeholder="Descrição"
              name="descricao"
              className="border-2 border-gray-700 rounded p-2"
              value={categoria.descricao || ''}
              onChange={editarEstado}
            />
          </div>
          <button
            className="rounded text-slate-100 bg-emerald-500 hover:bg-emerald-800 w-1/2 py-2 mx-auto block"
            type="submit"
          >
            {isEditing ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl text-center my-8 text-white">Categorias</h2>
        <div className="flex flex-wrap justify-center">
          {categorias.map((cat) => (
            <CardCategorias
              key={cat.id}
              categoria={cat}
              onDelete={() => deletarCategoria(cat.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaginaCategorias;
