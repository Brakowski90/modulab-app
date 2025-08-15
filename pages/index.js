// import React from 'react';
// import Link from 'next/link';

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Complete Turnkey
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 block">
//                   Extraction Labs
//                 </span>
//               </h1>
//               <p className="mt-6 text-xl text-gray-600 leading-relaxed">
//                 Revolutionary modular extraction laboratories delivered fully prefabricated, 
//                 with all extraction equipment and lab furnishings installed, ready for production.
//               </p>
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <Link href="/solutions" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg text-center">
//                   View Solutions
//                 </Link>
//                 <a href="mailto:chuck@modulabtech.com?subject=Consultation Request - Modulab" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all text-center">
//                   Schedule Consultation
//                 </a>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
//                 <div className="bg-white rounded-lg p-6 transform -rotate-3">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-500 font-mono text-sm">Lab Module</span>
//                     </div>
//                     <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-500 font-mono text-sm">Equipment</span>
//                     </div>
//                     <div className="col-span-2 h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
//                       <span className="text-orange-700 font-semibold">Ready for Production</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="solutions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Extraction Solutions</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               From standalone extractors to fully integrated modular laboratories, 
//               we deliver everything you need to start production immediately.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Modular Labs</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Fully prefabricated extraction laboratories delivered ready for immediate production. 
//                 Complete with all equipment and furnishings installed.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Standalone Extractors</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Individual extraction equipment designed for integration into existing facilities 
//                 or as part of custom laboratory configurations.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-lg transform rotate-45"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Turnkey Solutions</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Complete end-to-end service from design and manufacturing to installation 
//                 and commissioning. Ready to operate from day one.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">24/7</div>
//               <div className="text-orange-100">Support Available</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">100%</div>
//               <div className="text-orange-100">Turnkey Solutions</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">Fast</div>
//               <div className="text-orange-100">Delivery Times</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">Expert</div>
//               <div className="text-orange-100">Engineering Team</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Start Your Extraction Operation?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Get in touch with our team to discuss your requirements and receive a custom quote 
//             for your modular extraction laboratory or standalone equipment.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab Project" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105">
//               Request Quote
//             </a>
//             <a href="mailto:chuck@modulabtech.com?subject=Brochure Request - Modulab" className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all">
//               Download Brochure
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="col-span-2">
//               <div className="flex items-center mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-lg">M</span>
//                 </div>
//                 <span className="ml-2 text-xl font-bold text-white">Modulab Extraction Systems</span>
//               </div>
//               <p className="text-gray-400 mb-4 max-w-md">
//                 Complete turnkey extraction laboratory solutions and standalone extractors. 
//                 Delivered ready for production.
//               </p>
//               <a
//                 href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//                 @modulab_extraction_systems
//               </a>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Solutions</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/solutions" className="hover:text-white transition-colors">Modular Labs</Link></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Standalone Equipment</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
//                 <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2023 Modulab Extraction Systems. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import Link from 'next/link';

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Complete Turnkey
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 block">
//                   Extraction Labs
//                 </span>
//               </h1>
//               <p className="mt-6 text-xl text-gray-600 leading-relaxed">
//                 Revolutionary modular extraction laboratories delivered fully prefabricated, 
//                 with all extraction equipment and lab furnishings installed, ready for production.
//               </p>
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <Link href="/solutions" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg text-center">
//                   View Solutions
//                 </Link>
//                 <a href="mailto:chuck@modulabtech.com?subject=Consultation Request - Modulab" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all text-center">
//                   Schedule Consultation
//                 </a>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
//                 <div className="bg-white rounded-lg p-6 transform -rotate-3">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-500 font-mono text-sm">Lab Module</span>
//                     </div>
//                     <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-500 font-mono text-sm">Equipment</span>
//                     </div>
//                     <div className="col-span-2 h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
//                       <span className="text-orange-700 font-semibold">Ready for Production</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="solutions" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Extraction Solutions</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               From standalone extractors to fully integrated modular laboratories, 
//               we deliver everything you need to start production immediately.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Modular Labs</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Fully prefabricated extraction laboratories delivered ready for immediate production. 
//                 Complete with all equipment and furnishings installed.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Standalone Extractors</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Individual extraction equipment designed for integration into existing facilities 
//                 or as part of custom laboratory configurations.
//               </p>
//             </div>
            
