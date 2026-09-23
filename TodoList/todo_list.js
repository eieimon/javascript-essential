const taskInput = document.getElementById('taskInput');

const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllTasksdBtn = document.getElementById('clearAllTasksdBtn');
clearAllTasksdBtn.disabled = true;
clearCompletedBtn.disabled = true;

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        const hasHighlightClass = taskInput.classList.contains('highlight');
        if(hasHighlightClass) {
            taskInput.classList.remove('highlight');
        }

        tasks.push({text: taskText});
        taskInput.value = "";
        resetBtn(false);
        displayTasks();
    } else {
        taskInput.classList.add('highlight');
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    })
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks() {
    tasks = [];
    resetBtn(true);
    displayTasks();
}

function resetBtn(status) {
    clearAllTasksdBtn.disabled = status;
    clearCompletedBtn.disabled = status;
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllTasksdBtn.addEventListener("click", clearAllTasks);

displayTasks();