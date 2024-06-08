import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slices/currency/CurrencySlice';
import languageReducer from './slices/language/LanguageSlice';

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
        language: languageReducer,
    },
});

export default store;
