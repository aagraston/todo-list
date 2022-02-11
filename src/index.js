import './scss/app.scss'
import ProjectManager from './js/projectManager';
import HTMLUpdater from './js/htmlUpdater';

//init manager and html updater
const projManager = ProjectManager();
const htmlUpdater = HTMLUpdater();

//init buttons
const newTaskButton = document.querySelector('.new-task-button');

newTaskButton.addEventListener('click', createNewTask);

projManager.createProject('initial project');


//tasks


//creates a new task in the currently focused project
function createNewTask() {
  //produces task form in html to be filled
  htmlUpdater.createTaskForm();
  //no longer accept new task generation until this one is submitted
  newTaskButton.removeEventListener('click', createNewTask);
  //listen for form submission
  let enterButton = document.querySelector('#enter');
  enterButton.addEventListener('click', addTaskToList);
}

function addTaskToList() {
  //collect information from form
  let formInfo = htmlUpdater.getFormInfo();
  //create a task in the current project with this information
  projManager.getCurrentFocus().createNewTask(formInfo.title, formInfo.date, formInfo.priority);
  //remove the form html
  htmlUpdater.removeTaskForm();
  //clear the html of the task list
  htmlUpdater.clearTaskList();
  //update the task list with new html
  htmlUpdater.updateTaskList(projManager.getCurrentFocus().getTasks());
  //listen for additional task creation again
  newTaskButton.addEventListener('click', createNewTask);
  //listen for task removal on newly created html

  taskListeners();
}


//Listen to task interactions - deletion and checkbox status

function taskListeners() {
  listenForTaskRemoval();
  listenForTaskUpdate();
}

function updateTaskHtml() {
  htmlUpdater.clearTaskList();
  htmlUpdater.updateTaskList(projManager.getCurrentFocus().getTasks());
  taskListeners();
}

function listenForTaskRemoval() {
  let removalButtons = document.querySelectorAll('.removal');

  removalButtons.forEach(element => {
    element.addEventListener('click', removeThisTask);
  });
}

function listenForTaskUpdate() {
  let checkboxes = document.querySelectorAll('.checkbox');
  
  checkboxes.forEach(element => {
    element.addEventListener('click', updateThisTask);
  });
}

//update a task
function updateThisTask() {
  projManager.getCurrentFocus().updateTask(this.parentNode.parentNode.getAttribute('id'), 'completion', this.checked);
  updateTaskHtml();
}

//remove a task

function removeThisTask() {
  projManager.getCurrentFocus().removeTask(this.parentNode.getAttribute('id'));
  updateTaskHtml();
}


