import { PricingCard } from "@/components/PricingCard";

const PRICING_PLANS = [
  {
    plan: "Basic",
    price: "$9.99",
    description: "For individuals just getting started",
    buttonText: "Get Started",
    features: [
      "Up to 10 subscriptions",
      "Email notifications",
      "Basic analytics",
    ],
  },
  {
    plan: "Pro",
    price: "$19.99",
    description: "For power users with multiple subscriptions",
    buttonText: "Upgrade to Pro",
    features: [
      "Unlimited subscriptions",
      "Advanced analytics",
      "Priority support",
    ],
    isPro: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    description: "For large organizations and teams",
    buttonText: "Contact Sales",
    features: [
      "Custom integrations",
      "Dedicated account manager",
      "24/7 premium support",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="pricing"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
