import rootReducer from '../rootReducer';

// create my first middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);

  const upcommingState = [action].reduce(rootReducer, store.getState());

  console.log(`Upcomming State: ${JSON.stringify(upcommingState)}`);

  // pass action
  return next(action);
};

export default myLogger;
