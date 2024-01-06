// Import React library
import React from 'react';

// Import custom components from specified paths
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';

// Define the main App component
function App() {
  // Return JSX for rendering the entire application
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />
      {/* Render the Hero component */}
      <Hero />
      {/* Render the Analytics component */}
      <Analytics />
      {/* Render the Newsletter component */}
      <Newsletter />
      {/* Render the Cards component */}
      <Cards />
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

// Export the App component as the default export
export default App;
