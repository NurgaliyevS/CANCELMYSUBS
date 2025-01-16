import React from 'react';
import { motion } from 'framer-motion';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TWEET_IDS = [
  "1874958758641840251",
  "1874935708202488136",
  "1873956604133204404",
  "1870143144937046074",
  "1878796220342387197",
  "1869708404450795916",
  "1874608773991739624",
  "1867607154250981535",
  "1732026085888442709",
];

export function TestimonialsSection() {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="freedom"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Subscription Problem is Real
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TWEET_IDS.map((tweetId, index) => (
            <motion.div
              key={tweetId}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg h-[350px]"
            >
              <div className="h-full p-4">
                <div className="h-full overflow-y-auto">
                  <TwitterTweetEmbed
                    tweetId={tweetId}
                    options={{
                      conversation: "none",
                      theme: "light",
                      width: "100%",
                      height: "100%"
                    }}
                    placeholder={
                      <div className="w-full h-full bg-white dark:bg-gray-900" />
                    }
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;