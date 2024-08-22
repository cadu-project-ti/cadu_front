import Categorias from "./Categoria";

export default interface Produto {
    id: number;
    descricao: string;
    foto: string;
    nome: string;
    preco: number;
    quantidade: number;
    categoria: Categorias | null;
    qtd? : number;
}