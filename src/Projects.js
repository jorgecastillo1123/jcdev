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
    description: 'Develop website using Wordpress',
    role: 'HTX Surf',
    imageSrc: htx,
    href: 'https://htxsurf.com/',
  },
  {
    description: 'Migrate legacy website to Wordpress',
    role: 'Surf park central',
    imageSrc: surfpark,
    href: 'https://surfparkcentral.com/',
  },
  {
    description: 'Develop website using Wordpress',
    role: 'beach street development',
    imageSrc: beachstreet,
    href: 'https://beachstreetdev.com/',
  },
  {
    role: 'AJW surf',
    description: 'Installation and configuration of e-commerce using Shopify',
    imageSrc: ajw,
    href: 'http://ajwsurfboards.com/',
  },
  {
    description: 'Develop website using Wordpress',
    role: 'dsrt surf',
    imageSrc: dsrt,
    href: '  https://www.dsrtsurf.com/',
  },
  {
    description: 'Develop website using Wordpress',
    role: 'wave garden',
    imageSrc: wg,
    href: '  https://wavegarden.com/',
  },
  {
    role: 'Alpnrock',
    description: 'Custom website using shopify and Wordpress',
    imageSrc: alpnrock,
    href: 'https://alpnrock.com/',
  },
  {
    role: 'Clarify Medical',
    description: 'Custom e-commerce website using Magento',
    imageSrc: clarify,
    href: 'https://clarifymed.com/',
  },
];

const Projects = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="projects">
    <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:py-10 lg:max-w-none">
      <div className="sm:text-center pb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Have a look at my Projects</h2>
      </div>
      <div className="space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-2">
        {projects.map((project) => (
          <div key={project.role} className="group relative mb-16">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75
            sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 drop-shadow-md"
            >
              <img
                src={project.imageSrc}
                alt={`project-${project.role}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-4 text-base font-semibold text-gray-900 uppercase">{project.role}</p>
            <h3 className="mt-1 text-sm text-gray-500">
              <a href={project.href} target="_blank" rel="noreferrer">
                <span className="absolute inset-0" />
                {project.description}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
