import { useContext } from "react";
import Produto from "../../../models/Produto";
import { CarrinhoContext } from "../../../contexts/CarrinhoContext";

interface CardProdutoProps {
  prod: Produto;
}

function CardProduto({ prod }: CardProdutoProps) {
  const { adicionarItem } = useContext(CarrinhoContext);

  let precoOriginal = prod.preco;
  let desconto = 0.1;
  let novoValor = precoOriginal - precoOriginal * desconto;

  return (
    <div className="flex flex-col border-2 border-white bg-white shadow-md items-center mx-auto p-0 rounded-lg sm:w-64 md:w-72 lg:w-80 xl:w-96 min-h-[250px]">
      {/* Primeira div com fundo branco e imagem */}
      <div className="bg-[#19191a] border-white w-full flex justify-center p-4 rounded-t-lg h-40">
        <img
          src={prod.foto}
          alt="Imagem do Produto"
          className="w- h-24 object-contain"
        />
      </div>

      {/* Segunda div com fundo colorido e bordas arredondadas */}
      <div className="w-full p-2 sm:p-4 text-center">
        <p className="text-base sm:text-lg lg:text-xl text-black font-bold">
          {prod.nome}
        </p>
        <p className="line-through text-red-600 font-bold text-sm sm:text-base lg:text-lg">
          {prod.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#53c38d] font-bold">
          {novoValor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      {/* Botão de compra */}
      <button
        onClick={() => adicionarItem(prod)}
        className="bg-[#19191a] border-white text-center rounded-sm mb-2 mt-auto hover:bg-[#53c38d] transition-colors duration-300 w-full"
      >
        <div className="py-2 font-bold text-white">COMPRAR</div>
      </button>
    </div>
  );
}

export default CardProduto;