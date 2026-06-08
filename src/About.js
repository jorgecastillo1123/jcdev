import {
  CameraIcon,
  HeartIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import aboutTechnologyGraphic from './assets/about-abstract-tech.png';

const facts = [
  { icon: SparklesIcon, text: 'Remote experience with teams across five countries.' },
  { icon: CameraIcon, text: 'Photography, travel, and video games keep me curious.' },
  { icon: HeartIcon, text: 'Premier League every week. Liverpool FC, always.' },
];

const About = () => (
  <section className="about-section" id="about">
    <div className="section-shell about-grid">
      <div className="about-copy reveal reveal-left" data-reveal>
        <p className="eyebrow">The person behind the pixels</p>
        <h2>
          Built with curiosity.
          <br />
          Refined through
          <span> experience.</span>
        </h2>
        <p className="about-copy-desktop">
          I&apos;m Jorge Castillo, a front-end developer who enjoys turning complex
          requirements into clear, useful interfaces. I specialize in React and
          Next.js architecture, responsive design, application performance, and
          accessible user experiences.
        </p>
        <p className="about-copy-desktop">
          I&apos;ve led development teams and built products across mortgage technology,
          healthcare, telecommunications, social media, e-commerce, and banking. I care
          about maintainable systems and the small interaction details that make
          software feel effortless.
        </p>
        <p className="about-copy-mobile">
          I&apos;m Jorge Castillo, a front-end developer with 16 years of experience
          building fast, accessible products with React and Next.js. I turn complex
          requirements into clear interfaces that feel effortless to use.
        </p>
      </div>

      <div className="about-visual reveal reveal-right" data-reveal>
        <img
          src={aboutTechnologyGraphic}
          alt="Abstract technology artwork representing software architecture and data flow"
        />
        <div className="about-stat">
          <strong>16+</strong>
          <span>years building for the web</span>
        </div>
      </div>
    </div>

    <div className="section-shell fact-grid">
      {facts.map(({ icon: Icon, text }) => (
        <div
          className="fact-item reveal reveal-up"
          data-reveal
          key={text}
        >
          <Icon aria-hidden="true" />
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default About;
