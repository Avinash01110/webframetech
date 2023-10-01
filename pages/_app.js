import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { useState } from 'react'



export default function App({ Component, pageProps }) {

  

  return <div className='bg-[#0D0B21] text-black min-h-screen'>
    <Navbar/>
    <Component {...pageProps} />
  </div> 
}
