import { useState } from "react";

const WAITLIST_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzu_wDsITnOV8Rfi1x4vHpVbT47NMZLRRupN-bJQ_ZuyWY1Jb0JpoojRkQfTR1ExUan/exec";

const WAITLIST_TOKEN = "mywaitlistsecret";

export function CTASection() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Waitlist email submitted:", email);

    try {
      await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email,
          token: WAITLIST_TOKEN,
        }).toString(),
      });

      console.log("Fetch finished");
      alert("You're on the waitlist!");
      setEmail("");
    } catch (error) {
      console.error("Fetch failed:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the Waitlist
        </h2>

        <p className="text-gray-600 mb-10">
          Be the first to experience the future of job searching
        </p>

        {/* 🚨 THIS FORM IS THE KEY */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 p-1 bg-gray-100 rounded-full shadow-lg max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full outline-none text-gray-700"
              required
            />

            <button
              type="submit"
              className="px-8 py-4 bg-black text-white rounded-full"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}