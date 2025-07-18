export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-white text-center max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold mb-10 inline-block border-b-4 border-red-600">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-semibold mb-2">Market-Wide Deal Analysis 🔍</h3>
          <p>Our engine scans thousands of listings daily across the internet and compiles a clean dataset for scoring.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Value Scoring Engine 📊</h3>
          <p>We analyze price, mileage, location, trim, depreciation rate, and rarity to assign a deal score from 1–100.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Deal Timing & Alerts 🚨</h3>
          <p>Listings that hit our "top 10% threshold" are pushed out in a weekly drop or on-demand if hot enough.</p>
        </div>
      </div>
      <p className="text-md text-gray-700 max-w-2xl mx-auto">
        We apply consistent analysis across the board so you can compare dream cars objectively. It's data-first deal hunting, not emotional buying.
      </p>
    </section>
  );
}