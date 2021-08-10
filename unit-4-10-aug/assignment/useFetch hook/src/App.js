import { useState } from "react";
import { useDebounce } from "use-debounce-hook";
import "./App.css";
import Count from "./components/Count";
import useFetch from "./hooks/useFetch";
import useTimeout from "./hooks/useTimeout";

function App() {
	const [page, setPage] = useState(1);
	const [name, setName] = useState(undefined);
	const text = useDebounce(name, 1000);
	const [ready] = useTimeout(5000);
	const { loading, error, data } = useFetch(
		`https://api.github.com/search/users?q=${
			text ? text : "masai"
		}&&page=${page}&&per_page=5`
	);
	const handlePage = (num) => {
		setPage(page + num);
	};
	return (
		<div className="App">
			<input
				type="text"
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			{loading ? (
				<p>Loading</p>
			) : (
				data.items.map((e) => {
					return <p>{e.login}</p>;
				})
			)}
			<div>
				<button
					onClick={() => {
						handlePage(-1);
					}}
				>
					PREV
				</button>
				<span>{page}</span>
				<button
					onClick={() => {
						handlePage(1);
					}}
				>
					NEXT
				</button>
			</div>
		</div>
	);
}

export default App;
