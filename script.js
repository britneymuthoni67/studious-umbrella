const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filters = document.getElementById("filters");

// Add new task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Add mark complete / delete functionality
  li.addEventListener("click", () => li.classList.toggle("completed"));

  li.addEventListener("dblclick", () => li.remove());

  taskList.appendChild(li);
  taskInput.value = "";
});

// Filter tasks
filters.addEventListener("click", (e) => {
  if (!e.target.dataset.filter) return;
  const filter = e.target.dataset.filter;
  const tasks = taskList.querySelectorAll("li");

  tasks.forEach(task => {
    task.style.display = "block";
    if (filter === "active" && task.classList.contains("completed")) task.style.display = "none";
    if (filter === "completed" && !task.classList.contains("completed")) task.style.display = "none";
  });
});
