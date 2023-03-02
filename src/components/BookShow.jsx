import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditorClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle) => {
    onEdit(id, updatedTitle)
    setShowEdit(false);
  }
  
  let content = <h3>{book.title}</h3>
  if(showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit}/>
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditorClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;



// {showEdit ? (
//   <div className="book-edit">
//     <BookEdit />
//   </div>
// ) : (
//   book.title
// )}