import Footer from "@/components/layout/Footer";
import projects from "@/lib/projects";
import styles from "./project.module.css";
import Chain from "@/components/ui/links/Chain";
import GitHubIconLink from "@/components/ui/links/GitHub";
import { cloneElement } from "react";
import LazyMedia from "@/components/ui/media/LazyMedia";

export async function generateStaticParams() {
  return Object.keys(projects).map((id) => ({ id }));
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className={`${styles.project} container section`}>
        <h2 className={styles.project__subtitle}>{project.subtitle}</h2>
        <div className={styles.project__wrapper}>
          <h1 className={styles.project__title}>{project.title}</h1>
          <Chain className={styles.project__link} href={project.demoUrl} />
          <GitHubIconLink
            className={styles.project__link}
            href={project.gitHubUrl}
          />
        </div>

        <div className={styles.project__description}>
          {project.fullDescription}
        </div>

        <div className={styles.project__infoContainer}>
          <div>
            <h2 className={styles.project__label}>Tech stack</h2>
            <ul className={styles.project__techStack}>
              {project.techStack.map((tech, i) => (
                <li key={i} className={styles.project__info}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={styles.project__label}>Project type</h2>
            <p className={styles.project__info}>{project.projectType}</p>
          </div>
          <div>
            <h2 className={styles.project__label}>Timeline</h2>
            <p className={styles.project__info}>{project.timeline}</p>
          </div>
        </div>
        <div className={styles.project__imgContainer}>
          {project.images.map((media, i) => (
            <div className={styles.project__imgWrapper} key={i}>
              {
                <LazyMedia
                  className={styles.project__img}
                  src={media.src}
                  placeholder={"https://placehold.co/1920x968/DDD/DDD"}
                  width={1920}
                  height={968}
                  type={media.type}
                />
              }
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
