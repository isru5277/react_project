const DoctorCard = ({ name, specialty, image, onBook }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{specialty}</p>
      <button onClick={onBook}>Book Appointment</button>
    </div>
  );
};

export default DoctorCard;
