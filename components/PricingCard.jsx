import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

function PricingCard({
  plan,
  price,
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
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        staggerChildren: 0.1,
      },
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
        className={`flex flex-col ${isPro ? "border-primary shadow-lg" : ""}`}
      >
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{plan}</span>
            <span className="text-2xl font-bold">{price}</span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
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
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full ${
              isPro
                ? "bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
                : ""
            }`}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default PricingCard;
