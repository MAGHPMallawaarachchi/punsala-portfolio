import About from '@/components/About'
import Divider from '@/components/Divider'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
      <section>
        <Hero/>
        <Divider/>
        <About/>
      </section>
  )
}
