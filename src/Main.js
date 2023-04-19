import React from 'react';
import TodoList from './components/TodoList';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {signOut} from 'firebase/auth';
import {auth} from './config/Firebase';


const Main = () => {
	const darkMode = useSelector((state) => state.darkMode.darkmode);
	const navigate = useNavigate();

	const signUserOut = () => {
	    signOut(auth).then(()=>{
	      navigate("/login");
	      localStorage.clear();
	    })
    }

	return (
		<div className={darkMode ? "flex justify-between flex-col w-screen h-screen bg-very-dark-desaturated-blue overflow-scroll" :"flex justify-between flex-col  border-3 border-red-300 h-screen bg-very-light-ray"}>
			<TodoList/>
			<div 
			    className="fixed cursor-pointer right-0 bottom-0 p-6 text-2xl font-bold"
			    onClick={signUserOut}
			>
			    <i className="fas fa-sign-out-alt"></i> logout
			</div>
		</div>
	)
}

export default Main;