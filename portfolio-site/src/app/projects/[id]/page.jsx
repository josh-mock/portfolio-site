import Footer from "@/components/layout/Footer";
import projects from "@/lib/projects";
import Image from "next/image";
import styles from "./project.module.css";
import Chain from "@/components/ui/links/Chain";
import GitHubIconLink from "@/components/ui/links/GitHub";

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects[id];

  //   if (!project) {
  //     notFound();
  //   }

  return (
    <>
      <section className={`${styles.project} container section`}>
        <h3 className={styles.project__subtitle}>{project.subtitle}</h3>
        <div className={styles.project__wrapper}>
          <h2 className={styles.project__title}>{project.title}</h2>
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
            <h3 className={styles.project__label}>Tech stack</h3>
            <ul className={styles.project__techStack}>
              {project.techStack.map((tech, i) => (
                <li key={i} className={styles.project__info}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.project__label}>Project type</h3>
            <p className={styles.project__info}>{project.projectType}</p>
          </div>
          <div>
            <h3 className={styles.project__label}>Timeline</h3>
            <p className={styles.project__info}>{project.timeline}</p>
          </div>
        </div>
        <div className={styles.project__imgContainer}>
          {project.images.map((media, i) => (
            <div className={styles.project__imgWrapper} key={i}>
              {media.video ? (
                <video src={media.src} muted autoPlay loop playsInline>
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
