import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // In a real app, you'd save this to a database
    localStorage.setItem("userCredentials", JSON.stringify(formData));
    alert("🎉 Account created! You can now login.");
    navigate("/login");
  };

  return (
    <div className="auth-card" style={styles.card}>
      <h2>Join Our Clinic</h2>
      <form onSubmit={handleRegister}>
        <input 
          style={styles.input}
          type="text" 
          placeholder="Full Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
        />
        <input 
          style={styles.input}
          type="email" 
          placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          required 
        />
        <input 
          style={styles.input}
          type="password" 
          placeholder="Create Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          required 
        />
        {/* Visual Functionality: Password strength hint */}
        <div style={{fontSize: '12px', color: formData.password.length > 6 ? 'green' : 'red', marginBottom: '10px'}}>
           {formData.password.length > 6 ? "✅ Strong password" : "❌ Password too short"}
        </div>
        <button type="submit" style={styles.button}>Create Account</button>
      </form>
    </div>
  );
};

const styles = {
  card: { maxWidth: '400px', margin: '100px auto', padding: '30px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderRadius: '15px', textAlign: 'center' },
  input: { width: '100%', padding: '12px', margin: '10px 0', borderRadius: '8px', border: '1px solid #ddd' },
  button: { width: '100%', padding: '12px', backgroundColor: '#28a745', color: '#white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Register;