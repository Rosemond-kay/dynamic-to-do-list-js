// Run script after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // Validate the input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item (li)
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, remove the task item
        removeBtn.onclick = function () {
            taskList.removeChild(taskItem);
        };

        // Append remove button to the task item
        taskItem.appendChild(removeBtn);

        // Append task item to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener for add button
    addButton.addEventListener('click', addTask);

    // Add event listener for "Enter" key on input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: Automatically focus the input field when page loads
    taskInput.focus();
});
