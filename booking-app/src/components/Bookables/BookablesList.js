import { Fragment, useEffect, useReducer } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getData } from "../../utils/api";
import BookablesReducer from "./BookablesReducer";
// import data from "../../static.json";

export default function BookablesList() {
  // const {sessions, days} = data;

  const initialState = {
    bookableIndex: 0,
    group: "Kit",
    hasDetails: false,
    isLoading: true,
    bookables: [],
    error: false
  };

  const [{bookableIndex, group, hasDetails, bookables, isLoading, error}, dispatch] = useReducer(BookablesReducer, initialState);
  
  const bookablesInGroup = bookables&&bookables.filter(
    (bookable) => bookable.group === group
  );
  const groups = [...new Set(bookables&&bookables.map((b) => b.group))];

  const bookable = bookablesInGroup[bookableIndex];

  useEffect(() => {
    dispatch({type: "FETCH_BOOKABLES_REQUEST"});

    getData("http://localhost:3001/bookables")
    .then(bookables => dispatch({type: "FETCH_BOOKABLES_SUCCESS", payload: bookables}))
    .catch(error => dispatch({type: "FETCH_BOOKABLES_ERROR", payload: error}));
  }, []);

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

  if(isLoading) {
    return <p>Loading bookables</p>;
  }

  if(error) {
    return <p>{error.message}</p>;
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
