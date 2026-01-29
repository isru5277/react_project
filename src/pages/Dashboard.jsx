import React from "react";

const Dashboard = ({ appointments, setAppointments }) => {
  
  // Function to delete an appointment
  const handleCancel = (index) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      const updatedAppointments = appointments.filter((_, i) => i !== index);
      setAppointments(updatedAppointments);
      // Update localStorage so data persists after deletion
      localStorage.setItem("myAppointments", JSON.stringify(updatedAppointments));
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Patient Dashboard</h1>
        <p>Welcome back! Here is your health schedule.</p>
      </header>

      {/* Stats Section - Makes it look professional */}
      <div style={styles.statsRow}>
        <div style={styles.statCard}>
          <h3>{appointments.length}</h3>
          <p>Total Bookings</p>
        </div>
        <div style={styles.statCard}>
          <h3>{appointments.length > 0 ? "Active" : "None"}</h3>
          <p>Health Status</p>
        </div>
      </div>

      <section style={styles.listSection}>
        <h2>Your Appointments</h2>
        
        {appointments.length === 0 ? (
          <div style={styles.emptyState}>
            <p>You have no upcoming appointments.</p>
            <button 
              onClick={() => window.location.href = "/book"} 
              style={styles.bookBtn}
            >
              Book Your First Visit
            </button>
          </div>
        ) : (
          <div style={styles.grid}>
            {appointments.map((app, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.cardInfo}>
                  <div style={styles.avatar}>
                    {app.doctor.charAt(4)} {/* Shows first letter of Dr. Name */}
                  </div>
                  <div>
                    <h4 style={{ margin: 0 }}>{app.doctor}</h4>
                    <p style={styles.dateText}>📅 {app.date}</p>
                    <span style={styles.statusBadge}>Confirmed</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleCancel(index)} 
                  style={styles.cancelBtn}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

// Professional UI Styles
const styles = {
  container: {
    padding: "40px 5%",
    backgroundColor: "#f4f7f6",
    minHeight: "100vh",
  },
  header: {
    marginBottom: "30px",
  },
  statsRow: {
    display: "flex",
    gap: "20px",
    marginBottom: "40px",
  },
  statCard: {
    backgroundColor: "#fff",
    padding: "20px 40px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    textAlign: "center",
    flex: 1,
  },
  listSection: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    border: "1px solid #eee",
    borderRadius: "10px",
    transition: "transform 0.2s",
  },
  cardInfo: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  avatar: {
    width: "50px",
    height: "50px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bold",
  },
  dateText: {
    margin: "5px 0",
    color: "#666",
    fontSize: "14px",
  },
  statusBadge: {
    backgroundColor: "#e1f7e3",
    color: "#28a745",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
  },
  cancelBtn: {
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#dc3545",
    border: "1px solid #dc3545",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  emptyState: {
    textAlign: "center",
    padding: "40px",
  },
  bookBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;