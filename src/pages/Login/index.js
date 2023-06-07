import { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import {toast} from 'react-toastify'
import { loginApi } from "../../services/UserService";
import ToastifyUser from "../ListUser/toastUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadings, setLoadings] = useState(false);

    const handleInputEmail = (event)=>{
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    const handleInputPassword = (event)=>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const handleLogin = async ()=>{
       
        if (!email || !password){
            toast.error('Required email and password');
            return;

        }
        setLoadings(true);
        let res = await loginApi(email, password);

        if(res && res.token){
            localStorage.setItem('token', res.token);
            navigate("/");
        }else{
            if(res && res.status === 400){
                toast.error(res.data.error);
            }
        }
        setLoadings(false);
    }

    useEffect(()=>{
        let token = localStorage.getItem('token');
        if(token){
            navigate("/");
        }
    },[]);

	return (
        <>
		<div className={cx('container')}>
			<div className={cx('header')}>
                <span className={cx('text')}>Log in</span>
                <div className={cx('header_label')}>
                <span>Email or Username</span>
                <span>Log in with phone</span>

                </div>
            </div>
            <div className={cx('body')}>
                <input type="text" placeholder="Email or username"
                value={email}
                onChange={(event)=> handleInputEmail(event)}
                />
                <input type="password" placeholder="Password"
                
                value={password}
                onChange={(event)=> handleInputPassword(event)}/>

            </div>
            <div className={cx('footer')}>
                <span>Forgot password?</span>
                <button className={ email && password ? cx('active') : cx('')}
                
                disabled={email && password ? false : true}
                onClick={()=>handleLogin()}
                >
                   {loadings &&<i className={cx("fas fa-circle-notch fa-spin")}></i>}  
                  
                    &nbsp;Login
                
                </button>
                <div>
                 Go Back
                </div>
            </div>
		</div>
        <ToastifyUser />
       
        
        </>
	);
}

export default Login;
