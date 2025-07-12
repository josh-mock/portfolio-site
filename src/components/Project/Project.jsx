import DOMPurify from "dompurify";
import GitHubIconLink from "../Links/GitHubIconLink";
import LinkIconLink from "../Links/LinkIconLink";
import "./Project.css";
import ProjectImgs from "./ProjectImgs";
import Techstack from "./Techstack";

export default function Project({ project }) {
  const sanitizedProjectDescription = DOMPurify.sanitize(
    project.projectDescription.html
  );
  return (
    <section className="project container section">
      <h3 className="project__subtitle">{project.subtitle}</h3>
      <div className="project__wrapper">
        <h2 className="project__title">{project.title}</h2>
        <LinkIconLink
          className={"project__link"}
          href={project.demoUrl}
        />
        <GitHubIconLink
          className={"project__link"}
          href={project.gitHubUrl}
        />
      </div>

      <div
        className="project__description"
        dangerouslySetInnerHTML={{ __html: sanitizedProjectDescription }}
      ></div>

      <div className="project__info-container">
        <div>
          <h3 className="project__label">Tech stack</h3>
          <Techstack techs={project.techStack} />
        </div>
        <div>
          <h3 className="project__label">Project type</h3>
          <p className="project__info">{project.projectType}</p>
        </div>
        <div>
          <h3 className="project__label">Timeline</h3>
          <p className="project__info">{project.projectTimeline}</p>
        </div>
      </div>
      <ProjectImgs imgArray={project.projectImages} />
    </section>
  );
}
