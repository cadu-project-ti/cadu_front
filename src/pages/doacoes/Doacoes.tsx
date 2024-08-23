import { useContext, useEffect, useState } from "react";
import "./Doacoes.css";
import Banner2 from '../../assets/imagens/banner2.jpg'
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../util/toastAlert";

const DonationForm = () => {

  let navigate = useNavigate();
  
  // Definir estados para cada campo
  const [nomeProduto, setNomeProduto] = useState("");
  const [anoDeUso, setAnoDeUso] = useState("");
  const [marca, setMarca] = useState("");
  const [condicao, setCondicao] = useState("novo");
  const [enviado, setEnviado] = useState(false); // Estado para controlar a simulação de envio
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // Função para lidar com a submissão do formulário
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Objeto com os dados do formulário
    const donationData = {
      nomeProduto,
      anoDeUso,
      marca,
      condicao,
    };

    console.log("Dados da doação:", donationData);

    // Simulação de envio bem-sucedido
    setEnviado(true);

    // Resetar os campos do formulário
    setNomeProduto("");
    setAnoDeUso("");
    setMarca("");
    setCondicao("novo");

    // Simulação de envio por 2 segundos
    setTimeout(() => {
      setEnviado(false);
    }, 2000);
  };

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'erro');
      navigate('/home');
    }
  }, [token]);

  return (
    <div className="flex justify-center items-center min-h-[70vh]"> 
      <img src={Banner2} alt="" className="opacity-70 h-screen w-screen object-cover absolute" />
      <div className="absolute bg-black bg-opacity-80 text-white font-semibold justify-center items-center text-center py-5 px-6 rounded-md">
        {enviado ? ( // Mostrar mensagem de sucesso se o formulário for enviado
          <p className="text-[#53c38d]">Doação enviada com sucesso!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label>Nome do Produto:</label>
              <input
                type="text"
                value={nomeProduto}
                onChange={(e) => setNomeProduto(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded w-full text-[#53c38d]"
              />
            </div>

            <div className="mb-4">
              <label>Anos de Uso:</label>
              <input
                type="number"
                value={anoDeUso}
                onChange={(e) => setAnoDeUso(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded w-full text-[#53c38d]"
              />
            </div>

            <div className="mb-4">
              <label>Marca:</label>
              <input
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded w-full text-[#53c38d]"
              />
            </div>

            <div className="mb-4">
              <label>Estado de Uso:</label>
              <select
                value={condicao}
                onChange={(e) => setCondicao(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded w-full text-[#53c38d]"
              >
                <option value="novo">Novo</option>
                <option value="usado">Usado</option>
                <option value="muito velho">Muito Velho</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-[#53c38d] hover:text-[#53c38d] hover:bg-white text-white py-2 px-4 rounded">
              Enviar Doação
            </button> 
          </form>
        )}
      </div>
    </div>
  );
};

export default DonationForm;
