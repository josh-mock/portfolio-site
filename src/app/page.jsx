import styles from "@/app/home.module.css";
import GitHubBtn from "@/components/ui/buttons/GitHub";
import LinkedInBtn from "@/components/ui/buttons/LinkedIn";
import Image from "next/image";
import Link from "next/link";
import homeImg from "../../public/assets/home.webp";

export default function Home() {
  return (
    <section className={`${styles.home} container`}>
      <Image
        className={styles.home__img}
        src={homeImg}
        width={640}
        height={640}
        alt="Profile picture of site owner"
        priority
      />
      <h2 className={styles.home__subtitle}>Hi, I'm Josh 👋</h2>
      <h1 className={styles.home__title}>
        FULL-STACK
        <br />
        WEB DEVELOPER.
      </h1>
      <p className={styles.home__description}>
        I'm a <strong>Full-Stack Web Developer</strong> with a strong interest
        in <strong>data-driven applications</strong>. I love building scalable
        web apps that <strong>solve real-world problems</strong> and turn
        complex data into <strong>meaningful insights</strong>.
      </p>

      <div className={styles.home__btns}>
        <div className="btn-wrapper">
          <Link className={`${styles.home__btn} btn`} href={"/contact"}>
            Reach out
          </Link>
        </div>
        <div className="btn-wrapper">
          <LinkedInBtn className={`${styles.home__btn} btn`} />
        </div>
        <div className="btn-wrapper">
          <GitHubBtn className={`${styles.home__btn} btn`} />
        </div>
      </div>
    </section>
  );
}
