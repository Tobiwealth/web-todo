import React, {useState, useEffect} from 'react';
import Todo from './Todo';
import iconmoon from '../images/iconmoon.svg';
import iconsun from '../images/iconsun.svg';
import {auth, db} from '../config/Firebase';
import {addDoc, getDocs, collection,doc, deleteDoc} from 'firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {darkModeActions} from '../store/darkModeSlice';


const TodoList = () => {
	const darkMode = useSelector((state) => state.darkMode.darkmode);
	const dispatch = useDispatch();
	const [inputText, setInputText] = useState("");
	const [todo, setTodo] = useState([]);
	const [count, setCount] = useState(0);
	//const [user, setUser] = useState([]);
	const email = localStorage.getItem("email");
	const todoCollectionRef = collection(db,`${email}`);


	

    const sendRequest = async () => {
	    await addDoc(todoCollectionRef,
            {
				task: inputText,
				completed: false,
				userId: auth.currentUser.uid,
            }
	    );
	}

	const handleSubmit = async (e) => {
		const task = inputText;
		if(task === ""){
			return
		}
		if(e.key === "Enter" || e.keyCode === 13){
		    await sendRequest();
		    setInputText(""); 
	    }
	}
    const handleDarkMode = () =>{
		dispatch(darkModeActions.setDarkMode());
    }
    const handleLightMode = () =>{
		dispatch(darkModeActions.setLightMode())
    }
    const handleClearCompleteTodo = () => {
    	const filterId = todo.filter((item)=> item.completed === true);
    	filterId.map((item) => {
    		const todoDoc = doc(db, `${auth.currentUser.email}`, item.id );
    		return deleteDoc(todoDoc);
    	})
    }
    const handleAll = () => {
    	return todo;
    }
    const handleCompleted = () => {
    	setTodo(todo.filter((item) => item.completed === true));
    }
    const handleActive = () => {
    	setTodo(todo.filter((item) => item.completed === false));
    }
   const fetchData = async () => {
    	try{
			const todo = await getDocs(todoCollectionRef);
			setTodo(todo.docs.map((doc)=> ({
				...doc.data(), id:doc.id
			})))

		}catch(e){
			console.error(e);
		}
    }

    const handleCounter = () => {
    	setCount(todo.length);
    }
    useEffect(() => {
        fetchData();
    }, [todo]);

    useEffect(() => {
        handleCounter();
    }, [todo]);
  
	return (
		<div className={!darkMode ? 
		    "flex justify-center items-center w-full bg-cover h-88 bg-light-hero-mb ds:bg-light-hero-dt" 
		        : 
		            "flex justify-center items-center w-full bg-cover h-88 bg-dark-hero-mb ds:bg-dark-hero-dt" 
		    }
		>
			<div className=" h-4/5 p-0 w-full max-w-screen-lg flex flex-col items-start rounded-lg">
			    <div className="p-2 pl-12"> 
			        <div className="text-white text-xl">welcome, <span className="font-bold text-3xl">{auth.currentUser.displayName}</span></div>
			    </div>
			    <div className="w-full mb-10 p-12 pt-2 pb-6 flex justify-between items-center">
			        <h1 className="text-5xl text-white font-bold tracking-overwide">TODO</h1>
			        { darkMode && <div className="cursor-pointer" onClick={handleLightMode}><img src={iconsun} alt="sun"/></div>} 
			        { !darkMode && <div className="cursor-pointer" onClick={handleDarkMode}><img src={iconmoon} alt="moon"/></div>}
			    </div>
			    <div className="w-full mb-20 flex justify-center items-center p-12 pt-0 pb-0">
			        <input className={darkMode ?
			            "border-6 w-full h-14 p-8 pt-2 pb-2 text-base text-center rounded-lg text-light-grayish-blue bg-veryy-dark-grayish-blue border-dark-grayish-blue"
			                :
			                    "border-6 w-full h-14 p-8 pt-2 pb-2 text-base text-center rounded-lg border-white"} 
			            type="text" placeholder="Create a new todo.." value={inputText}
			            onChange={(e) => {setInputText(e.target.value)}} onKeyPress={handleSubmit}
			        />
			    </div>
			    {
			    	todo.map((item,i) => 
			    		//if(item.userId){ 
			    		<Todo key={i} setTodos={setTodo} todos={todo} todo={item} text={item.task}/>
			    	)
			    }
			    <div className="flex justify-center mt-0 items-center w-full p-10 pt-0 pb-6 ds:hidden">
			        <div className={ darkMode ? 
			            "border-b-2 p-6 mt-0 rounded-lg w-full h-16 pt-2 flex justify-between items-center border-very-dark-grayish-blue bg-veryy-dark-grayish-blue" 
			                :
			        	        "border-b-2 p-6 mt-0 h-16 rounded-lg w-full bg-white pt-2 flex justify-between items-center"}
			        >
				    	<p className="text-lg font-normal text-dark-grayish-blue">{count} items left</p>
				    	<p onClick={handleClearCompleteTodo} className="cursor-pointer text-lg font-normal text-dark-grayish-blue">clear complete</p>
			    	</div>
			    </div>
			    <div className="flex justify-center mt-4 items-center w-full p-10 pt-2 pb-2 ds:hidden">
			        <div className={ darkMode ? 
			            "bg-veryy-dark-grayish-blue border-b-2 p-6 h-14 rounded-lg w-full flex justify-between items-center border-very-dark-grayish-blue" 
			                :
			        	        "border-b-2 p-6 rounded-lg h-16 bg-white w-full flex justify-between items-center"}
			        >
				    	<p onClick={handleAll} className="cursor-pointer text-dark-grayish-blue hover:text-light-grayish-blue text-lg font-bold focus:text-very-dark-grayish-blue">All</p>
				    	<p onClick={handleActive} className="cursor-pointer text-dark-grayish-blue hover:text-light-grayish-blue text-lg font-bold focus:text-very-dark-blue">Active</p>
				    	<p onClick={handleCompleted} className="cursor-pointer text-dark-grayish-blue hover:text-light-grayish-blue text-lg font-bold focus:text-very-dark-blue">Completed</p>
			    	</div>
			    </div>
			    <div className="hidden ds:w-full ds:p-10 ds:pt-0 ds:pb-0 ds:flex ds:justify-center ds:items-center"
			    >
				    <div className={darkMode ? 
				        "ds:bg-veryy-dark-grayish-blue hidden ds:flex ds:justify-between ds:items-center ds:p-6 ds:pt-2 ds:pb-2 ds:border-b-2 rounded-lg ds:w-full ds:border-very-dark-grayish-blue" 
				            :
				    	        "hidden ds:flex ds:justify-between ds:items-center ds:p-6 ds:pt-2 ds:pb-2 ds:border-b-2 rounded-lg ds:bg-white ds:w-full "}
				    >
				    	<p className="text-lg font-normal text-dark-grayish-blue">{count} items left</p>
				    	<p onClick={handleAll} className="cursor-pointer text-dark-grayish-blue hover:text-light-grayish-blue text-lg font-bold focus:text-blue-700">All</p>
				    	<p onClick={handleActive} className="cursor-pointer text-dark-grayish-blue hover:text-light-grayish-blue text-lg font-bold focus:text-very-dark-blue">Active</p>
				    	<p onClick={handleCompleted} className="cursor-pointer text-dark-grayish-blue hover:text-light-grayish-blue text-lg font-bold focus:text-very-dark-blue">Completed</p>
				    	<p onClick={handleClearCompleteTodo} className="cursor-pointer text-lg font-normal text-dark-grayish-blue">clear complete</p>
				    </div>
			    </div>
			</div>
		</div>
	)
}

export default TodoList;