import Head from "next/head";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import styles from "../styles/components/Services.module.css";

export default function Services() {

  const { handleSelectedTag } = useContext(HeaderContext);

  useEffect(() => {
    handleSelectedTag("services");
  }, []);

  return (
    <div className={styles.servicesPageContainer}>
      <Head>
        <title>Services</title>
      </Head>
      <h1>What I can help you with</h1>
      <div className={styles.servicesPage}>
        <div className={styles.serviceContainer}>
          <div id="ux">
            <img src="assets/images/services/ux_process.svg" alt="UX Process" />
            <p>
              You can hire me as UX Designer to design your product from
              Ideation to Validation, I can also research and manage the process
              with your team.
            </p>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <div>
            <img src="assets/images/services/redesign.svg" alt="Redesign" />
            <p>
              Redesign your product and make it bright and stand out! I can use
              my UX skills and important UI concepts to improve your project.
            </p>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <div>
            <img
              src="assets/images/services/programming.svg"
              alt="Programming"
            />
            <p>
              You can hire me as a developer, I can use the following tech
              skills: React, Vue, Sass, HTML5, CSS3, React Native, Jest,
              Node.js, JavaScript and TypeScript. I can work with your
              development team!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
