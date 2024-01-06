//Before

// import React from 'react';
// import Typed from 'react-typed';
// import './Hero.css'; // Import the corresponding CSS file

// const Hero = () => {
//   return (
//     <div className='hero-container'>
//       <div className='max-width-container'>
//         <p className='learn-text'>Learn with us</p>
//         <h1 className='hero-title'>Grow with us.</h1>
//         <div className='typed-text'>
//           <p className='learn-label'>Learn</p>
//           <Typed
//             className='typed-content'
//             strings={['Digital Marketing', 'Web Development', 'Ethical Hacking']}
//             typeSpeed={120}
//             backSpeed={140}
//             loop
//           />
//         </div>
//         <button className='cta-button'>Get Started</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//After
// Import React library
import React from 'react';

// Import Typed component from 'react-typed' library
import Typed from 'react-typed';

// Define a functional component named Hero
const Hero = () => {
  // Return JSX for rendering the component
  return (
    // Outer div with white text color
    <div className='text-white'>
      {/* Container with max width, negative margin for positioning, full width, height of the screen, centered using mx-auto, and text center alignment */}
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        {/* Heading with black font color, bold font, padding, and text size */}
        <p className='text-[black] font-bold p-2 text-3xl'>
          Learn with us
        </p>
        {/* Main title with different sizes for different screen sizes, bold font, and padding */}
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with us.
        </h1>
        {/* Container with flex layout, centered content, and items centered */}
        <div className='flex justify-center items-center'>
          {/* Subtitle with different sizes for different screen sizes, bold font, and padding */}
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Learn
          </p>
          {/* Typed component for dynamic text animation */}
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            // Array of strings for the Typed component to cycle through
            strings={['Digital Makerting', 'Web Development', 'Ethical Hacking']}
            // Typing speed in milliseconds
            typeSpeed={120}
            // Backspacing speed in milliseconds
            backSpeed={140}
            // Loop the animation
            loop
          />
        </div>
        {/* Button with black background, specific width, rounded corners, medium font weight, centered, and white text color */}
        <button className='bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

// Export the Hero component as the default export
export default Hero;
