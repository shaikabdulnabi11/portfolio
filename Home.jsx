import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-16 bg-bgDark text-textLight min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.img
        src="/photo.jpg"
        alt="Shaik Abdul Nabi"
        className="w-36 h-36 rounded-full border-4 border-accent2 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h2
        className="text-4xl font-bold mb-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Shaik Abdul Nabi
      </motion.h2>

      <motion.p
        className="text-lg mb-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Full Stack Developer | React.js | Python
      </motion.p>

      <motion.a
        href="/resume.pdf"
        download
        className="px-6 py-2 bg-accent2 text-white rounded hover:bg-textLight hover:text-bgDark transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Home;
