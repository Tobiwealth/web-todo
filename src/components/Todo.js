import React from 'react';
import iconcross from "../images/iconcross.svg";
import iconcheck from "../images/iconcheck.svg";
import {db} from '../config/Firebase';
import {doc, deleteDoc, updateDoc} from 'firebase/firestore';
import {useSelector} from 'react-redux';


const Todo = ({todo, text, setTodos, todos}) => {
	const darkMode = useSelector((state) => state.darkMode.darkmode);
	const email = localStorage.getItem("email");


	const handleComplete = async (id) => {
        const todoDoc = doc(db, `${email}`, id ); 
        await updateDoc(todoDoc,{completed:!todo.completed} );
	}
	const handleDelete = async (id) => {
		const todoDoc = doc(db, `${email}`, id );
		await deleteDoc(todoDoc);
	}

	return (
		<div className="flex w-full p-10 pt-0 pb-0 justify-center items-center">
			<div className={ darkMode ? 
			    "flex w-full h-18 p-6 pt-2 pb-2 justify-between rounded-lg border-b-2 items-center bg-veryy-dark-grayish-blue border-very-dark-grayish-blue"
			        :
			            " flex w-full h-18 p-6 pt-2 pb-2 justify-between rounded-lg border-b-2 bg-white items-center"}
			>
			    <div onClick={() => handleComplete(todo.id)} className={darkMode ? todo.completed? "border-0":
			        "w-6 h-6 border-2 cursor-pointer border-very-light-rayish-blue rounded-full bg-check-background border-very-dark-grayish-bluee hover:border-dark-grayish-blue "
			            : todo.completed? "border-0" :
			                "w-6 h-6 border-2 cursor-pointer border-very-light-rayish-blue rounded-full bg-check-background"}
			    >
			        <div className={ todo.completed ? "rounded-full p-2" : "hidden"} style={{backgroundImage: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}}>
			            <img className="w-full h-full" src={iconcheck} alt="checked"/>
			        </div>
			    </div>
			    <div className= {darkMode ? todo.completed ? "line-through text-dark-grayish-blue font-josefin-sans font-normal text-2xl":
			    	"text-light-grayish-blue font-josefin-sans font-normal text-2xl"
			    	    : todo.completed ? "line-through font-josefin-sans font-normal text-2xl text-light-grayish-blue" :
			    	        "font-josefin-sans font-normal text-2xl text-very-dark-grayish-bluee"}
			    >{text}</div>
			    <img onClick={() => handleDelete(todo.id)} className=" cursor-pointer w-6 h-6" src={iconcross} alt="times"/>
			</div>
		</div>
	)
}

export default Todo;