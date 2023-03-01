import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onCreate={handleCreateBook} />
      <BookList books={books} />
    </div>
  );
}

export { App };
