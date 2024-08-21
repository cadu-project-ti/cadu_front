import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { useContext } from "react";
import { CarrinhoContext } from "../../contexts/CarrinhoContext";
import ListaProdutos from "../produtos/listaProdutos/ListaProdutos";

const ProdutosSwiper = () => {
  const { adicionarItem } = useContext(CarrinhoContext);

  return (
    <div className="color-fundo py-6 pl-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={-45}
        slidesPerView={2}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 3000 }} // 3000 ms = 3 segundos
        loop={true} // Ativa o loop dos slides
      >
        <SwiperSlide className="">
          <ListaProdutos />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProdutosSwiper;
