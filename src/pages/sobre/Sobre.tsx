import logotipo from '../../assets/imagens/logotipo.png';
import laboratorio from '../../assets/imagens/laboratorio.jpeg';
import CardValores from '../../components/valores/CardValores';
import { useNavigate } from 'react-router-dom';
import imageCard1 from '../../assets/imagens/imageCard1.png';
import imageCard2 from '../../assets/imagens/imageCard2.jpg';
import imageCard3 from '../../assets/imagens/imageCard3.png';
import imageCard4 from '../../assets/imagens/imageCard4.jpg';



function Sobre() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/catalogo');
  }

  const cardsData = [
    {
      title: 'Quem Somos',
      description: 'A CADU é uma empresa especializada na venda de peças para computadores, comprometida em transformar vidas por meio da tecnologia em parceria com a ODS 9',

      image: imageCard1,

    },
    {
      title: 'Visão',
      description: 'Ser referência em inclusão digital, transformando comunidades por meio da tecnologia e promovendo o desenvolvimento sustentável.',
      image: imageCard2,

    },
    {
      title: 'Missão',
      description: 'Oferecer produtos de PC de alta qualidade enquanto reutilizamos peças usadas para montar computadores que são instalados em centros tecnológicos para beneficiar comunidades carentes, promovendo acesso à tecnologia e construindo um futuro mais inclusivo.',
      image: imageCard3,

    },
    {
      title: 'Valores',
      description: 'Combinando tecnologia, inovação e responsabilidade social, a CADU está moldando um mundo mais justo e conectado, onde a tecnologia é um direito acessível a todos.',
      image: imageCard4,

    },
  ];

  return (
    <>
      <header className='bg-[#19191a] shadow-md'>
        <div className='flex items-center justify-center gap-96 w-full h-[336px]' >
          <h1 className='mx-auto mr-34 my-auto flex flex-col items-center text-5xl font-semibold text-[#53c38d]'>Compre <br /> <span className=' text-6xl font-bold text-white '>Ajude</span></h1>
          <div className="relative w-32 h-32">
            <img
              className="w-full h-full object-cover rounded-full border-2 border-white"
              src={logotipo}
              alt="logotipo bolinha"
            />
          </div>
          <h1 className='mx-auto ml-34 my-auto flex flex-col items-center text-5xl font-semibold text-[#53c38d]' >Doe <br /> <span className=' text-6xl font-bold text-white' >Use</span></h1>
        </div>
      </header>
      <main className='bg-[F7F8F8]'>
        <div className='flex justify-center'>
          <div className=' bg-[#FFFFFF] flex justify-around mt-[176px] mb-[81px] rounded-3xl w-[1010px] h-[397px] drop-shadow-2xl'>
            <div className='flex'>
              <div className='flex flex-col items-center	text-4xl p-14 gap-8'>
                <h2 className='text-2xl text-black text-center font-bold bg-emerald-300  '>Projeto Social CADU</h2>
                <p className='text-xl text-black text-center overflow-auto'>Em parceria com a ODS 9, recolhemos peças usadas e as recondicionamos para montar computadores, que são doados a comunidades carentes. Além disso uma porcentagem de cada venda  também é revertidos para investimentos em centros tecnológicos. Nosso objetivo é promover a inclusão digital e contribuir para o desenvolvimento sustentável, oferecendo acesso à tecnologia e oportunidades para um futuro melhor.<br></br>
                  Você pode fazer parte dessa história!
                </p>
                <button type='submit' onClick={handleNavigate} className="rounded-md color-button   bg-[#53c38d]  w-72 py-4 flex justify-center text-xl font-semibold mx-auto text-[#FFFFFF] hover:bg-[#19191a]">Contribue</button>
              </div>
              <img className="w-[487px] h-[396px]" src={laboratorio} alt="Sala de tecnologia" />
            </div>
          </div>
        </div>
        <div className=' bg-[#C1CF84] w-full mx-auto'>
          <div className='container mx-auto text-center'>
            <div className=' h-[217px] p-9 mb-80 flex place-content-between'>

              {cardsData.map((card, index) => (
                <CardValores
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}


                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Sobre