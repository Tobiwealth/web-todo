import React from 'react';
import TodoList from './components/TodoList';
import {useSelector} from 'react-redux';

const Main = () => {
	const dark = useSelector((state) => state.darkMode.darkmode)

	return (
		<div className={dark ? "h-screen bg-very-dark-desaturated-blue" :"h-screen bg-very-light-ray"}>
			<TodoList/>
		</div>
	)
}

export default Main;