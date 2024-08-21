import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation,  Pagination,  Scrollbar,  A11y,  Autoplay,} from "swiper/modules";
import Fone from "../../assets/imagens/produtosImg/periférico-headset-1.png";
import Mouse from "../../assets/imagens/produtosImg/mouse.png";
import Soundbox from "../../assets/imagens/produtosImg/soundbox.png";
import Teclado from "../../assets/imagens/produtosImg/teclado.png";
import Monitor from "../../assets/imagens/produtosImg/monitor.png";
import Suporte from "../../assets/imagens/produtosImg/suporte.png";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import ListaProdutos from "../produtos/listaProdutos/ListaProdutos";


const ProdutosSwiper = () => {

  const {adicionarItem} = useContext(CarrinhoContext)

  return (
    <div className="color-fundo py-6 pl-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={-45}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 3000 }} // 3000 ms = 3 segundos
        loop={true} // Ativa o loop dos slides
      >
        <SwiperSlide>
          <ListaProdutos/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProdutosSwiper;
