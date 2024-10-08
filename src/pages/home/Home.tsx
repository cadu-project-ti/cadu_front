import "./Home.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos";
import Banner from "../../assets/imagens/navbarImg/banner.png";
import "./Home.css"
import ListaParceiros from "../../components/parceiros/ListaParceiros";


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

            <div className="bg-[#19191a] produtosRelacionados hover:text-white sm:ml-4 sm:mr-4 md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] text-[#53c38d] text-center text-2xl py-4">
              <div className="linha"></div>
              <div className="text-center fonteProjeto font-bold text-base md:text-xs lg:text-xl hover:text-white px-4 md:px-6 lg:px-10">
                Confira abaixo nossas promoções
              </div>
              <div className="linha"></div>
            </div>
            <div className="sm:ml-4 sm:mr-4 md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] mb-2">
              <div>
                <ListaProdutos />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="bg-[#19191a] produtosRelacionados hover:text-white sm:ml-4 sm:mr-4 md:ml-[50px] md:mr-[50px] lg:ml-[150px] lg:mr-[150px] text-[#53c38d] text-center text-2xl py-4">
          <div className="linha"></div>
          <div className="text-center fonteProjeto font-bold text-base md:text-xs lg:text-xl hover:text-white px-4 md:px-6 lg:px-10">
            Nossos parceiros
          </div>
          <div className="linha"></div>
        </div>
      </section>
      <div>
        <ListaParceiros />
      </div>
    </>
  );
}

export default Home;
