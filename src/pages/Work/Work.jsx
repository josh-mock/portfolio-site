import { gql, useQuery } from "@apollo/client";
import Footer from "../../components/Footer/Footer";
import ProjectCard from "./ProjectCard";
import "./Work.css";

export default function Work() {
  const GET_PROJECT_CARDS = gql`
    query GetProjectCards {
      projects {
        cardDescription1
        cardDescription2
        cardImage {
          alt
          placeholderUrl
          image {
            url
          }
        }
        demoUrl
        gitHubUrl
        id
        title
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PROJECT_CARDS);
  if (loading)
    return (
      <section className="work container section">
        <p className="work__description">Loading projects...</p>;
      </section>
    );
  if (error)
    return (
      <section className="work container section">
        <p className="work__description">
          Error loading projects: {error.message}
        </p>
      </section>
    );

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
          {data.projects.map((project, index) => (
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
