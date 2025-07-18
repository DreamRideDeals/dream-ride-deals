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
  },
  {
    image: "/cars/Porsche-Cayenne.jpg",
    title: "Porsche Cayenne",
    price: "$99,000",
    miles: "9,000 miles",
    score: 90,
    costPerMile: "$3.70/mile",
    note: "Sold quickly"
  }
];

export default function HomePage() {
  useEffect(() => {
    document.title = "Dream Ride Deals | Find the Best Exotic Car Deals";
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans font-[Inter]">
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black to-gray-900 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Find the Best Deals on Dream Cars</h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Discover exotic and luxury cars priced below market—with the data to prove it.
        </p>
      </section>

      <section className="py-24 px-6 bg-gray-100 text-center max-w-screen-lg mx-auto">
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-md max-w-sm mx-auto">
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
    </div>
  );
}