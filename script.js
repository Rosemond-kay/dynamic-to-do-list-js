document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when the page loads
    loadTasks();

    // Add task on button click
    addButton.addEventListener('click', () => addTask(taskInput.value.trim(), true));

    // Add task on Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim(), true);
        }
    });

    // Load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save again while loading
    }

    // Add a new task to the DOM and optionally Local Storage
    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        // Handle task removal
        removeBtn.onclick = function () {
            taskList.removeChild(taskItem);
            removeTaskFromStorage(taskText);
        };

        // Append button and task to list
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);

        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = '';
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
});
