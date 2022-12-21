import { SunIcon } from '@heroicons/react/24/solid';
import { Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';

import About from './About';
import ProfessionalExperience from './ProfessionalExperience';
import Projects from './Projects';
import Footer from './Footer';

const messages = [
  'React',
  'Next',
  'Javascript',
  'Contentful',
  'Wordpress',
  'Shopify',
  'Nacelle',
  'Tailwind',
  'React Query',
  'CSS3',
  'HTML5',
  'Git',
  'Jira',
  'Testing Frameworks',
];

const Home = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageIndex(messageIndex + 1);

      if (messageIndex === messages.length - 1) {
        setMessageIndex(0);
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [messageIndex]);

  return (
    <>
      <main>
        <div className="absolute inset-x-0 top-[-11rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[50deg] sm:left-[calc(50%-30rem)] sm:h-[48.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#01579b" />
                <stop offset={1} stopColor="#01579b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative px-6 lg:px-8 h-full sm:h-[calc(100vh-120px)]">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="grid">
              <h1 className="text-3xl font-bold tracking-normal sm:text-center sm:text-6xl !leading-tight max-w-[700px]">
                Sr. Front-End Developer with experience in
              </h1>
              <Transition
                show
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <p className="mt-6 text-5xl text-blue-800 sm:text-center italic">
                  {messages[messageIndex]}
                </p>
              </Transition>
              <div className="mt-6 flex items-center justify-center gap-x-4 sm:justify-center">
                <p className="flex items-center justify-center text-2xl sm:text-4xl leading-8 text-gray-600 sm:text-center">
                  Based in San Diego, California
                  <SunIcon className="h-10 w-10 ml-2 text-ali-yellow animate-spin-slow" aria-hidden="true" />
                </p>
              </div>
            </div>
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
