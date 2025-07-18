export default function Affiliate() {
  return (
    <section className="py-24 px-6 bg-gray-100 text-center max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold mb-6 inline-block border-b-4 border-red-600">
        Join the Dream Ride Deals Affiliate Program
      </h2>
      <p className="text-lg mb-4 max-w-2xl mx-auto">
        Do you love cars? Want to earn by sharing Dream Ride Deals with your network?
      </p>
      <form className="max-w-xl mx-auto flex flex-col gap-4 text-left">
        <input type="text" placeholder="Your full name" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <input type="email" placeholder="Your email address" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <input type="text" placeholder="Platform or audience (optional)" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <textarea placeholder="Why are you interested?" rows="4" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <button className="bg-red-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-red-700 transition w-full sm:w-auto">
          Apply Now
        </button>
      </form>
    </section>
  );
}