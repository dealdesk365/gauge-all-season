export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 58, 92, 0.82)" }}
      />

      {/* Logo — top-left, absolutely positioned, independent of centered content */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gauge-logo.jpg"
        alt="Gauge's All Season Services"
        className="absolute top-4 left-26 w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover shadow-2xl z-10"
        style={{ border: "3px solid var(--orange)" }}
      />

      {/* Content — fully centered, untouched */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          style={{ backgroundColor: "var(--orange)", color: "white" }}
        >
          🌱 Spring Cleanups Booking Now — Call or Text Today!
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Your Yard,{" "}
          <span style={{ color: "var(--orange)" }}>Every Season.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed">
          Spring is here and yards need attention. Serving Lakes of the North and Lake Arrowhead associations with lawn care, landscaping, seasonal cleanups, snow blowing, and more.
        </p>

        <p className="text-lg text-gray-300 mb-10">
          Local. Honest. Hardworking.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:9894709128"
            style={{ backgroundColor: "var(--orange)" }}
            className="w-full sm:w-auto text-white font-bold text-xl px-10 py-5 rounded-xl flex items-center justify-center gap-3 hover:opacity-90 transition-opacity shadow-2xl"
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
            className="w-full sm:w-auto text-white font-bold text-xl px-10 py-5 rounded-xl border-3 border-white flex items-center justify-center gap-3 hover:bg-white hover:text-gray-900 transition-colors shadow-2xl"
            style={{ border: "3px solid white" }}
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

        {/* Phone number below CTAs */}
        <div className="mt-8">
          <a
            href="tel:9894709128"
            className="text-3xl sm:text-4xl font-black text-white tracking-wide hover:opacity-80 transition-opacity"
          >
            989-470-9128
          </a>
        </div>
      </div>
    </section>
  );
}
