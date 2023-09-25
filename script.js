// Select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
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
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
