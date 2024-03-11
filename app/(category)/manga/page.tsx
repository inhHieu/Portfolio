"use client"
import { motion as m } from "framer-motion"

import Card from '@/app/components/Card'
import mangaData from '../../../public/data/data.json';

export default function Manga() {

  const itemVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }

  const parentVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1
      }
    },
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className=' -mt-14 xl-mt-20 '>
      <div className="blackgap w-full h-14 xl:h-20 sticky top-0 left-0 z-10 bg-black"></div>
      <m.div
        initial="initial"
        animate="animate"
        variants={parentVariants}
        className=' w-full flex gap-6 px-6 pb-6 flex-wrap justify-center max-w-[1920px] m-auto '>
        {mangaData.manga.map((manga, i) => (
          <m.div variants={itemVariants}  key={i}  >
            <Card manga={manga}/>
          </m.div>
        ))}
      </m.div>
    </main>
  )
}
