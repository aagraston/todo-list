const HtmlProjectForm = () => {

  const createForm = _ => {
    let retDiv = document.createElement('div');
    retDiv.classList.add('project-container');

    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.setAttribute('id', 'project-title');

    let enterButton = document.createElement('button');
    enterButton.setAttribute('id', 'enter');
    enterButton.innerText = 'enter';

    retDiv.appendChild(titleInput);
    retDiv.appendChild(enterButton);

    return retDiv;
  };

  const getFormInfo = _ => {
    let projectTitleElement = document.querySelector('#project-title');
    let projectTitle = projectTitleElement.value;
    return projectTitle;
  };

  return { createForm, getFormInfo };
};

export default HtmlProjectForm;