import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsSection({ projects }) {
  return (
    <section>
      <h2 style={{ margin: "1rem 0" }}>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
