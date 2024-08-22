import { useContext } from "react"
import { CarrinhoContext } from "../../contexts/CarrinhoContext"

function Carrinho() {

  const {listaCarrinho} = useContext(CarrinhoContext)

  return (
    <div>
      {listaCarrinho && listaCarrinho.map((produto) => (
        <div key={produto.id} className="text-black">
          {produto.descricao}
          {produto.preco}
        </div>
      ))}
    </div>
  )
}

export default Carrinho