import { useState } from "react";
import GenerateOTP from "./generateOTP.js";
import InputOTP from "./inputOTP.js";
import styles from "./OTP.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


function OTP() {

    const [originOTP, setOriginOTP] = useState('');
    const [userOTP, setUserOTP] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const handleSubmitOTP = ()=>{
        if (+originOTP === +userOTP) {
            alert('OK');
        }
        
    }
    
    return ( 
        <div className={cx('otp_container')}>
            <GenerateOTP 
            originOTP = {originOTP}
            setOriginOTP = {setOriginOTP}
            />

            <InputOTP
            setUserOTP = {setUserOTP}
            handleSubmitOTP = {handleSubmitOTP}
            isDisabled = {isDisabled}
            originOTP = {originOTP}
            setOriginOTP = {setOriginOTP}
            setIsDisabled = {setIsDisabled}
            />
        </div>
     );
}

export default OTP;