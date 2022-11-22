export default function BookingDetails({ user }) {
  return user ? (
    <div className="user-details">
      <div className="item">
        <div className="item-header">
          <h2>{user.name}</h2>
        </div>
        <div className="item-details">
          <h3>{user.title}</h3>
          <div>
            <p>{user.notes}</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
