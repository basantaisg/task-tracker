import React, { SetStateAction } from 'react';

interface FilterProps {
  filter: 'all' | 'completed' | 'incomplete';
  setFilter: React.Dispatch<SetStateAction<'all' | 'completed' | 'incomplete'>>;
}

const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <>
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>

      <button
        onClick={() => setFilter('completed')}
        disabled={filter === 'completed'}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter('incomplete')}
        disabled={filter === 'incomplete'}
      >
        Incomplete
      </button>
    </>
  );
};

export default Filter;
