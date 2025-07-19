import { Link } from "react-router";
import GitHubBtn from "../../components/Buttons/GitHubBtn";
import LinkedInBtn from "../../components/Buttons/LinkedInBtn";
import LazyMedia from "../../components/LazyMedia";
import "./Home.css";
import home from "../../data/home.json";

export default function Home() {
  return (
    <section className="home container">
      <LazyMedia
        className="home__img"
        src="https://placehold.co/640"
        dataSrc="/assets/home.webp"
        alt="Profile picture of site owner"
      />
      <h2 className="home__subtitle">{home.subtitle}</h2>
      <h1
        className="home__title"
        dangerouslySetInnerHTML={{ __html: home.title }}
      ></h1>
      <p
        className="home__description"
        dangerouslySetInnerHTML={{ __html: home.copy }}
      ></p>

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
