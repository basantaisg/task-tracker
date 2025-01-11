import React, { useState } from 'react';

interface TaskFormProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from reloading
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill out both the title and description.');
      return;
    }
    onAddTask(title, description); // Call the function to add the task
    setTitle(''); // Clear the input fields
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Task Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Task Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Add Task</button> {/* Add Task Button */}
    </form>
  );
};

export default TaskForm;
