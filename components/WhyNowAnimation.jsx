"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AlertCircle, DollarSign, Users, Lock } from 'lucide-react'

export function WhyNowAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      icon: <Users className="h-8 w-8 text-white" />,
      title: "12+ Active Subscriptions",
      description: "The average person juggles over a dozen subscriptions.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "84% Underestimate Costs",
      description: "Most people significantly undervalue their monthly subscription spending.",
    },
    {
      icon: <Lock className="h-8 w-8 text-white" />,
      title: "Difficult Cancellation",
      description: "Companies intentionally complicate the cancellation process.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-white" />,
      title: "Hidden Auto-Renewals",
      description: "Free trials silently convert to paid plans without clear warnings.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2" />
      {items.map((item, index) => (
        <motion.div
          key={`why-now-${index}`}
          variants={itemVariants}
          className={`flex items-center mb-16 ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
          <motion.div
            className="rounded-full bg-gradient-to-r from-primary to-secondary p-3 z-10"
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            {item.icon}
          </motion.div>
          <div className="w-1/2" />
        </motion.div>
      ))}
    </motion.div>
  )
}

