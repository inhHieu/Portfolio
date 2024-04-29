import React from 'react';
import { motion, MotionValue } from "framer-motion"

interface Props {
  text: string;
  opacity: MotionValue<number>;
}

export default function VerticalText({ text, opacity }: Props) {
  return (
    <motion.div
      style={{ opacity, transitionDuration:'.3s' }} 
      className=' w-full text-center mb-4 tracking-[0.2rem] 
      xl:w-max xl:absolute xl:bottom-2/4 xl:left-12 xl:-rotate-90 xl:origin-left xl:tracking-[0.4rem]
                '>
      {text}
    </motion.div>
  );
}
// side-text absolute bottom-2/4 left-12
//                 -rotate-90 origin-left tracking-[0.4rem]