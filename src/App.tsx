import React from 'react'
import Home from './assets/pages/home/Home'
import Navbar from './assets/components/navbar/Navbar'
import Footer from './assets/components/footer/Footer'

function App() {
  return (
    <>
      <Navbar />

      <div className='min-h-[83vh]'>
      <Home />      
      </div>

      <Footer />
    </>
    
  )
}

export default App;