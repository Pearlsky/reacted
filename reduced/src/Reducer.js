export default function Reducer(state, action) {
  switch (action.type) {
    case "input":
      return {
        ...state,
        value: action.payload
      };
    case "inc":
      return {
        ...state,
        count: state.count++,
      };
    case "dec":
      return {
        ...state,
        count: state.count--,
      };
    case "set":
      return {
        ...state,
        count: Number(state.value),
      };
    case "reset":
      return {
        ...state,
        count: 0,
        value: "",
      };
    default:
      throw new Error (`No know action with the type: ${action.type}`);
  }
}