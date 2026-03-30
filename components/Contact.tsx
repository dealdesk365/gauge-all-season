export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 text-white text-center"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Ready for a{" "}
          <span style={{ color: "var(--orange)" }}>Free Estimate?</span>
        </h2>

        <p className="text-xl text-gray-300 mb-4 max-w-xl mx-auto">
          Call or text — we&apos;ll get back to you fast.
        </p>
        <p className="text-gray-400 mb-10 max-w-lg mx-auto">
          No pressure. No commitments. Just an honest quote from a local guy who
          takes pride in his work.
        </p>

        {/* Big Phone Number */}
        <a
          href="tel:9894709128"
          className="block text-5xl sm:text-6xl md:text-7xl font-black mb-10 hover:opacity-80 transition-opacity"
          style={{ color: "var(--orange)" }}
        >
          989-470-9128
        </a>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9894709128"
            className="flex items-center justify-center gap-3 font-bold text-xl px-10 py-5 rounded-xl hover:opacity-90 transition-opacity shadow-xl"
            style={{ backgroundColor: "var(--orange)", color: "white" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            Call Now
          </a>
          <a
            href="sms:9894709128"
            className="flex items-center justify-center gap-3 font-bold text-xl px-10 py-5 rounded-xl border-2 border-white hover:bg-white hover:text-gray-900 transition-colors shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                clipRule="evenodd"
              />
            </svg>
            Send a Text
          </a>
        </div>

        <p className="mt-10 text-gray-400 text-sm">
          Serving Lakes of the North &amp; Lake Arrowhead Association · Northern Michigan
        </p>
      </div>
    </section>
  );
}
