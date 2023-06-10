import { Alert } from "react-bootstrap";
function NotFound() {
	return (
		<>
			<Alert variant="danger" className="w-75 mt-3 mx-auto">
				<Alert.Heading>404 NOT FOUND!</Alert.Heading>
				<p>The page what you are looking for is not exist!</p>
			</Alert>
		</>
	);
}

export default NotFound;
