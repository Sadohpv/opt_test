import { createContext, useContext, useState } from "react";

const UserContext = createContext({ email: "", auth: false });

function Provider({ children }) {
	const [user, setUser] = useState({ email: "", auth: false });

	const login = (email,token) => {
        localStorage.setItem("token", token);
        localStorage.setItem('email', email);
		setUser({
			email: email,
			auth: true,
		});
	};
	const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
		setUser({
			email: "",
			auth: false,
		});
        
	};

	return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

export { UserContext, Provider };
