import { useEffect, useState } from "react";
import { fetchAllUser,postCreateUser } from "../../services/UserService";
import styles from "./ListUser.module.scss";
import classNames from "classnames/bind";
import ReactPaginate from "react-paginate";
import ModalCustom from "../../components/Modal";

const cx = classNames.bind(styles);

function ListUser() {
	const [listUser, setListUser] = useState([]);
	const [totalUsers, setTotalUsers] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const [modalShow, setModalShow] = useState(false);
	const [name, setName] = useState("");
	const [job, setJob] = useState("");

	const handleSave = async () => {
		let res = await postCreateUser(name,job);
	
		console.log(res);
	};

	useEffect(() => {
		// call apis
		getUsers(1);
	}, []);

	const getUsers = async (page) => {
		let res = await fetchAllUser(page);
		if (res && res.data) {
			setTotalUsers(res.total);
			setListUser(res.data);
			setTotalPages(res.total_pages);
		}
	};

	const handlePageClick = (event) => {
		getUsers(event.selected + 1);
	};
	return (
		<>
			<div className={cx('button')}>
				<button type="button" className="btn btn-dark" onClick={()=>setModalShow(true)}>
					+ Add New User
				</button>
			</div>
			<div className={cx("div_container")}>
				<table id={cx("table")}>
					<thead>
						<tr>
							<th>ID</th>
							<th className={cx("image_div")} alt="image">
								Image
							</th>
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
												<img
													className={cx("image")}
													alt="user_avatar"
													src={item.avatar}
												/>
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
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={totalPages}
				previousLabel="< previous"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
			/>
			<ModalCustom
				modalShow={modalShow}
				setModalShow={setModalShow}
				title="Add Something New"
				handleSave={handleSave}
			>
				<div className="body-add-new">
					<div className="mb-3">
						<label className="form-label">Name</label>
						<input
							type="text"
							className="form-control"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Job</label>
						<input
							type="text"
							className="form-control"
							value={job}
							onChange={(event) => setJob(event.target.value)}
						/>
					</div>
				</div>
			</ModalCustom>
		</>
	);
}

export default ListUser;
