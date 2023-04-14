import {configureStore, createSlice} from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import darkModeSlice from './darkModeSlice';

const store = configureStore({
	reducer:{
		todo: todoSlice.reducer,
		darkMode: darkModeSlice.reducer,
	}
});
export default store;