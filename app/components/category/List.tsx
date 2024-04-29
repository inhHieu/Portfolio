import { useState } from 'react';
import { motion as m } from 'framer-motion';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';

import { AddCard, Card } from '@/app/components/Card';
import Popup from '@/app/components/PopupAdd';

interface Item {
  id: number;
  name: string;
  sum: string;
  genre: string;
  rating: string;
  platforms: string[];
  poster: string;
  lposter: string;
  images: string[];
  guess: boolean;
}

interface ListProps {
  category: string;
  data: Item[];
}

export default function List({ category, data }: ListProps) {
  const itemVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  const parentVariants = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="-mt-14 xl-mt-20">
      <div className="blackgap w-full h-14 xl:h-20 sticky top-0 left-0 z-10 bg-black"></div>
      <m.div
        initial="initial"
        animate="animate"
        variants={parentVariants}
        className="w-full flex gap-6 px-6 pb-6 flex-wrap justify-center max-w-[1920px] m-auto">
        {data.map((item) => (
          <m.div variants={itemVariants} key={item.id}>
            <Card category={category} item={item} />
          </m.div>
        ))}
      </m.div>
      <m.div
        initial={{
          position: 'fixed',
          bottom: 36,
          right: 36,
          height: 64,
          width: 64,
        }}
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.8 }}>
        <Button disableRipple sx={{ height: 64, width: 64 }} onClick={handleClickOpen}>
          <AddCircleIcon sx={{ fontSize: 48, transition: 'transform 0.3s ease' }} />
        </Button>
      </m.div>

      {open && <Popup open={open} handleClose={handleClose} />}
    </main>
  );
}