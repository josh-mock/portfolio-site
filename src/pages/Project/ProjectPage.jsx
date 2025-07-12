import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";

const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    project(where: { id: $id }) {
      demoUrl
      gitHubUrl
      subtitle
      techStack
      title
      projectImages {
        alt
        placeholderUrl
        image {
          id
          url
        }
      }
      projectTimeline
      projectType
      projectDescription {
        html
      }
    }
  }
`;

export default function ProjectPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
    skip: !id,
  });

  useEffect(() => {
    if (!loading && !data?.project) {
      navigate("/not-found");
    }
  }, [loading, data, navigate]);

  if (loading) return <p>Loading project...</p>;
  if (error) return <p>Error loading project: {error.message}</p>;
  if (!data?.project) return null;

  return (
    <>
      <Project project={data.project} />
      <Footer />
    </>
  );
}
