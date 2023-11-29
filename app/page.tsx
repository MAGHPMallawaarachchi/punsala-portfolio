import About from '@/components/About'
import Hero from '@/components/Hero'
import MyPassion from '@/components/MyPassion'
import Projects from '@/components/Projects'

export default function Home() {
  return (
      <section>
        <Hero/>
        <About/>
        <MyPassion/>
        <Projects />
      </section>
  )
}
