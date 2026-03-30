const steps = [
  {
    number: 1,
    title: "Call or Text",
    description: "Reach out for a free estimate. We\u2019ll get back to you fast.",
  },
  {
    number: 2,
    title: "Get Your Estimate",
    description:
      "We\u2019ll come take a look and give you a straight price. No surprises.",
  },
  {
    number: 3,
    title: "We Show Up",
    description:
      "You book, we show up on time and get the job done right.",
  },
];

export default function HowItWorks() {
  return (
    <div>
      {/* Part A — How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              style={{ color: "var(--navy)" }}
            >
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Simple process. No runaround. Just good work done right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black text-white flex-shrink-0"
                  style={{ backgroundColor: "var(--navy)" }}
                >
                  <span style={{ color: "var(--orange)" }}>{step.number}</span>
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--navy)" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part B — Pricing */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Simple, Honest Pricing
          </h2>
          <p className="text-xl mb-3 font-semibold" style={{ color: "var(--orange)" }}>
            Spring &amp; Fall Cleanups starting at $250
          </p>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Free estimates on all services — call or text and we&apos;ll give you a
            straight number.
          </p>
          <a
            href="tel:9894709128"
            className="inline-block font-bold text-xl px-12 py-5 rounded-xl hover:opacity-90 transition-opacity shadow-xl text-white"
            style={{ backgroundColor: "var(--orange)" }}
          >
            Get a Free Estimate
          </a>
        </div>
      </section>
    </div>
  );
}
