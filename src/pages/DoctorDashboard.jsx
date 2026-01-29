import React, { useState } from "react";

const DoctorDashboard = ({ appointments, setAppointments }) => {
  // Simple filter to show how many appointments are for a specific doctor
  // In a real app, this would filter by the logged-in doctor's name
  
  const markAsComplete = (index) => {
    const updated = appointments.filter((_, i) => i !== index);
    setAppointments(updated);
    localStorage.setItem("myAppointments", JSON.stringify(updated));
    alert("Patient record updated and moved to history.");
  };

  return (
    <div style={styles.container}>
      <header style={styles.drHeader}>
        <div>
          <h1>Doctor's Portal</h1>
          <p>Medical Center: Central Clinic | Today's Overview</p>
        </div>
        <div style={styles.badge}>Dr. Panel Active</div>
      </header>

      <div style={styles.statsRow}>
        <div style={styles.statBox}>
          <span>Pending Patients</span>
          <h2>{appointments.length}</h2>
        </div>
        <div style={styles.statBox}>
          <span>Today's Date</span>
          <h2>{new Date().toLocaleDateString()}</h2>
        </div>
      </div>

      <div style={styles.tableContainer}>
        <h3>Incoming Patient Schedule</h3>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHead}>
              <th>Patient Name</th>
              <th>Requested Doctor</th>
              <th>Date/Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((app, index) => (
              <tr key={index} style={styles.tableRow}>
                <td><strong>{app.name}</strong></td>
                <td>{app.doctor}</td>
                <td>{app.date}</td>
                <td>
                  <button 
                    onClick={() => markAsComplete(index)} 
                    style={styles.doneBtn}
                  >
                    Mark as Seen
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {appointments.length === 0 && (
          <p style={{textAlign: 'center', padding: '20px'}}>No patients scheduled for today.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "40px", backgroundColor: "#f0f2f5", minHeight: "100vh" },
  drHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '30px' },
  badge: { backgroundColor: '#17a2b8', color: 'white', padding: '5px 15px', borderRadius: '20px', alignSelf: 'center' },
  statsRow: { display: 'flex', gap: '20px', marginBottom: '30px' },
  statBox: { flex: 1, padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' },
  tableContainer: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  table: { width: '100%', borderCollapse: 'collapse' },
  tableHead: { textAlign: 'left', borderBottom: '2px solid #eee' },
  tableRow: { borderBottom: '1px solid #eee' },
  doneBtn: { backgroundColor: '#28a745', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' },
  cancelBtn: { color: '#dc3545', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }
};

export default DoctorDashboard;