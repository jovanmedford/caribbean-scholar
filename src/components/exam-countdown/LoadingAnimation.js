import React from "react";
import { motion } from "framer-motion"

export const LoadingAnimation = () => {
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: [1, 0],
    transition: {
      repeat: Infinity,
    }
  }
}

  return (
    <div className="loading">
      <motion.svg 
        variants={container}
        initial="hidden"
        animate="show"
        style={{overflow: "auto"}}>
      {
        [1,2,3].map(mult => (
          <motion.circle 
            cx={`${mult * 25}%`}
            cy="45%" 
            r={15}
            transition={{delay: mult*0.25}}
          />
        ))
      }
      </motion.svg>
    </div>
  )
}