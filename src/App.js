import React from 'react';
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
  ContactPage,
  ProjectDetail,
  UserDetail,
} from './pages';
import { Toaster } from 'react-hot-toast';
import ManageProject from './pages/ManageProject';

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<HomePage />} />
          <Route path="user/dashboard" element={<DashboardUser />} />
          <Route path="user/manual_code" element={<ManualCode />} />
          <Route path="user/:id" element={<UserDetail />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="dashboard" element={<DashboardAdmin />} />
          <Route path="projects" element={<ManageProject />} />
          <Route path="users" element={<UserMember />} />
        </Route>
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
