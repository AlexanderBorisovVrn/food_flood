import Image from 'next/image'
import Notification from '@/components/Notification'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="">
      <Notification/>
      <NavBar/>
      <div>HomePage</div>
      <Footer/>
    </main>
  )
}
