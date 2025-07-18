import "./card-tech-stack.css"
export default function CardTechStack({ techs }) {
  return (
    <div className="card-tech-stack">
      {techs.map((tech, index) => {
        return (
          <span key={index} className="card-tech-stack__tech-badge">
            {tech}
          </span>
        );
      })}
    </div>
  );
}
