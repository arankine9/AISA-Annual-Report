import Hero from './components/Hero'
import Navigation from './components/Navigation'
import PresidentLetter from './components/PresidentLetter'
import StatsSnapshot from './components/StatsSnapshot'
import LearnAndLand from './components/LearnAndLand'
import AlumniSuccess from './components/AlumniSuccess'
import QuackHacks from './components/QuackHacks'
import SFSiteTour from './components/SFSiteTour'
import FeaturedProjects from './components/FeaturedProjects'
import Goals2026 from './components/Goals2026'
import ThankYou from './components/ThankYou'
import Background3D from './components/Background3D'

function App() {
  return (
    <div className="relative min-h-screen">
      <Background3D />
      <Navigation />
      <main>
        <Hero />
        <PresidentLetter />
        <StatsSnapshot />
        <LearnAndLand />
        <AlumniSuccess />
        <QuackHacks />
        <SFSiteTour />
        <FeaturedProjects />
        <Goals2026 />
        <ThankYou />
      </main>
    </div>
  )
}

export default App
