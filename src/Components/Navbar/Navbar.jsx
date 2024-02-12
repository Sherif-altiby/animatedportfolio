import "./Navbar.scss";
import facebookImg from "../../assets/img/facebook.png";
import instagramImg from "../../assets/img/instagram.png";
import youtubeImg from "../../assets/img/youtube.png";
import dribbleImg from "../../assets/img/dribbble.png";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Sherif Dev
        </motion.span>
        <div className="social">
          <motion.a
            href="#"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={facebookImg} alt="" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={instagramImg} alt="" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={youtubeImg} alt="" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={dribbleImg} alt="" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
