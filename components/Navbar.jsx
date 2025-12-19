'use client';

import { useEffect, useState } from 'react';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => {
        const menu = document.querySelector('.menu-links');
        const icon = document.querySelector('.hamburger-icon');
        menu.classList.toggle('open');
        icon.classList.toggle('open');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) { // Hides navbar when scrolling down and past 100px
                setShowNavbar(false);
            } else { // Shows navbar when scrolling up or at the top
                setShowNavbar(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <>
            <nav className={`h-16 px-6 drop-shadow-md fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} hidden md:flex`}>
                <div className="flex justify-between items-center max-w-6xl mx-auto w-full h-full">
                    <div className="text-2xl font-bold cursor-default hover:cursor-default">
                        <a href="/">
                            Bryan Herdianto
                        </a>
                    </div>
                    <div>
                        <ul className="flex gap-4 lg:gap-8 list-none text-xl">
                            <li>
                                <a href="/#about" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                    <span className="relative">
                                        About
                                        <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#experience" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                    <span className="relative">
                                        Experience
                                        <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#skills" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                    <span className="relative">
                                        Skills
                                        <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#projects" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                    <span className="relative">
                                        Projects
                                        <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/#contact" className="inline-block text-black no-underline group transition duration-300 hover:text-gray-500">
                                    <span className="relative">
                                        Contact
                                        <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className={`flex justify-between items-center drop-shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                <div className="text-2xl font-bold cursor-default">Bryan Herdianto</div>
                <div className="relative inline-block overflow-visible">
                    <div className="flex flex-col justify-between h-5 w-[30px] cursor-pointer hamburger-icon" onClick={toggleMenu}>
                        <span className="w-full h-[2px] bg-black transition-all duration-300 ease-in-out"></span>
                        <span className="w-full h-[2px] bg-black transition-all duration-300 ease-in-out"></span>
                        <span className="w-full h-[2px] bg-black transition-all duration-300 ease-in-out"></span>
                    </div>
                    <div className="absolute top-full right-0 bg-white w-fit max-h-0 overflow-hidden transition-all duration-300 ease-in-out menu-links">
                        <li className="list-none">
                            <a href="/#about" onClick={toggleMenu} className="block py-3 px-4 text-center text-xl text-black no-underline hover:text-gray-500 group transition duration-300">
                                <span className="relative">
                                    About
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li className="list-none">
                            <a href="/#experience" onClick={toggleMenu} className="block py-3 px-4 text-center text-xl text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Experience
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li className="list-none">
                            <a href="/#skills" onClick={toggleMenu} className="block py-3 px-4 text-center text-xl text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Skills
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li className="list-none">
                            <a href="/#projects" onClick={toggleMenu} className="block py-3 px-4 text-center text-xl text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Projects
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                        <li className="list-none">
                            <a href="/#contact" onClick={toggleMenu} className="block py-3 px-4 text-center text-xl text-black no-underline group transition duration-300 hover:text-gray-500">
                                <span className="relative">
                                    Contact
                                    <span className="absolute left-0 bottom-[-5] w-full h-0.5 bg-gray-500 max-w-0 group-hover:max-w-full transition-all duration-500"></span>
                                </span>
                            </a>
                        </li>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;