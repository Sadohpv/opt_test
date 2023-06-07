import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { OTPicon, HomeIcon,ListUserIcon, LoginIcon } from "../../asset/icons";
import { Link, NavLink } from "react-router-dom";

import { useRef } from "react";

const cx = classNames.bind(styles);
function Navbar() {
	const classes = cx("nav_item", cx("item"));
	
	

	return (
		<div className={cx("navbar")}>
			<div className={classes}>
				<NavLink
					to="/"
					className={(nav) => cx("menu_item", { active: nav.isActive })}
				
				>
					<HomeIcon />
				</NavLink>
			</div>
			<div className={classes}>
				<NavLink
					to="/otp"
					className={(nav) => cx("menu_item", { active: nav.isActive })}
			
				>
					<OTPicon />
				</NavLink>
			</div>
			<div className={classes}>
				<NavLink to="/list"
					className={(nav) => cx("menu_item", { active: nav.isActive })}
				
				>
					<ListUserIcon />
				</NavLink>
			</div>
			<div className={classes}>
			<NavLink to="/login"
					className={(nav) => cx("menu_item", { active: nav.isActive })}
				
				>
					<LoginIcon />
				</NavLink>
			</div>
		</div>
	);
}

export default Navbar;
