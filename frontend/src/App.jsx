import React from 'react';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <h1 className='text-center mt-2'>Employee Management</h1>
          <Routes>
            {/* { defining route path for different components } */}
            <Route path="/" element={<List />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
