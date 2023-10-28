import React from "react";
import { motion } from "framer-motion";
import {
  FaMobileScreen,
  FaDesktop,
  FaDove,
  FaEuroSign,
  FaHeadset,
  FaHospitalUser,
} from "react-icons/fa6";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      icon: <FaMobileScreen />,
      title: "App Development",
      description: "We will handle Your app and maintain it through the cycle",
    },
    {
      icon: <FaDesktop />,
      title: "Web Development",
      description:
        "Have a website in mind? I will make your vision come to life",
    },
    {
      icon: <FaDove />,
      title: "Fast Services",
      description:
        "Tired of waiting? Not in here! Everything will be delivered at light speed",
    },
    {
      icon: <FaEuroSign />,
      title: "Value For Money",
      description: "Why pay high price while i am offering you a fair price?",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description:
        "Website not working and who are ypu going to find at this hour?? Me broo..Me",
    },
    {
      icon: <FaHospitalUser />,
      title: "Friend Services",
      description:
        "Feeling lonely in your journey to make a website for your business? I am here bro!",
    },
  ];

  return (
    <div className=" pb-10">
      <motion.div>
        <h3 className=" text-lg text-center text-primary pb-3">Services</h3>
        <h1 className=" text-5xl text-center font-bold pb-10">What I do</h1>
      </motion.div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 py-3">
        {services.map((service, i) => (
          <Service key={i} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
