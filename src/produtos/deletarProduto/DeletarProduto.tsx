import { useContext, useState } from 'react'
import Produto from '../../models/Produto'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { buscar } from '../../service/Service'
import { toastAlerta } from '../../util/toastAlert'

function DeletarProduto() {

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const navigate = useNavigate()

    const {id} = useParams<{id: string}>()

    const {usuario, handleLogout} = useContext(AuthContext)
    const token = usuario.token;

    async function buscarPorId(id: string) {
        try{
            await buscar(`/produtos/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if(error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }
    
  return (
    <div>DeletarProduto</div>
  )
}

export default DeletarProduto