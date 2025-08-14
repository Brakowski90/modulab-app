// import React from 'react';

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold text-gray-900 mb-6">
//               Contact Our Team
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Ready to discuss your extraction laboratory needs? Get in touch with our experts 
//               to explore custom solutions and receive a detailed quote.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Cards */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            
//             {/* Chuck Mason Card */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="text-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">CM</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Chuck Mason</h3>
//                 <p className="text-gray-600">Engineer</p>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Email</p>
//                     <a href="mailto:chuck@modulabtech.com" className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
//                       chuck@modulabtech.com
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="pt-4">
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Chuck specializes in custom extraction laboratory solutions and can help you design 
//                     the perfect modular system for your operation.
//                   </p>
//                 </div>
                
//                 <div className="pt-4">
//                   <a
//                     href="mailto:chuck@modulabtech.com?subject=Modulab Inquiry"
//                     className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block text-center"
//                   >
//                     Email Chuck
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Brandon Rakowski Card */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
//               <div className="text-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">BR</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">Brandon Rakowski</h3>
//                 <p className="text-gray-600">Sales</p>
//               </div>
              
//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Phone</p>
//                     <a href="tel:423-580-2818" className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
//                       423-580-2818
//                     </a>
//                   </div>
//                 </div>
                
//                 <div className="pt-4">
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Brandon handles technical specifications, installation planning, and can answer 
//                     detailed questions about our extraction systems and equipment.
//                   </p>
//                 </div>
                
//                 <div className="pt-4">
//                   <a
//                     href="tel:423-580-2818"
//                     className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block text-center"
//                   >
//                     Call Brandon
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Contact Methods */}
//       <section className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Connect</h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="p-6">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
//               <p className="text-gray-600 text-sm mb-4">See our latest projects and installations</p>
//               <a
//                 href="https://www.instagram.com/modulab_extraction_systems/?hl=en"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-orange-600 hover:text-orange-700 font-medium"
//               >
//                 @modulab_extraction_systems
//               </a>
//             </div>
            
//             <div className="p-6">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">Request a Quote</h3>
//               <p className="text-gray-600 text-sm mb-4">Get a detailed proposal for your project</p>
//               <a
//                 href="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab Project"
//                 className="text-orange-600 hover:text-orange-700 font-medium"
//               >
//                 Request a Quote
//               </a>
//             </div>
            
//             <div className="p-6">
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//                 <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="font-semibold text-gray-900 mb-2">Schedule Consultation</h3>
//               <p className="text-gray-600 text-sm mb-4">Book a call to discuss your needs</p>
//               <a
//                 href="mailto:chuck@modulabtech.com?subject=Consultation Request - Modulab"
//                 className="text-orange-600 hover:text-orange-700 font-medium"
//               >
//                 Book Meeting
//               </a>
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
//             Whether you need a complete modular lab or standalone equipment, 
//             we're here to help bring your extraction operation to life.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:chuck@modulabtech.com?subject=Modulab Project Inquiry"
//               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
//             >
//               Start Your Project
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

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Our Team</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Ready to discuss your extraction laboratory needs? Get in touch with our experts 
//             to explore custom solutions and receive a detailed quote.
//           </p>
//         </div>
//       </section>

//       {/* Contact Cards */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

//             {/* Chuck Mason */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
//               <div className="text-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">CM</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-1">Chuck Mason</h3>
//                 <p className="text-gray-600">Engineer</p>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Email</p>
//                     <a href="mailto:chuck@modulabtech.com" className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
//                       chuck@modulabtech.com
//                     </a>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 text-sm leading-relaxed pt-4">
//                   Chuck specializes in custom extraction laboratory solutions and can help you design 
//                   the perfect modular system for your operation.
//                 </p>

//                 <a
//                   href="mailto:chuck@modulabtech.com?subject=Modulab Inquiry"
//                   className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block text-center pt-4"
//                 >
//                   Email Chuck
//                 </a>
//               </div>
//             </div>

//             {/* Brandon Rakowski */}
//             <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
//               <div className="text-center mb-6">
//                 <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">BR</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-1">Brandon Rakowski</h3>
//                 <p className="text-gray-600">Sales</p>
//               </div>

//               <div className="space-y-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
//                     <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Phone</p>
//                     <a href="tel:423-580-2818" className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
//                       423-580-2818
//                     </a>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 text-sm leading-relaxed pt-4">
//                   Brandon handles technical specifications, installation planning, and can answer 
//                   detailed questions about our extraction systems and equipment.
//                 </p>

