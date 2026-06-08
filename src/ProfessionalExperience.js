const experience = [
  {
    name: 'Wilqo',
    role: 'Senior Front End Engineer',
    description: 'Lead AI-powered engineering workflows, QA automation, and an end-to-end development pipeline while architecting React and Next.js products that serve more than 150 mortgage-industry clients.',
  },
  {
    name: 'B-Stock Solutions',
    role: 'Senior Front End Engineer',
    description: 'Redesigned the global marketplace experience and helped migrate the Magento application to a modern Next.js front end.',
  },
  {
    name: 'National Funding',
    role: 'Senior Front End Engineer',
    description: 'Built client-facing interfaces for opening and managing loans, including tools for calculating interest costs and other loan-dependent expenses.',
  },
  {
    name: 'Fuzzy',
    role: 'Senior Front End Engineer',
    description: 'Refactored a legacy WordPress application using Next.js and Nacelle, cutting load times in half, supporting 30% customer growth, achieving 100% unit test coverage, and introducing ADA compliance.',
  },
  {
    name: 'Holonis',
    role: 'Software Engineer',
    description: 'Migrated a legacy Angular application to React, created an Atomic Design UI library, and improved media performance, advertising integration, and SEO.',
  },
  {
    name: 'Netsapiens',
    role: 'Software Engineer II',
    description: 'Built React and PHP communication portals using WebRTC, along with D3.js reporting tools and real-time features for hospitality and telemarketing teams.',
  },
  {
    name: 'Edisen',
    role: 'Senior Front End Engineer',
    description: 'Built a Node.js and React media collaboration platform with WebSockets, AWS S3 file sharing, internal chat, and asset metadata management.',
  },
  {
    name: 'Miva',
    role: 'Front End Developer',
    description: 'Implemented customer-facing website features, resolved production issues, and improved e-commerce functionality in a support-focused environment.',
  },
  {
    name: 'RunningFish Design Studio',
    role: 'Web Developer',
    description: 'Designed and developed custom websites for restaurants, bars, and retailers, including SEO strategy, visual design, and brand identity work.',
  },
  {
    name: 'Alp N Rock',
    role: 'Webmaster',
    description: 'Redesigned and enhanced a Shopify storefront, including payment and discount features that improved the shopping experience.',
  },
  {
    name: 'Clarify Medical',
    role: 'Webmaster',
    description: 'Built a Magento e-commerce platform for a product launch and integrated advertising and social engagement initiatives with the marketing team.',
  },
  {
    name: 'Vertical HR',
    role: 'Front End Developer',
    description: 'Developed a human resources management front end with Next.js and Tailwind, integrated with a Node.js backend.',
  },
];

const ProfessionalExperience = () => (
  <section className="experience-section" id="experience">
    <div className="section-shell experience-layout">
      <div className="experience-intro reveal reveal-left" data-reveal>
        <p className="eyebrow">Professional experience</p>
        <h2>
          A career spent
          <br />
          making the
          <span className="heading-lime"> web</span>
          <span> better.</span>
        </h2>
        <p>
          From agency work to product architecture, every role has sharpened how I
          think about teams, systems, and users.
        </p>
      </div>

      <div className="experience-list">
        {experience.map((job, index) => (
          <article
            className="experience-row reveal reveal-up"
            data-reveal
            key={job.name}
            style={{ '--reveal-delay': `${Math.min(index * 55, 220)}ms` }}
          >
            <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{job.name}</h3>
              <h4>{job.role}</h4>
              <p>{job.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProfessionalExperience;
