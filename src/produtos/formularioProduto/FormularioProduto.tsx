import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Produto from "../../models/Produto";
import { buscar, atualizar, cadastrar } from "../../service/Service";
import { toastAlerta } from "../../util/toastAlert";

function FormularioProduto() {
    const navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    const [categorias, setCategoria] = useState<Categoria[]>([]);
  
    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      descricao: '',
    });

    const [produto, setProdutos] = useState<Produto>({
        id: 0,
        descricao: '',
        foto: '',
        nome: '',
        preco: 0,
        quantidade: 0,
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
        await buscar('/categorias', setCategoria, {
          headers: {
            Authorization: token,
          },
        });
      }
    
      useEffect(() => {
        if (token === '') {
          toastAlerta('Você precisa estar logado', 'info');
          navigate('/');
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
          usuario: usuario,
        });
      }
    
      function retornar() {
        navigate('/produtos');
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
            toastAlerta('Produto atualizado com sucesso', 'sucesso');
            retornar();
          } catch (error: any) {
            if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout()
            } else {
              toastAlerta('Erro ao atualizar o Produto', 'erro');
            }
          }
        } else {
          try {
            await cadastrar(`/produtos`, produto, setProdutos, {
              headers: {
                Authorization: token,
              },
            });
    
            toastAlerta('Produto cadastrado com sucesso', 'sucesso');
            retornar();
          } catch (error: any) {
            if (error.toString().includes('403')) {
              toastAlerta('O token expirou, favor logar novamente', 'info')
              handleLogout()
            } else {
              toastAlerta('Erro ao cadastrar o Produto', 'erro');
            }
          }
        }
      }
    
      const carregandoCategoria = categorias.descricao === '';

      {}
      return (
        <div>teste</div>
      )

}
    export default FormularioProduto;