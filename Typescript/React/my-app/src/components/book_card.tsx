import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';


import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import MoreVertIcon from '@mui/icons-material/MoreVert';
import type { Book } from '../models/book';
import { Menu, MenuItem, Stack } from '@mui/material';
import { CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import React from 'react';



export type BookCardProps = {
    book: Book,
    onRead: () => void,
    onEdit: () => void,
    onDelete: () => void
}

export function BookCard({ props }: { props: BookCardProps }) {

    return (
        <Card sx={{ maxWidth: 300, }}>
            <Stack direction="column" sx={{ position: "relative", alignItems: "center", justifyContent: "center" }}>

                <CardMedia
                    component="img"
                    image="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                    alt="Paella dish"
                    sx={{
                        filter: props.book.read ? "brightness(1.2)" : null,
                        height: "300px",
                        bgcolor: "primary.main",
                    }}
                />
                <CardHeader
                    action={
                        <>
                            <IconButton aria-label="add to favorites" onClick={props.onRead}>
                                {props.book.read ? <CheckCircle color="success" /> : <RadioButtonUnchecked />}
                            </IconButton>
                            <BookCardMoreMenu onEdit={props.onEdit} onDelete={props.onDelete} />
                        </>
                    }
                    title={
                        <Stack direction={"column"} sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Typography
                                variant="subtitle1"
                                align="left"
                                color={props.book.read ? 'grey' : undefined}
                                sx={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                    bgcolor: "white",
                                }}
                            >
                                {props.book.title}
                            </Typography>
                            <Typography
                                variant="caption"
                                align="left"
                                color={props.book.read ? 'grey' : undefined}
                                sx={{
                                    width: "100%",
                                    boxSizing: "border-box",
                                    bgcolor: "white",
                                }}
                            >
                                {props.book.author}
                            </Typography>
                        </Stack>}
                    subtitle={props.book.author}
                    sx={{
                        width: "100%",
                        boxSizing: "border-box",
                        bgcolor: "white",
                    }}
                />

            </Stack>
        </Card>
    );
}


function BookCardMoreMenu({ onEdit, onDelete }: { onEdit: () => void, onDelete: () => void }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleEdit() {
        onEdit();
        handleClose();
    }
    function handleDelete() {
        onDelete();
        handleClose();
    }

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            width: '100px',
                        },
                    },
                    list: {
                        'aria-labelledby': 'long-button',
                    },
                }}
            >
                <MenuItem key={"edit"} onClick={handleEdit}>
                    <Typography variant="body2" align="left">
                        Edit
                    </Typography>
                </MenuItem>
                <MenuItem key={"edit"} onClick={handleDelete}>
                    <Typography variant="body2" align="left">
                        Delete
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
}
