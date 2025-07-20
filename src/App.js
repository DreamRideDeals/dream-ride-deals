import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import HowItWorks from "./pages/HowItWorks";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Affiliate from "./pages/Affiliate";
import Plans from "./pages/Plans";

export default function App() {
  return (
    <Router>
      <div className="bg-white text-gray-900 font-sans font-[Inter]">
        <nav className="bg-white shadow sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-xl font-bold text-red-600">Dream Ride Deals</span>
            <div className="space-x-6 text-sm md:text-base font-medium">
              <Link to="/plans" className="hover:text-red-600">Plans</Link>
              <Link to="/how-it-works" className="hover:text-red-600">How It Works</Link>
              <Link to="/faqs" className="hover:text-red-600">FAQs</Link>
              <Link to="/contact" className="hover:text-red-600">Contact</Link>
              <Link to="/affiliate" className="hover:text-red-600">Affiliate</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
      </div>
    </Router>
  );
}
