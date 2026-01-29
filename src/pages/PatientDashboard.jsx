import React from "react";

const PatientDashboard = ({ appointments, setAppointments }) => {
  
  const handleCancel = (index) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      // 1. Remove from React State
      const updated = appointments.filter((_, i) => i !== index);
      setAppointments(updated);
      
      // 2. Persist to LocalStorage
      localStorage.setItem("myAppointments", JSON.stringify(updated));
    }
  };

  return (
    <div style={styles.container}>
      <h2>My Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        appointments.map((app, index) => (
          <div key={index} style={styles.card}>
            <div>
              <h4>{app.doctor}</h4>
              <p>{app.date} - Patient: {app.name}</p>
            </div>
            <button onClick={() => handleCancel(index)} style={styles.cancelBtn}>
              Cancel Appointment
            </button>
          </div>
        ))
      )}
    </div>
  );
};