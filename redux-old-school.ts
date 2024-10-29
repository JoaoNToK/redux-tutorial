import { createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
};

function reducer(
  state = initialState,
  action: { type: string; payload?: number }
) {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        counter: {
          value: state.counter.value + 1,
        },
      };
    }
    case "counter/incrementAmount": {
      return {
        ...state,
        counter: {
          value: state.counter.value + (action.payload || 0),
        },
      };
    }
    default:
      return state;
  }
}
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
