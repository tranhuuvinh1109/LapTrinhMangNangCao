import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  LayoutAdmin,
  AuthPage,
  DashboardAdmin,
  DashboardUser,
  LayoutDefault,
  HomePage,
  UserMember,
} from "./pages";
import { Toaster } from "react-hot-toast";
import UserHistory from "./pages/UserHistory";
import TrainedModel from "./pages/TrainedModel";

export const APP_CONTEXT = createContext({});
function App() {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <APP_CONTEXT.Provider value={{ user, setUser, isAdmin, setIsAdmin }}>
        <Routes>
          <Route path="/" element={<LayoutDefault />}>
            <Route index element={<HomePage />} />
            <Route path="/user" element={<LayoutAdmin />}>
              <Route path="trained-models" element={<TrainedModel />} />
            </Route>
            <Route path="/user/dashboard" element={<DashboardUser />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="members" element={<UserMember />} />
          </Route>
          <Route path="/user" element={<LayoutAdmin />}>
            <Route path="dashboard" element={<DashboardUser />} />
            <Route path="members" element={<UserHistory />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </APP_CONTEXT.Provider>
    </div>
  );
}

export default App;
