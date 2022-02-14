import Task from './task'

const taskManagerFactory = () => {
  const tasks = []
  let index = 0

  const getTasks = () => tasks
  const getTaskCount = () => tasks.length

  const createTask = (taskTitle, dueDate, priority) => {
    const task = Task(taskTitle, dueDate, priority)
    tasks.push(task)
    task.setID(index)
    index += 1
  }

  const updateTask = (taskID, contactPoint, newStatus) => {
    let found = false

    tasks.forEach((element) => {
      console.log(element.getID(), taskID)
      if (element.getID() === taskID) {
        found = true

        switch (contactPoint) {
          case 'completion':
            element.setCompleted(newStatus)
            break
          case 'date':
            element.setDueDate(newStatus)
            break
          case 'priority':
            element.setPriority(newStatus)
            break
        }
      }
    })

    if (!found) {
      window.alert('could not find task id for update')
    }
  }

  const getNumCheckedTasks = () => {
    let retNum = 0

    tasks.forEach((element) => {
      if (element.getCompleted()) {
        retNum += 1
      }
    })

    return retNum
  }

  const removeTask = (taskID) => {
    let elementToRemove = ''
    let index = ''

    tasks.forEach((element) => {
      if (taskID === element.getID()) {
        elementToRemove = element
      }
    })

    if (elementToRemove !== '') {
      index = tasks.indexOf(elementToRemove)
      tasks.splice(index, 1)
    }
  }

  return {
    getTasks,
    createTask,
    getTaskCount,
    updateTask,
    removeTask,
    getNumCheckedTasks,
  }
}

export default taskManagerFactory
