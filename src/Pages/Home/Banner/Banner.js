import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";
import myPic from "../../../Images/myPic.JPG";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Banner = () => {
  return (
    <div className=" text-start">
      <div className="hero  bg-base-100">
        <div className="hero-content flex lg:flex-row-reverse gap-20">
          <div className=" w-[700px] h-[700px]">
            <motion.div
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <motion.img
                initial={{ x: 900 }}
                animate={{ x: 0 }}
                transition={{ delay: 1 }}
                src={myPic}
                className="max-w-sm rounded-lg shadow-2xl hover:shadow-3xl"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
          >
            <small className=" text-lg  py-3  ">
              Hi there! Welcome to my Website
            </small>
            <h1 className="text-5xl font-bold py-3 ">
              Hi! I am <span className=" text-primary">Sushant Sharma</span>{" "}
            </h1>
            <h1 className="text-5xl font-bold">
              <Typewriter
                options={{
                  strings: [
                    "A UI/UX Designer",
                    "A FrontEnd Web Developer",
                    " A Code Wizard",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6">
              As a ReactJS Developer, I am skilled in creating and maintaining
              websites and web application. I have a strong understanding of
              programming languages such as HTML, CSS, JavaScript as well as
              passionate for coding and a desire to excel in the field. Strong
              creative and analytical skills. Team player with an eye for
              detail.
            </p>
            <p className=" text-primary pb-5">FIND ME ON</p>
            <motion.div className="banner-icons text-xl">
              <a href="https://www.facebook.com/profile.php?id=100008415932213">
                {" "}
                <FaFacebook />{" "}
              </a>
              <a href="https://www.instagram.com/why_so_lazzy/">
                {" "}
                <RiInstagramFill />{" "}
              </a>
              <a href="https://www.linkedin.com/in/sushant-sharma-152244230/">
                {" "}
                <FaLinkedin />{" "}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
