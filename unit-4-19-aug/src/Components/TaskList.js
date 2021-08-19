import React from "react";

const TaskItem = (props) => (
	<li>
		<div>
			<label>{props.label} </label>
		</div>
	</li>
);

const TaskList = (props) => (
	<ul className="task-list">
		{props.todos.map((todo) => (
			<TaskItem key={todo.id} label={todo.title} />
		))}
	</ul>
);

export default TaskList;
