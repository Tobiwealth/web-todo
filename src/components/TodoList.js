import React, {useState} from 'react';
import Todo from './Todo';
import iconmoon from '../images/iconmoon.svg';
import iconsun from '../images/iconsun.svg';
import {useSelector, useDispatch} from 'react-redux';
import {darkModeActions} from '../store/darkModeSlice';

const TodoList = () => {
	const [inputText, setInputText] = useState("");
	const darkMode = useSelector((state) => state.darkMode.darkmode);
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		if(e.key === "Enter" || e.keyCode === 13){
		    console.log(inputText);
	    }
	}
    const handleDarkMode = () =>{
		dispatch(darkModeActions.setDarkMode());
		console.log("moon-togglr:", darkMode);
    }
    const handleLightMode = () =>{
		dispatch(darkModeActions.setLightMode())
		console.log("sun:", darkMode);
    }

	return (
		<div className={!darkMode ? 
		    "flex justify-center items-center w-full bg-cover h-88 bg-light-hero-mb ds:bg-light-hero-dt" 
		        : 
		            "flex justify-center items-center w-full bg-cover h-88 bg-dark-hero-mb ds:bg-dark-hero-dt" 
		    }
		>
			<div className=" h-4/5 p-6 w-full max-w-screen-lg flex flex-col items-start rounded-lg">
			    <div className="w-full mb-10 p-16 pt-2 pb-6 flex justify-between items-center">
			        <h1 className="text-5xl text-white font-bold tracking-overwide">TODO</h1>
			        { darkMode && <div onClick={handleLightMode}><img src={iconsun} alt="sun"/></div>} 
			        { !darkMode && <div onClick={handleDarkMode}><img src={iconmoon} alt="moon"/></div>}
			    </div>
			    <div className="w-full mb-20 flex justify-center items-center p-16 pt-0 pb-0">
			        <input className={darkMode ?
			            "border-6 w-full h-12 p-10 text-3xl text-center rounded-lg text-light-grayish-blue bg-veryy-dark-grayish-blue border-dark-grayish-blue"
			                :
			                    "border-6 w-full h-12 p-10 text-3xl text-center rounded-lg border-white"} 
			            type="text" placeholder="Create a new todo.." value={inputText}
			            onChange={(e) => {setInputText(e.target.value)}} onKeyPress={handleSubmit}
			        />
			    </div>
			    <Todo/>
			    <Todo/>
			    <Todo/>
			    <Todo/>
			    <div className="flex justify-center mt-0 items-center w-full p-16 pt-0 pb-6 ds:hidden">
			        <div className={ darkMode ? 
			            "border-b-2 p-8 mt-0 rounded-lg w-full pt-6 flex justify-between items-center border-dark-grayish-blue bg-veryy-dark-grayish-blue" 
			                :
			        	        "border-b-2 p-8 mt-0 rounded-lg w-full bg-white pt-6 flex justify-between items-center"}
			        >
				    	<p className="text-lg font-normal text-dark-grayish-blue">5 items left</p>
				    	<p className="text-lg font-normal text-dark-grayish-blue">clear complete</p>
			    	</div>
			    </div>
			    <div className="flex justify-center mt-4 items-center w-full p-16 pt-6 pb-6 ds:hidden">
			        <div className={ darkMode ? 
			            "bg-veryy-dark-grayish-blue border-b-2 p-6 rounded-lg w-full flex justify-between items-center border-dark-grayish-blue" 
			                :
			        	        "border-b-2 p-6 rounded-lg bg-white w-full flex justify-between items-center"}
			        >
				    	<p className="text-dark-grayish-blue text-lg font-bold focus:very-dark-grayish-blue">All</p>
				    	<p className="text-dark-grayish-blue text-lg font-bold focus:very-dark-blu focus:very-dark-bluee">Active</p>
				    	<p className="text-dark-grayish-blue text-lg font-bold focus:very-dark-blue">Completed</p>
			    	</div>
			    </div>
			    <div className="hidden ds:w-full ds:p-16 ds:pt-0 ds:pb-0 ds:flex ds:justify-center ds:items-center"
			    >
				    <div className={darkMode ? 
				        "ds:bg-veryy-dark-grayish-blue hidden ds:flex ds:justify-between ds:items-center ds:p-8 ds:border-b-2 rounded-lg ds:w-full ds:border-dark-grayish-blue" 
				            :
				    	        "hidden ds:flex ds:justify-between ds:items-center ds:p-8 ds:border-b-2 rounded-lg ds:bg-white ds:w-full "}
				    >
				    	<p className="text-lg font-normal text-dark-grayish-blue">5 items left</p>
				    	<p className="text-dark-grayish-blue text-lg font-bold focus:very-dark-grayish-blue">All</p>
				    	<p className="text-dark-grayish-blue text-lg font-bold focus:very-dark-blu focus:very-dark-bluee">Active</p>
				    	<p className="text-dark-grayish-blue text-lg font-bold focus:very-dark-blue">Completed</p>
				    	<p className="text-lg font-normal text-dark-grayish-blue">clear complete</p>
				    </div>
			    </div>
			</div>
		</div>
	)
}

export default TodoList;