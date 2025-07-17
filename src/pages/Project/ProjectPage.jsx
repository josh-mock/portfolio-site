import { useNavigate, useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import projects from "../../data/projects/index";

export default function ProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <>
      <Project project={projects[id]} />
      <Footer />
    </>
  );
}
