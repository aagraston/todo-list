const taskFactory = (taskTitle, dueDate, priority) => {
  let taskID = ''
  let taskPriority = priority
  let completed = false
  let dateDue = dueDate

  const getID = () => taskID
  const getTitle = () => taskTitle
  const getPriority = () => taskPriority
  const getDueDate = () => dateDue
  const getCompleted = () => completed

  const setPriority = (priorityArg) => {
    taskPriority = priorityArg
  }

  const setCompleted = (status) => {
    completed = status
  }

  const setDueDate = (date) => {
    dateDue = date
  }

  const setID = (id) => {
    taskID = `T${id}`
  }

  const getPriorityColor = () => {
    switch (taskPriority) {
      case 'low':
        return '#31e981'

      case 'medium':
        return '#ffd151'

      case 'high':
        return '#db3a34'

      default:
        return null
    }
  }

  return {
    getTitle,
    getPriority,
    getCompleted,
    getDueDate,
    setPriority,
    setCompleted,
    setDueDate,
    getID,
    setID,
    getPriorityColor,
  }
}

export default taskFactory
