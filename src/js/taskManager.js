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

  const updateTask = (taskID, contactPoint, newStatus) => {

    let found = false;

    tasks.forEach(element => {
      if (element.getID() === taskID) {
        
        found = true;

        switch (contactPoint) {
          case 'completion':
            element.setCompleted(newStatus);
            break;
          case 'date':
            element.setDueDate(newStatus);
            break;
          case 'priority':
            element.setPriority(newStatus);
            break;
        }

      }
    });

    if (!found) {
      window.alert('could not find task id for update');
    }
  }

  const removeTask = (taskID) => {
    let elementToRemove = '';
    let index = '';

    tasks.forEach(element => {
      if (taskId === element.getID()) {
        elementToRemove = elmement;
      }
    });

    if (elementToRemove != '') {
      index = tasks.indexOf(elementToRemove);
      tasks.splice(index, 1);
    }


  }

  return { getTasks, createTask, getTaskCount, updateTask, removeTask };
};

export default taskManagerFactory;