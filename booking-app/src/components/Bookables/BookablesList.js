import { Fragment, useReducer } from "react";
import { FaArrowRight } from "react-icons/fa";
import data from "../../static.json";
import BookablesReducer from "./BookablesReducer";

export default function BookablesList() {

  const initialState = {
    bookableIndex: 0,
    group: "Kit",
    hasDetails: false,
    bookables: data.bookables,
  };

  const [{bookableIndex, group, hasDetails, bookables}, dispatch] = useReducer(BookablesReducer, initialState);
  
  const bookablesInGroup = bookables.filter(
    (bookable) => bookable.group === group
  );
  const groups = [...new Set(bookables.map((b) => b.group))];
  console.log(groups);

  const bookable = bookablesInGroup[bookableIndex];

  function changeBookableIndex (index) {
    dispatch({
      type: "SET_BOOKABLE_INDEX",
      payload: index
    });
  }

  function changeGroup (e) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value
    });
  }
  
  function nextBookable () {
    dispatch({
      type: "NEXT_BOOKABLE"
    });
  }

  function changeHasDetails () {
    dispatch({
      type: "TOGGLE_HAS_DETAILS"
    });
  }

  return (
    <Fragment>
      <div>
        <select
          value={group}
          onChange={(e) => {
            changeGroup(e);
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
                  changeBookableIndex(i);
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
                    onChange={() => {changeHasDetails()}}
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
