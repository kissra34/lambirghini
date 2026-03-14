import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CarsSection from './components/CarsSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <HeroSection />
      <CarsSection />
      {/* باقي الأقسام تضاف هنا بالتوالي */}
      <Footer />
    </main>
  );
}

export default App;
