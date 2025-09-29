import SkillCard from "./SkillCard.jsx";

export default function SkillsSection({ skills }) {
  return (
    <section>
      <h2 style={{ margin: "1rem 0" }}>Minhas Habilidades</h2>
      <div
        style={{
          border: "1px solid #ccc",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "1rem",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          backgroundColor: "rgba(249, 249, 249, 0.35)",
        }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </section>
  );
}
