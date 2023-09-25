import Navbar from '@/components/Navbar'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-background h-screen text-primary text-paragraph font-normal desktop:px-16">
      <Navbar />
      <Hero />
    </main>
  )
}
