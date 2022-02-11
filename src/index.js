import './scss/app.scss'
import ProjectManager from './js/projectManager';
import HTMLUpdater from './js/htmlUpdater';

//init manager and html updater
const projManager = ProjectManager();
const htmlUpdater = HTMLUpdater();

//init buttons
const newTaskButton = document.querySelector('.new-task-button');
const newProjectButton = document.querySelector('.new-project-button');

newTaskButton.addEventListener('click', createNewTask);
newProjectButton.addEventListener('click', createNewProject);

projManager.createProject('initial project');

updateProjectHtml();

//begin creating projects or tasks
function createNewProject() {
  //create project form
  htmlUpdater.createProjectForm();
  newTaskButton.removeEventListener('click', createNewTask);
  newProjectButton.removeEventListener('click', createNewProject);

  let enterButton = document.querySelector('#enter');
  enterButton.addEventListener('click', addProjectToList);
}

//creates a new task in the currently focused project
function createNewTask() {
  //produces task form in html to be filled
  htmlUpdater.createTaskForm();
  //no longer accept new task generation until this one is submitted
  newTaskButton.removeEventListener('click', createNewTask);
  newProjectButton.removeEventListener('click', createNewProject);
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
  updateTaskHtml();

  newTaskButton.addEventListener('click', createNewTask);
  newProjectButton.addEventListener('click', createNewProject);
  //listen for task removal on newly created html

  taskListeners();
  updateProjectHtml();
}

function addProjectToList() {
  let formInfo = htmlUpdater.getProjectTitle();

  projManager.createProject(formInfo);
  
  updateTaskHtml();
  updateProjectHtml();

  newTaskButton.addEventListener('click', createNewTask);
  newProjectButton.addEventListener('click', createNewProject);

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

function updateProjectHtml() {
  htmlUpdater.clearProjList();
  htmlUpdater.updateProjectList(projManager.getProjects());
  listenForProjectFocus();
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

function listenForProjectFocus() {
  let projects = document.querySelectorAll('.project-container');

  projects.forEach(element => {
    element.addEventListener('click', setProjectFocus);
  });
}

function setProjectFocus() {
  projManager.setFocus(this.getAttribute('id'));
  updateProjectHtml()
  updateTaskHtml();
  taskListeners();
}

//update a task
function updateThisTask() {
  projManager.getCurrentFocus().updateTask(this.parentNode.parentNode.getAttribute('id'), 'completion', this.checked);
  updateTaskHtml();
  updateProjectHtml();
}

//remove a task

function removeThisTask() {
  projManager.getCurrentFocus().removeTask(this.parentNode.getAttribute('id'));
  updateTaskHtml();
  updateProjectHtml();
}


