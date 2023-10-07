import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/dynamicCounter/actions';

export default function DynamicHookedCounter() {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const countInc = (value) => {
    dispatch(increment(value));
  };

  const countDec = (value) => {
    dispatch(decrement(value));
  };

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={() => countInc(5)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={() => countDec(2)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
