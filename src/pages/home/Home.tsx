import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import Banner from "../../assets/imagens/navbarImg/banner.png";

function Home() {
  return (
    <>
      <nav>
        <img src={Banner} alt="Banner do Site" className="w-full" />
      </nav>
      <header>
        <div className="font-mono">
          <div className="color-fundo p-2">
            <div className="">
              <div className="flex-col gap-4"></div>
            </div>

            <div className="bg-[#19191a] hover:text-white sm:ml-4 sm:mr-4 md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] rounded-t-md border-t-2 border-l-2 border-r-2 text-[#53c38d] text-center text-2xl py-4">
              <ul className="hover:text-white text-center px-4 md:px-6 lg:px-10">
                Confira abaixo nossas promoções
              </ul>
            </div>
            <div className="sm:ml-4 sm:mr-4 md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] shadow-md mb-2">
              <div>
                <ListaProdutos />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Home;
