import { useRef } from "react";
import "./Contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const inView = useInView(ref , { margin: "400px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1m87vaq", "hh33ff20#@bv", formRef.current, {
        publicKey: "ueE29HG7sN5vEMgh9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work To gether</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>sherifahmed852002@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Cairo</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>01017143343</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <svg fill="none" viewBox="0 0 64 64">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M35.8,12.1c2.1,2.7,3.3,6.1,3.3,9.8C39.1,30.8,31.9,38,23,38c-2.5,0-4.8-0.6-6.9-1.6l-0.7,0.7v6     l3.7-3.7c2.1,1,4.4,1.6,6.9,1.6c8.9,0,16.1-7.2,16.1-16.1C42.1,19.7,39.6,15.1,35.8,12.1z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M13.8,43.6v-7.3c-3.5-3.2-5.5-7.7-5.5-12.4c0-9.2,7.5-16.7,16.7-16.7s16.7,7.5,16.7,16.7     S34.2,40.6,25,40.6c-2.3,0-4.6-0.5-6.8-1.5L13.8,43.6z M25,8.4c-8.5,0-15.5,6.9-15.5,15.5c0,4.4,1.9,8.7,5.3,11.6l0.2,0.2v4.9     l3-3l0.4,0.2c2.1,1,4.3,1.5,6.6,1.5c8.5,0,15.5-6.9,15.5-15.5S33.5,8.4,25,8.4z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M15.4,15.2l-0.9-0.8c0.4-0.5,0.9-0.9,1.4-1.3l0.8,0.9C16.3,14.4,15.8,14.8,15.4,15.2z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M12.3,21.2L11.1,21c0.4-1.9,1.2-3.6,2.3-5.2l1,0.7C13.4,17.9,12.7,19.5,12.3,21.2z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M19,23.5c-0.1,0-0.1,0-0.2,0c-0.1,0.7-0.6,1.2-1.3,1.3c0,0.1,0,0.1,0,0.2c0,0.8,0.7,1.5,1.5,1.5     s1.5-0.7,1.5-1.5S19.8,23.5,19,23.5z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M26,23.5c-0.1,0-0.1,0-0.2,0c-0.1,0.7-0.6,1.2-1.3,1.3c0,0.1,0,0.1,0,0.2c0,0.8,0.7,1.5,1.5,1.5     s1.5-0.7,1.5-1.5S26.8,23.5,26,23.5z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M33,23.5c-0.1,0-0.1,0-0.2,0c-0.1,0.7-0.6,1.2-1.3,1.3c0,0.1,0,0.1,0,0.2c0,0.8,0.7,1.5,1.5,1.5     s1.5-0.7,1.5-1.5S33.8,23.5,33,23.5z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M18.3,26.3c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S19.4,26.3,18.3,26.3z      M18.3,23.3c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9S18.8,23.3,18.3,23.3z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M25.2,26.3c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S26.4,26.3,25.2,26.3z      M25.2,23.3c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9S25.7,23.3,25.2,23.3z"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={inView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              strokeWidth="0.3"
              d="M32.2,26.3c-1.2,0-2.1-0.9-2.1-2.1s0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S33.3,26.3,32.2,26.3z      M32.2,23.3c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9S32.7,23.3,32.2,23.3z"
            />
          </svg>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="text" required placeholder="Email" name="email" />
          <textarea placeholder="Message" rows="8" name="message"></textarea>
          <motion.button whileTap={{scale: 0.9}} whileHover={{backgroundColor: "#000", color: "#fff"}}>Submit</motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
