import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import {toast} from 'react-toastify'
import { loginApi } from "../../services/UserService";
import ToastifyUser from "../ListUser/toastUser";
import { useNavigate } from "react-router-dom";
import { useContext,useState ,useEffect} from "react";
import { UserContext } from "../../useContextLearn/useContextCustom";

const cx = classNames.bind(styles);

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadings, setLoadings] = useState(false);

    const {login} = useContext(UserContext);

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
            login(email, res.token);
            toast.error('Login successful');
            navigate("/");
            
        }else{
            if(res && res.status === 400){
                toast.error(res.data.error);
            }
        }
        setLoadings(false);
    }
    const goBack = ()=>{
        navigate('/');
    }

    useEffect(()=>{
        let token = localStorage.getItem('token');
        let email = localStorage.getItem('email');
        if(token){
            login(email, token); 
            navigate("/");
        }
    },[]);

	return (
        <>
		<div className={cx('container')}>
			<div className={cx('header')}>
                <span className={cx('text')}>Log in</span>
                <div className={cx('header_label')}>
                <span>Email (eve.holt@reqres.in)</span>
                <span>Pass (anything)</span>

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
                <div className={cx('goback')} onClick={goBack}>
                <i className="fa-solid fa-chevron-left"></i> Go Back
                </div>
            </div>
		</div>
        <ToastifyUser />
       
        
        </>
	);
}

export default Login;
