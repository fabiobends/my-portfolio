import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import styles from "../styles/components/Home.module.css";

export default function Home() {
  const { handleSelectedTag } = useContext(HeaderContext);

  useEffect(() => {
    handleSelectedTag("home");
  }, []);

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <section className={styles.yourIdea}>
        <div className={styles.mainContent}>
          <h1>Make your idea real!</h1>
          <p>
            I’ll help you to reach out great customer experiences with your
            product.
          </p>
        </div>
        <img src="assets/images/thinking_new.svg" alt="Ideation" />
      </section>
      <section className={styles.aboutMe}>
        <div>
          <h1>Hi, nice to meet you!</h1>
          <p>
            My name is Fábio Mendes, I’m <strong>UX Designer</strong> and also{" "}
            <strong>Full-stack Web Developer</strong>. So I know from where
            ideas come and to where they can achieve successful final products.
          </p>
        </div>
        <a href="assets/documents/Fabio_Mendes_CV_(en).pdf" download>
          <button className={styles.button}>Download my CV</button>
        </a>
      </section>
      <section className={styles.projectsContainer}>
        <h2>Projects</h2>
        <div className={styles.projects}>
          <div className={styles.projectContainer}>
            <Link href="/projects/sigaa">
              <div
                className={styles.project}
                onClick={(event) => handleSelectedTag(null)}
              >
                <img
                  src="assets/images/projects/sigaa_2.0.png"
                  alt="SIGAA 2.0"
                />
                <p>
                  This is div case study where I redesign the digital academic
                  system of the Federal University of Piauí (Brazil). UX applied
                  to Education!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.servicesContainer}>
        <h2>Services</h2>
        <div className={styles.services}>
          <div>
            <img src="assets/images/services/ux_process.svg" alt="UX Process" />
            <p>
              UX Process, from Ideation to Validation, researching and
              management.
            </p>
          </div>
          <div>
            <img src="assets/images/services/redesign.svg" alt="Redesign" />
            <p>Redesign your product and make it bright and stand out!</p>
          </div>
          <div>
            <img
              src="assets/images/services/programming.svg"
              alt="Programming"
            />
            <p>
              As div developer I know the most modern concepts and also how to
              help your team to accomplish great results with web and mobile
              apps (including native ones).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
