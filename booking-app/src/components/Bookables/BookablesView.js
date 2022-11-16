import { useReducer } from "react";
import BookablesList from "./BookablesList";
import BookablesDetails from "./BookablesDetails";
import BookablesReducer from "./BookablesReducer";

const initialState = {
  bookableIndex: 0,
  group: "Kit",
  isLoading: true,
  bookables: [],
  error: false,
};

export default function BookablesView() {
  const [state, dispatch] = useReducer(BookablesReducer, initialState);

  const bookablesInGroup =
    state.bookables &&
    state.bookables.filter((bookable) => bookable.group === state.group);
  const bookable = bookablesInGroup[state.bookableIndex];

  return (
    <>
      <BookablesList state={state} dispatch={dispatch} />
      <BookablesDetails bookable={bookable} />
    </>
  );
}
