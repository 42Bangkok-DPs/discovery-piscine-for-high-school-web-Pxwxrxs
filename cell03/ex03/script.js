document.addEventListener('DOMContentLoaded', () => {
    const ftList = document.getElementById('ft_list');
    const newBtn = document.getElementById('newBtn');

    // Load tasks from cookies
    loadTasks();

    // Add event listener to the New button
    newBtn.addEventListener('click', () => {
        const task = prompt("Enter a new TO DO:");
        if (task) {
            addTask(task);
            saveTasks();
        }
    });

    // Function to add a task
    function addTask(task) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'todo';
        taskDiv.textContent = task;

        // Add event listener to remove task on click
        taskDiv.addEventListener('click', () => {
            if (confirm("Do you really want to remove this TO DO?")) {
                ftList.removeChild(taskDiv);
                saveTasks();
            }
        });

        // Prepend task to the list
        ftList.prepend(taskDiv);
    }

    // Function to save tasks in cookies
    function saveTasks() {
        const tasks = [...ftList.children].map(div => div.textContent);
        document.cookie = "tasks=" + JSON.stringify(tasks) + ";path=/";
    }

    // Function to load tasks from cookies
    function loadTasks() {
        const cookieArr = document.cookie.split('; ');
        const tasksCookie = cookieArr.find(row => row.startsWith('tasks='));

        if (tasksCookie) {
            const tasks = JSON.parse(tasksCookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
        }
    }
});
