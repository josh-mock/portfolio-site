import styles from "@/components/features/about/Skills/Skills.module.css";

export default function Skills({ skills, listLength }) {
  return (
    <div className={styles.skills__container}>
      {Array.from({ length: Math.ceil(skills.length / listLength) }, (_, i) => (
        <ul className={styles.skills__list} key={i}>
          {skills.slice(i * listLength, (i + 1) * listLength).map((skill) => (
            <li className={styles.skills__item} key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
