import { Task as TaskType } from '../types/Task';

interface TaskProps {
  task: TaskType;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggleTask, onDeleteTask }) => {
  return (
    <>
      <li>
        <div>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title}
          </span>
        </div>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </li>
    </>
  );
};

export default Task;
