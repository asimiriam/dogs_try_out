import { combineReducers } from '@reduxjs/toolkit';
import dogsSlice from './dogsSlice';
import toastMessageSlice from './toastMessageSlice';

const rootSlice = combineReducers({
    toast: toastMessageSlice.reducer,
    dogs: dogsSlice.reducer,
});

export default rootSlice;
