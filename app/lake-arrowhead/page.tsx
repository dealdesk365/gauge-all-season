import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lawn Care & Snow Removal | Lake Arrowhead Association",
  description:
    "Gauge's All Season Services serves the Lake Arrowhead Association in Northern Michigan. Lakefront property lawn care, cleanups, snow removal. Call or text for a free estimate!",
};

const services = [
  "Lawn Mowing & Maintenance",
  "Spring Cleanups",
  "Fall Cleanups",
  "Winter Services (Snow Blowing & Shoveling)",
  "Landscaping",
  "General Yard Work",
];

const reasons = [
  "🏡 Locally owned and operated — we know Lake Arrowhead properties inside and out.",
  "🌊 Experience with lakefront properties — we handle the unique needs of waterfront yards.",
  "💰 Honest, upfront pricing with no hidden fees.",
  "⚡ Fast response times — we show up when we say we will.",
];

export default function LakeArrowheadPage() {
  return (
    <main style={{ fontFamily: "sans-serif", color: "#1a1a1a" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#1a3a5c",
          color: "#ffffff",
          padding: "60px 24px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#ffffff",
          }}
        >
          Serving Lake Arrowhead Association
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#cbd5e1",
          }}
        >
          Lakefront property care done right — lawn maintenance, cleanups, and
          snow removal for Lake Arrowhead homeowners.
        </p>
      </section>

      {/* Services */}
      <section style={{ padding: "48px 24px", maxWidth: "700px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1a3a5c",
            marginBottom: "20px",
          }}
        >
          Services We Offer
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {services.map((service) => (
            <li
              key={service}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 0",
                fontSize: "1rem",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <span style={{ color: "#c85a1e", fontWeight: 700, fontSize: "1.2rem" }}>
                ✓
              </span>
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Gauge */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          padding: "48px 24px",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#1a3a5c",
              marginBottom: "20px",
            }}
          >
            Why Locals Choose Gauge
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {reasons.map((reason) => (
              <li
                key={reason}
                style={{
                  padding: "10px 0",
                  fontSize: "1rem",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#1a3a5c",
          color: "#ffffff",
          padding: "56px 24px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Get Your Free Estimate
        </h2>
        <p style={{ fontSize: "1.05rem", marginBottom: "28px", color: "#cbd5e1" }}>
          Call or text us anytime — we&apos;re happy to help.
        </p>
        <a
          href="tel:9894709128"
          style={{
            display: "inline-block",
            backgroundColor: "#c85a1e",
            color: "#ffffff",
            padding: "14px 32px",
            borderRadius: "8px",
            fontSize: "1.15rem",
            fontWeight: 700,
            textDecoration: "none",
            marginBottom: "24px",
          }}
        >
          📞 989-470-9128
        </a>
        <p style={{ fontSize: "0.9rem", color: "#94a3b8" }}>Call or text anytime</p>
      </section>

      {/* Back to home */}
      <section style={{ padding: "24px", textAlign: "center" }}>
        <Link
          href="/"
          style={{
            color: "#1a3a5c",
            fontWeight: 600,
            textDecoration: "underline",
            fontSize: "0.95rem",
          }}
        >
          ← Back to Homepage
        </Link>
      </section>
    </main>
  );
}
