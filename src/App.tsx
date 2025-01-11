import { useEffect, useState } from 'react';
import { Task } from './types/Task';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all'
  );

  useEffect(() => {
    const savedTasks = localStorage.getItem('task');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter((task) =>
          filter === 'completed' ? task.completed : !task.completed
        );

  return (
    <>
      <div className='app'>
        <h1>Task Tracker</h1>
        <TaskForm onAddTask={addTask} />
        <Filter filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </>
  );
};

export default App;
