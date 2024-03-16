"use client"
import { useState } from 'react';
import { motion as m } from "framer-motion"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TextareaAutosize, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from "@mui/material";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { DropzoneArea } from 'react-mui-dropzone';


import { AddCard, Card } from '@/app/components/Card'
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
      <Button
        disableRipple
        sx={{
          position: 'fixed',
          bottom: 36,
          right: 36,
          height: 64,
          width: 64,
          transition: ' transform .5s ease',
          color: 'white',
          ":hover": {
            transform: 'rotate(180deg)'
          }
        }}
        onClick={handleClickOpen}
      >
        <AddCircleIcon sx={{ fontSize: 48, transition: 'transform 0.3s ease' }} />
      </Button>
      {open && <Popup open={open} handleClose={handleClose} />}
    </main>
  )
}

function Popup({ open, handleClose }: { open: boolean; handleClose: () => void }) {

  const [checked, setChecked] = useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={close}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Add your suggestion</DialogTitle>
      <DialogContent>
        {/* <DialogContentText>
          Share your suggestion to orther
        </DialogContentText> */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Manga name"
              type="text"
              variant="standard"
              fullWidth
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="genre"
              name="gerne"
              label="Gerne"
              fullWidth
              type="text"
              variant="standard"
            />
            <List dense component={Stack} direction="row" sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {[0, 1, 2].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <Checkbox
                        edge="start"
                        onChange={handleToggle(value)}
                        checked={checked.indexOf(value) !== -1}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    }
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar
                          alt={`Avatar n°${value + 1}`}
                          src={`/static/images/avatar/${value + 1}.jpg`}
                        />
                      </ListItemAvatar>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          {/* title image */}
          <Box sx={{ width: '30%' }}>
            <DropzoneArea
              acceptedFiles={['image/jpeg', 'image/png', 'image/jpg']}
              filesLimit={1} dropzoneText=''
              previewGridClasses={{
                container: 'customContainerClass',
                item: 'customItemClass',
                image: 'customImageClass'
              }}

            />
          </Box>
        </Box>
        <TextField
          autoFocus
          required
          margin="dense"
          id="sum"
          name="sum"
          label="Summarize"
          type="text"
          fullWidth
          variant="standard"
        />

        <DropzoneArea
          acceptedFiles={['image/jpeg', 'image/png', 'image/jpg']}
          filesLimit={20}
        />


      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>

  )
}
