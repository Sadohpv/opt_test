import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { OTPicon, HomeIcon, ListUserIcon, LoginIcon, LogoutIcon } from "../../asset/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../useContextLearn/useContextCustom";
import { toast } from "react-toastify";
import ToastifyUser from "../../pages/ListUser/toastUser";
import TippyCustom from "../Tippy";

const cx = classNames.bind(styles);
function Navbar() {
	const classes = cx("nav_item", cx("item"));

	const { logout, user, login } = useContext(UserContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		toast.success("Logout Success");
		logout();
		navigate("/");
	};
	useEffect(() => {
		let token = localStorage.getItem("token");
		let email = localStorage.getItem("email");
		if (token) {
			login(email, token);
			navigate("/");
		}
	}, []);

	return (
		<div className={cx("navbar")}>
			<TippyCustom content="Home">
				<div className={classes}>
					<NavLink to="/" className={(nav) => cx("menu_item", { active: nav.isActive })}>
						<HomeIcon />
					</NavLink>
				</div>
			</TippyCustom>
			<TippyCustom content="OTP">
				<div className={classes}>
					<NavLink to="/otp" className={(nav) => cx("menu_item", { active: nav.isActive })}>
						<OTPicon />
					</NavLink>
				</div>
			</TippyCustom>
			<TippyCustom content="List User">
				<div className={classes}>
					<NavLink to="/list" className={(nav) => cx("menu_item", { active: nav.isActive })}>
						<ListUserIcon />
					</NavLink>
				</div>
			</TippyCustom>

			{user && user.auth === false ? (
				<TippyCustom content="Login">
					<div className={classes}>
						<NavLink
							to="/login"
							className={(nav) => cx("menu_item", { active: nav.isActive })}
						>
							<LoginIcon />
						</NavLink>
					</div>
				</TippyCustom>
			) : (
				<TippyCustom content="Logout">
					<div className={classes} onClick={handleLogout}>
						<LogoutIcon />
					</div>
				</TippyCustom>
			)}

			<ToastifyUser />
		</div>
	);
}

export default Navbar;
