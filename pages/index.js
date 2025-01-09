import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Mail, Twitter } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import { customConfig } from "@/project.custom.config";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content={customConfig.seo.description} />
        <title>{customConfig.documentTitle}</title>
        <link rel="canonical" href={customConfig.domainWithHttps} />
      </Head>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <span className="font-bold text-2xl">CANCELMYSUBS.COM</span>
          </a>
          <Button
            size="sm"
            className="hidden sm:inline-flex items-center justify-center"
          >
            Connect Gmail
            <Mail className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <motion.section
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
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
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Cancel All Your Subscriptions
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Connect your Gmail and we'll find all your subscriptions.
                    Manage and cancel them easily from one dashboard.
                  </p>
                </motion.div>
                <motion.div
                  className="space-x-4"
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
                  <Button
                    size="lg"
                    variant="outline"
                    className="inline-flex items-center justify-center border-2 border-primary text-primary bg-background hover:bg-primary hover:text-white transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                How It Works
              </h2>
              <HowItWorksAnimation />
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                Your Subscription Dashboard
              </h2>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full max-w-3xl aspect-video bg-gray-200 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Dashboard Preview
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-center max-w-[600px]">
                  After connecting your Gmail, you'll get access to this
                  powerful dashboard. View all your subscriptions, track
                  spending, and cancel unwanted services with ease.
                </p>
                <div className="text-center mt-8">
                  <Button size="lg">
                    Connect Gmail and Get Started
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8 items-start">
                {[
                  {
                    plan: "Basic",
                    price: "$9.99",
                    description: "For individuals just getting started",
                    buttonText: "Get Started",
                  },
                  {
                    plan: "Pro",
                    price: "$19.99",
                    description: "For power users with multiple subscriptions",
                    buttonText: "Upgrade to Pro",
                  },
                  {
                    plan: "Enterprise",
                    price: "Custom",
                    description: "For large organizations and teams",
                    buttonText: "Contact Sales",
                  },
                ].map((card, index) => (
                  <Card
                    key={`pricing-${index}`}
                    className={`flex flex-col ${
                      card.plan === "Pro"
                        ? "border-primary shadow-lg scale-105"
                        : ""
                    }`}
                  >
                    <CardHeader>
                      <CardTitle>{card.plan}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-4xl font-bold">
                        {card.price}
                        <span className="text-sm font-normal">/month</span>
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          {card.plan === "Basic"
                            ? "Up to 10 subscriptions"
                            : card.plan === "Pro"
                            ? "Unlimited subscriptions"
                            : "Custom integrations"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          {card.plan === "Basic"
                            ? "Email notifications"
                            : card.plan === "Pro"
                            ? "Advanced analytics"
                            : "Dedicated account manager"}
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                          {card.plan === "Basic"
                            ? "Basic analytics"
                            : card.plan === "Pro"
                            ? "Priority support"
                            : "24/7 premium support"}
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        className={`w-full ${
                          card.plan === "Enterprise"
                            ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105"
                            : ""
                        }`}
                      >
                        {card.buttonText}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
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
                {[
                  {
                    name: "Alex Johnson",
                    handle: "@alexj",
                    avatar: "/placeholder.svg?height=100&width=100",
                    content:
                      "CANCELMYSUBS.COM saved me over $200 in the first month! I had no idea I was spending so much on subscriptions. Highly recommend!",
                  },
                  {
                    name: "Sarah Lee",
                    handle: "@sarahlee",
                    avatar: "/placeholder.svg?height=100&width=100",
                    content:
                      "As a busy professional, I love how easy it is to manage all my subscriptions in one place. The dashboard is intuitive and user-friendly.",
                  },
                  {
                    name: "Mike Chen",
                    handle: "@mikechen",
                    avatar: "/placeholder.svg?height=100&width=100",
                    content:
                      "I was skeptical at first, but this service is a game-changer. It found subscriptions I completely forgot about. Worth every penny!",
                  },
                  {
                    name: "Emily Davis",
                    handle: "@emilyd",
                    avatar: "/placeholder.svg?height=100&width=100",
                    content:
                      "The customer support team is fantastic. They helped me cancel a tricky subscription and saved me from a recurring charge. Thank you!",
                  },
                  {
                    name: "David Kim",
                    handle: "@davidk",
                    avatar: "/placeholder.svg?height=100&width=100",
                    content:
                      "As a small business owner, this tool helps me keep track of all our software subscriptions. It's been a great cost-saving measure.",
                  },
                  {
                    name: "Lisa Wang",
                    handle: "@lisaw",
                    avatar: "/placeholder.svg?height=100&width=100",
                    content:
                      "I love how it automatically categorizes my subscriptions. It's made budgeting so much easier. Definitely recommend for anyone looking to save money!",
                  },
                ].map((testimonial, index) => (
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
                            <CardDescription>
                              {testimonial.handle}
                            </CardDescription>
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
          <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Ready to Take Control?
                  </h2>
                  <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
                    Start managing your subscriptions today and see how much you
                    can save.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button
                    size="lg"
                    className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="inline-flex items-center justify-center border-2 border-white text-white bg-primary hover:bg-white hover:text-primary transition-colors"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 CANCELMYSUBS.COM. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </a>
            <a className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </a>
          </nav>
        </footer>
      </div>
    </>
  );
}

function HowItWorksAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
  };

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
  };

  const items = [
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Connect Gmail",
      description:
        "Securely connect your Gmail account with just a few clicks.",
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
  ];

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
  );
}
