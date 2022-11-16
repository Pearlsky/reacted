import { useEffect } from "react";
import { Fragment, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getData } from "../../utils/api";

export default function BookablesList({ state, dispatch }) {
  const nextButtonRef = useRef();

  const { bookables, bookableIndex, group } = state;
  const { isLoading, error } = state;

  useEffect(() => {
    dispatch({ type: "FETCH_BOOKABLES_REQUEST" });

    getData("http://localhost:3001/bookables")
      .then((bookables) =>
        dispatch({ type: "FETCH_BOOKABLES_SUCCESS", payload: bookables })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_BOOKABLES_ERROR", payload: error })
      );
  }, [dispatch]);

  const groups = [...new Set(bookables && bookables.map((b) => b.group))];
  const bookablesInGroup =
    bookables && bookables.filter((bookable) => bookable.group === group);

  function changeBookableIndex(index) {
    dispatch({
      type: "SET_BOOKABLE",
      payload: index,
    });
    nextButtonRef.current.focus();
  }

  function changeGroup(e) {
    dispatch({
      type: "SET_GROUP",
      payload: e.target.value,
    });
  }

  function nextBookable() {
    dispatch({
      type: "NEXT_BOOKABLE",
    });
  }

  if (isLoading) {
    return <p>Loading bookables</p>;
  }

  if (error) {
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
          <button
            className="btn"
            onClick={nextBookable}
            ref={nextButtonRef}
            autoFocus
          >
            <FaArrowRight />
            <span>Next</span>
          </button>
        </p>
      </div>
    </Fragment>
  );
}
