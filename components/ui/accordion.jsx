"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from 'lucide-react';

const AccordionContext = React.createContext({})

const Accordion = ({ children, type = "single", collapsible = false, ...props }) => {
  const [openItems, setOpenItems] = React.useState(new Set())

  const toggleItem = (value) => {
    const newOpenItems = new Set(openItems)
    if (type === "single") {
      if (collapsible && openItems.has(value)) {
        newOpenItems.clear()
      } else {
        newOpenItems.clear()
        newOpenItems.add(value)
      }
    } else {
      if (openItems.has(value)) {
        newOpenItems.delete(value)
      } else {
        newOpenItems.add(value)
      }
    }
    setOpenItems(newOpenItems)
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div {...props} className="divide-y divide-gray-200">
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = ({ children, value, className = "" }) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext)
  const isOpen = openItems.has(value)

  return (
    <div className={`py-2 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen,
            onToggle: () => toggleItem(value)
          })
        }
        return child
      })}
    </div>
  )
}

const AccordionTrigger = ({ children, isOpen, onToggle, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex w-full items-center justify-between py-2 text-left font-medium ${className}`}
    >
      <span>{children}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </button>
  )
}

const AccordionContent = ({ children, isOpen, className = "" }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`overflow-hidden ${className}`}
        >
          <div className="py-3">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } 