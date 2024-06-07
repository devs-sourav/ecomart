import React, { useState, useEffect, useRef } from 'react';
import Containar from './Containar';
import { IoIosArrowDown } from "react-icons/io";

const langData = [
    { language: "English" },
    { language: "Bengali" },
    { language: "Hindi" },
    { language: "Arabic" },
    { language: "French" },
];
const curenData = [
    { currency: "USD" },
    { currency: "EUR" },
    { currency: "JPY" },
    { currency: "GBP" },
];

const NavSecondHead = () => {
    const [showLanguage, setShowLanguage] = useState(false);
    const [language, setLanguage] = useState(langData[0].language);
    const [showCurrency, setShowCurrency] = useState(false);
    const [currency, setCurrency] = useState(curenData[0].currency);
    const languageRef = useRef(null);
    const currencyRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguage(false);
            }
            if (currencyRef.current && !currencyRef.current.contains(event.target)) {
                setShowCurrency(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSetLanguage = (item) => {
        setLanguage(item.language);
        setShowLanguage(false);
    };
    const handleSetCurrency = (item) => {
        setCurrency(item.currency);
        setShowCurrency(false);
    };

    return (
        <section className='border-b border-b-gray-200'>
            <Containar>
                <div className='flex justify-between items-center '>
                    <ul className='flex py-2.5 text-base font-jost'>
                        <li className='pr-5 border-r border-r-gray-200 '>
                            <button className='hover:text-primary transition-all ease-linear text-secondary' aria-label="About Us">About Us</button>
                        </li>
                        <li className='pl-5 '>
                            <button className='hover:text-primary transition-all ease-linear text-secondary' aria-label="My Account">My Account</button>
                        </li>
                    </ul>
                    <ul className='flex py-2.5 text-base font-jost'>
                        <li className='pr-5 border-r border-r-gray-200 '>
                            <button className='hover:text-primary transition-all ease-linear text-secondary' aria-label="Track Order">Track Order</button>
                        </li>
                        <li className='px-5 border-r border-r-gray-200 relative' ref={languageRef}>
                            <button
                                onClick={() => setShowLanguage(!showLanguage)}
                                className='flex gap-x-1 items-center hover:text-primary transition-all ease-linear text-secondary'
                                aria-label="Language Selector"
                            >
                                {language}
                                <span>
                                    <IoIosArrowDown className={showLanguage ? 'rotate-180 transition-all ease-linear' : 'rotate-0 transition-all ease-linear'} />
                                </span>
                            </button>
                            <ul className={`absolute top-full mt-1 bg-white leading-10 rounded-md drop_language ${showLanguage ? 'show' : ''}`}>
                                {langData.map((item, index) => (
                                    <li key={index} className='hover:bg-[#f6f6f6] pl-[18px] pr-[29px]'>
                                        <button
                                            className={item.language === language ? 'font-bold' : ''}
                                            onClick={() => handleSetLanguage(item)}
                                        >
                                            {item.language}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className='pl-5 relative' ref={currencyRef}>
                            <button
                                onClick={() => setShowCurrency(!showCurrency)}
                                className='flex gap-x-1 items-center hover:text-primary transition-all ease-linear text-secondary'
                                aria-label="Currency Selector"
                            >
                                {currency}
                                <span>
                                    <IoIosArrowDown className={showCurrency ? 'rotate-180 transition-all ease-linear' : 'rotate-0 transition-all ease-linear'} />
                                </span>
                            </button>
                            <ul className={`absolute top-full mt-1 bg-white leading-10 rounded-md drop_currency ${showCurrency ? 'show' : ''}`}>
                                {curenData.map((item, index) => (
                                    <li key={index} className='hover:bg-[#f6f6f6] pl-[18px] pr-[29px]'>
                                        <button
                                            className={item.currency === currency ? 'font-bold' : ''}
                                            onClick={() => handleSetCurrency(item)}
                                        >
                                            {item.currency}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </Containar>
        </section>
    );
};

export default NavSecondHead;
