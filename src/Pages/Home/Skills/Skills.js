import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="slillset">
      <h3 className=" text-lg text-center text-primary pb-3">Skills</h3>
      <h1 className=" text-5xl text-center font-bold pb-10">
        Things I Am Good At
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-4  gap-10 py-3 font-bold text-primary mt-5">
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 70 }}>
            70%
          </div>
          <p>HTML</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 50 }}>
            50%
          </div>
          <p>CSS</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 80 }}>
            80%
          </div>
          <p>JavaScript</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 78 }}>
            78%
          </div>
          <p>React</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 72 }}>
            72%
          </div>
          <p>Tailwind CSS</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 65 }}>
            65%
          </div>
          <p>Redux</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 69 }}>
            69%
          </div>
          <p>Framer Motion</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className=" text-center"
        >
          <div className="radial-progress mb-2" style={{ "--value": 48 }}>
            48%
          </div>
          <p>UI/UX</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
