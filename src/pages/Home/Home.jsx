import { Link } from "react-router";
import homeImg from "../../assets/home/home.jpeg";
import GitHubBtn from "../../components/Buttons/GitHubBtn";
import LinkedInBtn from "../../components/Buttons/LinkedInBtn";
import "./Home.css";

export default function Home() {
  return (
    <section className="home container">
      <img
        className="home__img"
        src={homeImg}
        alt="Profile picture of site owner"
      />
      <h2 className="home__subtitle">Hi, I'm Josh 👋</h2>
      <h1 className="home__title">
        FULL-STACK <br />
        WEB DEVELOPER.
      </h1>
      <p className="home__description">
        I'm a <strong>Full-Stack Web Developer</strong> with a strong interest
        in <strong>data-driven applications</strong>. I love building scalable
        web apps that <strong>solve real-world problems</strong> and turn
        complex data into <strong>meaningful insights</strong>.
      </p>

      <div className="home__btns">
        <Link className={"home__btn btn"} to={"/contact"}>
          Reach out
        </Link>
        <LinkedInBtn className={"home__btn btn"} />
        <GitHubBtn className={"home__btn btn"} />
      </div>
    </section>
  );
}
