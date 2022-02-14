const HtmlTaskForm = () => {
  const createForm = () => {
    const retDiv = document.createElement('div')
    retDiv.classList.add('task-container')
    retDiv.setAttribute('id', 'taskForm')

    const textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.setAttribute('id', 'title')

    const dueDate = document.createElement('input')
    dueDate.type = 'date'
    dueDate.setAttribute('id', 'date')

    const prioritySelect = document.createElement('select')
    prioritySelect.setAttribute('id', 'priority')

    const option1 = document.createElement('option')
    const option2 = document.createElement('option')
    const option3 = document.createElement('option')

    option1.innerText = 'low'
    option2.innerText = 'medium'
    option3.innerText = 'high'

    option1.setAttribute('value', 'low')
    option2.setAttribute('value', 'medium')
    option3.setAttribute('value', 'high')

    prioritySelect.appendChild(option1)
    prioritySelect.appendChild(option2)
    prioritySelect.appendChild(option3)

    const enterButton = document.createElement('button')
    enterButton.setAttribute('id', 'enter')
    enterButton.innerText = 'enter'

    retDiv.appendChild(textInput)
    retDiv.appendChild(dueDate)
    retDiv.appendChild(prioritySelect)
    retDiv.appendChild(enterButton)

    return retDiv
  }

  const getFormInfo = () => {
    const titleElement = document.querySelector('#title')
    const title = titleElement.value.toString()

    const dateElement = document.querySelector('#date')
    const date = dateElement.value

    const priorityElement = document.querySelector('#priority')
    const priority = priorityElement.value

    return { title, date, priority }
  }

  return { createForm, getFormInfo }
}

export default HtmlTaskForm
