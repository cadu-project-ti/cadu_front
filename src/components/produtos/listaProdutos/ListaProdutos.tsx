import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import { toastAlerta } from "../../../util/toastAlert";
import CardProduto from "../cardProduto/CardProduto";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
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
        <div className="justify-center border-l-2 border-r-2 bg-[#19191a] items-center swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={4}
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
                <SwiperSlide className="mb-4 mt-4">
                  <CardProduto key={item.id} prod={item} />
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
        <div className="border-b-2 border-l-2 border-r-2 rounded-b-md fundoProdutos"></div>
      </div>
    </>
  );
}

export default ListaProdutos;
2;
