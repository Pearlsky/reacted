export default function BookablesReducer(state, action) {
  switch (action.type) {
    case "SET_BOOKABLE_INDEX":
      return { ...state, bookableIndex: action.payload };

    case "SET_GROUP":
      return { ...state, group: action.payload, bookableIndex: 0 };

    case "NEXT_BOOKABLE":
      const count = state.bookables.filter(
        (b) => b.group === state.group
      ).length;
      return { ...state, bookableIndex: (state.bookableIndex + 1) % count };

    case "TOGGLE_HAS_DETAILS":
      return { ...state, hasDetails: !state.hasDetails };

    case "FETCH_BOOKABLES_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: false,
        bookables: [],
      };

    case "FETCH_BOOKABLES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        bookables: action.payload,
      };

    case "FETCH_BOOKABLES_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
