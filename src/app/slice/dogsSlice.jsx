import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    breed: null,
    photosDogs: [],
};

const dogsSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        setBreed(state, action) { state.breed = action.payload; },
        setPhotosDogs(state, action) { state.photosDogs = action.payload; },
    },
});

export const {
    setBreed,
    setPhotosDogs,
} = dogsSlice.actions;

export default dogsSlice;
