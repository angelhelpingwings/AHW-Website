
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Logo = () => (
    <Link to="/" className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        <span className="text-2xl font-bold text-dark-text dark:text-white">Angel Helping Wing</span>
    </Link>
);

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => (
  <button 
    onClick={toggleTheme} 
    className="p-2 rounded-full text-dark-text dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 transform hover:scale-110"
    aria-label="Toggle theme"
  >
    {theme === 'light' ? 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg> :
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.464A1 1 0 106.465 13.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm-1.414-2.12a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
      </svg>
    }
  </button>
);

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const activeLinkClass = "text-primary dark:text-blue-400 font-semibold";
    const inactiveLinkClass = "text-light-text hover:text-primary dark:hover:text-blue-400 transition-colors";

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 shadow-md sticky top-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Logo />
                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex items-center space-x-8">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </nav>
                         <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-yellow-500 text-dark-text font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Join on WhatsApp
                        </a>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-text dark:text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {NAV_LINKS.map(link => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <a 
                            href="https://chat.whatsapp.com"
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-secondary hover:bg-yellow-500 text-dark-text font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            Join on WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;