import { CodeBracketIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Disclosure } from '@headlessui/react';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const NavBar = () => (
  <Disclosure as="nav" className="site-nav">
    {({ open }) => (
      <>
        <div className="site-nav-inner">
          <a href="#top" className="brand-mark" aria-label="Jorge Castillo home">
            <CodeBracketIcon aria-hidden="true" />
            <span className="brand-copy">
              <strong>Jorge Castillo</strong>
              <small>Senior Front End Engineer</small>
            </span>
          </a>

          <div className="site-nav-links">
            {navigation.map((item) => (
              <a key={item.name} href={item.href}>{item.name}</a>
            ))}
          </div>

          <a
            className="pill-button pill-button-gold site-nav-cta"
            href="mailto:jorgecastillo1123@gmail.com?subject=Let&apos;s work together"
          >
            Let&apos;s talk
          </a>

          <Disclosure.Button className="mobile-menu-button">
            <span className="sr-only">Open navigation</span>
            {open ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
          </Disclosure.Button>
        </div>

        <Disclosure.Panel className="mobile-menu">
          {navigation.map((item) => (
            <Disclosure.Button key={item.name} as="a" href={item.href}>
              {item.name}
            </Disclosure.Button>
          ))}
          <Disclosure.Button
            as="a"
            href="mailto:jorgecastillo1123@gmail.com?subject=Let&apos;s work together"
          >
            Let&apos;s talk
          </Disclosure.Button>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default NavBar;
