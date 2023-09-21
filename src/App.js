import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LayoutAdmin, AuthPage, DashboardAdmin, DashboardUser, LayoutDefault, HomePage, UserMember } from './pages';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index element={<HomePage />} />
          <Route path='/user/dashboard' element={<DashboardUser />} />
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          <Route path='dashboard' element={<DashboardAdmin />} />
          <Route path='members' element={<UserMember />} />
        </Route>
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
