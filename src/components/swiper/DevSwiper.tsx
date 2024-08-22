import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import 'swiper/swiper-bundle.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const DevSwiper = () => {
  return (
    <div className="mx-8 my-2 border-2 border-slate-700 rounded">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={false} // 3000 ms = 3 segundos
        loop={false} // Ativa o loop dos slides
      >
        <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-72 justify-center">
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
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-72 justify-center">
                <img
                  src={"https://github.com/IsabellyDornelas.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>Isabelly Dornelas</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/isadornelas/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/IsabellyDornelas" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-72 justify-center">
                <img
                  src={"https://github.com/YancaDantas.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>Yanca Dantas</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/yanca-dantas/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/YancaDantas" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex bg-gray-200 p-10 rounded shadow-md gap-4 items-center flex-col container mx-auto md:w-72 justify-center">
                <img
                  src={"https://github.com/FelipePortoWS.png"}
                  alt=""
                  className="w-24 h-24 rounded-full"
                />
                <p>Felipe Porto</p>
                <p className="flex gap-2">
                  <a
                    href="https://www.linkedin.com/in/felipe-porto-b01844299/"
                    target="blank"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/FelipePortoWS" target="blank">
                    <FaGithub />
                  </a>
                </p>
              </div>
            </SwiperSlide>
        
        

      </Swiper>
    </div>
  );
};

export default DevSwiper;