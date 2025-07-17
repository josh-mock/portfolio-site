import Footer from "../../components/Footer/Footer";
import ProjectCard from "./ProjectCard";
import "./Work.css";
import projects from "../../data/projects/index";

export default function Work() {
  return (
    <>
      <section className="work container section">
        <h1 className="work__title">Projects</h1>
        <p className="work__description">
          Here, you'll find a curated collection of projects that highlight my
          skills in <strong>development</strong>,{" "}
          <strong>problem-solving</strong>, and <strong>innovation</strong>.
          Each project reflects my commitment to <strong>clean code</strong>,{" "}
          <strong>efficient solutions</strong>, and{" "}
          <strong>continuous learning</strong>.
        </p>
        <p className="work__description">
          Explore my work to see how I turn ideas into{" "}
          <strong>functional</strong>, <strong>elegant software</strong>.
        </p>
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
