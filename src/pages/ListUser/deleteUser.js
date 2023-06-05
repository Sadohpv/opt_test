import { useState } from "react";
import { useEffect } from "react";
import ModalCustom from "../../components/Modal";
import { deleteUser } from "../../services/UserService";
import { toast } from "react-toastify";
function DeleteUser({
	modalShowDelete,
	setModalShowDelete,
	name,
	setName,
	job,
	setJob,
	dataUserDelete,
	setDataUserDelete,
	handleDeleteData,
}) {
	const handleSaveDelete = async () => {
		let res = await deleteUser(dataUserDelete.id);

		if (res && +res === 204) {
			handleDeleteData(dataUserDelete);

			toast.success("Delete successfully");
			setModalShowDelete(false);
		} else {
			toast.error("Delete failed");
		}
	};

	return (
		<>
			<ModalCustom
				modalShow={modalShowDelete}
				setModalShow={setModalShowDelete}
				title="Delete Something"
				handleSave={handleSaveDelete}
			>
				<div>
					Do you wanna delete{" "}
					<b>
						{dataUserDelete.first_name} {dataUserDelete.last_name}
					</b>{" "}
					?
				</div>
			</ModalCustom>
		</>
	);
}

export default DeleteUser;