//             <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-lg transform rotate-45"></div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Turnkey Solutions</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Complete end-to-end service from design and manufacturing to installation 
//                 and commissioning. Ready to operate from day one.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">24/7</div>
//               <div className="text-orange-100">Support Available</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">100%</div>
//               <div className="text-orange-100">Turnkey Solutions</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">Fast</div>
//               <div className="text-orange-100">Delivery Times</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-white mb-2">Expert</div>
//               <div className="text-orange-100">Engineering Team</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Start Your Extraction Operation?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Get in touch with our team to discuss your requirements and receive a custom quote 
//             for your modular extraction laboratory or standalone equipment.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab Project" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105">
//               Request Quote
//             </a>
//             <a href="mailto:chuck@modulabtech.com?subject=Brochure Request - Modulab" className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all">
//               Download Brochure
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="col-span-2">
//               <div className="flex items-center mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-lg">M</span>
//                 </div>
//                 <span className="ml-2 text-xl font-bold text-white">Modulab Extraction Systems</span>
//               </div>
//               <p className="text-gray-400 mb-4 max-w-md">
//                 Complete turnkey extraction laboratory solutions and standalone extractors. 
//                 Delivered ready for production.
//               </p>
//               <a
//                 href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//                 @modulab_extraction_systems
//               </a>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Solutions</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/solutions" className="hover:text-white transition-colors">Modular Labs</Link></li>
//                 <li><Link href="/solutions" className="hover:text-white transition-colors">Standalone Equipment</Link></li>
//                 <li><Link href="/solutions" className="hover:text-white transition-colors">Custom Solutions</Link></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-white font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
//                 <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
//                 <li><a href="mailto:chuck@modulabtech.com" className="hover:text-white transition-colors">Support</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2023 Modulab Extraction Systems. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Complete Turnkey
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500 block">
                  Extraction Labs
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Revolutionary modular extraction laboratories delivered fully prefabricated, 
                with all extraction equipment and lab furnishings installed, ready for production.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/solutions" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg text-center">
                  View Solutions
                </Link>
                <a href="mailto:chuck@modulabtech.com?subject=Consultation Request - Modulab" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all text-center">
                  Schedule Consultation
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                <div className="bg-white rounded-lg p-6 transform -rotate-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 font-mono text-sm">Lab Module</span>
                    </div>
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500 font-mono text-sm">Equipment</span>
                    </div>
                    <div className="col-span-2 h-20 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                      <span className="text-orange-700 font-semibold">Ready for Production</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Extraction Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From standalone extractors to fully integrated modular laboratories, 
              we deliver everything you need to start production immediately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modular Labs</h3>
              <p className="text-gray-600 leading-relaxed">
                Fully prefabricated extraction laboratories delivered ready for immediate production. 
                Complete with all equipment and furnishings installed.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standalone Extractors</h3>
              <p className="text-gray-600 leading-relaxed">
                Individual extraction equipment designed for integration into existing facilities 
                or as part of custom laboratory configurations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:scale-105">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Turnkey Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete end-to-end service from design and manufacturing to installation 
                and commissioning. Ready to operate from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-orange-100">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-orange-100">Turnkey Solutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Fast</div>
              <div className="text-orange-100">Delivery Times</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Expert</div>
              <div className="text-orange-100">Engineering Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Extraction Operation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a custom quote 
            for your modular extraction laboratory or standalone equipment.
          </p>
          <div className="flex justify-center">
            <a href="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab Project" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="ml-2 text-xl font-bold text-white">Modulab Extraction Systems</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Complete turnkey extraction laboratory solutions and standalone extractors. 
                Delivered ready for production.
              </p>
              <a
                href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @modulab_extraction_systems
              </a>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/solutions" className="hover:text-white transition-colors">Modular Labs</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Standalone Equipment</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="mailto:chuck@modulabtech.com" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Modulab Extraction Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;