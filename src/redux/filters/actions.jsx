import { STATUSFILTER, PRIORITYFILTER } from './actionTypes';

export const statusFilter = (status) => {
  return {
    type: STATUSFILTER,
    payload: status,
  };
};

export const priorityFilter = (color, changeType) => {
  return {
    type: PRIORITYFILTER,
    payload: {
      color,
      changeType,
    },
  };
};
