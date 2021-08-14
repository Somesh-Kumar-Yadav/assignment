import React from "react";
import "./App.css";
import { Searchbar } from "./components/searchbar/Seachbar";
import { countries } from "./utils/countries";

function App() {
	const [query, setQuery] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [suggestions, setSuggestions] = React.useState([]);
	React.useEffect(() => {
		if (query === "") {
			setSuggestions([]);
		} else {
			let out = countries
				.filter((item) =>
					item.country.toLowerCase().indexOf(query) !== -1 ? true : false
				)
				.map((item) => item.country);
			setSuggestions(out);
			//console.log(out);
			setLoading(false);
		}
	}, [query]);
	return (
		<div className="App">
			<h1>Search Bar</h1>
			<div>{query}</div>
			<Searchbar
				value={query}
				setQuery={setQuery}
				loading={loading}
				setLoading={setLoading}
				suggestions={suggestions}
				setSuggestions={setSuggestions}
				onChange={(value) => setQuery(value)}
			/>
		</div>
	);
}

export default App;
