import React from "react";
// icon
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";

// service data
const services = [
  {
    name: "UI/UX Design",
    description:
      "User-centric design solutions tailored to enhance the overall user experience and improve engagement with your digital products.",
    link: "learn more",
  },
  {
    name: "Development",
    description:
      "Customized web application development using the latest technologies, ensuring robust functionality and seamless performance.",
    link: "learn more",
  },
  {
    name: "Others",
    description:
      "Eye-catching visuals and engaging graphic designs that effectively communicate your brand message and captivate your target audience.",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text &image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-tottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Passionate Developer and Designer.
            </h3>
            <button className="btn btn-sm">
              <a
                href="https://www.behance.net/MadhuBavireddy76"
                target="_blank"
                rel="noopener noreferrer"
              >
                See my work
              </a>
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services text */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b borderr-white/20 h-[146px] mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="https://github.com/MadhuB76"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href="https://www.behance.net/MadhuBavireddy76"
                        className="text-gradient text-sm"
                      >
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
