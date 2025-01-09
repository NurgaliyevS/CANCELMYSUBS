import { motion } from "framer-motion"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Twitter } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Alex Johnson",
    handle: "@alexj",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "CANCELMYSUBS.COM saved me over $200 in the first month! I had no idea I was spending so much on subscriptions. Highly recommend!"
  },
  {
    name: "Sarah Lee",
    handle: "@sarahlee",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "As a busy professional, I love how easy it is to manage all my subscriptions in one place. The dashboard is intuitive and user-friendly."
  },
  {
    name: "Mike Chen",
    handle: "@mikechen",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "I was skeptical at first, but this service is a game-changer. It found subscriptions I completely forgot about. Worth every penny!"
  },
  {
    name: "Emily Davis",
    handle: "@emilyd",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "The customer support team is fantastic. They helped me cancel a tricky subscription and saved me from a recurring charge. Thank you!"
  },
  {
    name: "David Kim",
    handle: "@davidk",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "As a small business owner, this tool helps me keep track of all our software subscriptions. It's been a great cost-saving measure."
  },
  {
    name: "Lisa Wang",
    handle: "@lisaw",
    avatar: "/placeholder.svg?height=100&width=100",
    content: "I love how it automatically categorizes my subscriptions. It's made budgeting so much easier. Definitely recommend for anyone looking to save money!"
  }
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-full w-12 h-12"
                    />
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.handle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.content}
                  </p>
                </CardContent>
                <CardFooter>
                  <Twitter className="text-blue-400 h-5 w-5" />
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 