import APIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TODO_ERROR = "TODO_ERROR";
export const FETCH_TODOS = "FETCH_TODOS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const todoError = error => ({
  type: TODO_ERROR,
  error
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});


export const fetchTodos = () => (dispatch) => {
  return APIUtil.getTodos().then(resp => dispatch(receiveTodos(resp)));
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtil.createTodo(todo)
    .then(
      resp => dispatch(receiveTodo(resp)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
};
