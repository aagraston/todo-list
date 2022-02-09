const taskFactory = (taskTitle) => {

  let taskID = '';
  let taskPriority = 'low';
  let completed = false;
  let dueDate = new Date();

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

  return { getTitle, getPriority, getDueDate, setPriority, setCompleted, setDueDate, getID, setID };
};

export default taskFactory;




