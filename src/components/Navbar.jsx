//Before

// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import './Navbar.css'; // Import the corresponding CSS file

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='navbar-container'>
//       <div className='max-width-container'>
//         <h1 className='logo'>WsCube Tech.</h1>
//         <ul className='nav-links'>
//           <li>Home</li>
//           <li>Company</li>
//           <li>Resources</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//         <div onClick={handleNav} className='mobile-icon'>
//           {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//         </div>
//         <ul className={`mobile-nav ${nav ? 'open' : ''}`}>
//           <h1 className='mobile-logo'>REACT.</h1>
//           <li>Home</li>
//           <li>Company</li>
//           <li>Resources</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//After
// Import React library and useState hook
import React, { useState } from 'react';

// Import icons from react-icons library
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

// Define a functional component named Navbar
const Navbar = () => {
  // State variable to track the state of the navigation menu (open/closed)
  const [nav, setNav] = useState(false);

  // Function to handle the click event on the menu icon, toggling the navigation menu state
  const handleNav = () => {
    setNav(!nav);
  };

  // Return JSX for rendering the component
  return (
    // Container with flex layout, space-between alignment, center items, height, max width, padding, and white text color
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Company name as a heading */}
      <h1 className='w-full text-3xl font-bold text-[black]'>BytesSpices Tech.</h1>
      {/* Navigation links for larger screens */}
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      {/* Menu icon for smaller screens, with click event handler */}
      <div onClick={handleNav} className='block md:hidden'>
        {/* Conditional rendering of menu icon or close icon based on the state of the navigation menu */}
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      {/* Navigation menu for smaller screens, with conditional styles based on the state of the navigation menu */}
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        {/* Company name as a heading in the mobile menu */}
        <h1 className='w-full text-3xl font-bold text-[black] m-4'>REACT.</h1>
        {/* Navigation links in the mobile menu */}
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

// Export the Navbar component as the default export
export default Navbar;

