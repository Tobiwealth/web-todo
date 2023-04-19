import React from 'react';
import Register from '../Auth/Register';
import {Outlet} from 'react-router-dom';

const RequireAuth = () => {
	const auth = localStorage.getItem("auth");
	const email = localStorage.getItem("email");

	return (
		auth && email ?
		    <Outlet/>
		        : <Register />
	)
}

export default RequireAuth;