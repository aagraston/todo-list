const HtmlTaskForm = () => {

  const createForm = _ => {
    let retDiv = document.createElement('div');
    retDiv.classList.add('task-container');
    retDiv.setAttribute('id', 'taskForm');

    let textInput = document.createElement('input');
    textInput.type = "text";
    textInput.setAttribute('id', 'title');

    let dueDate = document.createElement('input');
    dueDate.type = "date";
    dueDate.setAttribute('id', 'date');

    let prioritySelect = document.createElement('select');
    prioritySelect.setAttribute('id', 'priority');

    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');

    option1.innerText = 'low';
    option2.innerText = 'medium';
    option3.innerText = 'high';


    option1.setAttribute('value', 'low');
    option2.setAttribute('value', 'medium');
    option3.setAttribute('value', 'high');

    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);

    let enterButton = document.createElement('button');
    enterButton.setAttribute('id', 'enter');
    enterButton.innerText = 'enter';

    retDiv.appendChild(textInput);
    retDiv.appendChild(dueDate);
    retDiv.appendChild(prioritySelect);
    retDiv.appendChild(enterButton);

    return retDiv;
  };

  const getFormInfo = _ => {
    let titleElement = document.querySelector('#title');
    let title = titleElement.value.toString();

    let dateElement = document.querySelector('#date');
    let date = dateElement.value;

    let priorityElement = document.querySelector('#priority');
    let priority = priorityElement.value;

    return { title, date, priority };
  }

  return { createForm, getFormInfo };
};

export default HtmlTaskForm;