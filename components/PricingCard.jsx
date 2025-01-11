import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PricingCard({ plan, price, description, buttonText, features, isPro }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Card 
        className={`flex flex-col ${
          isPro ? "border-primary shadow-lg scale-105" : ""
        }`}
      >
        <CardHeader>
          <CardTitle>{plan}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-4xl font-bold">
            {price}
            <span className="text-sm font-normal">/month</span>
          </p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center"
                variants={itemVariants}
              >
                <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="mt-auto">
          <Button
            className={`w-full ${
              plan === "Enterprise"
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105"
                : ""
            }`}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
} 