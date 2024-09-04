import * as actiontypes from "./actiontypes.js";
let lastId = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case actiontypes.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actiontypes.BUG_ADDED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actiontypes.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
