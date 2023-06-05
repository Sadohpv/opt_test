import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { publicRoutes } from "./routes";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
