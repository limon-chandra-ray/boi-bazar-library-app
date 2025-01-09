import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = ({ text, author, role }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <p className="text-gray-600 italic mb-4">"{text}"</p>
    <p className="font-semibold">{author}</p>
    <p className="text-sm text-gray-500">{role}</p>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    { text: "The library's vast collection has been instrumental in my research.", author: "Dr. Jane Smith", role: "Professor" },
    { text: "I love the quiet atmosphere and helpful staff. It's my favorite place to study.", author: "Tom Brown", role: "Student" },
    { text: "The online resources have made it easy for me to access books from home.", author: "Sarah Johnson", role: "Remote Learner" },
  ];

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Members Say</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;