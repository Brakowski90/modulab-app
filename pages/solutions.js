// import React from 'react';

// export default function Solutions() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">
//               Our Solutions
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover our complete range of modular extraction laboratories and standalone equipment 
//               designed for maximum efficiency and reliability.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-20">
            
//             {/* Modular Labs */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded"></div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Modular Labs</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Complete prefabricated extraction laboratories delivered ready for immediate production. 
//                 Fully equipped with all necessary extraction equipment and lab furnishings.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Turnkey installation</li>
//                 <li>• All equipment included</li>
//                 <li>• Ready for production</li>
//                 <li>• Custom configurations</li>
//               </ul>
//             </div>
            
//             {/* Standalone Equipment */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Standalone Extractors</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Individual extraction equipment designed for integration into existing facilities 
//                 or as part of custom laboratory configurations.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Flexible integration</li>
//                 <li>• High-quality components</li>
//                 <li>• Scalable solutions</li>
//                 <li>• Expert support</li>
//               </ul>
//             </div>
            
//             {/* Custom Solutions */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-lg transform rotate-45"></div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Tailored extraction systems designed to meet your specific requirements 
//                 and operational needs.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Bespoke designs</li>
//                 <li>• Engineering consultation</li>
//                 <li>• Specialized equipment</li>
//                 <li>• Ongoing support</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Gallery Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               Take a look at our recent installations and completed projects. Each image showcases 
//               the quality and precision of our modular extraction systems.
//             </p>
//             <a
//               href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//               Follow @modulab_extraction_systems
//             </a>
//           </div>
          
//           {/* Project Images Grid - Hardcoded */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* Row 1 */}
//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram1.png"
//                 alt="Modular extraction lab installation"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 1</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram2.png"
//                 alt="Extraction equipment setup"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 2</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram3.png"
//                 alt="Laboratory interior view"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 3</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram4.png"
//                 alt="Custom extraction system"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 4</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             {/* Row 2 */}
//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram5.png"
//                 alt="Modular lab construction"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 5</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram6.png"
//                 alt="Equipment installation process"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 6</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram7.png"
//                 alt="Completed extraction facility"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 7</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram8.png"
//                 alt="Precision extraction equipment"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 8</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             {/* Row 3 */}
//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram9.png"
//                 alt="Lab safety systems"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 9</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram10.png"
//                 alt="Quality control testing"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 10</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram11.png"
//                 alt="Advanced extraction technology"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 11</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>

