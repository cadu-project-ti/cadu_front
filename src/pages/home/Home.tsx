import "./Home.css";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";

function Home() {
  return (
    <>
      <div className="fundoHome flex items-center">
        <div className="container text-white-">
          <div className="flex flex-col gap-4 ml-96 mt-28">
            <div className="flex">
              <Link
                to="/produtos"
                className="rounded-2xl bg-white text-[#53c38d]  text-xl  hover:bg-[#53c38d]  hover:text-white font-bold py-4 px-8"
              >
                <button>VER PRODUTOS</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="color-fundo">
        <div className="">
          <div className="flex-col gap-4"></div>
        </div>
        <div className="py-4"></div>

        <div className="bg-[#53c38d]  hover:text-white ml-[150px] mr-[150px] rounded-t-md text-black text-center text-2xl py-4">
            <ul className="hover:text-white text-center px-10">Confira abaixo nossos produtos</ul>
        </div>
        <div className="bg-white ml-[150px] mr-[150px] rounded-b-md shadow-md">
          <div>
            <ListaProdutos />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
