import GitHubBtn from "@/components/ui/buttons/GitHub";
import LinkedInBtn from "@/components/ui/buttons/LinkedIn";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <div className={styles.footer__content}>
        <h3 className={styles.footer__title}>~ Josh Mock ~</h3>
        <div className={styles.footer__line} aria-label="Visual divider"></div>
        <div className={styles.footer__btns}>
          <div className="btn-wrapper">
            <LinkedInBtn className={`${styles.footer__btn} btn`} />
          </div>
          <div className="btn-wrapper">
            <GitHubBtn className={`${styles.footer__btn} btn`} />
          </div>
        </div>
      </div>
    </footer>
  );
}
