import { useState } from "react";

export default function BookablesDetails({ bookable }) {
  const [hasDetails, setHasDetails] = useState(false);

  function toggleDetails() {
    setHasDetails((has) => !has);
  }

  return (
    bookable && (
      <div className="bookable-details">
        <div className="item">
          <div className="item-header">
            <h2>{bookable.title}</h2>
            <span className="controls">
              <label>
                <input
                  type="checkbox"
                  checked={hasDetails}
                  onChange={() => {
                    toggleDetails();
                  }}
                />
              </label>
            </span>
          </div>
          <p>{bookable.notes}</p>
          {hasDetails && (
            <div className="item-details">
              <h3>Availability</h3>
              <div className="bookable-availability">
                <ul>
                  {bookable.days.sort().map((d) => (
                    <li key={d}>{[d]}</li>
                  ))}
                </ul>
                <ul>
                  {bookable.sessions.map((s) => (
                    <li key={s}>{[s]}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}
