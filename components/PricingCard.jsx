import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

function PricingCard({
  plan,
  price,
  originalPrice,
  description,
  buttonText,
  features,
  isPro,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card
        className={`relative overflow-hidden ${
          isPro ? "border-primary shadow-lg" : ""
        }`}
      >
        {isPro && (
          <div className="absolute top-0 right-0 m-4 flex items-center text-xs text-white bg-primary px-3 py-1 rounded-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900">
            Recommended
          </div>
        )}

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold">{plan}</h3>
              <div className="flex flex-baseline ml-3">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
                  Save 30%
                </span>
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-sm line-through text-gray-400 mr-2">
                {originalPrice}
              </span>
              <span className="text-3xl font-bold">{price}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
                USD
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Early Bird Banner */}
          <div className="mb-6 px-4 py-2 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700/50 rounded-lg">
            <p className="text-sm text-amber-800 dark:text-amber-200 text-center font-medium">
              Launch Special: Save 30% Today!
            </p>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Button */}
          <Button
            className={`w-full py-6 ${
              isPro
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900"
            }`}
          >
            {buttonText}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export default PricingCard;
