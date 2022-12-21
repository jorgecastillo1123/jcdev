import resume from './assets/resume.pdf';

const Footer = () => (
  <div className="bg-gray-100 pb-10">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="font-bold tracking-tight text-gray-900">
        <span className="block text-2xl sm:text-3xl">Let&apos;s chat,</span>
        <span className="block text-ali-blue text-2xl sm:text-3xl">send me an email or download my resume</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="mailto:jorgecastillo1123@gmail.com?subject=Mail from Jorge's Website"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-ali-blue px-5 py-3 text-base font-medium text-white hover:bg-ali-blue"
          >
            Email me
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href={resume}
            download="resume-jorge-castillo"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-ali-blue hover:bg-indigo-50"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
