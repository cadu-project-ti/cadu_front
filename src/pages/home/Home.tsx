import "./Home.css";
import Construcao from "../../assets/imagens/construcao.png";
import { Link } from "react-router-dom";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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


        <div className="color-fundo py-6">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 4000 }} // 3000 ms = 3 segundos
            loop={true} // Ativa o loop dos slides
            
          >
            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-96">
                <img
                  src={"https://github.com/danielthx23.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>Daniel Saburo Akiyama </p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/daniel-akiyama/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/joaopguima" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-96">
                <img
                  src={"https://github.com/joaopguima.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>João Pedro Guimarães</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/joaopguima/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/joaopguima" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-96">
                <img
                  src={"https://github.com/Leogb2014.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>Leonardo Gobetti</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/leonardo-gobetti/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Leogb2014" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-96">
                <img
                  src={"https://github.com/Sara-Vasconcelos.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>Sara Vasconcelos</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/sara-vasconcelos-freitas-souza/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Sara-vasconcelos" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
       

        <div className="color-fundo">
          <div>
          teste 
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
