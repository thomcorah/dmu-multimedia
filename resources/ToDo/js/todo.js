addTodo = evt => {
  evt.preventDefault();
  let newTodo = document.getElementById("newTodo").value;
  if (newTodo) {
  }
};

document.getElementById("addTodoBtn").addEventListener("click", addTodo);
