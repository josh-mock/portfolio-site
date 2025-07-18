import GitHubBtn from "../../components/Buttons/GitHubBtn";
import InfoBtn from "../../components/Buttons/InfoBtn";
import LinkBtn from "../../components/Buttons/LinkBtn";
import LazyMedia from "../../components/LazyMedia";
import CardTechStack from "./CardTechStack";

export default function ProjectCard({ project, reverse }) {
  return (
    <div className={`work__project ${reverse ? "reverse" : ""}`}>
      <div className="work__img-wrapper">
        <LazyMedia
          src={project.cardImage.placeholderUrl}
          dataSrc={project.cardImage.url}
          alt={project.cardImage.alt}
        />
      </div>
      <div className="work__content">
        <h2 className="work__project-title">{project.title}</h2>
        <p className="work__project-description">{project.cardDescription}</p>
        <CardTechStack techs={project.techStack} />

        <div className="work__project-btns">
          <InfoBtn
            className="work__project-btn btn"
            href={`/projects/${project.id}`}
          />
          <LinkBtn
            className={"work__project-btn btn"}
            href={project.demoUrl}
            ariaLabel="View project demo"
          />
          <GitHubBtn
            className={"work__project-btn btn"}
            href={project.gitHubUrl}
            ariaLabel="View project's GitHub repository"
          />
        </div>
      </div>
    </div>
  );
}
