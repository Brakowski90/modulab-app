import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                {/* Logo placeholder - replace with your SVG logo */}
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Modulab</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <Link href="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Solutions
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
                <a 
                  href="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
             
      {/* Page Content */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}