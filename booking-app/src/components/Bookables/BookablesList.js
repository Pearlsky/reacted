import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { getData } from "../../utils/api";

export default function BookablesList({ bookable, setBookable }) {
  const [bookables, setBookables] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const group = bookable?.group;
  const groups = [...new Set(bookables && bookables.map((b) => b.group))];
  const bookablesInGroup =
    bookables && bookables.filter((bookable) => bookable.group === group);

  // const { bookables, bookableIndex, group } = state;
  // const { isLoading, error } = state;

  // useEffect(() => {
  //   dispatch({ type: "FETCH_BOOKABLES_REQUEST" });

  //   getData("http://localhost:3001/bookables")
  //     .then((bookables) =>
  //       dispatch({ type: "FETCH_BOOKABLES_SUCCESS", payload: bookables })
  //     )
  //     .catch((error) =>
  //       dispatch({ type: "FETCH_BOOKABLES_ERROR", payload: error })
  //     );
  // }, [dispatch]);

  useEffect(() => {
    getData("http://localhost:3001/bookables")
      .then((bookables) => {
        setBookable(bookables[0]);
        setBookables(bookables);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [setBookable]);

  function changeBookable(selectedBookable) {
    setBookable(selectedBookable);
  }

  function changeGroup(e) {
    const bookablesInSelectedGroup = bookables.filter(
      (b) => b.group === e.target.value
    );
    setBookable(bookablesInSelectedGroup[0]);
  }

  function nextBookable() {
    const i = bookablesInGroup.indexOf(bookable);
    const nextIndex = (i + 1) % bookablesInGroup.length;
    const nextBookable = bookablesInGroup[nextIndex];
    setBookable(nextBookable);
  }

  if (isLoading) {
    return <p>Loading bookables</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
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
          <li key={b.id} className={b.id === bookable.id ? "selected" : null}>
            <button
              className="btn"
              onClick={(e) => {
                changeBookable(b);
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
  );
}
