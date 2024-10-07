const input = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const tasksList = document.getElementById("tasks-list");

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskItem = document.createElement("li");

  //checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", toggleComplete);

  //paragraph
  const task = document.createElement("p");
  task.textContent = taskText;

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-task");
  deleteButton.addEventListener("click", deleteTask);

  //Append
  taskItem.appendChild(checkbox);
  taskItem.appendChild(task);
  taskItem.appendChild(deleteButton);

  tasksList.appendChild(taskItem);
  input.value = "";
}

function toggleComplete(e) {
  const taskItem = e.target.parentElement;
  taskItem.classList.toggle("complete");
}

function deleteTask(e) {
  const taskItem = e.target.parentElement;
  tasksList.removeChild(taskItem);
}

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

addButton.addEventListener("click", addTask);
