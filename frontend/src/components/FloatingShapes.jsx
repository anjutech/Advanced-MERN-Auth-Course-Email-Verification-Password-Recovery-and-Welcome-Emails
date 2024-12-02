import React from 'react'
import {motion }from 'framer-motion'
const FloatingShapes = ({color,size,top,left,delay}) => {
  return (
    <motion.div
    className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl  `}
    style={{top,left}}
    animate={{
      y:["0%","50%","0%"],
      x:["0%","50%","0%"],
      rotate:[0,360],
      opacity: [0.5, 0], // Fade from fully visible to invisible

    }}

    transition={{
      duration:20,
      ease:"easeInOut",
      repeat:Infinity,
      delay,
    }}
 aria-hidden='true'
    />
  );
};

export default FloatingShapes
