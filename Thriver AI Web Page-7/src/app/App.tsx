import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CoreFeatures } from './components/CoreFeatures';
import { HowItWorks } from './components/HowItWorks';
import { StatsSection } from './components/StatsSection';
import { WhoItsFor } from './components/WhoItsFor';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CoreFeatures />
      <HowItWorks />
      <StatsSection />
      <WhoItsFor />
      <Footer />
    </div>
  );
}