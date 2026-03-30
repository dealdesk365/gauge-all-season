export default function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "var(--navy)" }}
      className="sticky top-0 z-50 w-full shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo / Name */}
        <div className="flex flex-col items-center leading-tight">
          <span
            className="text-2xl sm:text-3xl"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, color: "var(--orange)", letterSpacing: "0.02em" }}
          >
            Gauge&apos;s
          </span>
          <span
            className="text-sm sm:text-base"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 600, color: "white", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            All Season Services
          </span>
        </div>

        {/* Phone CTAs */}
        <div className="flex items-center gap-2 ml-auto">
          <a
            href="tel:9894709128"
            style={{ backgroundColor: "var(--orange)" }}
            className="text-white font-bold text-sm px-3 py-2 rounded-lg flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Call</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="sms:9894709128"
            style={{
              borderColor: "var(--orange)",
              color: "var(--orange)",
            }}
            className="font-bold text-sm px-3 py-2 rounded-lg border-2 flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z"
                clipRule="evenodd"
              />
            </svg>
            <span>Text</span>
          </a>
        </div>
      </div>

      {/* Phone number strip */}
      <div
        style={{ backgroundColor: "var(--navy-dark, #122840)" }}
        className="text-center py-1.5"
      >
        <a
          href="tel:9894709128"
          className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity"
        >
          📞 989-470-9128
        </a>
      </div>
    </nav>
  );
}
