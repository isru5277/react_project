import { useState, useEffect } from "react";
import DoctorCard from "../components/DoctorCard";
import AppointmentForm from "../components/AppointmentForm";

// Import your doctor images (ensure paths match your project)
import doc1 from "../assets/doctor3.png";
import doc2 from "../assets/sara.jpg";
import doc3 from "../assets/hanan.jpg";

const Booking = ({ appointments, setAppointments }) => {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleAppointment = (data) => {
    setAppointments([...appointments, data]);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="booking-page" style={{ padding: "40px" }}>
      <section id="doctors" className="doctor-section">
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Choose a Doctor</h2>
        <div className="doctor-grid" style={styles.grid}>
          <DoctorCard
            name="Dr. Lamesgen"
            specialty="Cardiologist"
            image={doc1}
            onBook={() => setSelectedDoctor("Dr. Lamesgen")}
          />
          <DoctorCard
            name="Dr. Sara"
            specialty="Dermatologist"
            image={doc2}
            onBook={() => setSelectedDoctor("Dr. Sara")}
          />
          <DoctorCard
            name="Dr. Hanan"
            specialty="Dermatologist"
            image={doc3}
            onBook={() => setSelectedDoctor("Dr. Hanan")}
          />
        </div>
      </section>

      <hr style={{ margin: "50px 0" }} />

      <section id="appointment">
        <AppointmentForm
          selectedDoctor={selectedDoctor}
          onSubmit={handleAppointment}
        />
      </section>
    </div>
  );
};

const styles = {
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

export default Booking;