//             <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square bg-gray-100">
//               <img
//                 src="/instagram12.png"
//                 alt="Turnkey laboratory solution"
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 onError={(e) => {
//                   e.target.style.display = 'none';
//                   e.target.nextSibling.style.display = 'flex';
//                 }}
//               />
//               <div className="hidden absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 items-center justify-center">
//                 <span className="text-white font-semibold">Project Image 12</span>
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Contact our team to discuss your extraction laboratory requirements 
//             and receive a custom quote for your project.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:chuck@modulabtech.com?subject=Solutions Inquiry - Modulab"
//               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
//             >
//               Request Quote
//             </a>
//             <a
//               href="tel:423-580-2818"
//               className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from 'react';

// export default function Solutions() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">
//               Our Solutions
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Discover our complete range of modular extraction laboratories and standalone equipment 
//               designed for maximum efficiency and reliability.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Grid */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8 mb-20">
            
//             {/* Modular Labs */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded"></div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Modular Labs</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Complete prefabricated extraction laboratories delivered ready for immediate production. 
//                 Fully equipped with all necessary extraction equipment and lab furnishings.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Turnkey installation</li>
//                 <li>• All equipment included</li>
//                 <li>• Ready for production</li>
//                 <li>• Custom configurations</li>
//               </ul>
//             </div>
            
//             {/* Standalone Equipment */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Standalone Extractors</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Individual extraction equipment designed for integration into existing facilities 
//                 or as part of custom laboratory configurations.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Flexible integration</li>
//                 <li>• High-quality components</li>
//                 <li>• Scalable solutions</li>
//                 <li>• Expert support</li>
//               </ul>
//             </div>
            
//             {/* Custom Solutions */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
//                 <div className="w-6 h-6 bg-orange-600 rounded-lg transform rotate-45"></div>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Tailored extraction systems designed to meet your specific requirements 
//                 and operational needs.
//               </p>
//               <ul className="space-y-2 text-gray-600">
//                 <li>• Bespoke designs</li>
//                 <li>• Engineering consultation</li>
//                 <li>• Specialized equipment</li>
//                 <li>• Ongoing support</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Project Gallery Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//               Take a look at our recent installations and completed projects. Each image showcases 
//               the quality and precision of our modular extraction systems.
//             </p>
//             <a
//               href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//               Follow @modulab_extraction_systems
//             </a>
//           </div>
          
//           {/* Simple Image Grid - No fancy effects */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram1.png"
//                 alt="Modular extraction lab installation"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram2.png"
//                 alt="Extraction equipment setup"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram3.png"
//                 alt="Laboratory interior view"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram4.png"
//                 alt="Custom extraction system"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram5.png"
//                 alt="Modular lab construction"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram6.png"
//                 alt="Equipment installation process"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram7.png"
//                 alt="Completed extraction facility"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram8.png"
//                 alt="Precision extraction equipment"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram9.png"
//                 alt="Lab safety systems"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram10.png"
//                 alt="Quality control testing"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram11.png"
//                 alt="Advanced extraction technology"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
//               <img
//                 src="/instagram12.png"
//                 alt="Turnkey laboratory solution"
//                 className="w-full h-48 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Get Started?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Contact our team to discuss your extraction laboratory requirements 
//             and receive a custom quote for your project.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:chuck@modulabtech.com?subject=Solutions Inquiry - Modulab"
//               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
//             >
//               Request Quote
//             </a>
//             <a
//               href="tel:423-580-2818"
//               className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all"
//             >
//               Call Now
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';

export default function Solutions() {
  // Array of all images
  const allImages = [
    { src: '/instagram1.png', alt: 'Modular extraction lab installation' },
    { src: '/instagram2.png', alt: 'Extraction equipment setup' },
    { src: '/instagram3.png', alt: 'Laboratory interior view' },
    { src: '/instagram4.png', alt: 'Custom extraction system' },
    { src: '/instagram5.png', alt: 'Modular lab construction' },
    { src: '/instagram6.png', alt: 'Equipment installation process' },
    { src: '/instagram7.png', alt: 'Completed extraction facility' },
    { src: '/instagram8.png', alt: 'Precision extraction equipment' },
    { src: '/instagram9.png', alt: 'Lab safety systems' },
    { src: '/instagram10.png', alt: 'Quality control testing' },
    { src: '/instagram11.png', alt: 'Advanced extraction technology' },
    { src: '/instagram12.png', alt: 'Turnkey laboratory solution' }
  ];

  // State to track which set of 4 images to show
  const [currentSet, setCurrentSet] = useState(0);
  
  // Calculate how many sets of 4 we have
  const totalSets = Math.ceil(allImages.length / 4);

  // Auto-cycle through image sets every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  // Get current 4 images to display
  const getCurrentImages = () => {
    const startIndex = currentSet * 4;
    return allImages.slice(startIndex, startIndex + 4);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of modular extraction laboratories and standalone equipment 
              designed for maximum efficiency and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Modular Labs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modular Labs</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Complete prefabricated extraction laboratories delivered ready for immediate production. 
                Fully equipped with all necessary extraction equipment and lab furnishings.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Turnkey installation</li>
                <li>• All equipment included</li>
                <li>• Ready for production</li>
                <li>• Custom configurations</li>
              </ul>
            </div>
            
            {/* Standalone Equipment */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standalone Extractors</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Individual extraction equipment designed for integration into existing facilities 
                or as part of custom laboratory configurations.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Flexible integration</li>
                <li>• High-quality components</li>
                <li>• Scalable solutions</li>
                <li>• Expert support</li>
              </ul>
            </div>
            
            {/* Custom Solutions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-orange-600 rounded-lg transform rotate-45"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Tailored extraction systems designed to meet your specific requirements 
                and operational needs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Precision-crafted designs</li>
                <li>• Engineering consultation</li>
                <li>• Specialized equipment</li>
                <li>• Ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take a look at our recent installations and completed projects. Each image showcases 
              the quality and precision of our modular extraction systems.
            </p>
            <a
              href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @modulab_extraction_systems
            </a>
          </div>
          
          {/* Rotating Image Carousel - 4 images cycling */}
          <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 ease-in-out">
              {getCurrentImages().map((image, index) => (
                <div key={`${currentSet}-${index}`} className="bg-gray-100 rounded-lg overflow-hidden shadow-md transform transition-all duration-1000 ease-in-out hover:shadow-lg hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover transition-all duration-1000"
                  />
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSets }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSet(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSet 
                      ? 'bg-orange-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image set ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSet((prev) => prev === 0 ? totalSets - 1 : prev - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-200"
              aria-label="Previous images"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentSet((prev) => (prev + 1) % totalSets)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-all duration-200"
              aria-label="Next images"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss your extraction laboratory requirements 
            and receive a custom quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chuck@modulabtech.com?subject=Solutions Inquiry - Modulab"
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
            >
              Request Quote
            </a>
            <a
              href="tel:423-580-2818"
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}