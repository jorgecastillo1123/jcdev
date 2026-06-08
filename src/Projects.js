import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

import alpnrock from './assets/alpnrock.jpg';
import ajw from './assets/ajw.jpg';
import beachstreet from './assets/beachstreet.jpg';
import clarify from './assets/clarify.jpg';
import dsrt from './assets/dsrt.jpg';
import htx from './assets/htx.jpg';
import surfpark from './assets/surfpark.jpg';
import wg from './assets/wg.jpg';

const projects = [
  {
    description: 'WordPress development',
    role: 'HTX Surf',
    imageSrc: htx,
    href: 'https://htxsurf.com/',
  },
  {
    description: 'Legacy migration to WordPress',
    role: 'Surf Park Central',
    imageSrc: surfpark,
    href: 'https://surfparkcentral.com/',
  },
  {
    description: 'WordPress development',
    role: 'Beach Street Development',
    imageSrc: beachstreet,
    href: 'https://beachstreetdev.com/',
  },
  {
    role: 'AJW Surf',
    description: 'Shopify e-commerce',
    imageSrc: ajw,
    href: 'http://ajwsurfboards.com/',
  },
  {
    description: 'WordPress development',
    role: 'DSRT Surf',
    imageSrc: dsrt,
    href: 'https://www.dsrtsurf.com/',
  },
  {
    description: 'WordPress development',
    role: 'Wavegarden',
    imageSrc: wg,
    href: 'https://wavegarden.com/',
  },
  {
    role: 'Alp N Rock',
    description: 'Shopify and WordPress',
    imageSrc: alpnrock,
    href: 'https://alpnrock.com/',
  },
  {
    role: 'Clarify Medical',
    description: 'Magento e-commerce',
    imageSrc: clarify,
    href: 'https://clarifymed.com/',
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="section-shell section-heading reveal reveal-up" data-reveal>
      <p className="eyebrow">Selected work</p>
      <h2 className="projects-heading">
        <span className="projects-heading-primary">Ideas, </span>
        <span className="projects-heading-secondary">shipped.</span>
        <br />
        <span className="projects-heading-primary">Products, </span>
        <span className="projects-heading-secondary">polished.</span>
      </h2>
    </div>

    <div className="project-list section-shell">
      {projects.map((project, index) => (
        <a
          className="project-row"
          data-reveal
          href={project.href}
          key={project.role}
          rel="noreferrer"
          target="_blank"
          style={{ '--reveal-delay': `${Math.min(index * 45, 180)}ms` }}
        >
          <div className="project-image-wrap">
            <img src={project.imageSrc} alt={`${project.role} website`} />
          </div>
          <div className="project-meta">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{project.role}</h3>
              <p>{project.description}</p>
            </div>
            <ArrowUpRightIcon aria-hidden="true" />
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
