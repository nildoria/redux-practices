document.addEventListener("DOMContentLoaded", function () {
  let matchCounter = 1;

  // Function for each redux store for each match
  function initializeMatch(matchElement) {
    // Select elements
    const scoreEl = matchElement.querySelector("h2.lws-singleResult");
    const scoreIncForm = matchElement.querySelector("form.incrementForm");
    const scoreDecForm = matchElement.querySelector("form.decrementForm");
    const scoreIncEl = matchElement.querySelector("input.lws-increment");
    const scoreDecEl = matchElement.querySelector("input.lws-decrement");
    const matchNumber = matchElement.querySelector(".lws-matchName");
    const deleteMatch = matchElement.querySelector(".lws-delete");
    const resetScore = document.querySelector(".lws-reset");

    // match number increment
    matchNumber.innerText = `Match ${matchCounter++}`;

    // delete a match element
    deleteMatch.addEventListener("click", () => {
      matchElement.remove();
    });

    // reset scores
    resetScore.addEventListener("click", () => {
      scoreEl.innerText = 0;
    });

    // initial state
    const initialState = {
      value: 0,
    };

    // action types
    const INCREMENT = "increment";
    const DECREMENT = "decrement";

    // action creator
    const increment = (value) => {
      return {
        type: INCREMENT,
        payload: value,
      };
    };
    const decrement = (value) => {
      return {
        type: DECREMENT,
        payload: value,
      };
    };

    // reducer function
    function scoreReducer(state = initialState, action) {
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

    // create Redux store
    const store = Redux.createStore(scoreReducer);

    const updateScore = () => {
      const state = store.getState();
      scoreEl.innerText = state.value.toString();
    };

    //redux store subscribe
    store.subscribe(updateScore);

    // initial update
    updateScore();

    // input handle dispatch
    scoreIncForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const scoreIncVal = parseInt(scoreIncEl.value, 10);
      store.dispatch(increment(scoreIncVal));

      updateScore();
      scoreIncEl.value = "";
    });

    scoreDecForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const scoreDecVal = parseInt(scoreDecEl.value, 10);
      store.dispatch(decrement(scoreDecVal));

      updateScore();
      scoreDecEl.value = "";
    });
  }

  // Initialize each match separately
  const matchElements = document.querySelectorAll(".match");
  matchElements.forEach((matchElement) => {
    initializeMatch(matchElement);
  });

  // add new match function
  function addNewMatch() {
    const newMatch = `
    <div class="match">
        <div class="wrapper">
            <button class="lws-delete">
                <img src="./image/delete.svg" alt="" />
            </button>
            <h3 class="lws-matchName">Match 2</h3>
        </div>
        <div class="inc-dec">
            <form class="incrementForm">
                <h4>Increment</h4>
                <input type="number" name="increment" class="lws-increment" />
            </form>
            <form class="decrementForm">
                <h4>Decrement</h4>
                <input type="number" name="decrement" class="lws-decrement" />
            </form>
        </div>
        <div class="numbers">
            <h2 class="lws-singleResult">0</h2>
        </div>
    </div>
  `;

    const newMatchEl = document.createElement("div");
    newMatchEl.innerHTML = newMatch;

    return newMatchEl;
  }

  // add new match listener
  const addMatchButton = document.querySelector(".lws-addMatch");
  addMatchButton.addEventListener("click", () => {
    const matchesContainer = document.querySelector(".all-matches");
    if (matchesContainer) {
      const newMatchEl = addNewMatch();
      matchesContainer.appendChild(newMatchEl);
      initializeMatch(newMatchEl);
    } else {
      console.error(".all-matches not found");
    }
  });
});
