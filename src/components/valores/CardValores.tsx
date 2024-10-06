
interface CardValoresProps {
  title: string;
  description: string;
  image: string;

}
function CardValores({ title, description, image }: CardValoresProps) {
  return (
    <div className='flex flex-col md:flex-row w-full max-w-[700px] h-auto bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      
      {/* Seção da imagem */}
      <div className='flex-shrink-0 w-full md:w-1/2'>
        <img className='w-full h-[250px] md:h-full object-cover' src={image} alt={title} />
      </div>
      
      {/* Seção do texto */}
      <div className='flex-1 p-6 flex flex-col justify-between'>
        <div>
          <div className='text-black font-semibold text-lg rounded-md p-2 text-center'>
            <h2>{title}</h2>
          </div>
          <div className='text-gray-800 mt-4 text-base'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardValores;