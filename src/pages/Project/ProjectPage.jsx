import { useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import projects from "../../data/projects/index";
import PageNotFound from "../PageNotFound/PageNotFound";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <>
      <Project project={project} />
      <Footer />
    </>
  );
}
