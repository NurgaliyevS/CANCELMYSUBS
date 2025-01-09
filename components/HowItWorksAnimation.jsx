import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

export function HowItWorksAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const items = [
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Connect Gmail",
      description: "Securely connect your Gmail account with just a few clicks.",
    },
    {
      icon: <ArrowRight className="h-8 w-8 text-white" />,
      title: "We Analyze",
      description: "Our system scans your emails for subscription payments.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Manage Subscriptions",
      description: "View and manage all your subscriptions from one dashboard.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid gap-10 sm:grid-cols-2 md:grid-cols-3"
    >
      {items.map((item, index) => (
        <motion.div
          key={`how-it-works-${index}`}
          variants={itemVariants}
          className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105"
        >
          <motion.div
            className="rounded-full bg-primary p-3 mb-4"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.div>
          <h3 className="text-xl font-bold text-center">{item.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            {item.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
} 