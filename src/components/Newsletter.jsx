//Before

// import React from 'react';
// import './Newsletter.css'; // Import the corresponding CSS file

// const Newsletter = () => {
//   return (
//     <div className='newsletter-container'>
//       <div className='max-width-container'>
//         <div className='newsletter-text'>
//           <h1 className='newsletter-title'>
//             Want to learn latest I.T skills?
//           </h1>
//           <p>Sign up to our newsletter and stay up to date.</p>
//         </div>
//         <div className='newsletter-form'>
//           <div className='form-wrapper'>
//             <input
//               className='email-input'
//               type='email'
//               placeholder='Enter Email'
//             />
//             <button className='notify-button'>Notify Me</button>
//           </div>
//           <p>
//             We care about the protection of your data. Read our{' '}
//             <span className='privacy-link'>Privacy Policy.</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;


//After
// Import React library
import React from 'react';

// Define a functional component named Newsletter
const Newsletter = () => {
  // Return JSX for rendering the component
  return (
    // Outer div with full width, padding, white text color
    <div className='w-full py-16 text-white px-4'>
      {/* Container with max width, centered using mx-auto, grid layout with 3 columns for larger screens */}
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        {/* Section with larger width for content, spanning 2 columns in larger screens */}
        <div className='lg:col-span-2 my-4'>
          {/* Heading with different sizes for different screen sizes, bold font, and padding */}
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want to learn the latest I.T skills?
          </h1>
          {/* Paragraph with newsletter description */}
          <p>Sign up for our newsletter and stay up to date.</p>
        </div>
        {/* Section for the newsletter signup form */}
        <div className='my-4'>
          {/* Flex container with column layout for small screens and row layout for larger screens */}
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            {/* Input field for email with padding, rounded corners, and black text color */}
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            {/* Button for submitting the newsletter signup with specific styles */}
            <button className='bg-[black] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          {/* Additional text with a link to the privacy policy */}
          <p>
            We care about the protection of your data. Read our{' '}
            <span className='text-black'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Export the Newsletter component as the default export
export default Newsletter;
