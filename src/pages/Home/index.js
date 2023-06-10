import classNames from "classnames/bind";
import styles from "./Home.module.scss";

import ToastifyUser from "../ListUser/toastUser";

const cx = classNames.bind(styles);

function Home() {

	return (
	
			<div className={cx('container')}>
				Home
				<ToastifyUser />
			</div>
	
	);
}

export default Home;
