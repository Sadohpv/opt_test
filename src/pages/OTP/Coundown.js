import { useEffect, useRef, useState } from "react";


import styles from "./Coundown.module.scss";
import classNames from "classnames/bind";

import './keyframe.css'

const cx = classNames.bind(styles);

function Coundown(props) {
	const [count, setCount] = useState(10);
	const time_circle = useRef();
	const dots = useRef();

	useEffect(() => {
		if (count === 0)
		{
			props.setOriginOTP('');
			props.setIsDisabled(true);
			return
		};
		
		const timer = setInterval(() => {
		setCount(count - 1);
		

		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [count]);
	
	useEffect(()=>{
	
		time_circle.current.style.animation = `example ${count}s linear`;
		dots.current.style.animation = `example2 ${count}s linear`;
		
	},[])
	return (
		<>
			
			<div id={cx("time_container")}>
				<div className={cx("circle")}>
					<div className={cx("dots","time_dot")} ref={dots}></div>
					<svg>
						<circle cx="70" cy="70" r="70"></circle>
						<circle cx="70" cy="70" r="70" id={cx("time_circle")} ref={time_circle}></circle>
					</svg>
					<div id={cx("per")}>{count}</div>
				</div>
			</div>
	
		</>
	);
}

export default Coundown;
