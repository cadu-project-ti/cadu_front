import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlert";
import CardProduto from "../cardProduto/CardProduto";
import {  Navigation,  Pagination,  Scrollbar,  A11y,  Autoplay} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ListaProdutos.css";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarProdutos() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
      <div>
        <div className="justify-center bg-[#19191a] items-center">
          <Swiper className="px-4"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10} // Espaço entre os slides
            slidesPerView={3} // Valor padrão para telas grandes
            breakpoints={{
              // Definindo slides diferentes para diferentes tamanhos de tela
              50: {
                slidesPerView: 2, // 1 slide para telas pequenas
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2, // 1 slide para telas pequenas
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2, // 2 slides para tablets
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // 3 slides para telas médias
                spaceBetween: 70,
              },
              1280: {
                slidesPerView: 3, // 4 slides para telas grandes
                spaceBetween: 10,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 3000 }} // 3000 ms = 3 segundos
            loop={true} // Ativa o loop dos slides
          >
            {produtos &&
              produtos.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardProduto prod={item} />
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
