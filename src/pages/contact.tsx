import Head from "next/head";
import { useContext, useEffect } from "react";
import { HeaderContext } from "../contexts/HeaderContext";
import styles from "../styles/components/Contact.module.css";

export default function Contact() {

  const { handleSelectedTag } = useContext(HeaderContext);

  useEffect(() => {
    handleSelectedTag("contact");
  }, []);

  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>You can contact me at:</h1>
      <div className={styles.contacts}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fabiomendeslps@gmail.com" target="_blank">
          <i className="fas fa-envelope"></i>
          <p>fabiomendeslps@gmail.com</p>
        </a>
        <a href="https://linkedin.com/in/fabiomendeslps" target="_blank">
          <i className="fab fa-linkedin"></i>
          <p>linkedin.com/in/fabiomendeslps</p>
        </a>
      </div>
    </div>
  );
}
