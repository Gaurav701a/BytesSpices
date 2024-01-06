import React from 'react';
import './App.css'; // Create this CSS file in the same directory

function App({ text }) {
    const letters = text.split('');

    return (
        <div className="sequential-text-loader">
            {letters.map((letter, index) => (
                <span key={index} className="letter">
                    {letter}
                </span>
            ))}
        </div>
    );
}

export default App;
