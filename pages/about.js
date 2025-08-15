// import React from 'react';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">
//               About Modulab
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Since 2017, we've been pioneering scalable extraction solutions for the rapidly evolving 
//               hemp and cannabis industries with veteran-owned precision and expertise.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <div className="space-y-6 text-gray-600 leading-relaxed">
//                 <p className="text-lg">
//                   Founded in 2017, Modulab was born from a vision to transform the extraction 
//                   industry through innovative engineering and modular design. As the hemp and 
//                   cannabis markets began their rapid expansion, we recognized the need for 
//                   scalable, reliable extraction solutions that could adapt to this dynamic landscape.
//                 </p>
//                 <p>
//                   Our veteran-owned company combines military precision with entrepreneurial 
//                   innovation, delivering turnkey extraction laboratories that meet the highest 
//                   standards of safety, efficiency, and compliance. We don't just build equipment, we 
//                   engineer solutions that grow with your business.
//                 </p>
//                 <p>
//                   Today, Modulab stands at the forefront of extraction technology, serving clients 
//                   across the hemp and cannabis industries with modular systems that are ready 
//                   for production from day one.
//                 </p>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-2 shadow-2xl">
//                 <div className="bg-white rounded-lg p-8 transform -rotate-2">
//                   <div className="text-center">
//                     <div className="text-4xl font-bold text-gray-900 mb-2">2017</div>
//                     <div className="text-gray-600 mb-6">Founded</div>
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div className="bg-orange-50 p-3 rounded-lg">
//                         <div className="font-semibold text-orange-800">Veteran</div>
//                         <div className="text-orange-600">Owned</div>
//                       </div>
//                       <div className="bg-orange-50 p-3 rounded-lg">
//                         <div className="font-semibold text-orange-800">Expert</div>
//                         <div className="text-orange-600">Engineers</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A diverse group of experts united by our commitment to excellence and innovation 
//               in extraction technology.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Thermodynamic Engineers</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Our engineering team applies advanced thermodynamic principles to optimize 
//                 extraction efficiency and ensure consistent, high-quality results.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Master Welders</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Precision craftsmanship meets cutting-edge technology. Our certified welders 
//                 ensure every component meets the highest structural and safety standards.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">Entrepreneurs</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Forward-thinking innovators who understand the evolving needs of emerging 
//                 markets and drive continuous improvement in our solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
//             <p className="text-xl text-gray-600">
//               Our core values guide every project and shape our commitment to excellence.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-gray-900 mb-2">Veteran Owned</h3>
//               <p className="text-gray-600 text-sm">Military precision and discipline in everything we do.</p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-gray-900 mb-2">Quality Guarantee</h3>
//               <p className="text-gray-600 text-sm">We stand behind our work with comprehensive warranties.</p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-gray-900 mb-2">Scalable Solutions</h3>
//               <p className="text-gray-600 text-sm">Systems that grow with your business and adapt to market changes.</p>
//             </div>

