import React from "react";
import p1 from "../../../Images/p-1.jpg";
import Port from "./Port";

const Portfolios = () => {
  const portfolios = [
    {
      image: p1,
      title: "E-Commerce App",
      description:
        " This is a website i amde for the Tjbinayak Mart. I used HTML, CSS, Javasript and React for this Project. Only FrontEnd Part is developed.",
      gitHubLink: "www.github.com",
      liveLink: "www.live.com",
    },
    {
      image: p1,
      title: "E-Commerce App",
      description:
        " This is a website i amde for the Tjbinayak Mart. I used HTML, CSS, Javasript and React for this Project. Only FrontEnd Part is developed.",
      gitHubLink: "www.github.com",
      liveLink: "www.live.com",
    },
    {
      image: p1,
      title: "E-Commerce App",
      description:
        " This is a website i amde for the Tjbinayak Mart. I used HTML, CSS, Javasript and React for this Project. Only FrontEnd Part is developed.",
      gitHubLink: "www.github.com",
      liveLink: "www.live.com",
    },
    {
      image: p1,
      title: "E-Commerce App",
      description:
        " This is a website i amde for the Tjbinayak Mart. I used HTML, CSS, Javasript and React for this Project. Only FrontEnd Part is developed.",
      gitHubLink: "www.github.com",
      liveLink: "www.live.com",
    },
    {
      image: p1,
      title: "E-Commerce App",
      description:
        " This is a website i amde for the Tjbinayak Mart. I used HTML, CSS, Javasript and React for this Project. Only FrontEnd Part is developed.",
      gitHubLink: "www.github.com",
      liveLink: "www.live.com",
    },
    {
      image: p1,
      title: "E-Commerce App",
      description:
        " This is a website i amde for the Tjbinayak Mart. I used HTML, CSS, Javasript and React for this Project. Only FrontEnd Part is developed.",
      gitHubLink: "www.github.com",
      liveLink: "www.live.com",
    },
  ];

  return (
    <div>
      <h3 className=" text-lg text-center text-primary pb-3">
        Visit my Portfolio
      </h3>
      <h1 className=" text-5xl text-center font-bold pb-10 mb-10">
        My Portfolio
      </h1>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 pt-3 pb-10">
        {portfolios.map((port, index) => (
          <Port key={index} port={port}></Port>
        ))}
      </div>
    </div>
  );
};

export default Portfolios;
