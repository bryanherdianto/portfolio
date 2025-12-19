'use client';

import { Typewriter } from 'react-simple-typewriter';

function Hero({ cvUrl }) {
    return (
        <section id="profile" className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 pb-16 pt-24">
            <div className="flex justify-center">
                <img src="/profile-pic.png" alt="Bryan Herdianto profile picture" className="w-[275px] md:w-[400px] h-[275px] md:h-[400px] rounded-full object-cover my-4" />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xl font-medium text-gray-600 mb-2">Hello, I'm</p>
                <h1 className="text-5xl font-bold mb-4 text-center leading-15">Bryan Herdianto</h1>
                <p className="text-2xl font-medium text-gray-700 mb-8 h-8">
                    <Typewriter
                        words={['AI & Robotics Enthusiast', 'Data Engineer', 'Full-Stack Developer']}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={100}
                        delaySpeed={1500}
                    />
                </p>
                <div className="mb-8">
                    <button
                        onClick={() => window.open(cvUrl)}
                        className="flex items-center bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300 cursor-pointer"
                    >
                        Download CV&ensp;
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                fill="#EEE"
                            ></path>
                            <path
                                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                fill="#EEE"
                            ></path>
                            <path
                                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                fill="#EEE"
                            ></path>
                            <path
                                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                fill="#EEE"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="flex gap-6">
                    <a
                        href="https://linkedin.com/bryanherdianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <img src="/linkedin.png" alt="My LinkedIn profile" className="w-10 h-10" />
                    </a>
                    <a
                        href="https://github.com/bryanherdianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <img src="/github.png" alt="My Github profile" className="w-10 h-10" />
                    </a>
                    <a
                        href="https://kaggle.com/bryanherdianto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <img src="/kaggle.png" alt="My Kaggle profile" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;