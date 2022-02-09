import Project from './project';

const projectManagerFactory = () => {

  let projects = [];

  const getProjects = _ => projects;

  const createProject = (projectTitle) => {
    let p = Project(projectTitle);
    projects.push(p);
    p.setID(projects.indexOf(p));
  }

  return { getProjects, createProject };
};

export default projectManagerFactory;