export default function Footer() {
  return (
    <footer
      className="py-10 px-4 text-center"
      style={{ backgroundColor: "#0d1f30", color: "#9ca3af" }}
    >
      <div className="max-w-4xl mx-auto">
        <p
          className="text-2xl font-extrabold text-white mb-1"
        >
          Gauge&apos;s All Season Services
        </p>
        <p className="text-sm mb-3">Northern Michigan Lawn Care &amp; Snow Removal</p>
        <a
          href="tel:9894709128"
          className="block text-2xl font-black mb-2 hover:opacity-80 transition-opacity"
          style={{ color: "var(--orange)" }}
        >
          989-470-9128
        </a>
        <p className="text-sm mb-6">
          Serving Lakes of the North Association &amp; Lake Arrowhead Association
        </p>
        <div
          className="w-16 mx-auto mb-6 h-0.5"
          style={{ backgroundColor: "var(--orange)" }}
        />
        <p className="text-xs">
          &copy; 2025 Gauge&apos;s All Season Services · All rights reserved
        </p>
      </div>
    </footer>
  );
}
