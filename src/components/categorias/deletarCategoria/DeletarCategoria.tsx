<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categorias from '../../../models/Categorias';
=======
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categorias from '../../../models/Categoria';
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
import { buscar, deletar } from '../../../service/Service';


function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function deletarCategorias() {
        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Categoria apagado com sucesso')

        } catch (error) {
            alert('Erro ao apagar o Categoria')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a Categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-emerald-500 text-white font-bold text-2xl'>Tema</header>
                <p className='p-8 text-3xl bg-grey-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-grey-200 bg-emerald-200 hover:bg-emerald-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-grey-200 bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center' onClick={deletarCategorias}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria