import GitHubBtn from "../Buttons/GitHubBtn";
import LinkedInBtn from "../Buttons/LinkedInBtn";
import "./Footer.css";

export default function Footer({ className = "footer container" }) {
  return (
    <footer className={className}>
      <div className="footer__content">
        <h3 className="footer__title">~ Josh Mock ~</h3>
        <div className="footer__line" aria-label="Visual divider"></div>
        <div className="footer__btns">
          <div className="btn-wrapper">
            <LinkedInBtn className={"footer__btn btn"} />
          </div>
          <div className="btn-wrapper">
            <GitHubBtn className={"footer__btn btn"} />
          </div>
        </div>
      </div>
    </footer>
  );
}
