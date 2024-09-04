import * as actiontypes from "./actiontypes.js";

export const bugAdded = (description) => ({
  type: actiontypes.BUG_ADDED,
  payload: {
     description,
  },
});

export const bugRemoved = (id) => ({
  type: actiontypes.BUG_REMOVED,
  payload: {
     id,
  },
});

export const bugResolved = (id)=>({
    type:actiontypes.BUG_RESOLVED,
    payload:{
        id
    }
})