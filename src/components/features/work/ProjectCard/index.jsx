import styles from "./ProjectCard.module.css";
import GitHubBtn from "@/components/ui/buttons/GitHub";
import InfoBtn from "@/components/ui/buttons/Info";
import LinkBtn from "@/components/ui/buttons/Link";
import LazyMedia from "@/components/ui/LazyMedia";

export default function ProjectCard({ project, reverse }) {
  return (
    <div className={`${styles.projectCard} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.projectCard__imgWrapper}>
        <img
          className={styles.projectCard__img}
          src={project.cardImage.src}
          alt={project.cardImage.alt}
          width={900}
          height={900}
        />
      </div>
      <div className={styles.projectCard__content}>
        <h2 className={styles.projectCard__title}>{project.title}</h2>
        <p className={styles.projectCard__description}>
          {project.cardDescription}
        </p>
        <div className={styles.projectCard__techstack}>
          {project.techStack.map((tech, index) => {
            return (
              <span key={index} className={styles.projectCard__techBadge}>
                {tech}
              </span>
            );
          })}
        </div>

        <div className={styles.projectCard__btns}>
          <div className="btn-wrapper">
            <InfoBtn
              className={`${styles.projectCard__btn} btn`}
              href={`/projects/${project.id}`}
            />
          </div>
          <div className="btn-wrapper">
            <LinkBtn
              className={`${styles.projectCard__btn} btn`}
              href={project.demoUrl}
              ariaLabel="View project demo"
            />
          </div>
          <div className="btn-wrapper">
            <GitHubBtn
              className={`${styles.projectCard__btn} btn`}
              href={project.gitHubUrl}
              ariaLabel="View project's GitHub repository"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
