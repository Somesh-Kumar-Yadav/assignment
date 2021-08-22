import React from "react";
import "../App.css";

const TaskItem = (props) => (
	<li className={props.status ? "success" : "failure"}>
		<div>
			<input
				type="checkbox"
				checked={props.status}
				onChange={props.handleToggle}
			/>
			<label>{props.label} </label>
			<button onClick={props.handleDelete}>Delete</button>
		</div>
	</li>
);

const TaskList = (props) => (
	<ul className="task-list">
		{props.todos.map((todo) => (
			<TaskItem
				key={todo.id}
				id={todo.id}
				status={todo.status}
				label={todo.title}
				handleToggle={() => {
					props.handleToggle(todo.id);
				}}
				handleDelete={() => {
					props.handleDelete(todo.id);
				}}
			/>
		))}
	</ul>
);

export default TaskList;
