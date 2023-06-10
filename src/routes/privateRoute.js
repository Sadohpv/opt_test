
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
	const user = useSelector((state) => state.user.data_init);

	return (
		<>
			{user && user.auth ? (
				children
			) : (
				<Alert variant="warning" className="w-75 mt-3 mx-auto">
					<Alert.Heading>Oh snap! You got an Error!</Alert.Heading>
					<p>You have no permission to access this route! Please LOGIN first</p>
				</Alert>
			)}
		</>
	);
}

export default PrivateRoute;
