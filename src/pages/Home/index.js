import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import ToastifyUser from "../ListUser/toastUser";

const cx = classNames.bind(styles);

function Home() {
	



	return (
		<div>
			
		
			<ToastifyUser/>
		</div>
	);
}

export default Home;
