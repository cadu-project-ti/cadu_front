import { useContext } from 'react'
import Produto from '../../../models/Produto'
import { CarrinhoContext } from '../../../contexts/CarrinhoContext'
import { Link } from 'react-router-dom'

interface CardProdutoProps {
    prod: Produto
}

function CardProduto({prod}: CardProdutoProps) {

  const {adicionarItem} = useContext(CarrinhoContext)

  let precoOriginal = prod.preco;
  let desconto = 0.10;
  let novoValor = precoOriginal - (precoOriginal * desconto);

  return (

    <div className="flex border-white border-2 flex-col bg-white p-0 shadow-md items-center container mx-10 md:w-80 rounded-lg">
    {/* Primeira div com fundo branco e imagem */}
    <div className="bg-[#19191a] border-white  w-full flex justify-center p-4 rounded-t-lg">
      <img src={prod.foto} alt="Imagem do Produto" className="w-28 h-28"/>
    </div>

    {/* Segunda div com fundo colorido e bordas arredondadas */}
    <div className="w-full p-4 text-center">
      <p className="text-lg text-black font-bold">
        {prod.nome}
      </p>
      <p className="line-through font-bold" style={{color:"#D43635"}}> R$ {prod.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
      <p className="text-2xl text-[#53c38d] font-bold">  {novoValor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
    

    </div>
    <button onClick={() => adicionarItem(prod)} className="bg-[#19191a] border-whitetext-center rounded-sm mb-2 justify-center mt-2 hover:bg-[#53c38d]"> 
        <div className="mr-4 ml-4 font-bold text-white">
          COMPRAR
        </div>
    </button>
  </div>
  )
}

export default CardProduto