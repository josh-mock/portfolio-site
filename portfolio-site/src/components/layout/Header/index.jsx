"use client";
import GitHubBtn from "@/components/ui/buttons/GitHub";
import LinkedInBtn from "@/components/ui/buttons/LinkedIn";
import MenuToggle from "@/components/ui/toggles/Menu";
import ThemeToggle from "@/components/ui/toggles/Theme";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileOpen((prev) => !prev);
  };

  const closeMobileNav = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileOpen]);

  useEffect(() => {
    document.body.style.overflowY = isMobileOpen ? "hidden" : "auto";
  }, [isMobileOpen]);

  return (
    <>
      {/* HEADER */}
      <header className={`${styles.header} container`}>
        <nav>
          <ul className={styles.header__menu}>
            <li>
              <Link className={styles.header__link} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.header__link} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={styles.header__link} href="/work">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className={styles.header__link} href="/contact">
                Contact
              </Link>
            </li>

            <li>
              <div className={"btn-wrapper"}>
                <LinkedInBtn className={`${styles.header__btn} btn`} />
              </div>
            </li>
            <li>
              <div className={"btn-wrapper"}>
                <GitHubBtn className={`${styles.header__btn} btn`} />
              </div>
            </li>
            <li
              className={styles.header__line}
              aria-label="Visual divider"
            ></li>
            <li>
              <ThemeToggle className={styles.header__themeToggle} />
            </li>
            <li>
              <div className={"btn-wrapper"}>
                <a
                  className={`${styles.header__btn} btn`}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>

          <MenuToggle
            className={styles.header__bars}
            onClick={toggleMobileNav}
          />
        </nav>
      </header>

      {/* MOBILE NAV */}
      <div
        className={`${styles.mobileNav} ${isMobileOpen ? styles.isOpen : ""}`}
      >
        <nav>
          <ul className={styles.mobileNav__menu}>
            <li>
              <Link
                href="/"
                className={styles.mobileNav__link}
                onClick={closeMobileNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={styles.mobileNav__link}
                onClick={closeMobileNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className={styles.mobileNav__link}
                onClick={closeMobileNav}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={styles.mobileNav__link}
                onClick={closeMobileNav}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className={"btn-wrapper"}>
                <LinkedInBtn className={`${styles.mobileNav__btn} btn`} />
              </div>
            </li>
            <li>
              <div className={"btn-wrapper"}>
                <GitHubBtn className={`${styles.mobileNav__btn} btn`} />
              </div>
            </li>
            <li className={styles.mobileNav__linkLine}></li>
            <li>
              <ThemeToggle className={styles.mobileNav__themeToggle} />
            </li>
            <li>
              <div className={"btn-wrapper"}>
                <a
                  className={`${styles.mobileNav__btn} btn`}
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
