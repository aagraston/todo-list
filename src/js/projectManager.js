import Project from './project';

const projectManagerFactory = () => {

  let projects = [];
  let currentFocus = '';
  let index = 0;

  const getProjects = _ => projects;

  const createProject = (projectTitle) => {
    let p = Project(projectTitle);
    projects.push(p);
    p.setID(index);
    setFocus(p.getID());
    index++;
  };

  const setFocus = (projectID) => {
    projects.forEach(element => {
      if (element.getID() === projectID) {
        element.setFocus(true);
        currentFocus = element;
      }
    });
  };

  const removeProject = (projectID) => {
    projectToRemove = '';
    index = '';

    projects.forEach(element => {
      if (element.getID() === projectID) {
        projectToRemove = element;
        index = projects.indexOf(element);
      }
    });

    if (projectToRemove != '') {
      projects.splice(index, 1);
    }
    else {
      window.alert('project not found');
    }
  };

  const getCurrentFocus = _ => currentFocus;

  return { getProjects, createProject, getCurrentFocus, removeProject };
};

export default projectManagerFactory;