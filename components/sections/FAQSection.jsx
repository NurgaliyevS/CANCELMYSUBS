import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const FAQSection = () => {
  const faqs = [
    {
      question: "Is my Gmail data secure?",
      answer: "Yes, absolutely. We use industry-standard OAuth2 authentication and never store your emails. We only scan for subscription-related emails and immediately discard any other data. Your privacy and security are our top priority."
    },
    {
      question: "How much can I typically save?",
      answer: "Users typically save between $200-$500 annually by identifying forgotten subscriptions and finding better deals."
    },
    {
      question: "What types of subscriptions can you find?",
      answer: "We can detect a wide range of subscriptions including streaming services (Netflix, Spotify), software subscriptions (Adobe, Microsoft), gym memberships, news subscriptions, and more. If it's in your email, we can find it."
    },
    {
      question: "How long does it take to set up?",
      answer: "Setup typically takes less than 5 minutes. Just connect your Gmail account, and we'll automatically scan for subscriptions. You'll see your first results almost immediately."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full max-w-4xl mx-auto px-4 py-12 md:py-24 lg:py-32"
      id="faq"
    >
      <motion.div 
        variants={itemVariants}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about our service</p>
      </motion.div>

      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AccordionItem value={index.toString()}>
              <AccordionTrigger className="hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.section>
  )
}

export default FAQSection
