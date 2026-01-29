import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Components & Pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import DoctorDashboard from "./pages/DoctorDashboard";

function App() {
  // Initialize state from localStorage so data persists on refresh
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("myAppointments");
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("activeUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Sync appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("myAppointments", JSON.stringify(appointments));
  }, [appointments]);

  // Sync user to localStorage whenever login/logout happens
  useEffect(() => {
    if (user) {
      localStorage.setItem("activeUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("activeUser");
    }
  }, [user]);

  // Helper function to add appointments (passed to Booking.jsx)
  const addAppointment = (newApp) => {
    setAppointments((prev) => [...prev, newApp]);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar user={user} setUser={setUser} />
        
        <main className="content" style={{ minHeight: "80vh" }}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes: Redirect to /login if user is null */}
            <Route 
              path="/dashboard" 
              element={
                user ? (
                  <Dashboard appointments={appointments} setAppointments={setAppointments} />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />
            <Route 
           path="/doctor-admin" 
             element={<DoctorDashboard appointments={appointments} setAppointments={setAppointments} />} 
             />
            
            <Route 
              path="/book" 
              element={
                user ? (
                  <Booking appointments={appointments} setAppointments={setAppointments} />
                ) : (
                  <Navigate to="/login" />
                )
              } 
            />

            {/* Catch-all: Redirect unknown URLs to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;