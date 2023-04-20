import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../config/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage,setErrorMessage] = useState("");
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setErrorMessage("");
	}
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setErrorMessage("");
	}

	const handleLogin = async () => {
		try{
		    await signInWithEmailAndPassword(auth, email, password);
		    //const user = userCredential.user;
		    localStorage.setItem("auth", true);
		    localStorage.setItem("email",email)
		    navigate("/");
		}catch(err){
			setErrorMessage("incorrect password or email");
		}
	}

	return (
		<div className="bg-very-dark-grayish-blue flex w-screen h-screen justify-center items-center">
			<div className="bg-very-light-rayish-blue text-faint-black border-2 rounded-2xl flex w-80 pl-4 pr-4 h-98 flex-col items-center" >
				<div className=" mb-2 -ml-28 pt-6 pb-6">
				    <h1 className="text-2xl font-bold pb-4">Log in</h1>
				    <p>Try out this new Todo App</p>
				</div>
				{errorMessage && <p className="p-2 bg-pink-200 text-firebrick">{errorMessage}</p>}
				<div>
				    <div className="flex flex-col mb-6">
						<label htmlFor="email">Email Address</label>
						<input 
						    className="w-72 h-8 border-2 rounded-3xl p-2" 
						    type="text" id="email" 
						    placeholder="Enter your email"
						    onChange={handleEmail}
						    value={email}
						/>
					</div>
					<div className="flex flex-col mb-6">
						<label htmlFor="password">Password</label>
						<input 
						    className="w-72 h-8 border-2 rounded-3xl p-2" 
						    type="password" id="password" 
						    placeholder="Enter password"
						    onChange={handlePassword}
						    value={password}
						/>
					</div>
				</div>
				<div className="mb-4">
				    <button 
				        onClick={handleLogin}
				        className="w-72 h-8 border-2 rounded-3xl" 
				        style={{backgroundImage: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}}
				    >
				        Log in
				    </button>
				</div>
				<div className="mb-10"><Link to="/register">No account yet ?</Link></div>
				<div><p>&copy;TobiWealth</p></div>
			</div>	
		</div>
	)
}

export default Login;