import logotipo from "../../assets/imagens/logotipo.png";
import laboratorio from "../../assets/imagens/laboratorio.jpeg";
import imageCard1 from "../../assets/imagens/imageCard1.png";
import imageCard2 from "../../assets/imagens/imageCard2.jpg";
import imageCard3 from "../../assets/imagens/imageCard3.png";
import imageCard4 from "../../assets/imagens/imageCard4.jpg";
import CardValores from "../../components/valores/CardValores";
import criancas from "../../assets/imagens/aulacrianca.png";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "../../components/produtos/listaProdutos/ListaProdutos.css";

function Sobre() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/doacoes");
  };

  const cardsData = [
    {
      title: "Quem Somos",
      description:
        "Somos uma empresa especializada na venda de peças para computadores, apaixonados por transformar vidas através da tecnologia. Recondicionamos peças usadas que são doadas para montar novos computadores que são instalados nos nossos centros tecnológicos em comunidades. Buscamos reduzir o desperdício eletrônico e promover um futuro mais inclusivo.",
      image: imageCard1,
    },
    {
      title: "Visão",
      description:
        "Ser referência em inovação e responsabilidade social, liderando a transformação digital com um compromisso firme com a sustentabilidade e a inclusão. Almejamos um futuro onde cada computador montado pela CADU representa uma porta aberta para novas oportunidades, contribuindo para um mundo mais justo e conectado, onde a tecnologia é um direito acessível a todos.",
      image: imageCard2,
    },
    {
      title: "Missão",
      description:
        "Além de oferecer produtos tecnológicos de alta qualidade, nossa missão é promover a inclusão digital e o desenvolvimento sustentável através da reutilização de peças de computadores. Ao recondicionar e doar equipamentos a comunidades carentes e reinvestir em centros tecnológicos, visamos criar um impacto positivo e duradouro. Queremos garantir que a tecnologia avance de forma acessível e sustentável, oferecendo a todos a chance de aprender e prosperar.",
      image: imageCard3,
    },
    {
      title: "Valores",
      description:
        "SUSTENTABILIDADE: Reutilizar e recondicionar peças para minimizar o impacto ambiental. INCLUSÃO DIGITAL: Garantir que todos tenham acesso a tecnologias necessárias para o desenvolvimento pessoal e comunitário. COMPROMISSO SOCIAL: Contribuir para o bem-estar das comunidades, alinhando nossos esforços com o objetivo de desenvolvimento da ONU 9.",
      image: imageCard4,
    },
  ];
  return (
    <>
      <header className="bg-[#19191a] shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
          <h1 className="text-4xl font-semibold text-[#53c38d] text-center">
            Compre <br />
            <span className="text-5xl font-bold text-white">Ajude</span>
          </h1>
          <div className="relative w-24 h-24">
            <img
              className="w-full h-full object-cover rounded-full border-[#53c38d] border-2"
              src={logotipo}
              alt="Logotipo"
            />
          </div>
          <h1 className="text-4xl font-semibold text-[#53c38d] text-center">
            Doe <br />
            <span className="text-5xl font-bold text-white">Use</span>
          </h1>
        </div>
      </header>

      <main className="bg-[#19191a]">
        <div className="flex justify-center font-mono">
          <div className="flex flex-col md:flex-row items-center mt-16 mb-16 rounded-3xl w-[90%] md:w-[80%] p-8">
            <div className="flex flex-col text-lg md:text-xl p-4 gap-4 md:w-1/2">
              <hr className="flex border-[#53c38d] items-center text-center w-full mx-auto " />
              <h2 className="text-2xl text-black font-bold bg-emerald-300 p-2 rounded-md text-center">
                Projeto Social CADU
              </h2>
              <p className="text-white leading-relaxed overflow-auto">
                Em um mundo onde a tecnologia é vital, muitas comunidades
                carentes ainda lutam para acessar computadores. O PROJETO CADU
                surgiu para mudar essa realidade.
                <br />
                <br />
                Comprometidos em transformar vidas por meio da tecnologia e
                alinhados com o Objetivo da ONU 9, recolhemos peças usadas e as
                recondicionamos para criar computadores, que são utilizados para
                instalar centros tecnológicos em comunidades.
                <br />
                <br />
                Além disso, uma porcentagem de cada venda também é revertida
                para investimentos nesses centros.
                <br />
                <br />
                Nosso objetivo é promover a inclusão digital e contribuir para o
                desenvolvimento sustentável, oferecendo acesso à tecnologia e
                oportunidades para um futuro melhor.
                <br />
                <br />
                Você pode fazer parte dessa história! Doe suas peças usadas:
                aquilo que você considera antigo, podemos juntos reutilizá-los
                para transformar vidas!
              </p>
              <button
                type="button"
                onClick={handleNavigate}
                className="bg-[#53c38d] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#19191a] transition-colors"
              >
                Contribua
              </button>
              <hr className="flex border-[#53c38d] items-center text-center w-full mx-auto " />
            </div>

            {/* Container para a imagem */}
            <div className="flex flex-col items-center mb-4 md:w-1/2">
              <img
                className="h-auto object-cover rounded-xl p-2"
                src={laboratorio}
                alt="Sala de tecnologia"
              />
              <img
                className="h-auto object-cover rounded-xl p-2"
                src={criancas}
                alt="Crianças estudando"
              />
            </div>
          </div>
        </div>
      </main>

      <hr className="flex border-[#53c38d] items-center text-center w-80 mx-auto mb-4" />
      <div className="text-white font-bold text-center mb-4">
        SAIBA MAIS SOBRE NÓS
      </div>
      <div className="bg-[#19191a]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          autoplay={{ delay: 5000 }} // 20000 ms = 20 segundos
          loop={true}
          className="w-full max-w-4xl mx-auto"
        >
          {cardsData.map((card, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center p-4"
            >
              <CardValores
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev py-10"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </>
  );
}

export default Sobre;
