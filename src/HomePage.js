import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const pastDeals = [
  {
    image: "/cars/Audi-R8.jpg",
    title: "Audi R8",
    price: "$142,000",
    miles: "6,500 miles",
    score: 91,
    costPerMile: "$4.50/mile",
    note: "Sold in 3 days"
  },
  {
    image: "/cars/BMW-M8.jpg",
    title: "BMW M8",
    price: "$125,000",
    miles: "7,200 miles",
    score: 89,
    costPerMile: "$4.00/mile",
    note: "Gone in 2 days"
  },
  {
    image: "/cars/Maserati-Gran-Turismo-MC.jpg",
    title: "Maserati GranTurismo MC",
    price: "$112,000",
    miles: "5,800 miles",
    score: 87,
    costPerMile: "$3.90/mile",
    note: "SOLD"
  }
];

export default function HomePage() {
  useEffect(() => {
    document.title = "Dream Ride Deals | Find the Best Exotic Car Deals";
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans font-[Inter]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Find the Best Deals on Dream Cars</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Discover exotic and luxury cars priced below market—with the data to prove it.
        </p>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gray-100 text-center max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-10 inline-block border-b-4 border-red-600">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Market-Wide Deal Analysis 🔍</h3>
            <p>Our engine scans thousands of listings daily across the internet and compiles a clean dataset for scoring.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Value Scoring Engine 📊</h3>
            <p>We analyze price, mileage, depreciation rate, trim rarity, and other factors to assign a fair score.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Insider Alerts 🚨</h3>
            <p>Listings that pass our scoring threshold get sent to subscribers weekly or instantly if hot enough.</p>
          </div>
        </div>
      </section>

      {/* Past Dream Deals */}
      <section id="carousel" className="py-24 px-6 bg-white text-center max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-10 inline-block border-b-4 border-red-600">Past Dream Ride Deals</h2>
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

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gray-50 text-center max-w-screen-lg mx-auto">
        <h2 className="text-4xl font-bold mb-10 inline-block border-b-4 border-red-600">Customer Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left text-lg">
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p>“I snagged a Porsche 911 under market thanks to DRD’s alerts. The deal scoring system is genius.”</p>
            <footer className="mt-4 text-sm text-gray-500">— Jordan M., Los Angeles</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p>“As someone who tracks depreciation closely, this site gave me data I’ve never had access to before.”</p>
            <footer className="mt-4 text-sm text-gray-500">— Priya S., Miami</footer>
          </blockquote>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 px-6 bg-white text-center max-w-screen-md mx-auto">
        <h2 className="text-4xl font-bold mb-6 inline-block border-b-4 border-red-600">Sign Up for our Free Newsletter</h2>
        <p className="text-lg mb-8">Let us know what you’re looking for. The more we know, the better we can help.</p>
        <form className="flex flex-col gap-4 text-left">
          <input type="text" placeholder="Your name" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
          <input type="email" placeholder="Your email" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
          <input type="text" placeholder="✍️ What do you currently drive?" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
          <input type="text" placeholder="🏎️ What cars are you interested in?" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
          <textarea rows="4" placeholder="Anything else you'd like to share?" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
          <p className="text-sm text-gray-600">✅ No spam, ever. Just car insights that matter.</p>
          <button className="bg-red-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-red-700 transition mt-2 w-full sm:w-auto">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Dream Ride Deals. All rights reserved.
      </footer>
    </div>
  );
}
