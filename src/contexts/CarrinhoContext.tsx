import { ReactNode, createContext, useState } from "react";
import Produto from "../models/Produto";
import { toastAlerta } from "../util/toastAlert";

interface CarrinhoContextProps {
    listaCarrinho: Array<Produto>
    adicionarItem: (produto: Produto) => void;
    diminuirQuantidade: (produto: Produto) => void;
    removerItem: (produto: Produto) => void;
    finalizarCompra: (soma: number) => void;
}



interface CarrinhoProviderProps {
    children: ReactNode;
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps)

export function CarrinhoProvider({ children }: CarrinhoProviderProps) {

    const [listaCarrinho, setListaCarrinho] = useState<Produto[]>([])

    function adicionarItem(prod: Produto) {
        setListaCarrinho((currentItems: Produto[]) => {
            if (currentItems.find((item) => item.id === prod.id) == null) {
                return [...currentItems, { ...prod, qtd: 1 }];
            } else {
                return currentItems.map((item) => {
                    if (item.id === prod.id) {
                        return { ...item, qtd: item.qtd! + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
        toastAlerta("Produto adicionado ao carrinho", "sucesso")
    }

    function diminuirQuantidade(prod: Produto) {
        setListaCarrinho((currentItems: Produto[]) => {
            if (currentItems.find((item) =>
                item.id === prod.id)?.qtd === 1) {
                return currentItems.filter((item) => item.id !== prod.id)
            } else {
                return currentItems.map((item) => {
                    if (item.id === prod.id) {
                        return { ...item, qtd: item.qtd! - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removerItem(prod: Produto) {
        setListaCarrinho((currentItems: Produto[]) => {
            return currentItems.filter((item) => item.id !== prod.id)
        })
        toastAlerta("Produto Removido", 'sucesso')
    }

    function finalizarCompra(soma: number) {
        setListaCarrinho([])
        toastAlerta("Compra finalizada com sucesso", 'sucesso')
    }

    return (
        <CarrinhoContext.Provider value={{ listaCarrinho, adicionarItem, diminuirQuantidade, removerItem, finalizarCompra}}>
            {children} 
        </CarrinhoContext.Provider>
    )

}