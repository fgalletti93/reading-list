import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:3001/books");
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }
      return books;
    });
    setBooks(updatedBook);
  };

  const deleteBookById = async (id) => {
    await axios.put(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const { data } = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export { App };
