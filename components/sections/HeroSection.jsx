import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      className="w-full py-24 lg:py-32 xl:py-48"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4 sm:mb-6">
              Stop Wasting Money on Subscriptions
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              The average person wastes $348 annually on forgotten
              subscriptions. Find your hidden charges now.
            </p>
          </motion.div>
          <motion.div
            className="space-x-4 sm:space-y-0 sm:space-x-4 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="inline-flex items-center justify-center"
            >
              Connect Gmail
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
