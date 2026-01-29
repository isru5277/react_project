import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userCredentials"); // Optional: clear session
    navigate("/login");
  };

  return (
    <nav className="navbar" style={styles.nav}>
      <div className="logo">
        <Link to="/" style={styles.logoText}>HealthCare</Link>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        
        {user ? (
          <>
            <li><Link to="/book">Book Appointment</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>
              <button onClick={handleLogout} style={styles.logoutBtn}>
                Logout ({user.name})
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register" style={styles.registerBtn}>Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    alignItems: "center"
  },
  logoText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "none",
    color: "#007bff"
  },
  logoutBtn: {
    padding: "8px 15px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  registerBtn: {
    padding: "8px 15px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    textDecoration: "none"
  }
};

export default Navbar; // <--- THIS IS THE LINE YOU WERE MISSING