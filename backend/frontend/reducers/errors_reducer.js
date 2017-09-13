import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/todo_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      nextState = action.errors;
      return nextState;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
