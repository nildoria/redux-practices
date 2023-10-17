import { useDispatch, useSelector } from 'react-redux';
import { priorityFilter, statusFilter } from '../redux/filters/actions';

const numberOfTodos = (todos_number) => {
  switch (todos_number) {
    case 0:
      return 'No task';
    case 1:
      return `${todos_number} task`;

    default:
      return `${todos_number} tasks`;
  }
};

function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const { status, colors } = filters;

  const handleStatusFilter = (status) => {
    dispatch(statusFilter(status));
  };

  const handlePriorityFilter = (color) => {
    if (colors.includes(color)) {
      dispatch(priorityFilter(color, 'removed'));
    } else {
      dispatch(priorityFilter(color, 'added'));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === 'All' && 'font-bold'}`}
          onClick={() => handleStatusFilter('All')}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}`}
          onClick={() => handleStatusFilter('Incomplete')}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'Complete' && 'font-bold'}`}
          onClick={() => handleStatusFilter('Complete')}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes('green') && 'bg-green-500'
          }`}
          onClick={() => handlePriorityFilter('green')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes('yellow') && 'bg-yellow-500'
          }`}
          onClick={() => handlePriorityFilter('yellow')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes('red') && 'bg-red-500'
          }`}
          onClick={() => handlePriorityFilter('red')}
        ></li>
      </ul>
    </div>
  );
}

export default Footer;
