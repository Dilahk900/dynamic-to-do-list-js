/*function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});

// fetch tasks
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = ne pas re-sauvegarder
}

// Add task function
function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');

    // element creation
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';

    // add event to delete task
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        removeTask(taskText);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save storage
    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Delete
function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-task-btn');
    const input = document.getElementById('task-input');

    loadTasks(); // loading saved tasks

    addBtn.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = ''; // input reset
        }
    });

    // Enter button
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });
});*/

// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get and trim the input value
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item (li) for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When remove button is clicked, remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Add the remove button to the list item
    li.appendChild(removeBtn);

    // Add the task to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for the Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing Enter key in input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});