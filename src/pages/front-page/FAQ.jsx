import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { FaChevronDown } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => (
  <Disclosure>
    {({ open }) => (
      <>
        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-indigo-900 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
          <span>{question}</span>
          <FaChevronDown
            className={`${
              open ? 'transform rotate-180' : ''
            } w-5 h-5 text-indigo-500`}
          />
        </Disclosure.Button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {answer}
              </Disclosure.Panel>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )}
  </Disclosure>
);

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get a library card?",
      answer: "You can get a library card by visiting any of our branches with a valid ID and proof of address. You can also start the process online and finish it in person."
    },
    {
      question: "What is the loan period for books?",
      answer: "The standard loan period for books is 3 weeks. You can renew books up to 2 times if there are no holds on the item."
    },
    {
      question: "How can I donate books to the library?",
      answer: "We welcome book donations! You can bring your gently used books to any of our branches during operating hours. For large donations, please contact us in advance."
    },
    {
      question: "Do you offer interlibrary loans?",
      answer: "Yes, we offer interlibrary loans for items not available in our collection. There may be a small fee associated with this service."
    },
    {
      question: "Are there quiet study areas available?",
      answer: "Yes, we have designated quiet study areas in all our branches. These areas are perfect for focused work or study sessions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;