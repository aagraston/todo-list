import TaskManager from './taskManager'

const projectFactory = (projTitle) => {
  let projID = ''
  let isFocused = false

  const title = projTitle
  const taskManager = TaskManager()

  const getID = () => projID

  const getTitle = () => title

  const getNumTasks = () => taskManager.getTaskCount()

  const getNumCheckedTasks = () => taskManager.getNumCheckedTasks()

  const getTasks = () => taskManager.getTasks()

  const setFocus = (focusValue) => {
    isFocused = focusValue
  }

  const createNewTask = (taskTitle, dueDate, priority) => {
    taskManager.createTask(taskTitle, dueDate, priority)
  }

  const updateTask = (taskID, contactPoint, info) => {
    taskManager.updateTask(taskID, contactPoint, info)
  }

  const removeTask = (taskID) => {
    taskManager.removeTask(taskID)
  }

  const setID = (id) => {
    projID = `P${id}`
  }

  return {
    getTitle,
    getNumTasks,
    getTasks,
    createNewTask,
    getID,
    setID,
    updateTask,
    removeTask,
    setFocus,
    getNumCheckedTasks,
  }
}

export default projectFactory
