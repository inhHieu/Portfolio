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
      className='side-text absolute bottom-2/4 left-12
                -rotate-90 origin-left tracking-[0.4rem]'>
      {text}
    </motion.div>
  );
}