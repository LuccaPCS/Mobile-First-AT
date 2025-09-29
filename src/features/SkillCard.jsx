import style from "./SkillCard.module.css";

export default function SkillCard({ skill, level }) {
  return (
    <div className={style["skill-card"]}>
      <h3>{skill}</h3>
      <p>Nível: {level}</p>
    </div>
  );
}
