import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TodoApp() {
	const [todos, setTodos] = useState([]);
	const [error, setError] = useState(false);
	const handleToggle = (id) => {
		let status = false;
		const payload = todos.map((item) => {
			if (item.id === id) {
				status = item.status;
				item.status = !item.status;
			}
			return item;
		});
		setTodos([...payload]);
		fetch(`/tasks/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ status: status }),
		})
			.then((res) => {
				if (res.status >= 200 && res.status <= 299) {
					return res.json();
				} else {
					throw Error(res.statusText);
				}
			})
			.then((res) => setTodos([...todos]))
			.catch((err) => setError(true));
	};
	const handleSubmit = (title) => {
		const payload = {
			id: todos.length + 1,
			title: title,
			status: false,
		};
		setTodos([...todos, payload]);
		fetch("/tasks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				if (res.status >= 200 && res.status <= 299) {
					return res.json();
				} else {
					throw Error(res.statusText);
				}
			})
			.then((res) => setTodos([...todos, res]))
			.catch((err) => setError(true));
	};
	useEffect(() => {
		fetch("/tasks")
			.then((res) => res.json())
			.then((res) => {
				setTodos([...res]);
			});
	}, []);
	return (
		<Router>
			<div className="container-fluid text-center">
				<div className="error">{error && "Something Went Wrong"}</div>
				<header className="p-2">
					<h1>Tasks</h1>
					<TaskForm handleSubmit={handleSubmit} />
				</header>
				<section className="mt-2">
					<TaskList todos={todos} handleToggle={handleToggle} />
				</section>
			</div>
		</Router>
	);
}
