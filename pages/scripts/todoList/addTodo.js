const buttonNewTask = document.querySelector(".addTask");
buttonNewTask.addEventListener("click", () => {
  const task = document.querySelector(".taskContent");
  const todoListContent = document.querySelector(".todo-list");
  const data = document.createElement("li");
  console.log(`message: ${task.value}`);


  // render data
  data.innerText = task.value;
  todoListContent.appendChild(data);

  task.value = "";
});