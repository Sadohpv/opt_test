import { useState } from "react";
import OtpInput from "react-otp-input";
import styles from "./OTP.module.scss";
import classNames from "classnames/bind";
import Coundown from "./Coundown";

const cx = classNames.bind(styles);

function InputOTP(props) {
	const [OTP, setOTP] = useState("");
	const [disabled, setDisabled] = useState(true);
	const handleChange = (OTPin) => {
		setOTP(OTPin);
		if (OTPin !== "") {
			setDisabled(false);
		}else {
			setDisabled(true);
			
		}
		props.setUserOTP(OTPin);
		if (+OTPin === +props.originOTP && OTPin !== "") {
			props.setIsDisabled(false);
		}else{
            props.setIsDisabled(true);
        }
	};
	const handleClear = () => {
		setOTP("");
		setDisabled(true);

	};
	return (
		<div className={cx("otp_submit_block")}>
			<div className={cx("otp_submit")}>
				<div className={cx("otp_label")}>Enter verification code</div>
				<OtpInput
					value={OTP}
					onChange={handleChange}
					numInputs={6}
					renderSeparator={<span> &#x2022; </span>}
					renderInput={(props) => <input {...props} />}
					inputStyle={cx("input-customized")}
				/>
				{ props.originOTP && <Coundown setOriginOTP={props.setOriginOTP} setIsDisabled={props.setIsDisabled}/>}

				<div className={cx("action")}>
					<button className={cx("action_btn", { disable: disabled })} onClick={handleClear}>
						Clear
					</button>
					<button
						className={cx("action_btn", { disable: props.isDisabled })}
						onClick={() => props.handleSubmitOTP()}
						disabled={props.isDisabled}
					>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}

export default InputOTP;
