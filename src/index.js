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
  let title = window.prompt('Please enter a task title');
  
  testProj.getCurrentFocus().createNewTask(title);
  htmlUpdater.clearTaskList();
  htmlUpdater.updateTaskList(testProj.getCurrentFocus().getTasks());
}




