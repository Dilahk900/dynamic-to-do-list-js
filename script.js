function loadTasks() {
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
});