<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
=======
import { useContext, useEffect, useState } from 'react';
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from './../../../service/Service';
import CardCategorias from '../cardCategoria/CardCategorias';
<<<<<<< HEAD
import Categorias from '../../../models/Categorias';
=======
import Categorias from '../../../models/Categoria';
>>>>>>> 40059f721f59a43f661edc559aa53c7dfe1bbf39

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias, {
        headers: { Authorization: token },
      });
      
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <>
                <CardCategorias key={categorias.id} categoria={categorias} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;