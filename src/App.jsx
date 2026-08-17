// 루트 앱 - 모든 섹션을 순서대로 합성하는 단일 페이지 구성
import Nav from './components/Nav.jsx'
import Hero from './sections/Hero.jsx'
import Concept from './sections/Concept.jsx'
import Menu from './sections/Menu.jsx'
import WhyHaha from './sections/WhyHaha.jsx'
import Gallery from './sections/Gallery.jsx'
import Reviews from './sections/Reviews.jsx'
import Stores from './sections/Stores.jsx'
import Faq from './sections/Faq.jsx'
import Franchise from './sections/Franchise.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <WhyHaha />
        <Gallery />
        <Reviews />
        <Stores />
        <Faq />
        <Franchise />
      </main>
      <Footer />
    </>
  )
}
