const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

let editMode = null; // Variable to track the task being edited

// add or update task
function addOrUpdateTask() {
  if (inputBox.value === "") {
    alert("You haven't created any tasks yet");
    return;
  }

  if (editMode) {
    // Update the existing task
    const li = editMode;
    const isChecked = li.classList.contains("checked");

    li.innerHTML = inputBox.value;

    // Retain the 'checked' style if the task was completed
    if (isChecked) {
      li.classList.add("checked");
    }

    // Add the close button back
    const span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);

    // Exit edit mode
    editMode = null;
  } else {
    // Add a new task
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }

  inputBox.value = ""; // Clear the input box
  saveTasks(); // Save changes
}

// add task when enter key is pressed
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addOrUpdateTask();
  }
});

// replace the addTask function with addOrUpdateTask
document.querySelector(".task-input button").onclick = addOrUpdateTask;

// edit tasks by using inputBox
listContainer.addEventListener(
  "dblclick",
  function (e) {
    if (e.target.tagName === "LI") {
      const li = e.target;

      // Store reference to the task being edited
      editMode = li;

      // Move the task text to the inputBox
      const taskText = li.textContent.replace("\u00D7", "").trim();
      inputBox.value = taskText;
      inputBox.focus();
    }
  },
  false
);

// remove task
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveTasks();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveTasks();
    }
  },
  false
);

// save tasks when browser is refreshed
function saveTasks() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function loadTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}
loadTasks();
