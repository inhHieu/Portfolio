import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Link from 'next/link';
import { usePathname } from "next/navigation";


export default function Popup({ open, handleClose }: { open: boolean; handleClose: () => void }) {
	const pathname = usePathname();

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
            Let&apos;s people know who post this
          </DialogContentText>
        </DialogContent>
        <DialogActions className=' bg-white  '>
          <Button onClick={handleClose}
            className=' text-red-500 '>Cancel</Button>
          <Link href={'/auth/sign-in?next='+pathname}>
            <Button autoFocus
              className='bg-green-500 text-[#1A1A1A]'
            >
              Login
            </Button>

          </Link>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}