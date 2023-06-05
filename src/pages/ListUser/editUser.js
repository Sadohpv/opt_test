import { useState} from "react";
import { useEffect } from "react";
import ModalCustom from "../../components/Modal";
import { putEditUser } from "../../services/UserService";
function EditUser({ modalShowEdit, setModalShowEdit, name, setName, job, setJob,
    dataUserEdit,handlePutData
    
}) {

    const [nameEdit, setNameEdit] = useState('');
    const [jobEdit, setJobEdit] = useState('');

	const handleSaveEdit = async () => {

       let res = await putEditUser(nameEdit,jobEdit,dataUserEdit.id);

       if(res && res.updatedAt){
            handlePutData({
                first_name: name,
                id: dataUserEdit.id,
            })
            setModalShowEdit(false);
            
       }

    };


    useEffect(()=>{
        if(modalShowEdit){
            setName(dataUserEdit.first_name);
         
        }

    },[dataUserEdit])

	return (
		<>
			<ModalCustom
				modalShow={modalShowEdit}
				setModalShow={setModalShowEdit}
				title="Edit Something"
				handleSave={handleSaveEdit}
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

export default EditUser;
