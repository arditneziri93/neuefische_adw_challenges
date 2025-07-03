/* eslint-disable @typescript-eslint/no-unused-vars */
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Modal, Box, TextField, Button, Stack, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useState } from 'react';
import type { Book } from '../models/book';
import { v4 as uuidv4 } from 'uuid';

type Props = { book: Book, };

const BookFormModal = NiceModal.create(({ book }: Props) => {
    const modal = useModal();

    const [id, setId] = useState(book.id ?? uuidv4());
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [read, setRead] = useState(book.read);

    const handleSubmit = () => {
        if (book === undefined) {
            modal.resolve({ id, title, author, read });
        } else {
            modal.resolve({ ...book, title, author, read });
        }

    };

    const handleCancel = () => {
        modal.hide();
        modal.reject();
    };

    return (
        <Modal open={modal.visible} onClose={() => modal.reject()}>
            <Box
                sx={{
                    p: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    mx: 'auto',
                    mt: '15vh',
                    width: 300,
                    boxShadow: 24,
                }}
            >
                <Stack spacing={2}>
                    <Stack direction="row" alignItems="space-between" justifyContent="space-between">
                        <Typography variant="h5">{book === undefined ? "New Book" : "Edit Book"}</Typography>
                    </Stack>
                    <TextField label="Title" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                    <TextField label="Author" fullWidth value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <FormControlLabel
                        control={<Checkbox checked={read} onChange={(e) => setRead(e.target.checked)} />}
                        label="Read"
                    />
                    <Button variant="contained" onClick={handleSubmit}>Save</Button>
                    <Button variant="text" onClick={() => handleCancel()}>Cancel</Button>
                </Stack>
            </Box>
        </Modal>
    );
});

export default BookFormModal;
