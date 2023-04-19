import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../config/Firebase';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
//import {addDoc,collection} from 'firebase/firestore';

const Register = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [errorMessage,setErrorMessage] = useState("");
	//const userCollectionRef = collection(db,'userList');

	

	

	const handleRegister =  async () => {
		if ( password !== confirmPassword && displayName === "" && email ===""){
			return;
		}
		try{
		    await createUserWithEmailAndPassword(auth,email, password);
		    await updateProfile(auth.currentUser, {
			    displayName: displayName
			});
		    navigate("/login");
		}catch(err){
			console.error(err);
			setErrorMessage("Invalid Credentials")
		}
	}
	return (
		<div className="bg-very-dark-grayish-blue flex w-screen h-screen justify-center items-center">
			<div className="bg-very-light-rayish-blue border-2 rounded-2xl flex w-80 h-100 flex-col items-center">
				<div className="mb-2 pt-6 pb-6">
				    <h1 className="text-2xl font-bold">Sign up here</h1>
				    <p>Welcome! It’s great to have you here!</p>
				</div>
				{errorMessage && <p className="p-2 bg-pink-200 text-firebrick">{errorMessage}</p>}
				<div>
					<div className="flex flex-col mb-6">
						<label htmlFor="email">Email Address</label>
						<input 
						    className="w-72 h-8 border-2 rounded-3xl p-2" 
						    type="text" id="email" 
						    placeholder="Enter your email"
						    onChange={(e) => setEmail(e.target.value)}
						    value={email}
						/>
					</div>
					<div className="flex flex-col mb-6">
						<label htmlFor="displayName">Username</label>
						<input 
						    className="w-72 h-8 border-2 rounded-3xl p-2" 
						    type="text" id="displayName" 
						    placeholder="Enter a Username of your choice"
						    onChange={(e) => setDisplayName(e.target.value)}
						    value={displayName}
						/>
					</div>
					<div className="flex flex-col mb-6">
						<label htmlFor="password">Password</label>
						<input 
						    className="w-72 h-8 border-2 rounded-3xl p-2" 
						    type="password" id="password" 
						    placeholder="Enter password"
						    onChange={(e) => setPassword(e.target.value)}
						    value={password}
						/>
					</div>
					<div className="flex flex-col mb-6">
						<label htmlFor="confirm_password">Confirm Password</label>
						<input 
						    className="w-72 h-8 border-2 rounded-3xl p-2" 
						    type="password" id="confirm_password" 
						    placeholder="Enter password again"
						    onChange={(e) => setConfirmPassword(e.target.value)}
						    value={confirmPassword}
						/>
					</div>
				</div>
				<div className="mb-2">
				    <button 
				        onClick={handleRegister}
				        className="w-72 h-8 border-2 rounded-3xl" 
				        style={{backgroundImage: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}}
				    >
				        Register
				    </button>
				</div>
				<div className="mb-6"><Link to="/login">already have an accounter ?</Link></div>
				<div><p>&copy;TobiWealth</p></div>
			</div>	
		</div>
	)
}

export default Register;