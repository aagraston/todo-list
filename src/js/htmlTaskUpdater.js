const HtmlTaskUpdater = () => {

  const buildTasks = (taskArray) => {

    let returnDiv = document.createElement('div');

    taskArray.forEach(element => {

      //task container
      let taskDiv = document.createElement('div');
      taskDiv.classList.add('task-container');
      taskDiv.setAttribute('id', element.getID());

      //task details container
      let detailsDiv = document.createElement('div');
      detailsDiv.classList.add('task-details');

      //checkbox
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('checkbox');
      checkbox.checked = element.getCompleted();

      //title
      let title = document.createElement('h3');
      title.innerText = element.getTitle();

      //append details
      detailsDiv.appendChild(checkbox);
      detailsDiv.appendChild(title);

      //date
      let date = document.createElement('p');
      date.innerText = element.getDueDate();

      //svg
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute('height', 20);
      svg.setAttribute('width', 20);

      let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      
      circle.setAttribute('cx', 10);
      circle.setAttribute('cy', 10);
      circle.setAttribute('r', 10);
      circle.setAttribute('fill', element.getPriorityColor());

      svg.appendChild(circle);

      //removeButton
      let remove = document.createElement('p');
      remove.classList.add('symbol', 'removal');
      remove.innerText = '-';

      //appending
      taskDiv.appendChild(detailsDiv);
      taskDiv.appendChild(date);
      taskDiv.appendChild(svg);
      taskDiv.appendChild(remove);


      returnDiv.appendChild(taskDiv);
    });

    return returnDiv;

  };

  return { buildTasks };
};

export default HtmlTaskUpdater;