import React from "react";
import "./Home.css";
import Construcao from '../../assets/imagens/construcao.png'

function Home() {
  return (
    <div className="flex justify-center bg-gray-800 min-h-[83vh]">
      <div className="flex 1 flex-col gap-4 items-center justify-center py-4">
        <h1 className="text-5xl color-texts ">Seja bem vindo ao CADU!</h1>
        <h2 className="color-texts">Página em Construção</h2>
        <img src={Construcao} alt="Imagem de site em construção" className="animate-pulse"/>
      </div>
    </div>
    
  );
}

export default Home;
