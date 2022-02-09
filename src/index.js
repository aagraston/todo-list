import './scss/app.scss'
import ProjectManager from './js/projectManager';
import HTMLUpdater from './js/htmlUpdater';

const testProj = ProjectManager();
const htmlUpdater = HTMLUpdater();

testProj.createProject('initial project');
testProj.getCurrentFocus().createNewTask('This one has a title');
testProj.getCurrentFocus().createNewTask('This one has one too!');

htmlUpdater.clearTaskList();
htmlUpdater.updateTaskList(testProj.getCurrentFocus().getTasks());




