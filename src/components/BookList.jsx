import React from "react";
import BookShow from "./BookShow";

// const updateBookById = (id, newTitle) => {
//   const updatedBook = books.map((book) => {
//     if (book.id === id) {
//       return { ...book, title: newTitle };
//     }
//     return books;
//   });
//   setBooks(updatedBook)
// };

function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
