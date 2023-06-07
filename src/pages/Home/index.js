import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import ToastifyUser from "../ListUser/toastUser";
const cx = classNames.bind(styles);

function Home() {

	const navigate = useNavigate();
	const handleLogout = ()=>{
		localStorage.removeItem("token");
		navigate("/");
		toast.success('Logged out successfully');
	}

	return (
		<div>
			
			<button
			onClick = {()=>handleLogout()}
			> 

				Logout
			</button>
			<ToastifyUser/>
		</div>
	);
}

export default Home;
