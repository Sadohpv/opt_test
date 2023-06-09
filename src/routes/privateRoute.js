import { useContext } from "react";
import { UserContext } from "../useContextLearn/useContextCustom";
import { Alert } from "react-bootstrap";
function PrivateRoute({children}) {

    const {user } = useContext(UserContext)
   
    return ( 
    <>
        {
            user && user.auth ?
            children : 
            <Alert varian="danger" className="w-75 mt-3 mx-auto">
                <Alert.Heading>
                    Oh snap! You got an Error!
                </Alert.Heading>
                <p>
                    You have no permission to access this route! Please LOGIN first
                </p>
            </Alert>

        }
        
    </> 
    );
}

export default PrivateRoute;