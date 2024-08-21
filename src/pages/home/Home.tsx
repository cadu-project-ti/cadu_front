import "./Home.css";
import { Link } from "react-router-dom";
import Banner from "../../assets/imagens/navbarImg/banner.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProdutosSwiper from "../../components/swiper/ProdutosSwiper"; 

function Home() {
  return (
    <>
      <div>
        <div className="relative flex justify-center border-b-[#53c38d] border-b-2">
          <img src={Banner} alt="" />
        </div>

        <div className="absolute inset-0 flex items-center mb-20">
          <div className="flex-col gap-4">
            <Link
              to="/produtos" className="rounded-2xl bg-white text-[#19191a] text-xl hover:bg-[#53c38d] font-bold py-3 px-6"
              style={{ marginTop: "100px", marginLeft: "410px" }}>
              <button>VER PRODUTOS</button>
            </Link>
          </div>
        </div>

        <div className="color-fundo">
        <ProdutosSwiper />
        </div>
      </div>
    </>
  );
}

export default Home;
