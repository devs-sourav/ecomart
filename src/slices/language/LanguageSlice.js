import { createSlice } from '@reduxjs/toolkit';

// Function to safely get and parse JSON from localStorage
const getStoredLanguage = () => {
    try {
        const storedUserData = localStorage.getItem('language');
        return storedUserData ? JSON.parse(storedUserData).language : "English";
    } catch (error) {
        console.error('Failed to parse stored Language data:', error);
        return "English";
    }
};

const initialLanguage = getStoredLanguage();

const initialState = {
    languageValue: initialLanguage,
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        updateLanguageValue: (state, action) => {
            console.log(action.payload);
            state.languageValue = action.payload;
            // Update localStorage whenever the currency value is updated
            localStorage.setItem('language', JSON.stringify({ language: action.payload }));
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateLanguageValue } = languageSlice.actions;

export default languageSlice.reducer;
