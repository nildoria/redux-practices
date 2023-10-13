import { BOOK, DELETE } from './actionTypes';

const generateUniqueID = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const initialState = {
  bookingData: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK: {
      const newBooking = {
        ...action.payload,
        id: generateUniqueID(),
      };
      return {
        ...state,
        bookingData: [...state.bookingData, newBooking],
      };
    }
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
