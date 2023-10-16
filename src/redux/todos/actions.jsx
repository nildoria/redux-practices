import {
  ADD,
  TOGGLE,
  PRIORITY,
  DELETED,
  COMPLETEALL,
  CLEARCOMPLETED,
} from './actionTypes';

export const add = (todoText) => {
  return {
    type: ADD,
    payload: todoText,
  };
};

export const toggle = (todoId) => {
  return {
    type: TOGGLE,
    payload: todoId,
  };
};

export const priority = (todoId, color) => {
  return {
    type: PRIORITY,
    payload: {
      todoId,
      color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const completeAll = () => {
  return {
    type: COMPLETEALL,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
