const taskFactory = (taskTitle, dueDate, priority) => {

  let taskID = '';
  let taskPriority = priority;
  let completed = false;

  const getID = _ => taskID;
  const getTitle = _ => taskTitle;
  const getPriority = _ => taskPriority;
  const getDueDate = _ => dueDate;

  const setPriority = (priority) => {
    taskPriority = priority;
  }

  const setCompleted = (status) => {
    completed = status;
  }

  const setDueDate = (date) => {
    dueDate = date;
  }

  const setID = (id) => {
    taskID = `T${id}`;
  }

  const getPriorityColor = _ => {
    switch (taskPriority) {
      case 'low':
        return '#31e981'
        break;

      case 'medium':
        return '#ffd151'
        break;

      case 'high':
        return '#db3a34'
        break;
    }
  }

  return { getTitle, getPriority, getDueDate, setPriority, setCompleted, setDueDate, getID, setID, getPriorityColor };
};

export default taskFactory;




