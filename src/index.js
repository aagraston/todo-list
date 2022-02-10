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
  htmlUpdater.createTaskForm();
  newTaskButton.removeEventListener('click', createNewTask);
  let enterButton = document.querySelector('#enter');
  enterButton.addEventListener('click', addTaskToList);
}

function addTaskToList() {
  let formInfo = htmlUpdater.getFormInfo();
  testProj.getCurrentFocus().createNewTask(formInfo.title, formInfo.date, formInfo.priority);
  htmlUpdater.removeTaskForm();
  htmlUpdater.clearTaskList();
  htmlUpdater.updateTaskList(testProj.getCurrentFocus().getTasks());
  newTaskButton.addEventListener('click', createNewTask);
}




