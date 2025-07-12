import "./About.css";

export default function SkillGroup({ skills }) {
  return (
    <ul className="about__skills">
      {skills.map((skill) => (
        <li className="about__skill" key={skill}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
