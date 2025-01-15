import PricingCard from "../PricingCard";

const PRICING_PLANS = [
  {
    plan: "1-Year Pass",
    price: "28$",
    description: "Perfect for finding your first hidden costs",
    buttonText: "Find My Hidden Costs",
    features: [
      "Find all hidden subscriptions in Gmail",
      "Track everything in one place",
      "30-day email support",
      "List of all subscriptions",
    ],
    originalPrice: "40$",
  },
  {
    plan: "Lifetime Deal",
    price: "42$",
    description: "For serious subscription cleanups",
    buttonText: "Start Saving Now",
    features: [
      "Find all hidden subscriptions in Gmail",
      "Track everything in one place",
      "30-day email support",
      "List of all subscriptions",
    ],
    originalPrice: "60$",
    isPro: true,
  },
];

export function PricingSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="pricing"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
          Stop Paying for Things You Don't Use
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Find and cancel forgotten subscriptions in minutes.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-start max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <p className="text-center mt-3 text-sm text-gray-500 dark:text-gray-400">
          Not happy with your savings? Get your money back within 30 days, no
          questions asked
        </p>
      </div>
    </section>
  );
}
