import { Fragment, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import data from "../../static.json";

export default function BookablesList() {
  const [group, setGroup] = useState("Kit");
  const [bookableIndex, setBookableIndex] = useState(0);
  const [hasDetails, setHasDetails] = useState(false);

  const { bookables } = data;
  const bookablesInGroup = bookables.filter(
    (bookable) => bookable.group === group
  );
  const groups = [...new Set(bookables.map((b) => b.group))];
  console.log(groups);

  const bookable = bookablesInGroup[bookableIndex];

  const bookableSelectHandler = (index) => {
    setBookableIndex(index);
  };

  const nextBookable = () => {
    setBookableIndex((bookableIndex + 1) % bookablesInGroup.length);
  };

  return (
    <Fragment>
      <div>
        <select
          value={group}
          onChange={(e) => {
            setGroup(e.target.value);
            setBookableIndex(0);
          }}
        >
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li key={b.id} className={i === bookableIndex ? "selected" : null}>
              <button
                className="btn"
                onClick={() => {
                  bookableSelectHandler(i);
                }}
              >
                {b.title}
              </button>
            </li>
          ))}
        </ul>

        <p>
          <button className="btn" onClick={nextBookable} autoFocus>
            <FaArrowRight />
            <span>Next</span>
          </button>
        </p>
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>{bookable.title}</h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails((has) => !has)}
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
      )}
    </Fragment>
  );
}
