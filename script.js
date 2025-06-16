document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-task-btn');
  const input = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  loadTasks();

  addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      input.value = '';
    } else {
      alert('Please enter a task.');
    }
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item'); // Ajout demandé pour styliser les tâches

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn'); // Ajout demandé

    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
      removeTaskFromStorage(taskText);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  function removeTaskFromStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }
});