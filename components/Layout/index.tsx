import Link from 'next/link';
import React, { useState } from 'react';
import { JsxElement } from 'typescript';

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-navyBlue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className='text-xl'>LOGO</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/home"
                    className="hover:bg-navyBlue-600 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Início
                  </Link>

                  <Link
                    href="/about"
                    className="text-gray-300 hover:bg-navyBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sobre
                  </Link>

                  <Link
                    href="/services"
                    className="text-gray-300 hover:bg-navyBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Serviços
                  </Link>

                  <Link
                    href="/gallery"
                    className="text-gray-300 hover:bg-navyBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Galeria
                  </Link>

                  <Link
                    href="/contact"
                    className="text-gray-300 hover:bg-navyBlue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contatos
                  </Link>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#000000"
                    className="w-6 h-6"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div>
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/home"
                  className="hover:bg-navyBlue-600 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Início
                </Link>

                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-navyBlue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sobre
                </Link>

                <Link
                  href="/services"
                  className="text-gray-300 hover:bg-navyBlue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Serviços
                </Link>

                <Link
                  href="/gallery"
                  className="text-gray-300 hover:bg-navyBlue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Galeria
                </Link>

                <Link
                  href="/contact"
                  className="text-gray-300 hover:bg-navyBlue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {children}
    </div>
  );
}

export default Layout;
