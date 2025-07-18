export default function Contact() {
  return (
    <section className="py-24 px-6 bg-white text-center max-w-screen-md mx-auto">
      <h2 className="text-4xl font-bold mb-6 inline-block border-b-4 border-red-600">Sign Up for our Free Newsletter</h2>
      <p className="text-lg mb-8">Let us know what you’re looking for. The more we know, the better we can help.</p>
      <form className="flex flex-col gap-4 text-left">
        <input type="text" placeholder="Your name" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <input type="email" placeholder="Your email" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <input type="text" placeholder="✍️ What do you currently drive?" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <input type="text" placeholder="🏁 What cars are you interested in?" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <textarea rows="4" placeholder="Anything else you'd like to share?" className="px-4 py-3 rounded-xl border border-gray-300 text-black" />
        <p className="text-sm text-gray-600">✅ No spam, ever. Just car insights that matter.</p>
        <button className="bg-red-600 text-white font-semibold rounded-xl px-6 py-3 hover:bg-red-700 transition mt-2 w-full sm:w-auto">
          Submit
        </button>
      </form>
    </section>
  );
}