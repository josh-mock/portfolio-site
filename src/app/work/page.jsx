import styles from "@/app/work/work.module.css";
import ProjectCard from "@/components/features/work/ProjectCard";
import Footer from "@/components/layout/Footer";
import projects from "@/lib/projects";

export default function page() {
  const config = {
    paragraphs: [
      <>
        Here, you'll find a curated collection of projects that highlight my
        skills in <strong>development</strong>, <strong>problem-solving</strong>
        , and <strong>innovation</strong>. Each project reflects my commitment
        to <strong>clean code</strong>, <strong>efficient solutions</strong>,
        and <strong>continuous learning</strong>.
      </>,
      <>
        Explore my work to see how I turn ideas into <strong>functional</strong>
        , <strong>elegant software</strong>.
      </>,
    ],
  };
  return (
    <>
      <section className={`${styles.work} container section`}>
        <h1 className={styles.work__title}>Projects</h1>
        {config.paragraphs.map((p, i) => {
          return (
            <p className={styles.work__description} key={i}>
              {p}
            </p>
          );
        })}
        <div className={styles.work__container}>
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
