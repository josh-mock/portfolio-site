export default function Techstack({ techs = [] }) {
  const listItems = techs.map((tech) => (
    <li key={tech} className="project__info">
      {tech}
    </li>
  ));
  return <ul className="project__tech-stack">{listItems}</ul>;
}
