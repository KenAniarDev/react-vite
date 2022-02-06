import './App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'wireframe');
  }, []);
  return (
    <div className='App'>
      <button class='btn'>neutral</button>
      <button class='btn btn-primary mx-2'>primary</button>
      <button class='btn btn-secondary'>secondary</button>
      <button class='btn btn-accent'>accent</button>
      <button class='btn btn-ghost'>ghost</button>
      <button class='btn btn-link'>link</button>
    </div>
  );
}

export default App;
