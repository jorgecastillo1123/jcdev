import { ComputerDesktopIcon } from '@heroicons/react/24/outline';

const experience = [
  {
    role: 'Sr. Frontend Engineer  - April 2021 - Present',
    name: 'Wilqo',
    description: 'Hired as the first frontend developer to guide the architecture of the application',
    latest: true,
  },
  {
    role: 'Sr. Frontend Engineer - Oct 2020 - April 2021',
    name: 'Fuzzy',
    description: 'Integrate Nacelle backend into a Next/React application',
  },
  {
    role: 'Frontend Engineer - Sept 2018 - April 2021',
    name: 'Holonis',
    description: 'Migrate application from Angularjs 1.x to React.',
  },
  {
    role: 'Frontend Engineer - March 2017 - Sept 2018',
    name: 'Netsapiens',
    description: 'Develop communication applications using WebRTC technology.',
  },
  {
    role: 'Frontend Engineer - April 2013 - March 2017',
    name: 'Vigor Systems',
    description: 'Design and implement Angular Directives, Services and Modules.',
  },
  {
    role: 'Frontend Developer - August 2012 - April 2013',
    name: 'Miva',
    description: 'Web Developer in a Support ticket environment',
  },
  {
    role: 'Web Developer - Feb 2009 - August 2012',
    name: 'Runningfish Design Studio',
    description: 'Web and e-Commerce Development',
  },
];

const ProfessionalExperience = () => (
  <div className="bg-gray-100 py-8 sm:py-16 lg:py-16 lg:pb-16" id="profesional">
    <div className="sm:text-center pb-16 px-8 sm:px-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Profesional experience</h2>
    </div>
    <div className="mx-auto max-w-7xl px-8 lg:px-10">
      <div className="relative overflow-hidden bg-white drop-shadow-xl rounded-lg px-8 sm:px-0">
        <div className="pt-4 pb-84 sm:pt-12 sm:pb-40 sm:pt-30 lg:pb-2">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="flex items-center justify-center my-12">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {experience.map((project) => (
                  <li className="mb-10 ml-12" key={project.name}>
                    <span className="flex absolute left-[-19px] justify-center items-center w-10 h-10 bg-ali-blue
                    rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
                    >
                      <span className={`${project.latest ? 'animate-ping' : 'opacity-0'} absolute inline-flex h-full w-full rounded-full bg-ali-blue`} />
                      <ComputerDesktopIcon className="w-5 h-5 text-white" />
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {project.name}
                      {
                  project.latest
                  && <span className=" text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-ali-blue ml-3">Latest</span>
                }
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{project.role}</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{project.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfessionalExperience;
