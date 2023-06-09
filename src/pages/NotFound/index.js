import { Alert } from "react-bootstrap";
function NotFound() {
	return (
		<>
			<Alert varian="danger" className="w-75 mt-3 mx-auto">
				<Alert.Heading>Oh snap! You got an Error!</Alert.Heading>
				<p>Your page what you are looking for is not exist!</p>
			</Alert>
           
		</>
	);
}

export default NotFound;
