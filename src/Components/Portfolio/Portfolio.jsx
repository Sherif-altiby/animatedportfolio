import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import img1 from "../../assets/img/m1.jpg"
import img2 from "../../assets/img/m2.jpg"
import img3 from "../../assets/img/m3.jpg"
import img4 from "../../assets/img/m4.jpg"

const items = [
  {
    id: 1,
    title: "React Commrece",
    img: img1,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates esse distinctio tempore sequi ex dolorum nostrum, et quos totam ipsam sunt doloremque? Rem molestias iusto maiores necessitatibus tempora minus.",
  },
  {
    id: 2,
    title: "Book Liberary",
    img: img2,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates esse distinctio tempore sequi ex dolorum nostrum, et quos totam ipsam sunt doloremque? Rem molestias iusto maiores necessitatibus tempora minus.",
  },
  {
    id: 3,
    title: "Quran Website",
    img: img3,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates esse distinctio tempore sequi ex dolorum nostrum, et quos totam ipsam sunt doloremque? Rem molestias iusto maiores necessitatibus tempora minus.",
  },
  {
    id: 4,
    title: "Foode Cafe",
    img: img4,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptates esse distinctio tempore sequi ex dolorum nostrum, et quos totam ipsam sunt doloremque? Rem molestias iusto maiores necessitatibus tempora minus.",
  },
];

const Single = ({ item }) => {

  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return <section > 
      <div className="container">
        <div className="wrapper">
      <div className="imgContainer" ref= {ref}>
      <img src={item.img} alt="" />
      </div>
        <motion.div className="textContainer" style={{y}}>
          <h2> {item.title} </h2>
          <p> {item.desc} </p>
          <motion.button whileTap={{scale: 0.9}} whileHover={{backgroundColor: "#000", color: "#fff"}}> See Demo </motion.button>
        </motion.div>
        </div>
      </div>
   </section>;
};

const Portfolio = () => {

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="proressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
