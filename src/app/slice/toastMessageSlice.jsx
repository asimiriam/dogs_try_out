import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    titleToast: "",
    messageToast: "",
    isOpen: false,
};

const toastMessageSlice = createSlice({
    name: 'toastMessage',
    initialState,
    reducers: {
        setToastMessage(state, action) {
            const { title, message } = action.payload;
            state.titleToast = title;
            state.messageToast = message;
        },
        setIsOpen(state, action) { state.isOpen = action.payload; },
    },
});

export const {
    setToastMessage,
    setIsOpen,
} = toastMessageSlice.actions;

export default toastMessageSlice;
