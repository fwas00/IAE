import style from "./app.module.scss";
import { Login } from "./components/login";
import { NavBar } from "./components/navbar";
import { Darshboard } from "./components/darshboard";
import { useRoutes, useRedirect, navigate } from "hookrouter";
import { NotFound } from "./components/notFound";
import { Register } from "./components/register/register";

const routes = {
	"/login": () => <Login />,
	"/dashboard": () => <Darshboard />,
	'/register': () => <Register />
};

function App() {
	const id = window.localStorage.getItem("@user:id");

	const routeResults = useRoutes(routes);

	return (
		<div className="App">
			{!id
				? (useRedirect("/", "/login"), routeResults)
				: (useRedirect("/", "/dashboard"),
				  (routeResults ? <NavBar> {routeResults}</NavBar> : <NotFound />))}
		</div>
	);
}

export default App;
