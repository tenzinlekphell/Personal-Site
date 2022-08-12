import React from 'react';
import CryptoPriceTracker from './CryptoPriceTracker';
import TodoList from './TodoList';

const Projects = () => {
  return (
    <div>
      <TodoList />
      <CryptoPriceTracker />
    </div>
  );
};

export default Projects;
