import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    console.log('title', title)
    setBooks(title)
  }

  return (
    <>
      <BookCreate onCreate={handleCreateBook}/>
      <BookList />
    </>
  );
}

export { App };
