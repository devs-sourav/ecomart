import { createSlice } from '@reduxjs/toolkit';

// Function to safely get and parse JSON from localStorage
const getStoredCurrency = () => {
    try {
        const storedUserData = localStorage.getItem('currency');
        return storedUserData ? JSON.parse(storedUserData).currency : "USD";
    } catch (error) {
        console.error('Failed to parse stored currency data:', error);
        return "USD";
    }
};

const initialCurrency = getStoredCurrency();

const initialState = {
    currencyValue: initialCurrency,
};

export const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        updateCurrencyValue: (state, action) => {
            console.log(action.payload);
            state.currencyValue = action.payload;
            // Update localStorage whenever the currency value is updated
            localStorage.setItem('currency', JSON.stringify({ currency: action.payload }));
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateCurrencyValue } = currencySlice.actions;

export default currencySlice.reducer;