//             <div className="text-center">
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
//                 </svg>
//               </div>
//               <h3 className="font-bold text-gray-900 mb-2">Innovation First</h3>
//               <p className="text-gray-600 text-sm">Pioneering new approaches to extraction technology.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Industry Focus */}
//       <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Serving the Future of Extraction
//           </h2>
//           <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
//             The hemp and cannabis industries are evolving rapidly, and we're here to help you 
//             stay ahead with cutting-edge extraction solutions that adapt to regulatory changes 
//             and market demands.
//           </p>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Hemp Industry</h3>
//               <p className="text-orange-100 leading-relaxed">
//               Covering every stage of production, our modular systems provide 
//                 the flexibility and compliance features needed in this regulated market.
//               </p>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//               <h3 className="text-2xl font-bold text-white mb-4">Cannabis Market</h3>
//               <p className="text-orange-100 leading-relaxed">
//                 Supporting licensed operators with professional-grade extraction laboratories 
//                 that meet strict regulatory requirements and production demands.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Work With Modulab?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Experience the difference that veteran-owned precision and innovative engineering 
//             can make for your extraction operation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="/contact"
//               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
//             >
//               Get in Touch
//             </a>
//             <a
//               href="/solutions"
//               className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all"
//             >
//               View Solutions
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// // }
// import React from 'react';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">
//               About Modulab
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Since 2017, we&apos;ve been pioneering scalable extraction solutions for the rapidly evolving 
//               hemp and cannabis industries with veteran-owned precision and expertise.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <div className="space-y-6 text-gray-600 leading-relaxed">
//                 <p className="text-lg">
//                   Founded in 2017, Modulab was born from a vision to transform the extraction 
//                   industry through innovative engineering and modular design. As the hemp and 
//                   cannabis markets began their rapid expansion, we recognized the need for 
//                   scalable, reliable extraction solutions that could adapt to this dynamic landscape.
//                 </p>
//                 <p>
//                   Our veteran-owned company combines military precision with entrepreneurial 
//                   innovation, delivering turnkey extraction laboratories that meet the highest 
//                   standards of safety, efficiency, and compliance. We don&apos;t just build equipment, we 
//                   engineer solutions that grow with your business.
//                 </p>
//                 <p>
//                   Today, Modulab stands at the forefront of extraction technology, serving clients 
//                   across the hemp and cannabis industries with modular systems that are ready 
//                   for production from day one.
//                 </p>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-2 shadow-2xl">
//                 <div className="bg-white rounded-lg p-8 transform -rotate-2">
//                   <div className="text-center">
//                     <div className="text-4xl font-bold text-gray-900 mb-2">2017</div>
//                     <div className="text-gray-600 mb-6">Founded</div>
//                     <div className="grid grid-cols-2 gap-4 text-sm">
//                       <div className="bg-orange-50 p-3 rounded-lg">
//                         <div className="font-semibold text-orange-800">Veteran</div>
//                         <div className="text-orange-600">Owned</div>
//                       </div>
//                       <div className="bg-orange-50 p-3 rounded-lg">
//                         <div className="font-semibold text-orange-800">Expert</div>
//                         <div className="text-orange-600">Engineers</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Our Team Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A diverse group of experts united by our commitment to excellence and innovation 
//               in extraction technology.
//             </p>
//           </div>

//           {/* Team Cards omitted for brevity, same as original */}
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Our core values guide every project and shape our commitment to excellence.
//           </p>
//           {/* Value Cards omitted for brevity */}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Work With Modulab?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Experience the difference that veteran-owned precision and innovative engineering 
//             can make for your extraction operation.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105">
//               Get in Touch
//             </Link>
//             <Link href="/solutions" className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all">
//               View Solutions
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from 'react';
// import Link from 'next/link';

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">
//               About Modulab
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We are pioneers in modular extraction laboratory design and manufacturing, 
//               delivering complete turnkey solutions for the extraction industry.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Founded with a vision to revolutionize the extraction industry, Modulab 
//                 Extraction Systems emerged from the need for faster, more efficient 
//                 laboratory deployment solutions.
//               </p>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 We recognized that traditional laboratory construction was time-consuming, 
//                 expensive, and often resulted in operational delays. Our innovative approach 
//                 delivers fully equipped, prefabricated laboratories that are ready for 
//                 production from day one.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Today, we serve clients across the industry with modular solutions that 
//                 combine cutting-edge technology, expert engineering, and uncompromising 
//                 quality standards.
//               </p>
//             </div>
//             <div className="relative">
//               <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 h-80 flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//                     <span className="text-white font-bold text-2xl">M</span>
//                   </div>
//                   <p className="text-orange-800 font-semibold">Innovation in Every Module</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Everything we do is guided by our core principles and commitment 
//               to excellence in extraction laboratory solutions.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 We constantly push the boundaries of modular design and extraction 
//                 technology to deliver cutting-edge solutions.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Every module we manufacture meets the highest standards for safety, 
//                 reliability, and performance in extraction operations.
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
//                 <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Speed</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Our modular approach dramatically reduces deployment time, getting 
//                 your extraction operation running faster than ever before.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our experienced professionals bring decades of combined expertise 
//               in extraction technology and modular construction.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-2xl">CM</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Chuck Mason</h3>
//               <p className="text-orange-600 font-semibold mb-4">Engineer</p>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Chuck leads our engineering team with extensive experience in extraction 
//                 system design and modular construction. He specializes in creating custom 
//                 solutions that meet specific operational requirements.
//               </p>
//               <a
//                 href="mailto:chuck@modulabtech.com"
//                 className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 chuck@modulabtech.com
//               </a>
//             </div>
            
