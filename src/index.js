import store from "./store";

import {bugAdded, bugRemoved, bugResolved} from './actions.js'

const unsubcriber = store.subscribe(() => {
  console.log("store ", store.getState());
});
store.dispatch(bugAdded("New Bug"));

unsubcriber();

// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(1))

console.log(store.getState())