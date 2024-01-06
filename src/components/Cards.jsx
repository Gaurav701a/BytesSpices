//Before

// import React from 'react';
// import './Cards.css'; // Import the corresponding CSS file
// import Single from '../assets/single.png';
// import Double from '../assets/double.png';
// import Triple from '../assets/triple.png';

// const Cards = () => {
//   return (
//     <div className='cards-container'>
//       <div className='max-width-container grid'>
//         <div className='card web-development'>
//           <img className='icon' src={Single} alt="/" />
//           <h2 className='title'>Web development</h2>
//           <p className='price'>$149</p>
//           <div className='description'>
//             <p>Lorem Ipsum is simply </p>
//             <p>Lorem Ipsum is simply dummy text of the printing</p>
//             <p>Lorem Ipsum is simply dumm.</p>
//           </div>
//           <button className='start-trial-button'>Start Trial</button>
//         </div>
//         <div className='card digital-marketing'>
//           <img className='icon' src={Double} alt="/" />
//           <h2 className='title'>Digital Marketing</h2>
//           <p className='price'>$149</p>
//           <div className='description'>
//             <p>Lorem Ipsum is simply </p>
//             <p>Lorem Ipsum is simply dummy text of the printing</p>
//             <p>Lorem Ipsum is simply dumm.</p>
//           </div>
//           <button className='start-trial-button'>Start Trial</button>
//         </div>
//         <div className='card app-development'>
//           <img className='icon' src={Triple} alt="/" />
//           <h2 className='title'>App Development</h2>
//           <p className='price'>$149</p>
//           <div className='description'>
//             <p>Lorem Ipsum is simply </p>
//             <p>Lorem Ipsum is simply dummy text of the printing</p>
//             <p>Lorem Ipsum is simply dumm.</p>
//           </div>
//           <button className='start-trial-button'>Start Trial</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


//After
// Import React library
import React from 'react';

// Import image files (single.png, double.png, triple.png) as components
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

// Define a functional component named Cards
const Cards = () => {
    // Return JSX for rendering the component
    return (
        // Outer div with full width, padding, and white background
        <div className='w-full py-[10rem] px-4 bg-white'>
            {/* Container with max width and centered using mx-auto, grid layout with 3 columns for larger screens, and gap between columns */}
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {/* Card for Web Development with shadow, rounded corners, and hover effect */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* Image for Web Development */}
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    {/* Heading for Web Development */}
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    {/* Price for Web Development */}
                    <p className='text-center text-4xl font-bold'>$149</p>
                    {/* Text content for Web Development with borders */}
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    {/* Button for starting the trial with green background */}
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                {/* Card for Digital Marketing with shadow, rounded corners, and hover effect */}
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    {/* Image for Digital Marketing */}
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    {/* Heading for Digital Marketing */}
                    <h2 className='text-2xl font-bold text-center py-8'>Digital Marketing</h2>
                    {/* Price for Digital Marketing */}
                    <p className='text-center text-4xl font-bold'>$149</p>
                    {/* Text content for Digital Marketing with borders */}
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    {/* Button for starting the trial with black background and green text */}
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>

                {/* Card for App Development with shadow, rounded corners, and hover effect */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* Image for App Development */}
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    {/* Heading for App Development */}
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    {/* Price for App Development */}
                    <p className='text-center text-4xl font-bold'>$149</p>
                    {/* Text content for App Development with borders */}
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Lorem Ipsum is simply </p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>
                    {/* Button for starting the trial with green background */}
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>
        </div>
    );
};

// Export the Cards component as the default export
export default Cards;
