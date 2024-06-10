import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCurrencyValue } from '../../../slices/currency/CurrencySlice';
import Containar from './Containar';
import { IoIosArrowDown } from "react-icons/io";
import { updateLanguageValue } from '../../../slices/language/LanguageSlice';

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

// Function to safely get and parse JSON from localStorage
const getStoredCurrency = () => {
    try {
        const storedCurrencyData = localStorage.getItem('currency');
        return storedCurrencyData ? JSON.parse(storedCurrencyData).currency : curenData[0].currency;
    } catch (error) {
        console.error('Failed to parse stored currency data:', error);
        return curenData[0].currency;
    }
};
// Function to safely get and parse JSON from localStorage
const getStoredLanguage = () => {
    try {
        const storedLanguageData = localStorage.getItem('language');
        return storedLanguageData ? JSON.parse(storedLanguageData).language : langData[0].language;
    } catch (error) {
        console.error('Failed to parse stored currency data:', error);
        return langData[0].language;
    }
};

const NavSecondHead = () => {
    const initialCurrency = getStoredCurrency();
    const initialLanguage = getStoredLanguage();

    const [showLanguage, setShowLanguage] = useState(false);
    const [language, setLanguage] = useState(initialLanguage);
    const [showCurrency, setShowCurrency] = useState(false);
    const [currency, setCurrency] = useState(initialCurrency);

    const languageRef = useRef(null);
    const currencyRef = useRef(null);
    const dispatch = useDispatch();

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
        dispatch(updateLanguageValue(item.language));
    };

    const handleSetCurrency = (item) => {
        setCurrency(item.currency);
        setShowCurrency(false);
        dispatch(updateCurrencyValue(item.currency));
    };

    return (
        <section className='border-b border-b-bordergray'>
            <Containar>
                <div className='flex justify-between flex-wrap items-center'>
                    <ul className='flex py-2.5 text-base font-jost'>
                        <li className='pr-5 border-r border-r-bordergray'>
                            <button className='hover:text-primary transition-all ease-linear text-secondary' aria-label="About Us">About Us</button>
                        </li>
                        <li className='pl-5'>
                            <button className='hover:text-primary transition-all ease-linear text-secondary' aria-label="My Account">My Account</button>
                        </li>
                    </ul>
                    <ul className='flex flex-wrap py-2.5 text-base font-jost'>
                        <li className='pr-5 border-r border-r-bordergray'>
                            <button className='hover:text-primary transition-all ease-linear text-secondary' aria-label="Track Order">Track Order</button>
                        </li>
                        <li className='px-5 border-r group border-r-bordergray relative' ref={languageRef}>
                            <button
                                onClick={() => setShowLanguage(!showLanguage)}
                                className='flex gap-x-1 items-center group-hover:text-primary transition-all ease-linear text-secondary'
                                aria-label="Language Selector"
                            >
                                {language}
                                <span>
                                    <IoIosArrowDown className={showLanguage ? 'rotate-180 transition-all ease-linear' : 'rotate-0 transition-all ease-linear'} />
                                </span>
                            </button>
                            <ul className={`absolute top-full mt-1 z-10 bg-white leading-10 rounded-md drop_language ${showLanguage ? 'show' : ''}`}>
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
                        <li className='pl-5 relative group' ref={currencyRef}>
                            <button
                                onClick={() => setShowCurrency(!showCurrency)}
                                className='flex gap-x-1 items-center group-hover:text-primary transition-all ease-linear text-secondary'
                                aria-label="Currency Selector"
                            >
                                {currency}
                                <span>
                                    <IoIosArrowDown className={showCurrency ? 'rotate-180 transition-all ease-linear' : 'rotate-0 transition-all ease-linear'} />
                                </span>
                            </button>
                            <ul className={`absolute z-10 top-full mt-1 bg-white leading-10 rounded-md drop_currency ${showCurrency ? 'show' : ''}`}>
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