//                 <a
//                   href="tel:423-580-2818"
//                   className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block text-center pt-4"
//                 >
//                   Call Brandon
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Additional Contact Methods */}
//       <section className="py-20 bg-white text-center">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Connect</h2>
//           <div className="grid md:grid-cols-3 gap-8">

//             <ContactCard
//               icon="instagram"
//               title="Instagram"
//               description="See our latest projects and installations"
//               link="https://www.instagram.com/modulab_extraction_systems/?hl=en"
//               linkText="@modulab_extraction_systems"
//             />

//             <ContactCard
//               icon="mail"
//               title="Request a Quote"
//               description="Get a detailed proposal for your project"
//               link="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab Project"
//               linkText="Request a Quote"
//             />

//             <ContactCard
//               icon="clock"
//               title="Schedule Consultation"
//               description="Book a call to discuss your needs"
//               link="mailto:chuck@modulabtech.com?subject=Consultation Request - Modulab"
//               linkText="Book Meeting"
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900 text-center">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
//           <p className="text-xl text-gray-300 mb-8">
//             Whether you need a complete modular lab or standalone equipment, 
//             we're here to help bring your extraction operation to life.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a
//               href="mailto:chuck@modulabtech.com?subject=Modulab Project Inquiry"
//               className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
//             >
//               Start Your Project
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

// // Reusable Contact Card Component
// function ContactCard({ icon, title, description, link, linkText }) {
//   const icons = {
//     instagram: (
//       <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//       </svg>
//     ),
//     mail: (
//       <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//       </svg>
//     ),
//     clock: (
//       <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//   };

//   return (
//     <div className="p-6 text-center">
//       <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
//         {icons[icon]}
//       </div>
//       <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       <a href={link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">
//         {linkText}
//       </a>
//     </div>
//   );
// }

import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your extraction laboratory needs? Get in touch with our experts 
            to explore custom solutions and receive a detailed quote.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

            {/* Chuck Mason */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">CM</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Chuck Mason</h3>
                <p className="text-gray-600">Engineer</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:chuck@modulabtech.com" className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
                      chuck@modulabtech.com
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed pt-4">
                  Chuck specializes in custom extraction laboratory solutions and can help you design 
                  the perfect modular system for your operation.
                </p>

                <a
                  href="mailto:chuck@modulabtech.com?subject=Modulab Inquiry"
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block text-center pt-4"
                >
                  Email Chuck
                </a>
              </div>
            </div>

            {/* Brandon Rakowski */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">BR</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Brandon Rakowski</h3>
                <p className="text-gray-600">Sales</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:423-580-2818" className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
                      423-580-2818
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed pt-4">
                  Brandon handles technical specifications, installation planning, and can answer 
                  detailed questions about our extraction systems and equipment.
                </p>

                <a
                  href="tel:423-580-2818"
                  className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block text-center pt-4"
                >
                  Call Brandon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Connect</h2>
          <div className="grid md:grid-cols-3 gap-8">

            <ContactCard
              icon="instagram"
              title="Instagram"
              description="See our latest projects and installations"
              link="https://www.instagram.com/modulab_extraction_systems/?hl=en"
              linkText="@modulab_extraction_systems"
            />

            <ContactCard
              icon="mail"
              title="Request a Quote"
              description="Get a detailed proposal for your project"
              link="mailto:chuck@modulabtech.com?subject=Quote Request - Modulab Project"
              linkText="Request a Quote"
            />

            <ContactCard
              icon="clock"
              title="Schedule Consultation"
              description="Book a call to discuss your needs"
              link="mailto:chuck@modulabtech.com?subject=Consultation Request - Modulab"
              linkText="Book Meeting"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you need a complete modular lab or standalone equipment, 
            we&apos;re here to help bring your extraction operation to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:chuck@modulabtech.com?subject=Modulab Project Inquiry"
              className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-all transform hover:scale-105"
            >
              Start Your Project
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

// Reusable Contact Card Component
function ContactCard({ icon, title, description, link, linkText }) {
  const icons = {
    instagram: (
      <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    mail: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className="p-6 text-center">
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
        {icons[icon]}
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">
        {linkText}
      </a>
    </div>
  );
}