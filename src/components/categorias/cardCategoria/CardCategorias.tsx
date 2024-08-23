import { Link } from 'react-router-dom';
import Categorias from '../../../models/Categoria';


interface CardCategoriasProps {
  categoria: Categorias;
  onDelete: (id: number) => void; // Define a propriedade onDelete como uma função que recebe um número
}

function CardCategorias({ categoria, onDelete }: CardCategoriasProps) {
  return (
    <div className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden w-full md:w-80 mx-auto mb-6">
      {/* Informações da Categoria */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{categoria.descricao}</h2>
      </div>

      {/* Ações */}
      <div className="flex justify-around p-4 bg-gray-100">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-24 rounded-md text-white bg-[#53c38d] hover:bg-white hover:text-[#53c38d] hover:border-[#53c38d] hover:border-2 flex items-center justify-center py-2"
        >
          Editar
        </Link>
        <button
          onClick={() => onDelete(categoria.id)} // Chama a função onDelete com o id da categoria
          className="w-24 rounded-md text-white bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 border-2 border-white hover:border-2 flex items-center justify-center py-2"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}

export default CardCategorias;
