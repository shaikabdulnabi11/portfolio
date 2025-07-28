import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="pt-24 pb-16 bg-accent1 text-textLight"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Summary */}
        <motion.p
          className="text-lg text-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I'm <strong>Shaik Abdul Nabi</strong>, a highly motivated Computer Science Engineering student with a strong foundation in full-stack development. My passion lies in building scalable web applications and solving real-world problems with elegant code.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {/* Education */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">🎓 Education</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>B.Tech (CSE)</strong> – DSU, Trichy (2022–2026) – 9.2 CGPA</li>
              <li><strong>HSC</strong> – Vivek Jr. & Narayana College (2020–2022) – 92%</li>
              <li><strong>SSLC</strong> – NATCO School, Munipalli (2018–2020) – 92%</li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">🛠 Technical Skills</h3>
            <p className="mb-2">HTML, CSS, JavaScript, React.js, Node.js, Express, MongoDB, Python, Flask, SQLite, Git, GitHub, Tailwind CSS</p>
            <h3 className="text-xl font-semibold mb-2 mt-4">💬 Soft Skills</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Teamwork & Collaboration</li>
              <li>Problem Solving</li>
              <li>Leadership & Adaptability</li>
              <li>Time Management</li>
            </ul>
          </motion.div>

          {/* Career Objective */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">🎯 Career Objective</h3>
            <p>
              To obtain a challenging full-stack developer position at a reputed organization where I can apply my technical skills and contribute to real-world problem solving, while growing professionally in a dynamic and collaborative environment.
            </p>
          </motion.div>

          {/* Achievements / Interests */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">🏅 Achievements & Interests</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Developed 10+ projects including IRCTC clone & Chatbot</li>
              <li>Top performer in coding events at college</li>
              <li>Actively exploring AI, ML & Python</li>
              <li>Enjoys reading, traveling, and experimenting with tech</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
