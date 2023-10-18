import noteIMG from '../assets/images/notes.png';
import doubleTickIMG from '../assets/images/double-tick.png';
import plusIMG from '../assets/images/plus.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, clearCompleted, completeAll } from '../redux/todos/actions';

function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(input));
    setInput('');
  };

  const handleCompleteAll = () => {
    dispatch(completeAll());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md todo-form-input"
      >
        <img src={noteIMG} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusIMG}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleCompleteAll}
        >
          <img className="w-4 h-4" src={doubleTickIMG} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
}

export default Header;
