import GitHubBtn from "../Buttons/GitHubBtn";
import LinkedInBtn from "../Buttons/LinkedInBtn";
import "./Footer.css";

export default function Footer({ className = "footer container" }) {
  return (
    <footer className={className}>
      <div className="footer__content">
        <div className="footer__btns">
          <LinkedInBtn className={"footer__btn btn"} />
          <GitHubBtn className={"footer__btn btn"} />
        </div>
        <hr className="footer__hr" aria-label="Visual divider" />
        <h3 className="footer__title">~ Josh Mock ~</h3>
      </div>
    </footer>
  );
}
