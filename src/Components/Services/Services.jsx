import "./Services.scss";
import { motion } from "framer-motion";
import peopleImg from "../../assets/img/people.webp";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your bran drow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src={peopleImg} alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Idease
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your </motion.b>
            Business
          </h1>
          <motion.button whileTap={{scale: 0.9}} whileHover={{backgroundColor: "#000", color: "#fff"}}> What We Do? </motion.button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            voluptatibus animi voluptatum minima, ut optio praesentium ea. Iure,
            a nostrum.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
          >
            GO
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            voluptatibus animi voluptatum minima, ut optio praesentium ea. Iure,
            a nostrum.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
          >
            GO
          </motion.button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            voluptatibus animi voluptatum minima, ut optio praesentium ea. Iure,
            a nostrum.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
          >
            GO
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
