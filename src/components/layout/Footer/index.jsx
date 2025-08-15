import styles from "@/components/layout/Footer/Footer.module.css";
import GitHubBtn from "@/components/ui/buttons/GitHub";
import LinkedInBtn from "@/components/ui/buttons/LinkedIn";

export default function Footer({ className }) {
  return (
    <footer className={`${styles.footer} container ${className}`}>
      <div className={styles.footer__content}>
        <span className={styles.footer__title}>~ Josh Mock ~</span>
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
