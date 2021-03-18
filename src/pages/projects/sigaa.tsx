import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/components/projects/Sigaa.module.css";

export default function Sigaa() {
  const router = useRouter();

  return (
    <div className={styles.projectContainer}>
      <Head>
        <title>Sigaa's Redesign</title>
      </Head>
      <i className="fas fa-arrow-left" onClick={() => router.back()}></i>
      <div className={styles.title}>
        <h1>Sigaa's Redesign</h1>
        <div className={styles.divider}></div>
      </div>
      <p>
        Throughout my graduation I dealt with the academic system’s interfeace
        of my university called SIGAA, which was a pain in the ass. It wasn’t a
        comfortable product for me as a student. Too many options and at the
        same time some helpless content and .... of course it looks like
        something from 2000’s.
      </p>
      <div className={styles.oldImages}>
        <img
          src="/assets/images/projects/sigaa/old_screen_1.svg"
          alt="Login Page"
        />
        <img
          src="/assets/images/projects/sigaa/old_screen_2.svg"
          alt="Dashboard"
        />
      </div>
      <p>
        Using my UX skills, Design Sprint and UX laws, I refactored the landing
        page, sing in and sing up, enroll page and also the student’s dashboard.
      </p>
      <p>
        For this, I imagine a student who is a freshman, so he wants to get
        enrolled properly and get in touch with all news about the university
        and his classes.
      </p>
      <div className={styles.persona}>
        <img src="/assets/images/projects/sigaa/persona.png" alt="Persona" />
        <p>
          João is 18 years old, he’s from countryside, he wants to change his
          life studying hard.
        </p>
      </div>
      <div className={styles.divider}></div>
      <h3>What is supposed to happen</h3>
      <div className={styles.journeyMap}>
        <img src="/assets/images/projects/sigaa/step_1.svg" alt="Step 1" />
        <img src="/assets/images/projects/sigaa/step_2.svg" alt="Step 2" />
        <img src="/assets/images/projects/sigaa/step_3.svg" alt="Step 3" />
        <img src="/assets/images/projects/sigaa/step_4.svg" alt="Step 4" />
        <img src="/assets/images/projects/sigaa/step_5.svg" alt="Step 5" />
        <img src="/assets/images/projects/sigaa/step_6.svg" alt="Step 6" />
      </div>
      <div className={styles.divider}></div>
      <div className={styles.solutions}>
        <h3>Solutions</h3>
        <div className={styles.bulletPointsContainer}>
          <div className={styles.bulletPoint}>
            <i className="fas fa-check-circle"></i>
            <p>
              Make the interface pleasant and usable (
              <strong>Aesthetic Usability Effect</strong>);
            </p>
          </div>
          <div className={styles.bulletPoint}>
            <i className="fas fa-check-circle"></i>
            <p>
              Upsize the fonts, improve the icons and positioning (
              <strong>Fitt’s and Hick’s Laws</strong>);
            </p>
          </div>
          <div className={styles.bulletPoint}>
            <i className="fas fa-check-circle"></i>
            <p>
              Create consistent sections with hierarchy (
              <strong>
                Laws of Proximity, Similarity, Common Region and Uniform
                Connectedness
              </strong>
              );
            </p>
          </div>
          <div className={styles.bulletPoint}>
            <i className="fas fa-check-circle"></i>
            <p>
              Remove helpless infos and put helpful ones (
              <strong>Occam’s razor</strong>);
            </p>
          </div>
          <div className={styles.bulletPoint}>
            <i className="fas fa-check-circle"></i>
            <p>
              Turn it into a more minimalist interface (
              <strong>Prägnanz’s Law</strong>);
            </p>
          </div>
          <div className={styles.bulletPoint}>
            <i className="fas fa-check-circle"></i>
            <p>Make it responsive and accessible;</p>
          </div>
        </div>
      </div>
      <p>
        After wireframing it, I prototyped the product as you can see below the
        desktop and mobile versions of the landing page.
      </p>
      <i className="fas fa-arrow-down"></i>
      <div className={styles.newLandingPage}>
        <img
          src="/assets/images/projects/sigaa/landing_page_desktop.svg"
          alt="Landing Page Desktop"
        />
        <img
          src="/assets/images/projects/sigaa/landing_page_mobile.svg"
          alt="Landing Page Mobile"
        />
      </div>
      <p>The dashboard looks way too more usable than ever!</p>
      <i className="fas fa-arrow-down"></i>
      <div className={styles.newDashboard}>
        <img
          src="/assets/images/projects/sigaa/dashboard_desktop.svg"
          alt="Dashboard Desktop"
        />
        <img
          src="/assets/images/projects/sigaa/dashboard_mobile.svg"
          alt="Dashboard Mobile"
        />
      </div>
      <p>
        See the original article on{" "}
        <a
          href="https://www.linkedin.com/pulse/mais-que-um-redesign-mas-ux-na-educa%C3%A7%C3%A3o-f%C3%A1bio-mendes/"
          target="_blank"
        >
          Linkedin
        </a>
        , if you want to see all the steps on{" "}
        <a
          href="https://www.figma.com/file/suyfW8qzq9KXglVW5XMm9d/SIGAA-2.0?node-id=0%3A1"
          target="_blank"
        >
          Figma
        </a>
        .
      </p>
    </div>
  );
}
