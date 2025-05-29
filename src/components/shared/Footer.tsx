import React from 'react';
import { Briefcase, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 rounded-xl">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-extrabold text-xl mb-4 text-teal-300">
              <Briefcase className="h-6 w-6" />
              <span>LeadPoint</span>
            </Link>
            <p className="text-gray-400 mb-4 font-semibold">
              We help businesses generate high-quality leads through smart digital strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="font-semibold">
            <h3 className="text-lg mb-4 text-teal-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="font-semibold">
            <h3 className="text-lg mb-4 text-teal-300">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-teal-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/faq" className="hover:text-teal-400 transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="font-semibold">
            <h3 className="text-lg mb-4 text-teal-300">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <span>123 LeadPoint Avenue, Digital City, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>support@leadpoint.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} LeadPoint. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><Link href="/terms" className="hover:text-teal-400 transition-colors">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-teal-400 transition-colors">Privacy</Link></li>
                <li><Link href="/cookies" className="hover:text-teal-400 transition-colors">Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
