// import { useReducer } from "react";
import { useState } from "react";
import BookablesList from "./BookablesList";
import BookablesDetails from "./BookablesDetails";
// import BookablesReducer from "./BookablesReducer";

// const initialState = {
//   bookableIndex: 0,
//   group: "Kit",
//   isLoading: true,
//   bookables: [],
//   error: false,
// };

export default function BookablesView() {
    // lift bookable state being the only state the two components share
    const [bookable, setBookable] = useState();

  // const [state, dispatch] = useReducer(BookablesReducer, initialState);

  // const bookablesInGroup =
  //   state.bookables &&
  //   state.bookables.filter((bookable) => bookable.group === state.group);
  // const bookable = bookablesInGroup[state.bookableIndex];

  return (
    <>
      <BookablesList bookable={bookable} setBookable={setBookable} />
      <BookablesDetails bookable={bookable} />
    </>
  );
}
