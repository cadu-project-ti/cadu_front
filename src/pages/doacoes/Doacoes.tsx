import React, { useState } from "react";
import "./Doacoes.css";
import Banner2 from '../../assets/imagens/banner2.jpg'

const DonationForm = () => {
  // Definir estados para cada campo
  const [nomeProduto, setNomeProduto] = useState("");
  const [anoDeUso, setAnoDeUso] = useState("");
  const [marca, setMarca] = useState("");
  const [condicao, setCondicao] = useState("novo");

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
    // Aqui você pode enviar os dados para um backend, por exemplo
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh]"> <img src={Banner2} alt="" className="opacity-70 h-screen w-screen object-cover absolute" />
      <div className="bg-[#1c1c22] absolute  text-white justify-center items-center text-center py-5 px-6 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Nome do Produto:</label>
            <input
              type="text"
              value={nomeProduto}
              onChange={(e) => setNomeProduto(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full text-black"
            />
          </div>

          <div className="mb-4">
            <label>Anos de Uso:</label>
            <input
              type="number"
              value={anoDeUso}
              onChange={(e) => setAnoDeUso(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full text-black"
            />
          </div>

          <div className="mb-4">
            <label>Marca:</label>
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full text-black"
            />
          </div>

          <div className="mb-4">
            <label>Estado de Uso:</label>
            <select
              value={condicao}
              onChange={(e) => setCondicao(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full text-black"
            >
              <option value="novo">Novo</option>
              <option value="usado">Usado</option>
              <option value="muito velho">Muito Velho</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Enviar Doação
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;
