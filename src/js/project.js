import TaskManager from './taskManager';

const projectFactory = (projTitle) => {

  const title = projTitle;
  const taskManager = TaskManager();

  const getTitle = _ => title;
  const getNumTasks = _ => {
    return taskManager.getTaskCount();
  };

  const createNewTask = (taskTitle) => {
    taskManager.createTask(taskTitle);
  };





  return { getTitle, getNumTasks, createNewTask };
};

export default projectFactory;