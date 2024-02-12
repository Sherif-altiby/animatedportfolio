import "./Hero.scss";
import heroImg from "../../assets/img/hero.png";
import scrollImg from "../../assets/img/scroll.png";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.h2>Sherif Altiby</motion.h2>
          <motion.h1>Frontend Developer</motion.h1>
          <motion.div className="buttons">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: "#000" }}
            >
              See The Latest Works
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: "#000" }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src={scrollImg}
            alt=""
            variants={variants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="sliderContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Amazing Frontend Devloper
      </motion.div>
      <div className="imgContainer">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
