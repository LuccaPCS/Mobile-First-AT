import style from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className={style["project-card"]}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
}
