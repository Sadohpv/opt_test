import OTP from "./components/OTP/OTP";
import Navbar from "./components/Navbar/Navbar";
import { publicRoutes } from "./routes";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet, Link } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				

				<Routes>
					{publicRoutes.map((route, index) => {
						const Page = route.component;

						// let Layout = DefaultLayout;
						// if (route.layout) {
						// 	Layout = route.layout;
						// } else if (route.layout === null) {
						// 	Layout = Fragment;
						// }

						return (
							<Route
								key={index}
								path={route.path}
								element={
										<Page />
								}
							/>
						);
					})}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
