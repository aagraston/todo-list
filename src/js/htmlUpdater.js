import ProjectUpdater from './htmlProjectUpdater';
import TaskUpdater from './htmlTaskUpdater';

const HtmlUpdater = () => {

  const taskUpdater = TaskUpdater();
  const taskContainer = document.querySelector('.tasks');

  const clearTaskList = _ => {
    taskContainer.innerHTML = '';
  }

  const updateTaskList = (listOfTasks) => {

    taskContainer.appendChild(taskUpdater.buildTasks(listOfTasks));

  }

  return { clearTaskList, updateTaskList }

};

export default HtmlUpdater;