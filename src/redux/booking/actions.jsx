import { BOOK, DELETE } from './actionTypes';

export const booking = (bookingData) => {
  return {
    type: BOOK,
    payload: bookingData,
  };
};

export const deleteBooking = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};
