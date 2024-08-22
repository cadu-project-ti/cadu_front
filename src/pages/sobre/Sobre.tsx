import logotipo from '../../assets/imagens/logotipo.png';
import laboratorio from '../../assets/imagens/laboratorio.jpeg';
import imageCard1 from '../../assets/imagens/imageCard1.png';
import imageCard2 from '../../assets/imagens/imageCard2.jpg';
import imageCard3 from '../../assets/imagens/imageCard3.png';
import imageCard4 from '../../assets/imagens/imageCard4.jpg';
import CardValores from '../../components/valores/CardValores';
import criancas from '../../assets/imagens/aulacrianca.png';
import adultos from '../../assets/imagens/aulaadulto.jpg';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation,  Pagination,  Scrollbar,  A11y,  Autoplay,} from "swiper/modules";

function Sobre() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/catalogo');
  }

  const cardsData = [
    {
      title: 'Quem Somos',
      description: 'Somos uma empresa especializada na venda de peças para computadores, apaixonados por transformar vidas através da tecnologia. Recondicionamos peças usadas que são doadas para montar novos computadores que são instalados nos nossos centros tecnológicos em comunidades. Buscamos reduzir o desperdício eletrônico e promover um futuro mais inclusivo.',
      image: imageCard1,
    },
    {
      title: 'Visão',
      description: 'Ser referência em inovação e responsabilidade social, liderando a transformação digital com um compromisso firme com a sustentabilidade e a inclusão. Almejamos um futuro onde cada computador montado pela CADU representa uma porta aberta para novas oportunidades, contribuindo para um mundo mais justo e conectado, onde a tecnologia é um direito acessível a todos.',
      image: imageCard2,
    },
    {
      title: 'Missão',
      description: 'Além de oferecer produtos tecnológicos de alta qualidade, nossa missão é promover a inclusão digital e o desenvolvimento sustentável através da reutilização de peças de computadores. Ao recondicionar e doar equipamentos a comunidades carentes e reinvestir em centros tecnológicos, visamos criar um impacto positivo e duradouro. Queremos garantir que a tecnologia avance de forma acessível e sustentável, oferecendo a todos a chance de aprender e prosperar.',
      image: imageCard3,
    },
    {
      title: 'Valores',
      description: 'SUSTENTABILIDADE: Reutilizar e recondicionar peças para minimizar o impacto ambiental. INCLUSÃO DIGITAL: Garantir que todos tenham acesso a tecnologias necessárias para o desenvolvimento pessoal e comunitário. COMPROMISSO SOCIAL: Contribuir para o bem-estar das comunidades, alinhando nossos esforços com o objetivo de desenvolvimento da ONU 9.',
      image: imageCard4,
    },
  ];

  return (
    <>
      <header className='bg-[#19191a] shadow-lg'>
        <div className='flex items-center justify-center gap-16 w-full h-[200px] p-4'>
          <h1 className='text-4xl font-semibold text-[#53c38d] text-center'>
            Compre <br /> <span className='text-5xl font-bold text-white'>Ajude</span>
          </h1>
          <div className="relative w-24 h-24">
            <img
              className="w-full h-full object-cover rounded-full border-4 border-[#53c38d]"
              src={logotipo}
              alt="Logotipo"
            />
          </div>
          <h1 className='text-4xl font-semibold text-[#53c38d] text-center'>
            Doe <br /> <span className='text-5xl font-bold text-white'>Use</span>
          </h1>
        </div>
      </header>

      <main className='bg-[#19191a]'>
  <div className='flex justify-center'>
    <div className='bg-white flex flex-col md:flex-row items-center mt-16 mb-16 rounded-3xl w-[90%] md:w-[80%] p-8 drop-shadow-2xl'>
      {/* Container para o texto */}
      <div className='flex flex-col text-lg md:text-xl p-4 gap-4 md:w-1/2'>
        <h2 className='text-2xl text-black font-bold bg-emerald-300 p-2 rounded-md text-center '>
          Projeto Social CADU
        </h2>
        <p className='text-gray-800 leading-relaxed overflow-auto'>
          Em um mundo onde a tecnologia é vital, muitas comunidades carentes ainda lutam para acessar computadores. O PROJETO CADU surgiu para mudar essa realidade.
          <br /><br />
          Comprometidos em transformar vidas por meio da tecnologia e alinhados com o Objetivo da ONU 9, recolhemos peças usadas e as recondicionamos para montar computadores e os usamos para montar centros tecnológicos em comunidades.
          <br /><br />
          Além disso, uma porcentagem de cada venda também é revertida para investimentos nesses centros.
          <br /><br />
          Nosso objetivo é promover a inclusão digital e contribuir para o desenvolvimento sustentável, oferecendo acesso à tecnologia e oportunidades para um futuro melhor.
          <br /><br />
          Você pode fazer parte dessa história! Doe suas peças usadas: aquilo que você considera antigo, podemos juntos reutilizá-los para transformar vidas!
        </p>
        <button 
          type='button' 
          onClick={handleNavigate} 
          className="bg-[#53c38d] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#19191a] transition-colors">
          Contribua
        </button>
      </div>

      {/* Container para a imagem */}
      <div className='flex flex-col items-center w-full mb-4 w-[90%] md:w-[80%]'>
        <img className="float-right w-full h-auto object-cover rounded-xl p-2" src={laboratorio} alt="Sala de tecnologia" />
        <img className="float-right w-full h-auto object-cover rounded-xl p-2" src={criancas} alt="Sala de aula com crianças" />
        <img className="float-right w-full h-auto object-cover rounded-xl p-2" src={adultos} alt="Sala de aula com adultos" />
      </div>
    </div>
  </div>
</main>

<div className='bg-[#53c38d] text-white font-bold text-center'>
SAIBA MAIS SOBRE NÓS
</div>


        <div className='bg-[#19191a] py-6 mb-16'>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 20000 }} // 20000 ms = 20 segundos
            loop={true} // Ativa o loop dos slides
            className="w-full max-w-4xl mx-auto" // Ajusta a largura máxima do Swiper
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index} className='flex justify-center items-center p-4'>
                <CardValores
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
    </>
  );
}

export default Sobre;