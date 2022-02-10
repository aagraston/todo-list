import ProjectUpdater from './htmlProjectUpdater';
import TaskUpdater from './htmlTaskUpdater';
import TaskForm from './htmlTaskForm';

const HtmlUpdater = () => {

  const taskUpdater = TaskUpdater();
  const taskForm = TaskForm();
  const taskContainer = document.querySelector('.tasks');

  const clearTaskList = _ => {
    taskContainer.innerHTML = '';
  }

  const updateTaskList = (listOfTasks) => {
    taskContainer.appendChild(taskUpdater.buildTasks(listOfTasks));
  }

  const createTaskForm = _ => {
    let form = taskForm.createForm();
    taskContainer.appendChild(form);
    let titleInput = document.querySelector('#title');
    titleInput.focus();
  }

  const getFormInfo = _ => {
    return taskForm.getFormInfo();
  }

  const removeTaskForm = _ => {
    let form = document.querySelector('#taskForm');
    form. parentNode. removeChild(form);
  }

  return { clearTaskList, updateTaskList, createTaskForm, removeTaskForm, getFormInfo }

};

export default HtmlUpdater;