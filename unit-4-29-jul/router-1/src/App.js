import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
		</BrowserRouter>
	);
}

export default App;
