import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaApple } from "react-icons/fa6";
import RedRagon from "../../assets/imagens/reddragon.png";

function ListaParceiros() {
  return (
    <div className="py-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        breakpoints={{
          // Tela pequena (mobile)
          640: {
            slidesPerView: 1,
          },
          // Tela média (tablet)
          768: {
            slidesPerView: 2,
          },
          // Tela grande (desktop)
          1024: {
            slidesPerView: 3,
          },
          // Tela extra grande
          1280: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        <SwiperSlide className="fonteProjeto font-bold">
          <div className="flex p-10 rounded gap-4 text-white items-center flex-col container mx-auto">
            <a href="https://www.apple.com/br/" target="blank">
              <FaApple className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64" />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex p-10 rounded fonteProjeto gap-4 text-red-600 items-center flex-col container mx-auto">
            <a href="https://www.redragon.com.br/" target="blank">
              <img
                src={RedRagon}
                alt=""
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex p-10 rounded fonteProjeto gap-4 text-purple-900 items-center flex-col container mx-auto">
            <a href="https://www.benq.com/en.html" target="blank">
              <img
                src="https://i.ibb.co/GFnnPby/benq.png"
                alt=""
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
              />
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex p-10 rounded fonteProjeto gap-4 text-purple-900 items-center flex-col container mx-auto">
            <a href="https://www.havit.hk/" target="blank">
              <img
                src="https://i.ibb.co/ZBMKWdB/havit.png"
                alt=""
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64"
              />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ListaParceiros;
