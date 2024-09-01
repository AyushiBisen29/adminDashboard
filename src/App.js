import React from 'react';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Team from "./scenes/team";
import AttendanceForm from "./scenes/AttendanceForm"
import { Routes, Route, useLocation } from "react-router-dom";
import AdminEmployee from "./scenes/AdminEmployee";
import Login from './scenes/login';
import Signup from './scenes/signup';

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  // Determine whether to show Sidebar and Topbar
  const showSidebarAndTopbar = location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {showSidebarAndTopbar && <Sidebar />}
          <main className="content">
            {showSidebarAndTopbar && <Topbar />}
            <Routes>
              <Route path="/" element={<AdminEmployee />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/AttendanceForm" element={<AttendanceForm />} /> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
