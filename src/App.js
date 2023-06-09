import Navbar from "./components/Navbar/Navbar";
import { privateRoutes, publicRoutes } from "./routes";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
import NotFound from "./pages/NotFound";
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
				<Route path="/*" element={<Navigate to="/404" replace />} />
			</Routes>
		</div>
	);
}

export default App;
