import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { toast } from "react-toastify";
import ToastifyUser from "../ListUser/toastUser";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { handleLoginRedux } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
const cx = classNames.bind(styles);

function Login() {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const isLoading = useSelector(state => state.user.isLoading)
	const data_init = useSelector(state => state.user.data_init)
	

	const handleInputEmail = (event) => {
		setEmail(event.target.value);
	
	};
	const handleInputPassword = (event) => {
		setPassword(event.target.value);
	
	};

	const handleLogin = async () => {
		if (!email || !password) {
			toast.error("Required email and password");
			return;
		}
		
		dispatch(handleLoginRedux(email,password));

	};
	const goBack = () => {
		navigate("/");
	};
	const handleEnter = (event) => {
		if (event && event.key === "Enter") {
			handleLogin();
		}
	};
	useEffect(()=>{
		if(data_init && data_init.auth === true){
			navigate("/");
		}
	},[data_init])
	return (
		<>
			<div className={cx("container")}>
				<div className={cx("header")}>
					<span className={cx("text")}>Log in</span>
					<div className={cx("header_label")}>
						<span>Email ( eve.holt@reqres.in )</span>
						<span>Pass (anything)</span>
					</div>
				</div>
				<div className={cx("body")}>
					<input
						type="text"
						placeholder="Email or username"
						value={email}
						onChange={(event) => handleInputEmail(event)}
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(event) => handleInputPassword(event)}
						onKeyDown={(event) => handleEnter(event)}
					/>
				</div>
				<div className={cx("footer")}>
					<span>Forgot password?</span>
					<button
						className={email && password ? cx("active") : cx("")}
						disabled={email && password ? false : true}
						onClick={() => handleLogin()}
					>
						{isLoading && <i className={cx("fas fa-circle-notch fa-spin")}></i>}
						&nbsp;Login
					</button>
					<div className={cx("goback")} onClick={goBack}>
						<i className="fa-solid fa-chevron-left"></i> Go Back
					</div>
				</div>
			</div>
			<ToastifyUser />
		</>
	);
}

export default Login;
