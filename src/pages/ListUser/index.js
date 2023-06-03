import { useEffect } from "react";
import { fetchAllUser } from "../../services/UserService";
import styles from "./ListUser.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(styles);

function ListUser() {
	const [listUser, setListUser] = useState([]);

	useEffect(() => {
		// call apis
		getUsers();
	}, []);

	const getUsers = async () => {
		let res = await fetchAllUser();
		if (res && res.data && res.data.data) {
			setListUser(res.data.data);
		}
	};
    console.log(listUser);
	return (
		<>
			<div className={cx("div_container")}>
				<table id={cx("table")}>
					<thead>
						<tr>
							<th >ID</th>
							<th className={cx("image_div")} alt ="image">Image</th>
							<th>Email</th>
							<th>First Name</th>
							<th>Last Name</th>
						</tr>
					</thead>
					<tbody>
						{listUser &&
							listUser.length > 0 &&
							listUser.map((item, index) => {
								return (
									<tr key={`user-${index}`}>
										<td align="center">{item.id}</td>
										<td>
                                            <div>
                                            <img className={cx('image')} alt="user_avatar" src={item.avatar}/>
                                            </div>
                                        </td>
										<td>{item.email}</td>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</>
	);
}

export default ListUser;
