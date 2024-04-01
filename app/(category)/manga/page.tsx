"use client"
import { useState } from 'react';
import { motion as m } from "framer-motion"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from "@mui/material";


import { AddCard, Card } from '@/app/components/Card'
import mangaData from '../../../public/data/data.json';
import Popup from '@/app/components/PopupAdd';

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className=' -mt-14 xl-mt-20 '>
      <div className="blackgap w-full h-14 xl:h-20 sticky top-0 left-0 z-10 bg-black"></div>
      <m.div
        initial="initial"
        animate="animate"
        variants={parentVariants}
        className=' w-full flex gap-6 px-6 pb-6 flex-wrap justify-center max-w-[1920px] m-auto '>
        {mangaData.manga.map((manga, i) => (
          <m.div variants={itemVariants} key={i}  >
            <Card manga={manga} />
          </m.div>
        ))}
      </m.div>
      <m.div
        initial={{
          position: 'fixed',
          bottom:36,
          right:36,
          height: 64,
          width: 64
        }}
        whileHover={{rotate: 180}}
        whileTap={{ scale: 0.8 }}>
        <Button
          disableRipple
          sx={{
          //   position: 'fixed',
          //   bottom: 36,
          //   right: 36,
            height: 64,
            width: 64,
          //   transition: ' transform .5s ease',
          //   color: 'white',
          //   ":hover": {
          //     transform: 'rotate(180deg)'
          //   }
          }}
          onClick={handleClickOpen}
        >
          <AddCircleIcon sx={{ fontSize: 48, transition: 'transform 0.3s ease' }} />
        </Button>
      </m.div>

      {open && <Popup open={open} handleClose={handleClose} />}
    </main>
  )
}