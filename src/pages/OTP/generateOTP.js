import { useEffect, useState} from "react";
import styles from "./generateOTP.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function GenerateOTP(props) {
	const [isDisabled, setIsDisabled] = useState(true);

	const handleClickBtn = (e) => {
		const otp = Math.floor(100000 + Math.random() * 900000);
		// setOrgOTP(otp);
		props.setOriginOTP(otp);
	
	};

	useEffect(()=>{
		setIsDisabled(!isDisabled);
	},[props.originOTP])
	
	return (
		<>
			<div className={cx("generate_otp")} >
				<button className={cx("button_otp")} onClick={() => handleClickBtn()}
					disabled={isDisabled}
				>
					Click To Get OTP
				</button>
			</div>
			<div className={cx("otp_number")}>Your OTP : {props.originOTP}</div>
		</>
	);
}

export default GenerateOTP;
