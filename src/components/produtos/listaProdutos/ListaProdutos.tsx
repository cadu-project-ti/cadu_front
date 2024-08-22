import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import CardProdutoEdit from "../cardProduto/CardProdutoEdit";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

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
          {produtos &&
            produtos.map((item) => (
          
                <SwiperSlide className="mb-4 mt-4">
                  <CardProduto key={item.id} prod={item} />
                </SwiperSlide>
            
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default ListaProdutos;
