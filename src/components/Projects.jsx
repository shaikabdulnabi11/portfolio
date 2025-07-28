import React from "react";
import { motion } from "framer-motion";


const projects = [
  {
    title: "IRCTC Railway Ticket Booking Clone",
    tech: "HTML, CSS, JavaScript, Flask, SQLite",
    desc: "A full-stack clone of the IRCTC platform for train search, ticket booking, and management with an interactive UI and backend.",
  },
  {
    title: "Pet Care Center Website",
    tech: "React.js, Node.js, MongoDB",
    desc: "A full-stack veterinary clinic management system with features like pet profiles, appointment scheduling, and billing.",
  },
  {
    title: "Travel Booking Application",
    tech: "React.js, Node.js, MongoDB",
    desc: "A real-time travel booking system with search filters, user auth, and secure payment integration.",
  },
  {
    title: "AI Voice Assistant",
    tech: "Python, TensorFlow, NLP",
    desc: "A voice-controlled personal assistant that performs system tasks and answers queries using NLP.",
  },
  {
    title: "Voice Converter App",
    tech: "Python, Flask",
    desc: "A speech-to-text and text-to-speech converter using machine learning and audio processing.",
  },
  {
    title: "Chatbot Application",
    tech: "Node.js, MongoDB",
    desc: "An AI-powered chatbot that dynamically interacts with users and stores conversation data.",
  },
  {
    title: "Calculator",
    tech: "HTML, CSS, JavaScript",
    desc: "A responsive calculator with basic arithmetic operations and keyboard support.",
  },
  {
    title: "E-Commerce Website",
    tech: "HTML, CSS",
    desc: "A static frontend mockup of an online store, showcasing layout, sections, and product cards.",
  },
  {
    title: "Add-to-List App",
    tech: "HTML, CSS, JavaScript",
    desc: "A lightweight to-do list application for adding, editing, and removing tasks.",
  },
  {
    title: "Connect 4 Game",
    tech: "JavaScript",
    desc: "A 2-player interactive Connect Four game playable in the browser.",
  },
  {
    title: "Countdown Timer",
    tech: "JavaScript",
    desc: "A customizable countdown timer with start, pause, and reset features.",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-16 bg-bgDark text-textLight"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="bg-accent1 p-6 rounded-lg shadow border border-accent2"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-accent2">{p.title}</h3>
              <p className="text-sm italic">{p.tech}</p>
              <p className="text-sm mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

  );
};

export default Projects;

