import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Stay Updated with Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Get the latest news, events, and book recommendations delivered to your inbox.</p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-md border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Subscribe
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 font-semibold"
            >
              Thank you for subscribing!
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;