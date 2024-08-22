import React from 'react'
import '../footer/Footer.css'

function Footer() {

  const data = new Date().getFullYear()

  return (
    <div className=''>
      <div className="flex justify-center py-4 color-footer text-[#53c38d] border-t-emerald-400 border-t-2 font-mono">
        <div className='text-center gap-2 items-center w-full '>
          <p>© {data} Team Cadu, Inc | Projeto Integrador</p>
        </div>
      </div>
    </div>
  )
}

export default Footer