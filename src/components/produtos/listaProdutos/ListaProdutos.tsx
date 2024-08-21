import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlert";
import CardProduto from "../cardProduto/CardProduto";

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
  
    const navigate = useNavigate();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    useEffect(() => {
      if (token === '') {
        toastAlerta('Você precisa estar logado', 'info');
        navigate('/');
      }
    }, [token]);
  
    async function buscarProdutos() {
      try {
        await buscar('/produtos', setProdutos, {
          headers: {
            Authorization: token,
          },
        });
      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      buscarProdutos();
    }, [produtos.length]);
  

    return (
        <>
          {produtos && produtos.map((item) => (
            <div>
              <CardProduto key={item.id} prod={item}/>
            </div>
          ))}
        </>
      );
    }
    
    export default ListaProdutos;