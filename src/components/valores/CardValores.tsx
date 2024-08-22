import React from 'react';

interface CardValoresProps {
  title: string;
  description: string;
  image: string;

}
function CardValores({ title, description, image}: CardValoresProps) {
  return (
    <div className='flex flex-col w-80 h-96 bg-[#FFFFFF] gap-4 rounded-xl shadow-lg shadow-slate-500'>
      <img className='rounded-t-xl shadow-2xl w-50 h-32 object-cover' src={image} alt={title} />
      <div className='flex items-center gap-2 mx-auto font-bold bg-green-300 text-grey'>
        <h2>{title}</h2>
       
      </div>
      <div className='mx-10 overflow-auto'>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardValores;