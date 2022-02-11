import TaskManager from './taskManager';

const projectFactory = (projTitle) => {

  let projID = '';
  let isFocused = false;

  const title = projTitle;
  const taskManager = TaskManager();


  const getID = _ => {
    return projID;
  };

  const getTitle = _ => title;

  const getNumTasks = _ => {
    return taskManager.getTaskCount();
  };

  const getNumCheckedTasks = _ => {
    return taskManager.getNumCheckedTasks();
  };
  
  const getTasks = _ => {
    return taskManager.getTasks();
  };

  const setFocus = (focusValue) => {
    isFocused = focusValue;
  };

  const createNewTask = (taskTitle, dueDate, priority) => {
    taskManager.createTask(taskTitle, dueDate, priority);
  };

  const updateTask = (taskID, contactPoint, info) => {
    taskManager.updateTask(taskID, contactPoint, info);
  };

  const removeTask = (taskID) => {
    taskManager.removeTask(taskID);
  };

  const setID = (id) => {
    projID = `P${id}`;
  };

  return { getTitle, getNumTasks, getTasks, createNewTask, setID, getID, updateTask, removeTask, setFocus, getNumCheckedTasks };
};

export default projectFactory;