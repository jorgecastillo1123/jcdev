import { ArrowDownIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

import About from './About';
import ProfessionalExperience from './ProfessionalExperience';
import Projects from './Projects';
import Footer from './Footer';
import htx from './assets/htx.jpg';
import surfpark from './assets/surfpark.jpg';
import clarify from './assets/clarify.jpg';

const Home = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="hero" id="top">
        <div className="hero-content hero-intro">
          <p className="eyebrow hero-step">Senior Front-End Developer</p>
          <h1>
            I build digital
            <br />
            experiences that
            <span> move.</span>
          </h1>
          <p className="hero-copy hero-step">
            More than 16 years creating thoughtful, high-quality products for teams
            across e-commerce, healthcare, banking, and communications.
          </p>
          <div className="hero-actions hero-step">
            <a className="pill-button pill-button-gold" href="#projects">Explore my work</a>
            <a className="text-link" href="#about">
              More about me
              <ArrowDownIcon aria-hidden="true" />
            </a>
          </div>
          <p className="location hero-step">
            <MapPinIcon aria-hidden="true" />
            San Diego, California
          </p>
        </div>

        <div className="hero-showcase hero-showcase-enter" aria-label="Selected project previews">
          <div className="showcase-frame showcase-frame-left">
            <img src={surfpark} alt="Surf Park Central website project" />
          </div>
          <div className="showcase-frame showcase-frame-main">
            <img src={htx} alt="HTX Surf website project" />
          </div>
          <div className="showcase-frame showcase-frame-right">
            <img src={clarify} alt="Clarify Medical website project" />
          </div>
        </div>
      </main>

      <About />
      <Projects />
      <ProfessionalExperience />
      <Footer />
    </>
  );
};

export default Home;
