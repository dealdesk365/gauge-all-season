"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong. Please call or text instead.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please call or text instead.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{ backgroundColor: "var(--navy)" }}
    >
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Get a{" "}
          <span style={{ color: "var(--orange)" }}>Free Estimate</span>
        </h2>
        <p className="text-gray-300 mb-10 text-lg">
          Fill out the form and we&apos;ll get back to you fast. No pressure, no commitments.
        </p>

        {status === "success" ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(249,115,22,0.3)" }}
          >
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-extrabold mb-2" style={{ color: "var(--orange)" }}>
              Message sent!
            </h3>
            <p className="text-gray-300">
              Thanks! We&apos;ll be in touch shortly. You can also call or text us at{" "}
              <a href="tel:9894709128" className="font-bold underline" style={{ color: "var(--orange)" }}>
                989-470-9128
              </a>
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 sm:p-8 text-left space-y-4"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-gray-300">
                  Your Name <span style={{ color: "var(--orange)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={update}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5 text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="989-555-1234"
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5 text-gray-300">
                What do you need? <span style={{ color: "var(--orange)" }}>*</span>
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={update}
                rows={4}
                placeholder="Tell us what you need — lawn mowing, snow removal, leaf cleanup, etc. Let us know your address too if you'd like!"
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none resize-none"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}
              />
            </div>

            {status === "error" && (
              <div
                className="px-4 py-3 rounded-xl text-sm"
                style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)", color: "#fca5a5" }}
              >
                ⚠️ {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-xl font-extrabold text-lg transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: "var(--orange)", color: "white" }}
            >
              {status === "loading" ? "Sending…" : "Send My Request →"}
            </button>

            <p className="text-center text-xs text-gray-400 pt-1">
              Prefer to call?{" "}
              <a href="tel:9894709128" className="underline" style={{ color: "var(--orange)" }}>
                989-470-9128
              </a>
              {" "}·{" "}
              <a
                href="https://www.facebook.com/Gaugesallseasonservices"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "var(--orange)" }}
              >
                Facebook
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
