import Project from './project'

const projectManagerFactory = () => {
  const projects = []
  let currentFocus = ''
  let index = 0

  const getProjects = () => projects

  const setFocus = (projectID) => {
    projects.forEach((element) => {
      if (element.getID() === projectID) {
        element.setFocus(true)
        currentFocus = element
      }
    })
  }

  const createProject = (projectTitle) => {
    const p = Project(projectTitle)
    projects.push(p)
    p.setID(index)
    setFocus(p.getID())
    index += 1
  }

  const removeProject = (projectID) => {
    let projectToRemove = ''
    let index = ''

    projects.forEach((element) => {
      if (element.getID() === projectID) {
        projectToRemove = element
        index = projects.indexOf(element)
      }
    })

    if (projectToRemove !== '') {
      projects.splice(index, 1)
    } else {
      window.alert('project not found')
    }
  }

  const getCurrentFocus = () => currentFocus

  return {
    getProjects,
    createProject,
    getCurrentFocus,
    removeProject,
    setFocus,
  }
}

export default projectManagerFactory
