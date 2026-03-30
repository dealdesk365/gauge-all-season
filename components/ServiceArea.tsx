export default function ServiceArea() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Our Service Area
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proud to serve the lake communities of Northern Michigan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Lakes of the North */}
          <div
            className="rounded-2xl p-8 text-center border-2"
            style={{ borderColor: "var(--navy)", backgroundColor: "#f0f4f8" }}
          >
            <div className="text-5xl mb-4">🌊</div>
            <h3
              className="text-2xl font-extrabold mb-3"
              style={{ color: "var(--navy)" }}
            >
              Lakes of the North
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Serving the entire Lakes of the North Association community — wooded lots, private roads, and everything in between. We know the area and we&apos;re here when you need us.
            </p>
          </div>

          {/* Lake Arrowhead */}
          <div
            className="rounded-2xl p-8 text-center border-2"
            style={{ borderColor: "var(--navy)", backgroundColor: "#f0f4f8" }}
          >
            <div className="text-5xl mb-4">🏔️</div>
            <h3
              className="text-2xl font-extrabold mb-3"
              style={{ color: "var(--navy)" }}
            >
              Lake Arrowhead Association
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Serving lakefront properties and the full Lake Arrowhead Association community. Dependable yard care and snow removal — seasonal or one-time, we work around your schedule.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="rounded-2xl p-8 text-center text-white"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <p className="text-lg mb-2 font-semibold">
            Not sure if we cover your area?
          </p>
          <p className="text-gray-300 mb-6">
            We&apos;re based in Northern Michigan and may be able to accommodate
            nearby properties. Just reach out — it never hurts to ask!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:9894709128"
              className="font-bold text-lg px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--orange)", color: "white" }}
            >
              📞 Call 989-470-9128
            </a>
            <a
              href="sms:9894709128"
              className="font-bold text-lg px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              💬 Send a Text
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
