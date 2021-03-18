import Head from "next/head";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import styles from "../styles/components/AboutMe.module.css";

export default function AboutMe() {

  const { handleSelectedTag } = useContext(HeaderContext);

  useEffect(() => {
    handleSelectedTag("aboutme");
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About Me</title>
      </Head>
      <div className={styles.textContainer}>
        <h1>Hey, I'm Fábio</h1>
        <div>
          <p>
            I’m UX Designer and Full-stack Web Developer. I have the tech and
            management skills to your project.
          </p>
          <p>
            I’m enthusiastic about Programming, Languages, Engineering and Human
            Behavior. I’m also fan of Linux, IT and UX/UI.
          </p>
          <p>
            Everyday I wake up to learn new stuff, to overcome problems and to
            become a better person.
          </p>
          <p>
            I’m open to work abroad too, home office or face-to-face. I can
            speak Portuguese, French and English, I can also improve my German
            and Spanish skills too!
          </p>
        </div>
      </div>
      <a href="assets/documents/Fabio_Mendes_CV_(en).pdf" download>
        <button className={styles.button}>Download my CV</button>
      </a>
    </div>
  );
}
