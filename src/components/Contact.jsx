import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="pt-24 pb-16 bg-accent1 text-textLight"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p>Email: abdulnabi4700@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/shaikabdulnabi</p>
        <p>Phone: +91 77310 51742</p>
        <p>Location: Trichy, Tamil Nadu, India</p>
      </div>
    </motion.section>

  );
};

export default Contact;
