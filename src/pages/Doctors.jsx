import { useState, useEffect } from "react";
import DoctorCard from "./components/DoctorCard";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors([
      { id: 1, name: "Dr. lamesgen", specialty: "Cardiologist" },
      { id: 2, name: "Dr. Sara", specialty: "Dermatologist" },
      { id: 3, name: "Dr. hanan", specialty: "phycologist" },
    ]);
  }, []);

  return (
    <div>
      <h2>Available Doctors</h2>
      {doctors.map((doc) => (
        <DoctorCard
          key={doc.id}
          name={doc.name}
          specialty={doc.specialty}
        />
      ))}
    </div>
  );
}
