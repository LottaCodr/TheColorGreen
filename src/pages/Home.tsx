import { useEffect } from 'react'
import SideRails from '../components/SideRails'
import Hero from '../components/home/Hero'
import Brands from '../components/home/Brands'
import Effort from '../components/home/Effort'
import Experience from '../components/home/Experience'
import Testimonials from '../components/home/Testimonials'
import Newsletter from '../components/home/Newsletter'

/** Homepage — mirrors the homepage design mockup section by section. */
export default function Home() {
  useEffect(() => {
    document.title = 'TCG — The Colour Green'
  }, [])

  return (
    <>
      <SideRails />
      <Hero />
      <Brands />
      <Effort />
      <Experience />
      <Testimonials />
      <Newsletter />
    </>
  )
}
