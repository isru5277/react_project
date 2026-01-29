import { useState, useEffect } from "react";

const AppointmentForm = ({ selectedDoctor, onSubmit }) => {
  const [name, setName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  // Auto-fill doctor from card
  useEffect(() => {
    if (selectedDoctor) setDoctor(selectedDoctor);
  }, [selectedDoctor]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, doctor, date });

    setName("");
    setDoctor("");
    setDate("");
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
        <option value="">Select Doctor</option>
        <option>Dr. Lamesgen</option>
        <option>Dr. Sara</option>
        <option>Dr. Hanan</option>
      </select>

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;
