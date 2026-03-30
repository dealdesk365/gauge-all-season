export default function Reviews() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-6"
          style={{ color: "var(--navy)" }}
        >
          Our Reputation Is Everything
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
          We&apos;re new, we&apos;re hungry, and we do the work right. Be one of our first
          customers and see for yourself.
        </p>
        <a
          href="sms:9894709128"
          className="inline-block text-white font-bold text-xl px-12 py-5 rounded-xl hover:opacity-90 transition-opacity shadow-xl"
          style={{ backgroundColor: "var(--orange)" }}
        >
          Text Us for a Free Estimate
        </a>
        <p className="mt-5 text-sm text-gray-500">
          Most customers hear back within the hour.
        </p>
      </div>
    </section>
  );
}
