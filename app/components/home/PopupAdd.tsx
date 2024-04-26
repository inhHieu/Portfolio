import { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import DropzoneSingle from '../category/Dropzone';
import Dropzones from '../category/Dropzones';
import { platform } from 'os';

export default function Popup({ open, handleClose }: { open: boolean; handleClose: () => void }) {
    const [checked, setChecked] = useState([0]);
    const [titleFill, setTitleFill] = useState(false);
    const [imagesFill, setImagesFill] = useState(false);
    const [imgTitle, setImgTitle] = useState<File[]>([]);
    const [images, setImages] = useState<File[]>([]);

    const handleChange = (file: File[]) => {
        setImgTitle(file);
        setTitleFill(true);
        console.log(file);
    };

    const handleImagesChange = (file: File[]) => {
        setImages(file);
        setImagesFill(true);
        console.log(file);
    };

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
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const name = formJson.name;
        const genre = formJson.genre;
        const sum = formJson.sum;
        const platform = checked.map(item => {
            if (item === 0) {
              return 'Netflix';
            } else if (item === 1) {
              return 'Appletv';
            } else if (item === 2) {
              return 'Mangapill';
            } else {
              return ''; // Handle the case when item doesn't match any values
            }
          });

        const requestData = {
            name: name,
            sum: sum,
            genre: genre,
            platforms: platform,
            poster: `/img/${name}/poster.jpg`,
            lposter: `/img/${name}/lposter.jpg`,
            images: images.map((_, i) => `/img/${name}/${name}_${i}.jpg`),
        };

        const formDataImg = new FormData();
        formDataImg.append('name', name);
        formDataImg.append('file', imgTitle[0]);
        images.forEach((image) => {
            formDataImg.append('file', image);
        });

        try {
            console.log(requestData);
            const response = await axios.post('/api/upload', requestData);
            if (response.data.status === 200) {
                try {
                    const imgResponse = await axios.post('/api/uploadImg', formDataImg);
                    console.log(imgResponse.data);
                } catch (err) {
                    console.error('imgError:', err);
                }
            }
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            return {
                message: 'Database Error: Failed to Create Invoice.',
            };
        }
    };
    return (
        <Dialog
            fullWidth
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleSubmit

            }}
        >
            <DialogTitle>Add your suggestion</DialogTitle>
            <DialogContent>
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
                            name="genre"
                            label="Genre"
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
                    <Box sx={{ width: '30%' }}> 
                        <DropzoneSingle handleChange={handleChange} />
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
                <div className='dropzone-images pt-2 mt-4'>
                    <Dropzones handleChange={handleImagesChange}/>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog >
    );
}