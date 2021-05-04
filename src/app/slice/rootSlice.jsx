import { combineReducers } from '@reduxjs/toolkit';
import dogsSlice from './dogsSlice';
import langSlice from './langSlice';
import toastMessageSlice from './toastMessageSlice';

const rootSlice = combineReducers({
    toast: toastMessageSlice.reducer,
    dogs: dogsSlice.reducer,
    lang: langSlice.reducer,
});

export default rootSlice;
