import React from "react";
import "./App.css";
import { AuthContext } from "./Context/AuthContext";
//import { Theme } from "./Components/Theme";
import {
	Route,
	Switch,
	Link,
	useParams,
	Redirect,
	useHistory,
} from "react-router-dom";
import { UserList } from "./Components/UserDetails/UserDetails";
import axios from "axios";
import { PrivateRoutes } from "./Components/PrivateRoutes";
const Dashboard = () => {
	return <h2>DashBoard</h2>;
};
const About = () => {
	return <h2>About</h2>;
};
const Gallery = () => {
	return <h2>Gallery</h2>;
};
const Login = () => {
	// console.log(value);
	const history = useHistory();
	const [user, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const value = React.useContext(AuthContext);
	console.log(value);
	return (
		<>
			<input
				type="text"
				value={user}
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			></input>
			<input
				value={password}
				type="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			></input>
			<button
				onClick={() => {
					if (user === "somesh" && password === "somesh") {
						value.setAuth(true);
						setPassword("");
						setUsername("");
						history.push("/users");
						//alert("Logged in");
					} else {
						alert("Invalid Credentials");
					}
				}}
			>
				{" "}
				Login
			</button>
			<button
				onClick={() => {
					value.setAuth(false);
				}}
			>
				Logout
			</button>
		</>
	);
};
const UserDetails = () => {
	const { id } = useParams();
	const [user, setUser] = React.useState({});
	const [loading, setLoading] = React.useState(false);
	React.useEffect(() => {
		setLoading(true);
		axios.get("https://reqres.in/api/users/" + id).then((res) => {
			console.log(res.data.data);
			setUser(res.data.data);
			setLoading(false);
		});
	}, []);
	const value = React.useContext(AuthContext);
	console.log(value);

	if (loading) {
		return <p> ...LOADING</p>;
	}
	return (
		<>
			<img src={user.avatar} alt="" />
			<p>{user.first_name + " " + user.last_name}</p>
			<p>{user.email}</p>
		</>
	);
};
function App() {
	return (
		<div className="App">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
			<Switch>
				<Route path="/" exact>
					<h2>Home</h2>
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/gallery">
					<Gallery />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<PrivateRoutes exact path="/users">
					<UserList />
				</PrivateRoutes>
				<PrivateRoutes exact path="/users/:id">
					<UserDetails />
				</PrivateRoutes>
			</Switch>
		</div>
	);
}

export default App;
