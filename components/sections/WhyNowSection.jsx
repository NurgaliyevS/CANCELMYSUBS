import { WhyNowAnimation } from "../WhyNowAnimation"

export function WhyNowSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text mb-4">
            Why Now?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            The Subscription Crisis is real. Take control of your digital subscriptions before they control your wallet.
          </p>
        </div>
        <WhyNowAnimation />
      </div>
    </section>
  )
}

