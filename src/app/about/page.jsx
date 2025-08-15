import Skills from "@/components/features/about/Skills";
import Footer from "@/components/layout/Footer";
import styles from "./about.module.css";
import LazyMedia from "@/components/ui/media/LazyMedia";

export default function page() {
  const config = {
    paragraphs: [
      <>
        I graduated with a <strong>BA in Arabic and Persian</strong> and
        currently work in <strong>disputes and investigations</strong>, where
        attention to detail and analytical thinking are key.
      </>,
      <>
        After discovering a love for problem-solving, I{" "}
        <strong>taught myself Python</strong> through{" "}
        <strong>Harvard's CS50</strong> and recently completed the{" "}
        <strong>full-stack web development program</strong> at{" "}
        <strong>
          <a
            className="inline-link"
            href="https://www.thejump.tech/"
            target="_blank"
          >
            The Jump Digital School
          </a>
        </strong>
        .
      </>,
      <>
        I'm now <strong>looking to launch my career in tech</strong>, where I
        can combine my curiosity, technical skills, and drive to build tools
        that <strong>solve real problems</strong>.
      </>,
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "NextJS",
      "NodeJS",
      "ReactJS",
      "Python",
      "SQL",
    ],
  };

  return (
    <>
      <section id="about" className={`${styles.about} container section`}>
        <div className={styles.about__content}>
          <h1 className={styles.about__title}>About</h1>
          {config.paragraphs.map((p, index) => (
            <p key={index} className={styles.about__description}>
              {p}
            </p>
          ))}
          <hr className={styles.about__hr} />
          <h2 className={styles.about__subtitle}>Skills</h2>
          <Skills skills={config.skills} listLength={3} />
        </div>
        <div className={styles.about__imgWrapper}>
          <LazyMedia
            src="/assets/about.webp"
            placeholder="https://placehold.co/720x720/DDD/DDD"
            alt="Portrait of the site owner"
            width={720}
            height={720}
            className={styles.about__img}
            type="image"
          />
        </div>
      </section>
      <Footer className={styles.about__footer}></Footer>
    </>
  );
}
