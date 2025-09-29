import Header from "./features/Header.jsx";
import ProfileCard from "./features/ProfileCard.jsx";
import avatarImg from "./assets/foto-perfil-lucca.png";
import SkillsSection from "./features/SkillsSection.jsx";
import Testimonial from "./features/Testimonial.jsx";
import ProjectsSection from "./features/ProjectsSection.jsx";

function App() {
  return (
    <>
      <div className="app-container">
        <Header>
          <h1 style={{ margin: "1rem 0" }}>
            Assessment de Mobile-first UI com React
          </h1>
        </Header>
        <main className="main-container">
          <ProfileCard name="Lucca Santos" avatar={avatarImg}>
            Por enquanto, apenas sobrevivendo à rotina de trabalho + estudos
          </ProfileCard>
          <SkillsSection
            skills={[
              { name: "HTML", level: "Básico" },
              { name: "CSS", level: "Básico" },
              { name: "JavaScript", level: "Básico" },
              { name: "React", level: "Básico" },
            ]}
          />
          <Testimonial>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            hic eligendi dolor quis deleniti porro veritatis blanditiis odit
            dignissimos doloremque ea, vel dolore numquam ducimus iste harum
            ipsum placeat assumenda!
          </Testimonial>
          <ProjectsSection
            projects={[
              {
                title: "Fundamentos de React - AT",
                description: "Assessment da disciplina de Fundamentos de React",
                link: "https://github.com/LuccaPCS/Fundamentos-React-I-AT",
              },
              {
                title: "React Lab",
                description: "Laboratório educativo prático de React",
                link: "https://github.com/LuccaPCS/React-Lab",
              },
              {
                title: "HTML e CSS Lab",
                description:
                  "Laboratório educativo prático de HTML e CSS (Vanilla)",
                link: "https://github.com/LuccaPCS/HTML-CSS-Lab",
              },
              {
                title: "MindCare",
                description:
                  "Plataforma de saúde mental, conectando pacientes e terapeutas",
                link: "https://github.com/LuccaPCS/MindCare",
              },
            ]}
          />
        </main>
      </div>
    </>
  );
}

export default App;
