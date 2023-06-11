'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { classNames } from '../../utils/class-names';

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

const NavLink = ({ href, children, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const activeLink = 'text-blue-800';
  const isActive = pathname === href;

  return (
    <Link href={href} {...props} className={`mx-4 text-center ${classNames(isActive ? activeLink : '')}`}>
      {children}
    </Link>
  );
};

export default NavLink;
