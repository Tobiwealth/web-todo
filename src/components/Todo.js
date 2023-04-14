import React from 'react';
import iconcross from "../images/iconcross.svg";
import {useSelector} from 'react-redux';

const Todo = () => {
	const dark = useSelector((state) => state.darkMode.darkmode);
	return (
		<div className="flex w-full p-16 pt-0 pb-0 justify-center items-center">
			<div className={ dark ? 
			    "flex w-full h-24 p-10 pt-4 pb-4 justify-between rounded-lg border-b-2 items-center bg-veryy-dark-grayish-blue border-dark-grayish-blue"
			        :
			            " flex w-full h-24 p-10 pt-4 pb-4 justify-between rounded-lg border-b-2 bg-white items-center"}
			>
			    <div className={dark ? 
			        "w-8 h-8 border-2 border-very-light-rayish-blue rounded-full bg-check-background border-dark-grayish-blue "
			            :
			                "w-8 h-8 border-2 border-very-light-rayish-blue rounded-full bg-check-background"}
			    > </div>
			    <div className= {dark ?
			    	"text-light-grayish-blue font-josefin-sans font-normal text-2xl"
			    	    :
			    	        "font-josefin-sans font-normal text-2xl"}
			    >name</div>
			    <img className=" w-6 h-6" src={iconcross} alt="times"/>
			</div>
		</div>
	)
}

export default Todo;