import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import resume from './assets/resume.pdf';

const Footer = () => (
  <footer className="footer-section">
    <div className="section-shell footer-cta reveal reveal-up" data-reveal>
      <p className="eyebrow">Have a project in mind?</p>
      <h2>
        Let&apos;s build something
        <br />
        people
        <span className="heading-lime"> love</span>
        {' '}
        to
        <span> use.</span>
      </h2>
      <div className="footer-actions">
        <a
          className="pill-button pill-button-gold"
          href="mailto:jorgecastillo1123@gmail.com?subject=Mail from Jorge&apos;s Website"
        >
          Email me
        </a>
        <a className="pill-button pill-button-outline" download="resume-jorge-castillo" href={resume}>
          Download resume
        </a>
      </div>
    </div>

    <div className="section-shell footer-bottom">
      <p>Jorge Castillo, Senior Front End Engineer</p>
      <div>
        <a href="https://www.linkedin.com/in/jorge-castillo-dev" rel="noreferrer" target="_blank">
          LinkedIn
          <ArrowUpRightIcon aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
