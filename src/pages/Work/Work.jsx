import Footer from "../../components/Footer/Footer";
import ProjectCard from "./ProjectCard";
import "./Work.css";
import projects from "../../data/projects/index";
import work from "../../data/work.json";

export default function Work() {
  return (
    <>
      <section className="work container section">
        <h1 className="work__title">{work.title}</h1>
        {work.copy.map((p, i) => {
          return (
            <p
              className="work__description"
              key={i}
              dangerouslySetInnerHTML={{ __html: p }}
            ></p>
          );
        })}
        <div className="work__container">
          {Object.values(projects).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
