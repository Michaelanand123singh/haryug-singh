import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import BusinessesPage from './pages/BusinessesPage'
import CoachingPage from './pages/CoachingPage'
import ConsultingPage from './pages/ConsultingPage'
import BlogPage from './pages/BlogPage'
import BlogPost from './pages/BlogPost'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}

export default App