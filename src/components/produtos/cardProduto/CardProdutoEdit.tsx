import { useContext } from 'react'
import Produto from '../../../models/Produto'
import { CarrinhoContext } from '../../../contexts/CarrinhoContext'
import { Link } from 'react-router-dom'

interface CardProdutoProps {
    prod: Produto
}

function CardProduto({prod}: CardProdutoProps) {

  useContext(CarrinhoContext)

  let precoOriginal = prod.preco;
  let desconto = 0.10;
  let novoValor = precoOriginal - (precoOriginal * desconto);
  
  return (

    <div className="flex border-white border-2 flex-col bg-white p-1 shadow-md items-center mx-10 md:w-80 md:h-80 rounded-lg">
    {/* Primeira div com fundo branco e imagem */}
    <div className="bg-[#19191a] border-white  w-full flex justify-center p-4 rounded-t-lg">
      <img src={prod.foto} alt="Imagem do Produto" className="w-28 h-28"/>
    </div>

    {/* Segunda div com fundo colorido e bordas arredondadas */}
    <div className="w-full p-4 text-center">
      <p className="text-lg text-black font-bold">
        {prod.nome}
      </p>
      <p className="line-through text-red-600 font-bold"> {prod.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
      <p className="text-2xl text-[#53c38d] font-bold">  {novoValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
    

    </div>
    <div className="flex space-x-5">
      <Link to={`/editarProduto/${prod.id}`} className='w-24 rounded-md text-white bg-[#53c38d] hover:bg-white hover:text-[#53c38d] hover:border-[#53c38d] hover:border-2 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='w-24 rounded-md text-white bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 border-2 border-white hover:border-2 flex items-center justify-center py-2'>
          <button>Deletar</button>
        </Link>
      </div>
  </div>
  )
}

export default CardProduto