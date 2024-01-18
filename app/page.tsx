import Image from 'next/image'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

export default function Home() {
  return (
    <main className='bg-slate-900 w-screen h-screen'>
      <Navbar />
      <Hero />
    </main>
  )
}
