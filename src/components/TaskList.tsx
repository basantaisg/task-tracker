import Task from './Task';
import { Task as TaskType } from '../types/Task';

interface TaskListProps {
  tasks: TaskType[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}) => {
  if (tasks.length === 0) {
    return <p>No tasks to display!</p>;
  }
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
