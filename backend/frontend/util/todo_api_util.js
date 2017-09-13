
const APIUtil = {

  getTodos: () => (
    $.ajax({
      method: 'GET',
      url: '/api/todos'
    })
  ),

  createTodo: (todo) => (
    $.ajax({
      method: 'POST',
      url: '/api/todos',
      dataType: 'JSON',
      data: {todo: todo}
    })
  )

};

export default APIUtil;
