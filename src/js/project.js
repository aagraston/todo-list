import TaskManager from './taskManager';

const projectFactory = (projTitle) => {

  let projID = '';
  let isFocused = false;

  const title = projTitle;
  const taskManager = TaskManager();


  const getID = _ => {
    return projID;
  }

  const getTitle = _ => title;
  const getNumTasks = _ => {
    return taskManager.getTaskCount();
  };

  const setFocus = (focusValue) => {
    isFocused = focusValue;
  } 

  const createNewTask = (taskTitle) => {
    taskManager.createTask(taskTitle);
  };

  const updateTask = (taskID, contactPoint, info) => {
    taskManager.updateTask(taskID, contactPoint, info);
  };

  const removeTask = (taskID) => {
    taskManager.removeTask(taskID);
  };

  const setID = (id) => {
    projID = `P${id}`;
  }

  return { getTitle, getNumTasks, createNewTask, setID, getID, updateTask, removeTask, setFocus };
};

export default projectFactory;