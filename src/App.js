import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import HowItWorks from './pages/HowItWorks';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Affiliate from './pages/Affiliate';

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 font-sans font-[Inter]">
        <nav className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-red-600 hover:text-red-700">Dream Ride Deals</a>
            <div className="space-x-6 text-sm md:text-base font-medium">
              <a href="/how-it-works" className="hover:text-red-600">How It Works</a>
              <a href="/faqs" className="hover:text-red-600">FAQs</a>
              <a href="/contact" className="hover:text-red-600">Contact</a>
              <a href="/affiliate" className="hover:text-red-600">Affiliate</a>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
      </div>
    </Router>
  );
}
