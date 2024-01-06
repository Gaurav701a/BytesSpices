//Before

// import React from 'react';
// import {
//   FaDribbbleSquare,
//   FaFacebookSquare,
//   FaGithubSquare,
//   FaInstagram,
//   FaTwitterSquare,
// } from 'react-icons/fa';
// import './Footer.css'; // Import the corresponding CSS file

// const Footer = () => {
//   return (
//     <div className='footer-container'>
//       <div className='max-width-container grid'>
//         <div className='footer-info'>
//           <h1 className='company-name'>WsCube Tech.</h1>
//           <p className='company-description'>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
//             ullam iste repellat consequatur libero reiciendis, blanditiis
//             accusantium.
//           </p>
//           <div className='social-icons'>
//             <FaFacebookSquare size={30} />
//             <FaInstagram size={30} />
//             <FaTwitterSquare size={30} />
//             <FaGithubSquare size={30} />
//           </div>
//         </div>
//         <div className='footer-links'>
//           <div>
//             <h6 className='footer-section-title'>Solutions</h6>
//             <ul>
//               <li className='footer-link'>Analytics</li>
//               <li className='footer-link'>Marketing</li>
//               <li className='footer-link'>Commerce</li>
//               <li className='footer-link'>Insights</li>
//             </ul>
//           </div>
//           <div>
//             <h6 className='footer-section-title'>Support</h6>
//             <ul>
//               <li className='footer-link'>Pricing</li>
//               <li className='footer-link'>Documentation</li>
//               <li className='footer-link'>Guides</li>
//               <li className='footer-link'>API Status</li>
//             </ul>
//           </div>
//           <div>
//             <h6 className='footer-section-title'>Company</h6>
//             <ul>
//               <li className='footer-link'>About</li>
//               <li className='footer-link'>Blog</li>
//               <li className='footer-link'>Jobs</li>
//               <li className='footer-link'>Press</li>
//               <li className='footer-link'>Careers</li>
//             </ul>
//           </div>
//           <div>
//             <h6 className='footer-section-title'>Legal</h6>
//             <ul>
//               <li className='footer-link'>Claim</li>
//               <li className='footer-link'>Policy</li>
//               <li className='footer-link'>Terms</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


//After
// Import React library
import React from 'react';

// Import specific icons from react-icons library
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

// Define a functional component named Footer
const Footer = () => {
  // Return JSX for rendering the component
  return (
    // Outer div with max width, centered using mx-auto, padding, grid layout with 3 columns for larger screens, and gap between columns
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      {/* First column with the company information */}
      <div>
        {/* Company name as a heading */}
        <h1 className='w-full text-3xl font-bold text-black'>BytesSpices Tech.</h1>
        {/* Company description paragraph */}
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        {/* Social media icons with space between them */}
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      {/* Second column with solutions, support, company, and legal information */}
      <div className='lg:col-span-2 flex justify-between mt-6'>
        {/* Solutions section */}
        <div>
          {/* Solutions heading */}
          <h6 className='font-medium text-black'>Solutions</h6>
          {/* List of solutions */}
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>
        {/* Support section */}
        <div>
          {/* Support heading */}
          <h6 className='font-medium text-black'>Support</h6>
          {/* List of support options */}
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        {/* Company section */}
        <div>
          {/* Company heading */}
          <h6 className='font-medium text-black'>Company</h6>
          {/* List of company-related links */}
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        {/* Legal section */}
        <div>
          {/* Legal heading */}
          <h6 className='font-medium text-black'>Legal</h6>
          {/* List of legal links */}
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Export the Footer component as the default export
export default Footer;
