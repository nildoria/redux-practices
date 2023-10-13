import { BOOK, DELETE } from './actionTypes';

const initialState = {
  bookingData: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        bookingData: [...state.bookingData, action.payload],
      };
    case DELETE:
      return {
        ...state,
        bookingData: state.bookingData.filter(
          (booking) => booking.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default bookingReducer;
