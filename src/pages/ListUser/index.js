import { useEffect, useState } from "react";
import { fetchAllUser, postCreateUser } from "../../services/UserService";
import styles from "./ListUser.module.scss";
import classNames from "classnames/bind";
import ReactPaginate from "react-paginate";
import ModalCustom from "../../components/Modal";
import ToastifyUser from "./toastUser";
import { toast } from "react-toastify";
import EditUser from "./editUser";
const cx = classNames.bind(styles);

function ListUser() {
	const [listUser, setListUser] = useState([]);
	const [totalUsers, setTotalUsers] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const [modalShow, setModalShow] = useState(false);
    const [modalShowEdit, setModalShowEdit] = useState(false);

	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [dataUserEdit, setDataUserEdit] = useState([]);

	const handleSave = async () => {
		let res = await postCreateUser(name, job);
		if (res && res.id) {
			console.log(res);
			setModalShow(false);

			setName('');
			setJob('');
			toast.success('Created Success');
			handleUpdate({
				first_name:name, id:res.id,
			});
		}else {
			toast.error('Failed to create');
		}
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

	const handleUpdate = (user)=>{
		setListUser([user,...listUser]);
	}

	const handleEdit = (item)=>{
		setDataUserEdit(item);
		setModalShowEdit(true);
	}
	return (
		<>
			<div className={cx("button")}>
				<button type="button" className="btn btn-dark" onClick={() => setModalShow(true)}>
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
							<th>Actions</th>

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
													src={item.avatar || "https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/348429486_720579486534998_3411922164905511809_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R2U-ePvMtbAAX-x_QEj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfBSLlfBsrBIgXQ5EqguzVOsLv98OsxKrokfHdPnVBTpuw&oe=6481D2E7"}
												/>
											</div>
										</td>
										<td>{item.email}</td>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
										<td>
											<button className="btn btn-warning mx-3" onClick={()=>handleEdit(item)}>
												Edit
											</button>
											<button className="btn btn-danger">
												Delete
											</button>
										</td>


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
			

			<EditUser 
			modalShowEdit={modalShowEdit}
			setModalShowEdit={setModalShowEdit}
			name={name}
			setName={setName}
			job = {job}
			setJob = {setJob}
			dataUserEdit={dataUserEdit}
			setDataUserEdit={setDataUserEdit}
			/>
			<ToastifyUser />
		</>
	);
}

export default ListUser;
