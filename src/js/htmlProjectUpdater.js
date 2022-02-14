const HtmlProjectUpdater = () => {
  const buildProjects = (projArray) => {
    const retDiv = document.createElement('div')

    projArray.forEach((element) => {
      const projDiv = document.createElement('div')
      projDiv.classList.add('project-container')
      projDiv.setAttribute('id', element.getID())

      const projDetailsDiv = document.createElement('div')
      projDetailsDiv.classList.add('project-details')

      const projTitle = document.createElement('h3')
      projTitle.innerText = element.getTitle()

      // calculate number of checked off tasks
      const numberCheckedTasks = element.getNumCheckedTasks()
      const totalTasks = element.getNumTasks()

      const checkedTasksString = `${numberCheckedTasks}/${totalTasks}`

      const checkedTasks = document.createElement('p')
      checkedTasks.innerText = checkedTasksString

      // append to details section
      projDetailsDiv.appendChild(projTitle)
      projDetailsDiv.appendChild(checkedTasks)

      // create removal button
      const removal = document.createElement('p')
      removal.classList.add('symbol', 'proj-removal')
      removal.innerText = '-'

      // append all
      projDiv.appendChild(projDetailsDiv)
      projDiv.appendChild(removal)

      // append to return div
      retDiv.appendChild(projDiv)
    })

    return retDiv
  }
  return { buildProjects }
}

export default HtmlProjectUpdater
