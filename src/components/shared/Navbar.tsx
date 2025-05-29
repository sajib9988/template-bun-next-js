'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/theme/ModeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-blue-500/40 shadow-md m-2 rounded-xl mx-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          LeadPoint
        </Link>

        {/* Center Menu for Desktop */}
        <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href && href !== '/';
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3 py-1 rounded-md font-medium transition-all duration-200
                  ${isActive
                    ? 'text-green font-semibold shadow-inner bg-gradient-to-t from-stone-800/70 to-stone-900/0 border border-stone-600'
                    : 'text-white font-semibold'
                  }
                  hover:text-teal-400 hover:font-semibold hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r from-slate-700/70 via-gray-800/80 to-black/80
                `}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4 md:gap-3">
          {/* Theme Toggle */}
          <ModeToggle />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 border-t border-gray-800 bg-black animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-white hover:text-teal-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
