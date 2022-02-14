import ProjectUpdater from './htmlProjectUpdater'
import TaskUpdater from './htmlTaskUpdater'
import TaskForm from './htmlTaskForm'
import HtmlProjectForm from './htmlProjectForm'

const HtmlUpdater = () => {
  // project related instantiation
  const projUpdater = ProjectUpdater()
  const projContainer = document.querySelector('.projects')
  const projForm = HtmlProjectForm()

  // task related instantiation
  const taskUpdater = TaskUpdater()
  const taskForm = TaskForm()
  const taskContainer = document.querySelector('.tasks')

  const clearTaskList = () => {
    taskContainer.innerHTML = ''
  }

  const clearProjList = () => {
    projContainer.innerHTML = ''
  }

  const updateTaskList = (listOfTasks) => {
    taskContainer.appendChild(taskUpdater.buildTasks(listOfTasks))
  }

  const updateProjectList = (listOfProjects) => {
    projContainer.appendChild(projUpdater.buildProjects(listOfProjects))
  }

  const createTaskForm = () => {
    const form = taskForm.createForm()
    taskContainer.appendChild(form)
    const titleInput = document.querySelector('#title')
    titleInput.focus()
  }

  const createProjectForm = () => {
    const form = projForm.createForm()
    projContainer.appendChild(form)
    const titleInput = document.querySelector('#project-title')
    titleInput.focus()
  }

  const getFormInfo = () => taskForm.getFormInfo()

  const getProjectTitle = () => projForm.getFormInfo()

  const removeTaskForm = () => {
    const form = document.querySelector('#taskForm')
    form.parentNode.removeChild(form)
  }

  return {
    clearTaskList,
    updateTaskList,
    createTaskForm,
    createProjectForm,
    removeTaskForm,
    getFormInfo,
    clearProjList,
    updateProjectList,
    getProjectTitle,
  }
}

export default HtmlUpdater
