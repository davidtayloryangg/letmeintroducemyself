const ProjectList = ({ projects }) => (
  <div className="project-list">
    <ul className="menu vertical">
      {projects.map((project, i) => (
        <ProjectListItem
          key={"project-" + i}
          id={project.acf.id}
          slug={project.acf.slug}
          project_byline={project.acf.project_byline}
        />
      ))}
    </ul>
  </div>
);
const ProjectListItem = ({ project_byline, project_client, slug, id }) => (
  <li key={"project-" + id}>
    <a to={"/projects/" + slug}>
      <h3 className="projectlist--client">{project_byline}</h3>
      <h4 className="projectlist--byline">{project_client}</h4>
    </a>
  </li>
);

export default ProjectList;
