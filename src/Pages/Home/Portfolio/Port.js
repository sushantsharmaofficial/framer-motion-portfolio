import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

const Port = ({ port }) => {
  const { image, title, description, gitHubLink, liveLink } = port;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        className="card w-96 bg-base-100 shadow-2xl mb-10"
      >
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title block">
            {title}
            <br></br>
            <div className="badge badge-info mr-2">React</div>
            <div className="badge badge-info mr-2">JavaScript</div>
            <div className="badge badge-info mr-2">Tailwind</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={gitHubLink} className="portfolio-btn-git">
              GitHub
            </a>
            <a href={liveLink} className="portfolio-btn-live">
              Livelink
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Port;
