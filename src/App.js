import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthPage, DashboardAdmin, DashboardUser, HomePage, LayoutPage } from './pages';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path='/user/dashboard' element={<DashboardUser />} />
          <Route path='/admin/dashboard' element={<DashboardAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
