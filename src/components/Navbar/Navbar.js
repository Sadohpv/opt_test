import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { OTPicon } from "../../asset/icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function Navbar() {
	const classes = cx("nav_item", cx("item"));

	return (
		<div className={cx("navbar")}>
			<div className={classes}>
				<Link to="/otp">
					<OTPicon />
				</Link>
			</div>
			<div className={classes}>
				<Link to="/">
					Home
				</Link>
			</div>
			<div className={classes}>
				<a href="/">Home</a>
			</div>
			<div className={classes}>
				<a href="/">Home</a>
			</div>
		</div>
	);
}

export default Navbar;
