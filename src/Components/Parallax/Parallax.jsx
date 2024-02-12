import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import bgPlanet from "../../assets/img/planets.png";
import bgSun from "../../assets/img/sun.png"

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yBG = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type == "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "Whate We Do ?" : "What We Did ? "}{" "}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBG,
          backgroundImage: `url(
            ${
              type === "services"
                ?`${bgPlanet}`
                : `${bgSun}`
            })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBG }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
