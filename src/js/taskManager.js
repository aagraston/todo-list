import Task from './task';

const taskManagerFactory = _ => {

  let tasks = [];

  const getTasks = _ => tasks;
  const getTaskCount = _ => {
    return tasks.length;
  }

  const createTask = (taskTitle) => {
    const task = Task(taskTitle);
    tasks.push(task);
    task.setID(tasks.indexOf(task));
  }

  return { getTasks, createTask, getTaskCount };
};

export default taskManagerFactory;