import { useState } from 'react'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      <div className='my-[50px]' ></div>
      <Gallery/>
    </div>
  )
}

export default App
