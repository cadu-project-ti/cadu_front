import "./Home.css";
import Construcao from "../../assets/imagens/construcao.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center fundoHome">
          <div className="container grid grid-cols-2 items-center justify-center">
            <div className="flex-col gap-4  py-4">
              <div className="flex justify-around gap-6">
                <Link
                  to="/produtos"
                  className="rounded-2xl bg-white text-[#19191a] text-xl hover:bg-[#53c38d] font-bold py-3 px-6"
                  style={{ marginTop: "250px", marginRight: "250px" }}>
                  {" "}
                  <button>VER PRODUTOS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center bg-gray-800 ">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-5xl color-texts ">Seja bem vindo ao CADU!</h1>
            <h2 className="color-texts">Página em Construção</h2>
            <img
              src={Construcao}
              alt="Imagem de site em construção"
              className="animate-pulse"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
