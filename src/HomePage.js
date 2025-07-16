import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const pastDeals = [
  {
    image: "/cars/mclaren-570s.jpg",
    title: "2019 McLaren 570S Coupe",
    price: "$129,000",
    miles: "8,000 miles",
    score: 92,
    costPerMile: "$3.80/mile",
    note: "Sold in 3 days"
  },
  {
    image: "/cars/lamborghini-huracan.jpg",
    title: "2020 Lamborghini Huracán Evo",
    price: "$189,000",
    miles: "5,200 miles",
    score: 95,
    costPerMile: "$3.20/mile",
    note: "Gone in 48 hours"
  },
  {
    image: "/cars/porsche-911.jpg",
    title: "2021 Porsche 911 Turbo S",
    price: "$175,000",
    miles: "6,000 miles",
    score: 94,
    costPerMile: "$4.00/mile",
    note: "SOLD"
  }
];

export default function HomePage() {
  useEffect(() => {
    document.title = "Dream Ride Deals | Find the Best Exotic Car Deals";
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Find the Best Deals on Dream Cars</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Discover exotic and luxury cars priced below market—with the data to prove it.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:bg-gray-200 transition">See Top Deals</button>
          <button className="border border-white px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition">Join the Weekly Drop</button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">Market-Wide Deal Analysis</h3>
            <p>Our engine scans thousands of listings daily across markets.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Value Scoring Engine</h3>
            <p>We calculate price-to-mileage, depreciation curves, and rarity scoring.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Insider-Only Alerts</h3>
            <p>Get the top 10% of deals delivered to your inbox weekly.</p>
          </div>
        </div>
      </section>

      {/* Past Deals Carousel */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Previous Dream Rides</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {pastDeals.map((deal, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md max-w-sm mx-auto">
                <img src={deal.image} alt={deal.title} className="w-full h-56 object-cover" />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold">{deal.title}</h3>
                  <p className="text-gray-700">{deal.price} | {deal.miles}</p>
                  <p className="text-sm mt-2">Deal Score: {deal.score} 🔥</p>
                  <p className="text-sm text-gray-600">Effective Cost: {deal.costPerMile}</p>
                  <p className="text-xs mt-1 text-red-500 font-semibold">{deal.note}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Email Signup */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Don’t Miss the Next Dream Ride</h2>
        <p className="mb-6">Get our top 10 picks each week before they're gone.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-4">
          <input type="email" placeholder="Your email" className="px-4 py-3 rounded-xl text-black w-full" />
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition w-full sm:w-auto">Subscribe Free</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Dream Ride Deals. All rights reserved.
      </footer>
    </div>
  );
}
