import './scss/app.scss'
import ProjectManager from './js/projectManager';
import HTMLUpdater from './js/htmlUpdater';

//init manager and html updater
const testProj = ProjectManager();
const htmlUpdater = HTMLUpdater();

//init buttons
const newTaskButton = document.querySelector('.new-task-button');

newTaskButton.addEventListener('click', createNewTask);

testProj.createProject('initial project');


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
  testProj.getCurrentFocus().createNewTask(formInfo.title, formInfo.date, formInfo.priority);
  //remove the form html
  htmlUpdater.removeTaskForm();
  //clear the html of the task list
  htmlUpdater.clearTaskList();
  //update the task list with new html
  htmlUpdater.updateTaskList(testProj.getCurrentFocus().getTasks());
  //listen for additional task creation again
  newTaskButton.addEventListener('click', createNewTask);
  //listen for task removal on newly created html

  listenForTaskRemoval();
}

function listenForTaskRemoval() {
  let removalButtons = document.querySelectorAll('.removal');

  removalButtons.forEach(element => {
    element.addEventListener('click', removeThisTask);
  });
}

function removeThisTask() {
  testProj.getCurrentFocus().removeTask(this.parentNode.getAttribute('id'));
  htmlUpdater.clearTaskList();
  htmlUpdater.updateTaskList(testProj.getCurrentFocus().getTasks());
  listenForTaskRemoval();
}


