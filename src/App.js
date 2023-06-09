import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
function App() {
	return (
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

					return <Route key={index} path={route.path} element={<Page />} />;
				})}
				{privateRoutes.map((route, index) => {
					const Page = route.component;
					return (
						<Route
							key={index}
							path={route.path}
							element={
								<PrivateRoute>
									<Page />
								</PrivateRoute>
							}
						/>
					);
				})}
			</Routes>
		</div>
	);
}

export default App;
