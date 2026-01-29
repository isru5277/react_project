import heroImg from "../assets/hero-doctor.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Your Most Trusted Health Partner</h1>
        <p>Book doctor appointments easily and get professional health care whenever you need it.</p>
        <div className="btn-group">
          <button onClick={() => navigate("/register")}>Get Started</button>
          <button onClick={() => navigate("/dashboard")}>Track Appointment</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Doctors" />
      </div>
    </section>
  );
};

export default Home;