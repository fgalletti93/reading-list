import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useBooksContext();

  const [updatedTitle, setupdatedTitle] = useState(book.title);

  const handleChange = (event) => {
    setupdatedTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, updatedTitle);
  };

  return (
    <>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type={"text"}
          value={updatedTitle}
          onChange={handleChange}
        />
        <button className="button is-primary">Save</button>
      </form>
    </>
  );
}

export default BookEdit;
