import { Link } from 'react-router-dom'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Businesses from '../components/sections/Businesses'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import BlogPreview from '../components/sections/BlogPreview'
import Contact from '../components/sections/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Businesses />
      <Services />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </div>
  )
}

export default Home