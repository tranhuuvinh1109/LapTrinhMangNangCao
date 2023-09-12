import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthPage, HomePage, LayoutPage } from './pages';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
