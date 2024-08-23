import { useContext, useEffect } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import { Link, useNavigate } from "react-router-dom";
import { Trash } from "@phosphor-icons/react";
import Compras from "../../assets/imagens/carrinhoNeon.png";

function Carrinho() {

  const {
    adicionarItem,
    diminuirQuantidade,
    finalizarCompra,
    listaCarrinho,
    removerItem,
    cancelarCompra,
  } = useContext(CarrinhoContext);

  let soma = 0;

  listaCarrinho.map((item) => (soma = soma + item.preco * item.qtd!));

  useEffect(() => {}, [listaCarrinho.length]);

  return (
    <>
      <div className="font-mono mx-auto grid grid-cols-2 items-center justify-center rounded-2xl ">
        <div className="flex justify-center items-center">
          <img
            src={Compras}
            alt="Carrinho de compra"
            className="shadow-lg rounded-l-2xl"
          />
        </div>
        <div className="text-center ml-4 mr-4">
          <div className="items-center flex-col">
            <p className="">Produtos:</p>
            {listaCarrinho.length ? (
              listaCarrinho.map((item) => (
                <div className="bg-slate-100 mb-9 p-5 flex justify-between items-center rounded-2xl">
                  <div className="flex gap-10 items-center">
                    <img
                      className=" w-20 h-20  flex rounded-xl"
                      src={item.foto}
                      alt="foto do produto"
                    />
                    <p className="font-semibold flex">{item.nome}</p>
                    <p className="font-semibold flex">
                      {item.preco.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div className="flex gap-8 my-auto justify-end">
                    <button
                      className="text-2xl"
                      onClick={() => diminuirQuantidade(item)}
                    >
                      -
                    </button>
                    <p className="border px-3 mt-2 border-cyan-900 rounded-md">
                      {item.qtd}
                    </p>
                    <button
                      className="text-2xl"
                      onClick={() => adicionarItem(item)}
                    >
                      +
                    </button>
                    <button onClick={() => removerItem(item)}>
                      <div>
                        <Trash />
                      </div>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-slate-100 mb-9 p-5 flex justify-between rounded-2xl">
                <div className=" flex content-between items-center gap-7">
                  <p className="font-bold text-xl">Carrinho Vazio</p>
                </div>
                <div>
                  <Link to={"/produtos"}>
                    <button className="text-white border rounded-2xl p-3 font-semibold bg-[#53c38d] hover:bg-white hover:text-[#53c38d]">
                      Comprar produtos
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="p-7 bg-slate-100 rounded-xl mb-4  flex flex-col mt-12 content-center">
            <span className="font-semibold mb-4">Valor total da compra:</span>
            <p className="font-bold">
              {" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(soma)}
            </p>
            <div className="mt-5">
              {listaCarrinho.length < 1 ? (
                <>
                  <button
                    className="border rounded-2xl p-3 bg-red-600 text-white hover:bg-white hover:text-red-600 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    onClick={cancelarCompra}
                  >
                    Cancelar Compra
                  </button>
                </>
              ) : (
                <>
                  <button
                    disabled={false}
                    className="border rounded-2xl p-3 bg-[#53c38d] hover:bg-white text-white hover:text-[#53c38d] w-40"
                    onClick={() => finalizarCompra(soma)}
                  >
                    Comprar
                  </button>
                  <button
                    className="border rounded-2xl p-3 bg-red-600 text-white hover:bg-white hover:text-red-600"
                    onClick={cancelarCompra}
                  >
                    Cancelar Compra
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrinho;
