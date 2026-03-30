const reasons = [
  {
    title: "Local & Reliable",
    description:
      "Serving Lakes of the North and Lake Arrowhead with pride. I know these communities, and I show up — every time.",
    icon: "📍",
  },
  {
    title: "Free Estimates",
    description:
      "No pressure, no commitment. Call or text and I'll give you a straight quote before any work begins.",
    icon: "💬",
  },
  {
    title: "Fast Response",
    description:
      "When a snowstorm rolls in or your lawn needs attention, I don't leave you waiting. Quick replies, prompt service.",
    icon: "⚡",
  },
  {
    title: "Proudly Serving Lake Communities",
    description:
      "Lakes of the North and Lake Arrowhead are my home turf. I take pride in keeping our neighborhoods looking great.",
    icon: "🏡",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 text-white" style={{ backgroundColor: "var(--navy)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Why Choose Gauge?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            I&apos;m an 18-year-old entrepreneur who takes this work seriously.
            Honest pricing, real effort, and I always do what I say I&apos;m going to do.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 items-start p-6 rounded-2xl"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div className="text-4xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--orange)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-xl text-gray-300 mb-6">
            Ready to work with someone you can count on?
          </p>
          <a
            href="tel:9894709128"
            className="inline-block text-white font-bold text-xl px-10 py-5 rounded-xl hover:opacity-90 transition-opacity shadow-xl"
            style={{ backgroundColor: "var(--orange)" }}
          >
            Call 989-470-9128
          </a>
        </div>
      </div>
    </section>
  );
}
