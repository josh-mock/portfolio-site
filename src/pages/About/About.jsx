import aboutImg from "../../assets/about/about.jpeg";
import Footer from "../../components/Footer/Footer";
import LazyMedia from "../../components/LazyMedia";
import "./About.css";
import Skills from "./Skills";

export default function About() {
  return (
    <>
      <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">About</h2>
          <p className="about__description">
            I graduated with a <strong>BA in Arabic and Persian</strong> and
            currently work in <strong>disputes and investigations</strong>,
            where attention to detail and analytical thinking are key.
          </p>
          <p className="about__description">
            After discovering a love for problem-solving, I{" "}
            <strong>taught myself Python</strong> through{" "}
            <strong>Harvard's CS50</strong> and recently completed the{" "}
            <strong>full-stack web development program </strong> at{" "}
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
          </p>
          <p className="about__description">
            I'm now <strong>looking to launch my career in tech</strong>, where
            I can combine my curiosity, technical skills, and drive to build
            tools that <strong>solve real problems</strong>.
          </p>
          <hr className="about__hr" />
          <h3 className="about__subtitle">Technologies</h3>
          <Skills
            skills={[
              "HTML5",
              "CSS3",
              "JavaScript (ES6+)",
              "ReactJS",
              "NodeJS",
              "Python",
              "SQL",
            ]}
            listLength={3}
          />
        </div>
        <div className="about__img-wrapper">
          <LazyMedia
            src={"https://placehold.co/720"}
            dataSrc={aboutImg}
            alt={"Portrait of the site owner"}
          />
        </div>
      </section>
      <Footer className="footer container about__footer" />
    </>
  );
}
