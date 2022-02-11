const HtmlProjectUpdater = () => {

  const buildProjects = (projArray) => {

    let retDiv = document.createElement('div');

    projArray.forEach(element => {
      let projDiv = document.createElement('div');
      projDiv.classList.add('project-container');

      let projDetailsDiv = document.createElement('div');
      projDetailsDiv.classList.add('project-details');

      let projTitle = document.createElement('h3');
      projTitle.innerText = element.getTitle();

      //calculate number of checked off tasks
      let numberCheckedTasks = element.getNumCheckedTasks();
      let totalTasks = element.getNumTasks();

      let checkedTasksString = numberCheckedTasks + '/' + totalTasks;

      let checkedTasks = document.createElement('p');
      checkedTasks.innerText = checkedTasksString;

      //append to details section
      projDetailsDiv.appendChild(projTitle);
      projDetailsDiv.appendChild(checkedTasks);

      //create removal button 
      let removal = document.createElement('p');
      removal.classList.add('symbol', 'proj-removal');
      removal.innerText = '-';

      //append all
      projDiv.appendChild(projDetailsDiv);
      projDiv.appendChild(removal);

      //append to return div
      retDiv.appendChild(projDiv);
    });

    return retDiv;
  };
  return { buildProjects };
};

export default HtmlProjectUpdater;