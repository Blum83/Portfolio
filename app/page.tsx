import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import AiQa from '@/components/AiQa'
import Tools from '@/components/Tools'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <Stats />
      <AiQa />
      <Tools />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
