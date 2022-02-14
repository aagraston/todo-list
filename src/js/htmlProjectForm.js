const HtmlProjectForm = () => {
  const createForm = () => {
    const retDiv = document.createElement('div')
    retDiv.classList.add('project-container')

    const titleInput = document.createElement('input')
    titleInput.type = 'text'
    titleInput.setAttribute('id', 'project-title')

    const enterButton = document.createElement('button')
    enterButton.setAttribute('id', 'enter')
    enterButton.innerText = 'enter'

    retDiv.appendChild(titleInput)
    retDiv.appendChild(enterButton)

    return retDiv
  }

  const getFormInfo = () => {
    const projectTitleElement = document.querySelector('#project-title')
    const projectTitle = projectTitleElement.value
    return projectTitle
  }

  return { createForm, getFormInfo }
}

export default HtmlProjectForm
