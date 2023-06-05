import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "react-bootstrap";
import { useState } from "react";
function ModalCustom({ 
	
	children, title,setModalShow,modalShow,
	handleSave,

}) {
	
	const handleClose = () => {
	
		setModalShow(false);
	};
	


	return (
		<>
			<Modal onHide={handleClose} show={modalShow} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<ModalBody>
					{children}
				</ModalBody>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalCustom;
