import "./Work.css"
export default function CardTechStack({ techs }) {
  return (
    <div className="work__tech-stack">
      {techs.map((tech, index) => {
        return (
          <span key={index} className="work__tech-badge">
            {tech}
          </span>
        );
      })}
    </div>
  );
}
