import React, { createContext, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  LayoutAdmin,
  AuthPage,
  DashboardAdmin,
  DashboardUser,
  LayoutDefault,
  HomePage,
  UserMember,
  ManualCode,
} from './pages';
import { Toaster } from 'react-hot-toast';
import UserProject from './pages/UserProject';

export const APP_CONTEXT = createContext({});
function App() {
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <APP_CONTEXT.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<HomePage />} />
            <Route path="/user/dashboard" element={<DashboardUser />} />
            <Route path="/user/manual_code" element={<ManualCode />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="projects" element={<UserProject />} />
            <Route path="users" element={<UserMember />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </APP_CONTEXT.Provider>
    </div>
  );
}

export default App;
