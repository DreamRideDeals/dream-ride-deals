export default function Plans() {
  return (
    <section className="py-24 px-6 bg-white text-center max-w-screen-md mx-auto">
      <h2 className="text-4xl font-bold mb-10 inline-block border-b-4 border-red-600">Choose Your Plan</h2>
      <ul className="text-left space-y-8 text-lg">
        <li>
          <strong>🚗 Free Plan:</strong> Sign up for our free newsletter and get a few of the best Dream Ride Deals of the week delivered to your inbox.
        </li>
        <li>
          <strong>💎 Premium Plan ($10/month):</strong> Get access to the full Top 10 Dream Ride Deals list weekly, including expert insights and supporting market research.
        </li>
        <li>
          <strong>🏁 Pro Plan ($25/month):</strong> Everything in Premium, plus tailored recommendations based on your make/model preferences and budget — direct to your inbox.
        </li>
        <li>
          <strong>🔥 Advanced Plan ($50/month):</strong> Everything from Pro, plus real-time Dream Ride alerts and access to exclusive Q&A sessions with our team.
        </li>
      </ul>
    </section>
  );
}
