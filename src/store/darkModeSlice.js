import {createSlice} from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
	name: "darkMode",
	initialState: {
		darkmode: false,
	},
	reducers: {
		setDarkMode(state){
			state.darkmode = true;
		},
		setLightMode(state){
			state.darkmode = false;
		}
	}
})

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice;