import { useEffect, useState } from "react";
import { fetchAllUser, postCreateUser } from "../../services/UserService";
import styles from "./ListUser.module.scss";
import classNames from "classnames/bind";
import ReactPaginate from "react-paginate";
import ModalCustom from "../../components/Modal";
import ToastifyUser from "./toastUser";
import { toast } from "react-toastify";
import EditUser from "./editUser";
import _ from "lodash";
import DeleteUser from "./deleteUser";
import { debounce } from "lodash";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
const cx = classNames.bind(styles);

function ListUser() {
	const [listUser, setListUser] = useState([]);
	//const [totalUsers, setTotalUsers] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const [modalShow, setModalShow] = useState(false);
	const [modalShowEdit, setModalShowEdit] = useState(false);
	const [modalShowDelete, setModalShowDelete] = useState(false);

	const [name, setName] = useState("");
	const [job, setJob] = useState("");
	const [dataUserEdit, setDataUserEdit] = useState([]);
	const [dataUserDelete, setDataUserDelete] = useState([]);

	const [dataExport, setDataExport] = useState([]);

	const [sortBy, setSortBy] = useState("asc");
	const [sortField, setSortField] = useState("id");

	const [keywords, setKeywords] = useState("");

	const handleSave = async () => {
		let res = await postCreateUser(name, job);
		if (res && res.id) {
			console.log(res);
			setModalShow(false);

			setName("");
			setJob("");
			toast.success("Created Success");
			handleUpdate({
				first_name: name,
				id: res.id,
			});
		} else {
			toast.error("Failed to create");
		}
	};

	useEffect(() => {
		// call apis
		getUsers(1);
	}, []);

	const getUsers = async (page) => {
		let res = await fetchAllUser(page);
		if (res && res.data) {
			//setTotalUsers(res.total);
			setListUser(res.data);
			setTotalPages(res.total_pages);
		}
	};

	const handlePageClick = (event) => {
		getUsers(event.selected + 1);
	};

	const handleUpdate = (user) => {
		setListUser([user, ...listUser]);
	};

	const handleEditShow = (item) => {
		setDataUserEdit(item);
		setModalShowEdit(true);
	};

	const handleDeleteShow = (item) => {
		setDataUserDelete(item);
		setModalShowDelete(true);
	};
	const handlePutData = (userEdit) => {
		let cloneListUser = _.cloneDeep(listUser);
		let index = listUser.findIndex((item) => item.id === userEdit.id);
		cloneListUser[index].first_name = userEdit.first_name;
		setListUser(cloneListUser);
		toast.success("Updated Success");
	};

	const handleDeleteData = (userDelete) => {
		let cloneListUser = _.cloneDeep(listUser);
		//console.log(cloneListUser)
		cloneListUser = cloneListUser.filter((item) => item.id !== userDelete.id);
		//console.log(userDelete)
		setListUser(cloneListUser);
	};

	const handleSort = (sortBy, sortField) => {
		setSortBy(sortBy);
		setSortField(sortField);
		let cloneListUser = _.cloneDeep(listUser);
		cloneListUser = _.orderBy(cloneListUser, [sortField], [sortBy]);
		setListUser(cloneListUser);
	};

	const handleSearch = debounce((event) => {
		let key = event.target.value;
		console.log(key);
		if (key) {
			let cloneListUser = _.cloneDeep(listUser);
			cloneListUser = cloneListUser.filter((item) => item.email.includes(key));
			setListUser(cloneListUser);
		} else {
			getUsers(1);
		}
	}, 0);

	const handleImport = (event) => {
		if (event.target && event.target.files && event.target.files[0]) {
			let file = event.target.files[0];
			if (file.type !== "text/csv") {
				toast.error("Not file CSV");
				return;
			}
			Papa.parse(file, {
				//header : true, //header:true to set first row is header, key of data
				complete: function (result) {
					let rawCSV = result.data;
					if (rawCSV.length > 0) {
						if (rawCSV[0] && rawCSV[0].length === 3) {
							if (
								rawCSV[0][0] !== "Email" ||
								rawCSV[0][1] !== "First Name" ||
								rawCSV[0][2] !== "Last Name"
							) {
								toast.error("Wrong format header CSV");
							} else {
								let result = [];
								rawCSV.map((item, index) => {
									if (index > 0 && item.length === 3) {
										let obj = {};
										obj.email = item[0];
										obj.first_name = item[1];
										obj.last_name = item[2];
										result.push(obj);
									}
								});
								console.log(result);
								setListUser(result);
							}
						} else {
							toast.error("Wrong format CSV file");
						}
					} else {
						toast.error("Have no data on CSV file");
					}
				},
			});
		}
	};

	const handleExport = (event, done) => {
		let result = [];
		if (listUser && listUser.length > 0) {
			result.push(["ID", "Email", "First Name", "Last Name"]);
			listUser.map((item, index) => {
				let arr = [];
				arr[0] = item.id;
				arr[1] = item.email;
				arr[2] = item.first_name;
				arr[3] = item.last_name;
				result.push(arr);
			});
			setDataExport(result);
			done();
		}
	};
	return (
		<>
			<div className={cx("button")}>
				<div>
					<button type="button" className="btn btn-success" onClick={() => setModalShow(true)}>
						<i className="fa-solid fa-circle-plus"></i>
						<span>Add New User</span>
					</button>

					<div className={cx("export")}>
						<CSVLink
							data={dataExport}
							className="btn btn-outline-info fw-bold"
							filename={"hello.csv"}
							asyncOnClick={true}
							onClick={(event, done) => handleExport(event, done)}
							target="_blank"
						>
							<i className="fa-solid fa-download"></i>
							<span>Export file CSV</span>
						</CSVLink>
					</div>
					<label htmlFor="import" className="btn btn-outline-success">
						<i className="fa-solid fa-file-import"></i>
						<span>Import</span>
					</label>
					<input id="import" type="file" hidden onChange={(event) => handleImport(event)} />
				</div>
				<div>
					<input
						className="form-control"
						placeholder="Seach user by email..."
						// value={keywords}
						onChange={(event) => handleSearch(event)}
					/>
				</div>
			</div>
			<div className={cx("div_container")}>
				<table id={cx("table")}>
					<thead>
						<tr>
							<th className={cx("sort_container","col_1")}>
								<span>ID</span>
								<span>
									<i
										className="fa-solid fa-arrow-down"
										onClick={() => handleSort("desc", "id")}
									></i>
									<i
										className="fa-solid fa-arrow-up"
										onClick={() => handleSort("asc", "id")}
									></i>
								</span>
							</th>
							<th className={cx("image_div","col_2")} alt="image">
								Image
							</th >
							<th className={cx("col_3")}>Email</th>
							<th className={cx("sort_container")}>
								<span>First Name</span>
								<span>
									<i
										className="fa-solid fa-arrow-down"
										onClick={() => handleSort("desc", "first_name")}
									></i>
									<i
										className="fa-solid fa-arrow-up"
										onClick={() => handleSort("asc", "first_name")}
									></i>
								</span>
							</th>
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
										<td align="center" className={cx("col_1")}>{item.id}</td>
										<td className={cx("col_2")}>
											<div>
												<img
													className={cx("image")}
													alt="user_avatar"
													src={
														item.avatar ||
														"https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/348429486_720579486534998_3411922164905511809_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=R2U-ePvMtbAAX-x_QEj&_nc_ht=scontent.fhan15-1.fna&oh=00_AfBSLlfBsrBIgXQ5EqguzVOsLv98OsxKrokfHdPnVBTpuw&oe=6481D2E7"
													}
												/>
											</div>
										</td>
										<td className={cx("col_3")}>{item.email}</td>
										<td>{item.first_name}</td>
										<td>{item.last_name}</td>
										<td className={cx("col_4")}>
											<button
												className="btn btn-warning"
												onClick={() => handleEditShow(item)}
											>
												Edit
											</button>
											<button
												className="btn btn-danger"
												onClick={() => handleDeleteShow(item)}
											>
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
				job={job}
				setJob={setJob}
				dataUserEdit={dataUserEdit}
				setDataUserEdit={setDataUserEdit}
				handlePutData={handlePutData}
			/>

			<DeleteUser
				modalShowDelete={modalShowDelete}
				setModalShowDelete={setModalShowDelete}
				name={name}
				setName={setName}
				job={job}
				setJob={setJob}
				dataUserDelete={dataUserDelete}
				setDataUserDelete={setDataUserDelete}
				handleDeleteData={handleDeleteData}
			/>

			<ToastifyUser />
		</>
	);
}

export default ListUser;
