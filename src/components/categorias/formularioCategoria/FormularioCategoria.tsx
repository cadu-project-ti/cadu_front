<<<<<<< HEAD
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categorias from '../../../models/Categorias';
import { atualizar, buscar, cadastrar } from './../../../service/Service';
=======
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Categorias from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from './../../../service/Service';
import { toastAlerta } from '../../../util/toastAlert';
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39



function FormularioCategoria() {
<<<<<<< HEAD
  const [categorias, setCategorias] = useState<Categorias>({} as Categorias);
=======
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  const [categoria, setCategoria] = useState<Categorias>({} as Categorias);
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
<<<<<<< HEAD
    await buscar(`/categorias/${id}`, setCategorias, {
=======
    await buscar(`/categorias${id}`, setCategoria, {
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
<<<<<<< HEAD
    setCategorias({
      ...categorias,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categorias))
=======
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
<<<<<<< HEAD
        await atualizar(`/categorias`, categorias, setCategorias, {
=======
        await atualizar(`/categorias`, categoria, setCategoria, {
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
          headers: {
            'Authorization': token
          }
        })

<<<<<<< HEAD
        alert('Categoria atualizado com sucesso')
=======
        alert('Categoria atualizada com sucesso')
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
<<<<<<< HEAD
          alert('Erro ao atualizar a Categoria')
=======
          toastAlerta('Erro ao atualizar a Categoria', 'erro')
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
        }

      }

    } else {
      try {
<<<<<<< HEAD
        await cadastrar(`/categorias`, categorias, setCategorias, {
=======
        await cadastrar(`/categorias`, categoria, setCategoria, {
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
          headers: {
            'Authorization': token
          }
        })

<<<<<<< HEAD
        alert('Categorias cadastrado com sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrado a Categoria')
=======
        alert('Categoria cadastrada com sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'erro')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a Categoria', 'erro')
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name='descricao'
            className="border-2 border-grey-700 rounded p-2"
<<<<<<< HEAD
            value={categorias.descricao}
=======
            value={categoria.descricao}
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-emerald-500 hover:bg-emerald-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
<<<<<<< HEAD

function setCategorias(arg0: any) {
    throw new Error('Function not implemented.');
}
=======
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
