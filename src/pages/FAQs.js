export default function FAQs() {
  return (
    <section className="py-24 px-6 bg-white text-center max-w-screen-md mx-auto">
      <h2 className="text-4xl font-bold mb-10 inline-block border-b-4 border-red-600">
        Frequently Asked Questions
      </h2>
      <div className="text-left space-y-8 text-gray-800">
        <div>
          <h3 className="text-xl font-semibold">How do you find these deals?</h3>
          <p>We use proprietary scrapers and market analysis tools to scan thousands of listings and surface the best values daily.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Do I need to pay for your service?</h3>
          <p>Nope. Our weekly newsletter and deal access is 100% free — no catch, just great cars and smart data.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Can I request a search for a specific car?</h3>
          <p>We’re working on personalized alerts and deal search features. Stay tuned and sign up to be the first to know!</p>
        </div>
      </div>
    </section>
  );
}