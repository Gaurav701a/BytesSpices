//Before

// import React from 'react';
// import './Analytics.css'; 
// import Laptop from '../assets/laptop.jpg';

// const Analytics = () => {
//   return (
//     <div className='analytics-container'>
//       <div className='max-width-container'>
//         <img className='laptop-image' src={Laptop} alt='/' />
//         <div className='text-container'>
//           <p className='text-green font-bold'>LEARN FROM EXPERTS</p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
//             molestiae delectus culpa hic assumenda, voluptate reprehenderit
//             dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
//             eveniet ex deserunt fuga?
//           </p>
//           <button className='cta-button'>Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Analytics;







// After
// Import React library
import React from 'react';

// Import the image file (laptop.jpg) as a component
import Laptop from '../assets/laptop.jpg';

// Define a functional component named Analytics
const Analytics = () => {
  // Return JSX for rendering the component
  return (
    // Outer div with white background and padding
    <div className='w-full bg-white py-16 px-4'>
      {/* Container with max width and centered using mx-auto, grid layout with 2 columns for larger screens */}
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        {/* Image component displaying the laptop image */}
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />

        {/* Container for text content, aligned vertically at the center */}
        <div className='flex flex-col justify-center'>
          {/* Bold green text for a heading */}
          <p className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</p>

          {/* Paragraph with Lorem Ipsum text */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>

          {/* Button with black background, white text, rounded corners, and specific width */}
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

// Export the Analytics component as the default export
export default Analytics;
