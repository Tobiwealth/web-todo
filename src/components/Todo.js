import React from 'react';
import iconcross from "../images/iconcross.svg";
import iconcheck from "../images/iconcheck.svg";
import {useSelector, useDispatch} from 'react-redux';
import {todoActions} from '../store/todoSlice';

const Todo = ({todo, text}) => {
	const dark = useSelector((state) => state.darkMode.darkmode); 
	const dispatch = useDispatch();

	const handleComplete = () => {
		dispatch(todoActions.completeTodo(todo.id));
		console.log(todo.id);
	}
	const handleDelete = () => {
		dispatch(todoActions.deleteTodo(todo.id));
		dispatch(todoActions.countTodo());
	}

	return (
		<div className="flex w-full p-16 pt-0 pb-0 justify-center items-center">
			<div className={ dark ? 
			    "flex w-full h-18 p-10 pt-4 pb-4 justify-between rounded-lg border-b-2 items-center bg-veryy-dark-grayish-blue border-very-dark-grayish-blue"
			        :
			            " flex w-full h-18 p-10 pt-4 pb-4 justify-between rounded-lg border-b-2 bg-white items-center"}
			>
			    <div onClick={handleComplete} className={dark ? todo.completed? "border-0":
			        "w-6 h-6 border-2 cursor-pointer border-very-light-rayish-blue rounded-full bg-check-background border-very-dark-grayish-bluee hover:border-dark-grayish-blue "
			            : todo.completed? "border-0" :
			                "w-6 h-6 border-2 cursor-pointer border-very-light-rayish-blue rounded-full bg-check-background"}
			    >
			        <div className={ todo.completed ? "rounded-full p-2" : "hidden"} style={{backgroundImage: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}}>
			            <img className="w-full h-full" src={iconcheck} alt="checked"/>
			        </div>
			    </div>
			    <div className= {dark ? todo.completed ? "line-through text-dark-grayish-blue font-josefin-sans font-normal text-2xl":
			    	"text-light-grayish-blue font-josefin-sans font-normal text-2xl"
			    	    : todo.completed ? "line-through font-josefin-sans font-normal text-2xl text-light-grayish-blue" :
			    	        "font-josefin-sans font-normal text-2xl text-very-dark-grayish-bluee"}
			    >{text}</div>
			    <img onClick={handleDelete} className=" cursor-pointer w-6 h-6" src={iconcross} alt="times"/>
			</div>
		</div>
	)
}

export default Todo;