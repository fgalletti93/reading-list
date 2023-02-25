import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
