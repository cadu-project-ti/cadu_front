import React from 'react'
import { Link } from "react-router-dom";
import '../footer/Footer.css'

function Footer() {

  const data = new Date().getFullYear()

  return (
    <div className=''>
      <div className="flex justify-center py-4 color-footer text-[#53c38d] border-t-emerald-400 border-t-2 font-mono grid grid-cols-1">

        <div className='text-center gap-2 items-center w-full grid-span-1'>
          <p>© {data} Team Cadu, Inc | Projeto Integrador</p>
          <Link to="/contato" className='gap-2 text-center items-center w-full hover:bg-[#D43635] grid-span-1'> &gt; Entre em contato conosco! &lt; </Link>
        </div>

        <div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Footer