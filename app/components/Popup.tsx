import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { redirect } from 'next/navigation';

export default function Popup({ open, handleClose }: { open: boolean; handleClose: () => void }) {
  const handleLogin = () => {
    // Redirect to the sign-up page
    redirect('/sign-up');
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className='bg-white '>
          <DialogContentText id="alert-dialog-description"
            className='text-[#1A1A1A]  '>
            Let's people know who post this
          </DialogContentText>
        </DialogContent>
        <DialogActions className=' bg-white  '>
          <Button onClick={handleClose}
            className=' text-red-500 '>Cancel</Button>
          <Button onClick={handleLogin()} autoFocus
            className='bg-green-500 text-[#1A1A1A]'
            >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}