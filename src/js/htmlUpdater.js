import ProjectUpdater from './htmlProjectUpdater';
import TaskUpdater from './htmlTaskUpdater';
import TaskForm from './htmlTaskForm';
import HtmlProjectForm from './htmlProjectForm';

const HtmlUpdater = () => {

  //project related instantiation
  const projUpdater = ProjectUpdater();
  const projContainer = document.querySelector('.projects');
  const projForm = HtmlProjectForm();


  //task related instantiation
  const taskUpdater = TaskUpdater();
  const taskForm = TaskForm();
  const taskContainer = document.querySelector('.tasks');

  const clearTaskList = _ => {
    taskContainer.innerHTML = '';
  };

  const clearProjList = _ => {
    projContainer.innerHTML = '';
  };

  const updateTaskList = (listOfTasks) => {
    taskContainer.appendChild(taskUpdater.buildTasks(listOfTasks));
  };

  const updateProjectList = (listOfProjects) => {
    projContainer.appendChild(projUpdater.buildProjects(listOfProjects));
  };

  const createTaskForm = _ => {
    let form = taskForm.createForm();
    taskContainer.appendChild(form);
    let titleInput = document.querySelector('#title');
    titleInput.focus();
  };

  const createProjectForm = _ => {
    let form = projForm.createForm();
    projContainer.appendChild(form);
    let titleInput = document.querySelector('#project-title');
    titleInput.focus();
  };

  const getFormInfo = _ => {
    return taskForm.getFormInfo();
  };

  const getProjectTitle = _ => {
    return projForm.getFormInfo();
  };

  const removeTaskForm = _ => {
    let form = document.querySelector('#taskForm');
    form. parentNode. removeChild(form);
  };

  return { clearTaskList, updateTaskList, createTaskForm, createProjectForm, removeTaskForm, getFormInfo, clearProjList, updateProjectList, getProjectTitle }

};

export default HtmlUpdater;