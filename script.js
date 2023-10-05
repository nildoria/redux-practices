// Select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creators
const increment = (value) => {
  return {
    type: INCREMENT, //mandatory type
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT, //mandatory type
    payload: value,
  };
};

//initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: Math.max(state.value - action.payload, 0),
      };
    default:
      return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// Initial UI update
render();

//redux store subscribe
store.subscribe(render);

//button click listener
incrementEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const incrementValue = parseInt(incrementEl.value, 10);
    if (!isNaN(incrementValue)) {
      store.dispatch(increment(incrementValue));
      render();
      incrementEl.value = "";
    }
  }
});

decrementEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const decrementValue = parseInt(decrementEl.value, 10);
    if (!isNaN(decrementValue)) {
      store.dispatch(decrement(decrementValue));
      render();
      decrementEl.value = "";
    }
  }
});
