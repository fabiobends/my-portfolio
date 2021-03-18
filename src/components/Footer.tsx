import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>This page was built by me.</p>
      <p>Made with ❤️</p>
      <div className={styles.copyright}>
        <p>© 2021</p>
        <p>All rights deserved.</p>
      </div>
      <div className={styles.icons}>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fabiomendeslps@gmail.com"
          target="_blank"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://github.com/fabiobends" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/fabiomendeslps" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
