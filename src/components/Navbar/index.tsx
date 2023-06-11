'use client';

import Image from 'next/image';
import useScrollPosition from '../../hooks/useScrollPosition';
import Logo from '../../images/logo-wlc-alevinos-2.png';
import { classNames } from '../../utils/class-names';
import Text from '../Typography/Text';
import NavLink from './NavLink';

const navItems = [
  {
    label: 'Início',
    path: '/',
  },
  {
    label: 'Contato',
    path: '/contato',
  },
  {
    label: 'Galeria',
    path: '/galeria',
  },
];

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`
      w-full
      flex justify-center gap-48 items-center
      fixed top-0 left-0 right-0 py-2
      z-50 bg-white transition-shadow duration-700
      ${classNames(
        scrollPosition > 0
          ? 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90' : '',
      )}
    `}
    >
      <Image src={Logo} alt="Logo WLC Alevinos" height={50} />
      <div className="flex justify-between items-center w-min container">
        {navItems.map((navItem) => (
          <NavLink
            href={navItem.path}
            key={navItem.label}
          >
            <Text
              text={navItem.label}
              size="text-sm"
              font="font-semibold"
            />
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