//             <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
//               <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-2xl">BR</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Brandon Rakowski</h3>
//               <p className="text-orange-600 font-semibold mb-4">Sales</p>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Brandon brings deep industry knowledge and a consultative approach to 
//                 helping clients find the perfect extraction solution. He handles technical 
//                 specifications and project planning with expertise.
//               </p>
//               <a
//                 href="tel:423-580-2818"
//                 className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 423-580-2818
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold text-white mb-6">
//             Ready to Work with Us?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Experience the Modulab difference with our innovative extraction 
//             laboratory solutions and dedicated support team.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/contact"
//               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
//             >
//               Get in Touch
//             </Link>
//             <Link
//               href="/solutions"
//               className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all"
//             >
//               View Solutions
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Modulab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2017, we&apos;ve been pioneering scalable extraction solutions for the rapidly evolving 
              hemp and cannabis industries with veteran-owned precision and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2017, Modulab was born from a vision to transform the extraction 
                  industry through innovative engineering and modular design. As the hemp and 
                  cannabis markets began their rapid expansion, we recognized the need for 
                  scalable, reliable extraction solutions that could adapt to this dynamic landscape.
                </p>
                <p>
                  Our veteran-owned company combines military precision with entrepreneurial 
                  innovation, delivering turnkey extraction laboratories that meet the highest 
                  standards of safety, efficiency, and compliance. We don&apos;t just build equipment, we 
                  engineer solutions that grow with your business.
                </p>
                <p>
                Today, Modulab proudly serves clients nationwide,delivering production-ready extraction systems built to perform and backed by our unwavering commitment to quality
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 transform rotate-2 shadow-2xl">
                <div className="bg-white rounded-lg p-8 transform -rotate-2">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 mb-2">2017</div>
                    <div className="text-gray-600 mb-6">Founded</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="font-semibold text-orange-800">Veteran</div>
                        <div className="text-orange-600">Owned</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <div className="font-semibold text-orange-800">Expert</div>
                        <div className="text-orange-600">Engineers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of experts united by our commitment to excellence and innovation 
              in extraction technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Engineers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engineers</h3>
              <p className="text-gray-600 leading-relaxed">
                With over 25 years of experience, our engineering team applies advanced thermodynamic principles to optimize 
                extraction efficiency and ensure consistent, high-quality results.
              </p>
            </div>

            {/* Master Welders */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Master Welders</h3>
              <p className="text-gray-600 leading-relaxed">
                Precision craftsmanship meets cutting-edge technology. Our certified welders 
                ensure every component meets the highest structural and safety standards.
              </p>
            </div>

            {/* Entrepreneurs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Entrepreneurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Forward-thinking innovators who understand the evolving needs of emerging 
                markets and drive continuous improvement in our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-xl text-gray-600">
              Our core values guide every project and shape our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Veteran Owned</h3>
              <p className="text-gray-600 text-sm">Military precision and discipline in everything we do.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 text-sm">We stand behind our work with comprehensive warranties.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Scalable Solutions</h3>
              <p className="text-gray-600 text-sm">Systems that grow with your business and adapt to market changes.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Innovation First</h3>
              <p className="text-gray-600 text-sm">Pioneering new approaches to extraction technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Serving the Future of Extraction
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            The hemp and cannabis industries are evolving rapidly, and we&apos;re here to help you 
            stay ahead with cutting-edge extraction solutions that adapt to regulatory changes 
            and market demands.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Hemp Industry</h3>
              <p className="text-orange-100 leading-relaxed">
                Covering every stage of production, our modular systems provide 
                the flexibility and compliance features needed in this regulated market.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Cannabis Market</h3>
              <p className="text-orange-100 leading-relaxed">
                Supporting licensed operators with professional-grade extraction laboratories 
                that meet strict regulatory requirements and production demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Modulab?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the difference that veteran-owned precision and innovative engineering 
            can make for your extraction operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105">
              Get in Touch
            </Link>
            <Link href="/solutions" className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:border-gray-500 hover:text-white transition-all">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}