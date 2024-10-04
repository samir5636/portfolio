import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 3.5,
        ease: "easeInOut",
      }}
      className="relative flex justify-center items-center"
    >
      {/* Pulsating ring effect */}
      <div className="absolute border dark:border-[#333333] border-[#cccccc] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border dark:border-[#333333] border-[#cccccc] rounded-full h-[300px] w-[300px] mt-52 animate-pulse opacity-70" />
      <div className="absolute border dark:border-[#333333] border-[#cccccc] rounded-full h-[500px] w-[500px] mt-52 animate-pulse opacity-50" />
      
      {/* Enhanced glowing pulse with dynamic color */}
      <motion.div
        className="absolute border rounded-full h-[650px] w-[650px] mt-52"
        style={{ borderColor: "#66b2ff" }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.7, 1, 0.7],
          boxShadow: [
            "0 0 5px #66b2ff",
            "0 0 15px #66b2ff",
            "0 0 5px #66b2ff",
            "0 0 10px #ff66b2", // transitioning to pink glow
          ],
          borderColor: ["#66b2ff", "#ff66b2", "#66b2ff"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Interactive circle that responds to hover */}
      <motion.div
        className="absolute border dark:border-[#333333] border-[#cccccc] rounded-full h-[750px] w-[750px] mt-52"
        whileHover={{
          scale: 1.2,
          borderColor: "#ff66b2",
          boxShadow: "0 0 20px #ff66b2",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Large, slow rotating circle with parallax scroll effect */}
      <motion.div
        className="absolute border dark:border-[#333333] border-[#cccccc] rounded-full h-[900px] w-[900px] mt-52"
        style={{ filter: "blur(4px)" }}
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
