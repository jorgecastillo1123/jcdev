import {
  ArrowDownCircleIcon,
} from '@heroicons/react/24/outline';

import {
  HomeModernIcon,
  BriefcaseIcon,
  HeartIcon,
  BookOpenIcon,
  TruckIcon,
} from '@heroicons/react/24/solid';

import lucca from './assets/lucca.jpg';
import car from './assets/car.jpg';
import anfield from './assets/anfield.jpg';
import liver from './assets/liver.jpg';
import ribs from './assets/ribs.jpeg';
import museum from './assets/museum.jpg';
import france from './assets/france.jpg';

const About = () => (
  <div className="bg-gray-100 py-8 sm:py-16 lg:py-6 lg:pb-16" id="about">
    <div className="flex items-center justify-center text-4xl leading-8 text-gray-600
        sm:text-center relative -top-[100px] sm:-top-[220px] mx-auto w-[310px] sm:w-full"
    >
      <a href="#about" className="-m-1.5 p-1.5 flex items-center justify-start">
        <ArrowDownCircleIcon className="h-10 w-10  text-ali-blue animate-bounce mr-4" aria-hidden="true" />
        <span className="text-xl !leading-tight text-black sm:text-3xl">
          Get to know more about me
        </span>
      </a>
    </div>
    <div className="mx-auto max-w-7xl px-8 lg:px-10">
      <div className="relative overflow-hidden bg-white drop-shadow-xl rounded-lg">
        <div className="pt-16 pb-4 sm:pt-24 sm:pb-10 lg:pt-30 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-md pr-8">
              <h2 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl !leading-tight">
                Hello, I&apos;m Jorge Castillo
              </h2>
              <p className="mt-4 text-gray-500 text-base">
                I&apos;m a Front-End Developer from San Diego, CA.
                Since starting my career over 10 years ago, I have been lucky enough
                to work with amazing teams across the world,
                from India, Brasil, Chile, Mexico, and the USA,
                I&apos;ve done remote work for startups and larger companies
                in different sectors like telecommunication,
                health, social media, e-commerce, and banking.
                I enjoy teamwork and collaboration, but in the end
                the thing I enjoy most is building high-quality software,
                I have a passion for front-end and always looking to improve my skills and
                knowledge of the latest technologies.
              </p>
              <h3 className="font text-2xl font-bold tracking-tight text-gray-900 !leading-tight my-8">Some unique things about me.</h3>
              <ul>
                <li className="flex items-center justify-left pb-2">
                  <HomeModernIcon className="h-6 w-6 mr-4 text-blue-900" aria-hidden="true" />
                  <span className="text-gray-500 text-base">I was born in Mexico City</span>
                </li>
                <li className="flex items-center justify-left py-2">
                  <BriefcaseIcon className="h-6 w-6 mr-4 text-blue-900" aria-hidden="true" />
                  <span className="text-gray-500 text-base">Love to travel with my beautiful wife</span>
                </li>
                <li className="flex items-center justify-left py-2">
                  <HeartIcon className="h-6 w-6 mr-4 text-blue-900" aria-hidden="true" />
                  <span className="text-gray-500 text-base">I watch the Premier league every week, lets go Liverpool FC</span>
                </li>
                <li className="flex items-center justify-left py-2">
                  <TruckIcon className="h-6 w-6 mr-4 text-blue-900" aria-hidden="true" />
                  <span className="text-gray-500 text-base">My favorite hobby is working on my car</span>
                </li>
                <li className="flex items-center justify-left py-2">
                  <BookOpenIcon className="h-6 w-6 mr-4 text-blue-900" aria-hidden="true" />
                  <span className="text-gray-500 text-base">I enjoy reading fantasy and sci-fi books, my favorite author is Brandon Sanderson</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 hidden lg:block">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0
                sm:translate-x-0 lg:translate-x-0
                lg:left-[46%] lg:top-1/2 lg:-translate-y-1/2"
                >
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={lucca}
                          alt="lucca"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={anfield}
                          alt="anfield"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={museum}
                          alt="museum"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={ribs}
                          alt="ribs"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={car}
                          alt="car"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={liver}
                          alt="liverpool"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={france}
                          alt="france"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Images */}
            <div className=" flex mt-10 lg:hidden">
              <div className="h-64 w-44 overflow-hidden rounded-lg mr-2 flex-1">
                <img
                  src={lucca}
                  alt="lucca"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg mr-2 flex-1">
                <img
                  src={ribs}
                  alt="ribs"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg flex-1">
                <img
                  src={france}
                  alt="france"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
