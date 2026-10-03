import { useState } from "react";

function TaskForm({ onAdd }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }

    onAdd(text.trim());
    setText("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-row">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button type="submit">Add</button>
      </div>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default TaskForm;