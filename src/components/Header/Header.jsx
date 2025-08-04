import { useEffect, useState } from "react";
import { Link } from "react-router";
import GitHubBtn from "../Buttons/GitHubBtn";
import LinkedInBtn from "../Buttons/LinkedInBtn";
import MenuToggleBtn from "../Buttons/MenuToggleBtn";
import ThemeToggleBtn from "../Buttons/ThemeToggleBtn";
import "./Header.css";

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
      <header className="header container">
        <nav>
          <ul className="header__menu">
            <li>
              <Link className="header__link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/work">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="header__link" to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <div className="btn-wrapper">
                <LinkedInBtn className="header__btn btn" />
              </div>
            </li>
            <li>
              <div className="btn-wrapper">
                <GitHubBtn className="header__btn btn" />
              </div>
            </li>
            <li className="header__line" aria-label="Visual divider"></li>
            <li>
              <ThemeToggleBtn className="header__theme-toggle" />
            </li>
            <li>
              <div className="btn-wrapper">
                <a
                  className="header__btn btn"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>

          <MenuToggleBtn onClick={toggleMobileNav} />
        </nav>
      </header>

      {/* MOBILE NAV */}
      <div className={`mobile-nav ${isMobileOpen ? "is-open" : ""}`}>
        <nav>
          <ul className="mobile-nav__menu">
            <li>
              <Link
                to="/"
                className="mobile-nav__link"
                onClick={closeMobileNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="mobile-nav__link"
                onClick={closeMobileNav}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work"
                className="mobile-nav__link"
                onClick={closeMobileNav}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="mobile-nav__link"
                onClick={closeMobileNav}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="btn-wrapper">
                <LinkedInBtn className="mobile-nav__btn btn" />
              </div>
            </li>
            <li>
              <div className="btn-wrapper">
                <GitHubBtn className="mobile-nav__btn btn" />
              </div>
            </li>
            <li className="mobile-nav__link-line"></li>
            <li>
              <ThemeToggleBtn className="mobile-nav__theme-toggle" />
            </li>
            <li>
              <div className="btn-wrapper">
                <a
                  className="mobile-nav__btn btn"
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
