import { motion } from "framer-motion";

interface iAnimationProps {
  children: React.ReactNode;
}

const animationBottom = {
  initial: { opacity: 0, y: 300 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -300 },
};

const animationTop = {
  initial: { opacity: 0, y: -300 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 300 },
};

const animationPopIn = {
  initial: { opacity: 0, scale: 1.2 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
};

const animationPopOut = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

const animationLeft = {
  initial: { opacity: 0, x: -300, y:10 },
  animate: { opacity: 1, x: 0, y:10 },
  exit: { opacity: 0, x: 300, y:10 },
};

const animationRight = {
  initial: { opacity: 0, x: 300, y:10 },
  animate: { opacity: 1, x: 0, y:10 },
  exit: { opacity: 0, x: -300, y:10 },
};



export const AnimatedEntranceBottom = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationBottom}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntranceTop = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationTop}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntrancePopIn = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationPopIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntrancePopOut = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationPopOut}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntranceLeft = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationLeft}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const AnimatedEntranceRight = ({ children }: iAnimationProps) => {
  return (
    <motion.div
      variants={animationRight}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};