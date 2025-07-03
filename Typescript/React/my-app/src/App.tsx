/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './App.css'
import { dummyData, type Book } from './models/book'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { BookCard } from './components/book_card';
import NiceModal from '@ebay/nice-modal-react';
import BookFormModal from './components/book_form_modal';

NiceModal.register('book-form', BookFormModal);

function App() {
  const [books, setBooks] = useState<Book[]>(dummyData);


  function handleOnReset() {
    setBooks(dummyData);
  }

  function handleOnRead(id: number) {
    const newBooks = books.map((e) => {
      if (e.id === id) {
        return { ...e, read: !e.read }
      }
      return e;
    })
    setBooks(newBooks);
  }

  function handleEdit(id: number) {
    const book = books.find((b) => b.id === id);
    if (!book) return;

    NiceModal.show<Book>('book-form', { book }).then((updated) => {
      setBooks((prev) =>
        prev.map((b) => (b.id === updated.id ? updated : b))
      );
    });
  }

  function handleDelete(id: number) {
    const newBooks = books.filter((e) => {
      return (e.id !== id);
    })
    setBooks(newBooks);
  }

  return (
    <>

      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">My App</Typography>
          <Button color="inherit" onClick={handleOnReset}>
            Reset
          </Button>
        </Toolbar>
      </AppBar>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        padding={"32px"}
        direction="row"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}
      >
        <>
          {books.map((e) => {
            return <BookCard key={e.id} props={{
              book: e, onRead: () => {
                handleOnRead(e.id)
              }, onEdit: () => { handleEdit(e.id) }, onDelete: () => { handleDelete(e.id) }
            }}></BookCard>
          })}
        </>
      </Stack >
    </>
  )
}

export default App
