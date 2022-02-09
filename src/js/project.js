import TaskManager from './taskManager';

const projectFactory = (projTitle) => {

  let projID = '';
  const title = projTitle;
  const taskManager = TaskManager();

  const getID = _ => {
    return projID;
  }
  const getTitle = _ => title;
  const getNumTasks = _ => {
    return taskManager.getTaskCount();
  };

  const createNewTask = (taskTitle) => {
    taskManager.createTask(taskTitle);
  };

  const setID = (id) => {
    projID = `P${id}`;
  }

  return { getTitle, getNumTasks, createNewTask, setID, getID };
};

export default projectFactory;