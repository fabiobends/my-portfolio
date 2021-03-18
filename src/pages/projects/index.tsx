import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import styles from "../../styles/components/Projects.module.css";

export default function Projects() {
  const { handleSelectedTag } = useContext(HeaderContext);

  useEffect(() => {
    handleSelectedTag("projects");
  }, []);

  return (
    <div className={styles.projectsContainer}>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Here are some projects I did</h1>
      <div className={styles.projects}>
        <div className={styles.projectContainer}>
          <Link href="/projects/sigaa">
            <div
              className={styles.project}
              onClick={(event) => handleSelectedTag(null)}
            >
              <img src="assets/images/projects/sigaa_2.0.png" alt="SIGAA 2.0" />
              <p>
                This is a case study where I redesign the digital academic
                system of the Federal University of Piauí (Brazil). UX applied
                to Education!
              </p>
            </div>
          </Link>
        </div>
      </div>
      <h2>For more about programming, see my github account</h2>
      <a href="https://github.com/fabiobends" target="_blank">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
}
