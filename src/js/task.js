const taskFactory = (taskTitle) => {

  let taskPriority = 'low';
  let completed = false;
  let dueDate = new Date();

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

  return { getTitle, getPriority, getDueDate, setPriority, setCompleted, setDueDate };
};

export default taskFactory;




