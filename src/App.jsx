import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ScrollProgress } from './components/ScrollProgress'
import { About, Factions, Funding, Updates } from './components/Sections'
import { Stats } from './components/Stats'

export default function App() {
  return (
    <>
      {/* Ambient light and grain sit behind everything and never scroll. */}
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <ScrollProgress />
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <div className="app">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <About />
          <Factions />
          <Funding />
          <Updates />
        </main>
        <Footer />
      </div>
    </>
  )
}
