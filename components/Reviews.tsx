const reviews = [
  {
    name: "Bob K.",
    location: "Lakes of the North",
    text: "Gauge has been mowing our lawn all summer and doing a fantastic job. Shows up when he says he will, does thorough work, and the price is fair. Exactly what you want in a local service. Highly recommend!",
    stars: 5,
  },
  {
    name: "Linda M.",
    location: "Lake Arrowhead Association",
    text: "I called Gauge after the big snowstorm in January and he had my driveway cleared within a couple hours. Super responsive over text, which I really appreciate. I've already booked him for the whole winter season.",
    stars: 5,
  },
  {
    name: "Dave & Sue T.",
    location: "Lakes of the North",
    text: "We hired Gauge for our fall cleanup and were blown away by how thorough he was. Every leaf gone, beds cleaned up, everything raked out. For an 18-year-old running his own business, he's got a great work ethic. We'll be using him every season.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          style={{ color: "var(--orange)" }}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "var(--navy)" }}
          >
            What Neighbors Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Trusted by homeowners throughout the lake communities of Northern
            Michigan.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-8 shadow-lg flex flex-col gap-4 border border-gray-100"
            >
              <StarRating count={review.stars} />
              <p className="text-gray-700 leading-relaxed italic flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="border-t pt-4">
                <p
                  className="font-bold text-base"
                  style={{ color: "var(--navy)" }}
                >
                  {review.name}
                </p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
