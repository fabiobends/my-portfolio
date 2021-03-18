import Link from "next/link";
import { useContext, useState } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import styles from "../styles/components/Header.module.css";

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { handleSelectedTag, selectedTag } = useContext(HeaderContext);

  function handleDrawer() {
    if (!drawerOpened) setDrawerOpened(true);
    else {
      setDrawerOpened(false);
    }
  }

  return (
    <div className={styles.header}>
      <button onClick={handleDrawer}>
        {!drawerOpened ? (
          <i className="fas fa-bars"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </button>
      {selectedTag === "aboutme" ? (
        <div className={styles.activeTagMobile}>
          <div className={styles.activeTag}>About Me</div>
        </div>
      ) : selectedTag === null ? (
        <div></div>
      ) : (
        <div className={styles.activeTagMobile}>
          <div className={styles.activeTag}>{selectedTag}</div>
        </div>
      )}
      {drawerOpened && (
        <div className={styles.drawer}>
          <ul onClick={handleDrawer}>
            <Link href="/">
              <li onClick={(event) => handleSelectedTag("home")}>
                <i className="fas fa-home"></i>Home
              </li>
            </Link>
            <Link href="/aboutme">
              <li onClick={(event) => handleSelectedTag("aboutme")}>
                <i className="fas fa-address-card"></i>About Me
              </li>
            </Link>
            <Link href="/services">
              <li onClick={(event) => handleSelectedTag("services")}>
                <i className="fas fa-tools"></i>Services
              </li>
            </Link>
            <Link href="/projects">
              <li onClick={(event) => handleSelectedTag("projects")}>
                <i className="fas fa-project-diagram"></i>Projects
              </li>
            </Link>
            <Link href="/contact">
              <li onClick={(event) => handleSelectedTag("contact")}>
                <i className="fas fa-id-card-alt"></i>Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
      <div className={styles.nav}>
        <Link href="/">
          {selectedTag === "home" ? (
            <a className={styles.activeTag}>Home</a>
          ) : (
            <a onClick={(event) => handleSelectedTag("home")}>Home</a>
          )}
        </Link>
        <Link href="/aboutme">
          {selectedTag === "aboutme" ? (
            <a className={styles.activeTag}>About Me</a>
          ) : (
            <a onClick={(event) => handleSelectedTag("aboutme")}>About Me</a>
          )}
        </Link>
        <Link href="/services">
          {selectedTag === "services" ? (
            <a className={styles.activeTag}>Services</a>
          ) : (
            <a onClick={(event) => handleSelectedTag("services")}>Services</a>
          )}
        </Link>
        <Link href="/projects">
          {selectedTag === "projects" ? (
            <a className={styles.activeTag}>Projects</a>
          ) : (
            <a onClick={(event) => handleSelectedTag("projects")}>Projects</a>
          )}
        </Link>
        <Link href="/contact">
          {selectedTag === "contact" ? (
            <a className={styles.activeTag}>Contact</a>
          ) : (
            <a onClick={(event) => handleSelectedTag("contact")}>Contact</a>
          )}
        </Link>
      </div>
    </div>
  );
}
