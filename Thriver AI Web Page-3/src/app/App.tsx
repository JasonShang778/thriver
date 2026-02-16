import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { CoreFeatures } from './components/CoreFeatures';
import { WhoItsFor } from './components/WhoItsFor';
import { Footer } from './components/Footer';
import { StatsSection } from './components/StatsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoreFeatures />
      <HowItWorks />
      <WhoItsFor />
      <Footer />
    </div>
  );
}