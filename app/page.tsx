import About from '@/components/About'
import Divider from '@/components/Divider'
import Hero from '@/components/Hero'
import MyPassion from '@/components/MyPassion'
import Image from 'next/image'

export default function Home() {
  return (
      <section>
        <Hero/>
        <Divider/>
        <About/>
        <MyPassion/>
      </section>
  )
}
