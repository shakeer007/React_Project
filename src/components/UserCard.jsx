const UserCard = ({ user, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(user)}>
      <div className="card-content">
        <img
          src={user.image}
          alt={user.firstName}
          className="user-avatar"
          onError={(e) => (e.target.src = "https://via.placeholder.com/80")}
        />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>📧 {user.email}</p>
        <p>🎂 Age: {user.age}</p>
        <p>
          📍 {user.address?.city}, {user.address?.country}
        </p>
        <p>
          👁️ {user.eyeColor} | 💇 {user.hair?.color} {user.hair?.type}
        </p>
      </div>
    </div>
  );
};
export default UserCard;
