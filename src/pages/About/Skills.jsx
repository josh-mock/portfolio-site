import "./About.css";
import SkillGroup from "./SkillGroup";

function createSkillsLists(skills, listLength) {
  const skillsLists = [];
  for (let i = 0; i < skills.length; i += listLength) {
    skillsLists.push(skills.slice(i, i + listLength));
  }
  return skillsLists;
}

export default function Skills({ skills, listLength }) {
  const groupedSkills = createSkillsLists(skills, listLength);

  return (
    <div className="about__skills-container">
      {groupedSkills.map((group, index) => (
        <SkillGroup skills={group} key={index} />
      ))}
    </div>
  );
}
