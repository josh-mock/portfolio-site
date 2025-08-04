import Footer from "../../components/Footer/Footer";
import LazyMedia from "../../components/LazyMedia";
import "./About.css";
import Skills from "./Skills";
import about from "../../data/about.json";

export default function About() {
  return (
    <>
      <section id="about" className="about container section">
        <div className="about__content">
          <h2 className="about__title">{about.title}</h2>
          {about.copy.map((paragraph, index) => (
            <p
              key={index}
              className="about__description"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}

          <hr className="about__hr" />
          <h3 className="about__subtitle">{about.skills_section_title}</h3>
          <Skills skills={about.skills} listLength={3} />
        </div>
        <div className="about__img-wrapper">
          <LazyMedia
            src="https://placehold.co/720"
            dataSrc="/assets/about.webp"
            alt="Portrait of the site owner"
            aspectRatio="1/1"
          />
        </div>
      </section>
      <Footer className="footer container about__footer" />
    </>
  );
}
