function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="item">
      <span
        className={task.completed ? "done" : ""}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <div>
        <button className="btn-done" onClick={() => onToggle(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button className="btn-del" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;