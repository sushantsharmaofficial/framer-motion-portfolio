import React from "react";
import "./Service.css";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Service = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <IconContext.Provider value={{ size: "3rem" }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className="service-card text-start "
        >
          <i>{icon}</i>
          <h3 className=" py-2 font-bold">{title}</h3>
          <p>{description}</p>
        </motion.div>
      </IconContext.Provider>
    </motion.div>
  );
};

export default Service;
