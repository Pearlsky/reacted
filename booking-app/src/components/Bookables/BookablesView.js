import { useReducer, useEffect } from "react";
import BookablesList from "./BookablesList";
import BookablesDetails from "./BookablesDetails";
import BookablesReducer from "./BookablesReducer";
import { getData } from "../../utils/api";

const initialState = {
  bookableIndex: 0,
  group: "Kit",
  isLoading: true,
  bookables: [],
  error: false,
};

export default function BookablesView() {
  const [
    state,
    dispatch,
  ] = useReducer(BookablesReducer, initialState);

  useEffect(() => {
    dispatch({ type: "FETCH_BOOKABLES_REQUEST" });

    getData("http://localhost:3001/bookables")
      .then((bookables) =>
        dispatch({ type: "FETCH_BOOKABLES_SUCCESS", payload: bookables })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_BOOKABLES_ERROR", payload: error })
      );
  }, []);

  const bookablesInGroup =
    state.bookables && state.bookables.filter((bookable) => bookable.group === state.group);
  const bookable = bookablesInGroup[state.bookableIndex];

  return (
    <>
      <BookablesList
        state={state}
        dispatch={dispatch}
      />
      <BookablesDetails bookable={bookable} />
    </>
  );
}
