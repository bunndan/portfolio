import React from 'react';

const Header: React.FC = () => {
  return (
    <header
        style={{
            padding: '1rem',
            backgroundColor: '#282c34',
            color: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        }}
    >
        <h1>My Portfolio</h1>
        <nav>
            <a href="#about" style={{ margin: '0 1rem', color: 'white' }}>About</a>
            <a href="#projects" style={{ margin: '0 1rem', color: 'white' }}>Projects</a>
            <a href="#contact" style={{ margin: '0 1rem', color: 'white' }}>Contact</a>
        </nav>
    </header>
  );
};

export default Header;