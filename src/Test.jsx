import { motion } from "framer-motion";

const test = () => {
  return (
    <div className="ff">
      <motion.div
       className="test"
        initial={{opacity: 0.2, scale: 0.5}}
        // animate={{opacity: 1, scale: 1, x: 200, y: 200}}
        whileHover={{opacity: 1, scale: 2}}
        
        transition={{duration: 2}}>
        </motion.div>
    </div>
  );
};

export default test;
